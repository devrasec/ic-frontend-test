import { createSelector } from 'reselect';
import omit from 'lodash/omit';
import fetchAuctions from '../../services/api/fetchAuctions';

// Actions.
const AUCTIONS_REQUEST = 'auctions/AUCTIONS_REQUEST';
const AUCTIONS_REQUEST_SUCCESS = 'auctions/AUCTIONS_REQUEST_SUCCESS';
const AUCTIONS_REQUEST_FAILURE = 'auctions/AUCTIONS_REQUEST_FAILURE';
const MAKE_BID = 'auctions/MAKE_BID';

// Action creators.
export const auctionsRequestSuccess = (auctions, bids) => ({
  type: AUCTIONS_REQUEST_SUCCESS,
  payload: { auctions, bids }
});

export const auctionsRequestFailure = error => ({
  type: AUCTIONS_REQUEST_FAILURE,
  error
});

export const makeBid = ({
  auctionId,
  amount,
  createdAt,
  dealership = 'Instacarro',
  channel = 'Web'
}) => ({
  type: MAKE_BID,
  payload: { auctionId, amount, createdAt, dealership, channel }
});

// Thunks.
export const auctionsRequest = () => {
  return async dispatch => {
    dispatch({ type: AUCTIONS_REQUEST });

    try {
      const response = await fetchAuctions();

      const { auctions, bids } = response.data.reduce(
        (acc, current) => {
          acc.auctions.push(omit(current, 'bids'));
          acc.bids[current.id] = current.bids;

          return acc;
        },
        { auctions: [], bids: {} }
      );

      dispatch(auctionsRequestSuccess(auctions, bids));
    } catch (error) {
      console.log(error);
      dispatch(auctionsRequestFailure(error));
    }
  };
};

// Selectors.
export const auctionsRawSelector = state => state.auctions;
export const bidsRawSelector = state => state.bids;
export const isFetchingAuctionsSelector = state => state.isFetching;

export const auctionsSelector = createSelector(
  auctionsRawSelector,
  auctions => {
    const newAuctions = auctions;

    newAuctions.sort((a, b) => a.remainingTime - b.remainingTime);

    return newAuctions;
  }
);

export const currentBidsSelector = createSelector(
  bidsRawSelector,
  bidsByAuctionId => {
    const currentBids = Object.keys(bidsByAuctionId).reduce((acc, current) => {
      const bids = bidsByAuctionId[current];

      bids.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return dateB - dateA;
      });

      acc[current] = bids.length ? { ...bids[0] } : { amount: 0 };

      return acc;
    }, {});

    return currentBids;
  }
);

// Reducer.
const initialState = {
  isFetching: false,
  auctions: [],
  bids: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUCTIONS_REQUEST:
      return { ...state, isFetching: true };

    case AUCTIONS_REQUEST_SUCCESS:
      return { isFetching: false, ...action.payload };

    case AUCTIONS_REQUEST_FAILURE:
      return { ...state, isFetching: false };

    case MAKE_BID:
      return {
        ...state,
        bids: {
          ...state.bids,
          [action.payload.auctionId]: [
            ...state.bids[action.payload.auctionId],
            {
              ...omit(action.payload, 'auctionId'),
              amount: action.payload.amount
            }
          ]
        }
      };

    default:
      return state;
  }
}

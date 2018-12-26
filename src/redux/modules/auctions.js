import { createSelector } from 'reselect';
import fetchAuctions from '../../services/api/fetchAuctions';

// Actions.
const AUCTIONS_REQUEST = 'auctions/AUCTIONS_REQUEST';
const AUCTIONS_REQUEST_SUCCESS = 'auctions/AUCTIONS_REQUEST_SUCCESS';
const AUCTIONS_REQUEST_FAILURE = 'auctions/AUCTIONS_REQUEST_FAILURE';

// Action creators.
export const auctionsRequestSuccess = auctions => ({
  type: AUCTIONS_REQUEST_SUCCESS,
  payload: auctions
});

export const auctionsRequestFailure = error => ({
  type: AUCTIONS_REQUEST_FAILURE,
  error
});

// Thunks.
export const auctionsRequest = () => {
  return async dispatch => {
    dispatch({ type: AUCTIONS_REQUEST });

    try {
      const response = await fetchAuctions();
      dispatch(auctionsRequestSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(auctionsRequestFailure(error));
    }
  };
};

// Selectors.
export const auctionsRawSelector = state => state.auctions;
export const isFetchingAuctionsSelector = state => state.isFetching;

export const auctionsSelector = createSelector(
  auctionsRawSelector,
  auctions => {
    const newAuctions = auctions.map(auction => {
      if (!auction.bids || auction.bids.length === 0) {
        return { ...auction, currentBidAmount: 0 };
      }

      const bids = auction.bids;
      const orderedBids = bids.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return dateB - dateA;
      });

      return { ...auction, currentBidAmount: orderedBids[0].amount };
    });

    newAuctions.sort((a, b) => a.remainingTime - b.remainingTime);

    return newAuctions;
  }
);

// Reducer.
const initialState = {
  isFetching: false,
  auctions: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUCTIONS_REQUEST:
      return { ...state, isFetching: true };

    case AUCTIONS_REQUEST_SUCCESS:
      return { isFetching: false, auctions: action.payload };

    case AUCTIONS_REQUEST_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}

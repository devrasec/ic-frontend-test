import fetchAuctions from '../../services/api/fetchAuctions';

const AUCTIONS_REQUEST = 'auctions/AUCTIONS_REQUEST';
const AUCTIONS_REQUEST_SUCCESS = 'auctions/AUCTIONS_REQUEST_SUCCESS';
const AUCTIONS_REQUEST_FAILURE = 'auctions/AUCTIONS_REQUEST_FAILURE';

export const auctionsRequestSuccess = auctions => ({
  type: AUCTIONS_REQUEST_SUCCESS,
  payload: auctions
});

export const auctionsRequestFailure = error => ({
  type: AUCTIONS_REQUEST_FAILURE,
  error
});

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

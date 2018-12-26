import axios from 'axios';

const ENDPOINT_URL =
  'https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json';

export default function fetchAuctions() {
  return axios.get(ENDPOINT_URL);
}

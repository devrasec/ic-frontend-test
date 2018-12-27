import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import media from '../utils/styledMQ';

import {
  auctionsRequest,
  auctionsSelector,
  isFetchingAuctionsSelector,
  currentBidsSelector
} from '../redux/modules/auctions';
import CarAuctionItem, { auctionPropTypes } from './CarAuctionItem';

const AuctionList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const AuctionItem = styled.li`
  flex: 1 0 100%;
  max-width: 100%;
  flex-wrap: wrap;
  margin-bottom: ${rem(20)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};

  ${media.tablet`
    flex-basis: 50%;
    max-width: 50%;
  `};

  ${media.desktop`
    flex-basis: 33.33%;
    max-width: 33.33%;
  `};
`;

class CarAuctions extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    auctions: PropTypes.arrayOf(auctionPropTypes),
    bids: PropTypes.object,
    fetchAuctions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchAuctions();
  }

  render() {
    const { auctions, bids } = this.props;

    return (
      <AuctionList>
        {auctions.map(auction => (
          <AuctionItem key={auction.id}>
            <CarAuctionItem
              auction={auction}
              currentBidAmount={bids[auction.id].amount}
            />
          </AuctionItem>
        ))}
      </AuctionList>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: isFetchingAuctionsSelector(state),
    auctions: auctionsSelector(state),
    bids: currentBidsSelector(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchAuctions: auctionsRequest }
)(CarAuctions);

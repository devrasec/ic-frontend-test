import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { rem } from 'polished';

import {
  auctionsRequest,
  auctionsSelector,
  isFetchingAuctionsSelector
} from '../redux/modules/auctions';
import CarAuctionItem from './CarAuctionItem';

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

  @media (min-width: ${rem(768)}) {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media (min-width: ${rem(992)}) {
    flex-basis: 33.33%;
    max-width: 33.33%;
  }
`;

class CarAuctions extends Component {
  componentDidMount() {
    this.props.fetchAuctions();
  }

  render() {
    const { auctions } = this.props;

    return (
      <AuctionList>
        {auctions.map(auction => (
          <AuctionItem key={auction.id}>
            <CarAuctionItem auction={auction} />
          </AuctionItem>
        ))}
      </AuctionList>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: isFetchingAuctionsSelector(state),
    auctions: auctionsSelector(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchAuctions: auctionsRequest }
)(CarAuctions);

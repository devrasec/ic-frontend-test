import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { rem } from 'polished';

import { auctionsRequest } from '../redux/modules/auctions';
import CarAuctionItem from './CarAuctionItem';

const AuctionList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const AuctionItem = styled.li`
  flex: 1 0 33.33%;
  max-width: 33.33%;
  margin-bottom: ${rem(20)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
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
    isFetching: state.isFetching,
    auctions: state.auctions
  };
}

export default connect(
  mapStateToProps,
  { fetchAuctions: auctionsRequest }
)(CarAuctions);

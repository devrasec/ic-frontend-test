import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

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

export default function CarAuctions() {
  return (
    <AuctionList>
      <AuctionItem>
        <CarAuctionItem />
      </AuctionItem>
    </AuctionList>
  );
}

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro';

import Button from './Button';

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 1px 1px #cccccc;
  border-radius: 5px;
`;

const CarAuctionDetails = styled.div`
  padding: ${rem(10)};
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid #e4e4e4;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
`;

const AuctionAttr = styled.dl`
  flex: 2 1 47%;
  text-align: center;
`;

const AuctionAttrLabel = styled.dt`
  font-size: ${rem(10)};
  margin-bottom: ${rem(5)};
`;

const AuctionAttrValue = styled.dd`
  color: ${props => props.color};
  font-size: ${rem(24)};
  font-weight: bold;
`;

const Separator = styled.div`
  height: ${rem(26)};
  max-width: 2px;
  flex: 0 1 6%;
  background-color: #e4e4e4;
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
`;

export default function CarAuctionItem() {
  return (
    <Card>
      <CarAuctionDetails>
        <DetailsRow>
          <AuctionAttr>
            <AuctionAttrLabel>TEMPO RESTANTE</AuctionAttrLabel>
            <AuctionAttrValue color="#ff6d4a">15:55:55</AuctionAttrValue>
          </AuctionAttr>

          <Separator />

          <AuctionAttr>
            <AuctionAttrLabel>ULTIMA OFERTA</AuctionAttrLabel>
            <AuctionAttrValue color="#3eb871">R$ 29.250</AuctionAttrValue>
          </AuctionAttr>
        </DetailsRow>

        <DetailsRow>
          <h4
            css={`
              margin: 0;
              text-align: center;
              font-size: ${rem(16)};
            `}
          >
            HONDA FIT 1.4 LXL 8V GASOLINA 4P AUTOMATICO 2007
          </h4>
        </DetailsRow>

        <DetailsRow
          css={`
            margin-bottom: ${rem(15)};
          `}
        >
          <AuctionAttr as="div">2007</AuctionAttr>

          <Separator />

          <AuctionAttr as="div">92.610 KM</AuctionAttr>
        </DetailsRow>

        <Button>FAZER OFERTA</Button>
      </CarAuctionDetails>
    </Card>
  );
}

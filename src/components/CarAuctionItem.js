import React, { Component } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import formatDate from 'date-fns/format';
import 'styled-components/macro';

import numberFormat, { currencyFormat } from '../utils/numberFormat';

import Button from './Button';

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 1px 1px #cccccc;
  border-radius: 5px;
  height: 100%;
`;

const CarPhoto = styled.div`
  width: 100%;
  margin-bottom: ${rem(10)};

  img {
    display: block;
    width: 100%;
    border-top-left-radius: ${rem(5)};
    border-top-right-radius: ${rem(5)};
  }
`;

const CarAuctionDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
  border-bottom: 2px solid #e4e4e4;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
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

const CarDescription = styled.h4`
  margin: 0;
  text-align: center;
  font-size: ${rem(16)};
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};
`;

export default class CarAuctionItem extends Component {
  state = {
    msToFinish: this.props.auction.remainingTime
  };

  intervalId: null;

  componentDidMount() {
    this.intervalId = setInterval(this.updateAuctionTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateAuctionTimer = () => {
    this.setState(prevState => ({
      msToFinish: parseInt(prevState.msToFinish) - 1000
    }));
  };

  getMilliseconds = () => this.state.msToFinish;

  getCarDescription = () => {
    const {
      auction: { make, model, year, version }
    } = this.props;

    return `${make} ${model} ${version} ${year}`;
  };

  render() {
    const { auction } = this.props;

    return (
      <Card>
        <CarAuctionDetails>
          <CarPhoto>
            <img src={auction.imageUrl} alt="car" />
          </CarPhoto>
          <DetailsRow>
            <AuctionAttr>
              <AuctionAttrLabel>TEMPO RESTANTE</AuctionAttrLabel>
              <AuctionAttrValue color="#ff6d4a">
                {formatDate(this.getMilliseconds(), 'HH:mm:ss')}
              </AuctionAttrValue>
            </AuctionAttr>

            <Separator />

            <AuctionAttr>
              <AuctionAttrLabel>ULTIMA OFERTA</AuctionAttrLabel>
              <AuctionAttrValue color="#3eb871">
                {currencyFormat(auction.currentBidAmount)}
              </AuctionAttrValue>
            </AuctionAttr>
          </DetailsRow>

          <DetailsRow>
            <CarDescription>{this.getCarDescription()}</CarDescription>
          </DetailsRow>

          <DetailsRow
            css={`
              margin-bottom: ${rem(15)};
            `}
          >
            <AuctionAttr as="div">{auction.year}</AuctionAttr>

            <Separator />

            <AuctionAttr as="div">{numberFormat(auction.km)} KM</AuctionAttr>
          </DetailsRow>

          <div
            css={`
              flex-shrink: 1;
              margin: ${rem(10)};
            `}
          >
            <Button>FAZER OFERTA</Button>
          </div>
        </CarAuctionDetails>
      </Card>
    );
  }
}

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro';

import Container from './Container';
import Phone from './Phone';
import Logo from '../assets/images/logo.png';
import UserLink from './UserLink';
import media from '../utils/styledMQ';

const Wrapper = styled.header`
  background-color: #ffffff;
  min-height: ${rem(82)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const HeaderRight = styled.div`
  flex: 0 1 auto;
`;

const HeaderLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${rem(30)};

  ${media.tablet`
    justify-content: inherit;
    padding-right: 0;
  `};
`;

const LogoWrapper = styled.div`
  max-width: ${rem(140)};
  margin-right: ${rem(10)};

  ${media.tablet`
    max-width: ${rem(200)};
    margin-right: 0;
  `}
`;

const Separator = styled.div`
  height: ${rem(48)};
  width: 2px;
  background-color: #e4e4e4;
  margin-left: ${rem(60)};
  margin-right: ${rem(60)};
  display: none;

  ${media.tablet`
    display: block;
  `}
`;

export default function Header() {
  return (
    <Wrapper>
      <Container
        css={`
          display: flex;
          align-items: center;
          padding-left: ${rem(10)};
          padding-right: ${rem(10)};
        `}
      >
        <HeaderLeft>
          <LogoWrapper>
            <img src={Logo} alt="Instacarro logo" />
          </LogoWrapper>

          <Separator />

          <Phone phone="(11) 3569-3465" />
        </HeaderLeft>

        <HeaderRight>
          <UserLink />
        </HeaderRight>
      </Container>
    </Wrapper>
  );
}

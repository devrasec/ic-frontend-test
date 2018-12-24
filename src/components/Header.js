import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro';

import BaseContainer from './Container';
import Phone from './Phone';
import Logo from '../assets/images/logo.png';
import UserLink from './UserLink';

const Wrapper = styled.header`
  background-color: #ffffff;
  min-height: ${rem(82)};
  display: flex;
  align-items: center;
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  flex: 0 1 auto;
`;

const HeaderLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  max-width: ${rem(200)};
`;

const Separator = styled.div`
  height: ${rem(48)};
  width: 2px;
  background-color: #e4e4e4;
  margin-left: ${rem(60)};
  margin-right: ${rem(60)};
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
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

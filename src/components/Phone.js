import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro';

import media from '../utils/styledMQ';
import PhoneIcon from './icons/PhoneIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${rem(14)};

  ${media.tablet`
    font-size: ${rem(16)};
  `};
`;

const IconContainer = styled.div`
  margin-right: ${rem(10)};
`;

export default function Phone({ phone }) {
  return (
    <Wrapper>
      <IconContainer>
        <PhoneIcon size={32} />
      </IconContainer>
      <span>{phone}</span>
    </Wrapper>
  );
}

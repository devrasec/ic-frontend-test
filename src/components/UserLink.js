import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro'; // For css prop support.

import UserIcon from './icons/UserIcon';
import CaretIcon from './icons/CaretIcon';

const IconWrapper = styled.div`
  text-align: center;
  position: relative;
  border: 1px solid #e4e4e4;
  padding: ${rem(10)};
`;

const Caret = styled.span`
  position: absolute;
  top: 0;
  right: ${rem(5)};
`;

export default function UserLink() {
  return (
    <IconWrapper>
      <UserIcon size={32} />
      <Caret>
        <CaretIcon />
      </Caret>
      <div
        css={`
          color: #515151;
          margin-top: ${rem(5)};
        `}
      >
        User Test
      </div>
    </IconWrapper>
  );
}

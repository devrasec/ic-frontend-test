import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import 'styled-components/macro'; // For css prop support.

import UserIcon from './icons/UserIcon';

const IconWrapper = styled.div`
  text-align: center;
`;

export default function UserLink() {
  return (
    <IconWrapper>
      <UserIcon size={32} />

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

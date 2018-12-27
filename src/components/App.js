import React from 'react';
import { rem } from 'polished';
import 'styled-components/macro';

import Header from './Header';
import Container from './Container';
import CarAuctions from '../containers/CarAuctions';

export default function App() {
  return (
    <React.Fragment>
      <Header />

      <Container
        css={`
          padding-top: ${rem(40)};
          padding-bottom: ${rem(40)};
        `}
      >
        <CarAuctions />
      </Container>
    </React.Fragment>
  );
}

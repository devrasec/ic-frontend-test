import styled from 'styled-components';
import { rem } from 'polished';

const Button = styled.button`
  border: 0;
  border-radius: ${rem(5)};
  background-color: #3eb871;
  color: #ffffff;
  display: block;
  width: 100%;
  padding: ${rem(10)};
  cursor: pointer;
`;

export default Button;

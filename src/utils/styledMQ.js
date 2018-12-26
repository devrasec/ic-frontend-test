// Code optained from https://www.styled-components.com/docs/advanced#media-templates.
import { css } from 'styled-components';
import { rem } from 'polished';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template.
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${rem(sizes[label])}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

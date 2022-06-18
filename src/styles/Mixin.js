import { css } from 'styled-components';

export const flex = (justifyContent = 'center', alignItems = 'center') => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const border = (radius, stroke = '1', color = '#e9e9e9') => css`
  border-radius: ${radius};
  border: ${stroke}px solid ${color};
`;

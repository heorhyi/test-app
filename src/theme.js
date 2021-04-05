import { css } from 'styled-components';

export const theme = {
  fontFamily: 'Lato, Arial, sans-serif',
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  layers: {
    initial: 0,
    sticky: 1,
    overlay: 2,
    sidebar: 3,
    popup: 4,
    modal: 5,
    notification: 6,
  },
  colors: {
    white: '#FFFFFF',
    bigStone: '#182D3D',
    indigo: '#575ACF',
    roman: '#D85665',
    merino: '#FAF7F1',
    cornflowerBlue: '#7275EF',
    linkWater: '#EEEFFA',
    regentGray: '#909AA6',
    shuttleGray: '#606F80',
    orange: '#FF9900',
  },
};

const getTypographyColor = (color) => (color ? theme.colors[color] : theme.colors.bigStone);

export const getTypographyStyles = ({ color, variant }) => {
  switch (variant) {
    case '24BoldL29':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 24px;
        line-height: 29px;
        font-weight: ${theme.fontWeights.bold};
      `;
    case '20BoldL24':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 20px;
        line-height: 24px;
        font-weight: ${theme.fontWeights.bold};
      `;
    case '16BoldL22':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 16px;
        line-height: 22px;
        font-weight: ${theme.fontWeights.bold};
      `;
    case '12RegularL15':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 12px;
        line-height: 15px;
        font-weight: ${theme.fontWeights.normal};
      `;
    case '14RegularL16':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 14px;
        line-height: 16px;
        font-weight: ${theme.fontWeights.normal};
      `;
    case '16RegularL20':
      return css`
        color: ${getTypographyColor(color)};
        font-size: 16px;
        line-height: 20px;
        font-weight: ${theme.fontWeights.normal};
      `;
    default:
      return css``;
  }
};

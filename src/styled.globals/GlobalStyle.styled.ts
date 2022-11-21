import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @import-normalize;

    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 400;
        src: url(./fonts/AvenirNextLTProRegular400.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        src: url(./fonts/AvenirNextLTProMedium500.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 600;
        src: url(./fonts/AvenirNextLTProDemi600.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 700;
        src: url(./fonts/AvenirNextLTProBold700.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 800;
        src: url(./fonts/AvenirNextLTProHeavy800.woff2) format('woff2');
    }

    font-family: 'Avenir Next', sans-serif;

`
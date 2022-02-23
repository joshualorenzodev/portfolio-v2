import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    background: ${({ theme }) => theme.colors.navyBlue};
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 12px;
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    transition: all 250ms ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.orange};
    };
}

ul {
    list-style-type: none;
}

hr {
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.orange} 0%,
        ${({ theme }) => theme.colors.purple} 100%     
    );
    
    border: 0;
    height: 1px;
}
`;

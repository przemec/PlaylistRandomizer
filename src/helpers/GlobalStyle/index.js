import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
  }
  body::-webkit-scrollbar-track,
  body::-webkit-scrollbar {
    width: 12px;
    background-color: ${({ theme }) => theme.backgroundAccent};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100%;
    background: ${({ theme }) => theme.background};
    scrollbar-color: ${({ theme }) => theme.primary} ${({ theme }) => theme.backgroundAccent};
  }
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar {
    border-radius: 7px;
    width: 12px;
    background-color: ${({ theme }) => theme.backgroundAccent};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 960px) {
    :not(#songlist)::-webkit-scrollbar-track,
    :not(#songlist)::-webkit-scrollbar {
      border-radius: 0px;
    }
    :not(#songlist)::-webkit-scrollbar-thumb {
      border-radius: 0px;
    }
  }
`;

import { createGlobalStyle } from "styled-components";

interface Theme {
  COLORS: {
    BACKGROUND_900: string;
    BACKGROUND_800: string;
    BACKGROUND_700: string;
    WHITE: string;
    ORANGE: string;
    GRAY_100: string;
    GRAY_300: string;
    RED: string;
  };
}

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    filter: brightness(0.9);
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

::-webkit-scrollbar {
  width: 0.725rem;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}
 
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.GRAY_300} 
}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.COLORS.ORANGE};
}
`;

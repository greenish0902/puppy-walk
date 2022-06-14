import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    line-height: 1.5;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
`;

export default GlobalStyle;

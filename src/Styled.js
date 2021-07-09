import { createGlobalStyle } from "styled-components";
import Font from "./fonts/NotoSerif-Regular.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Noto Serif', serif;
        src: url(${Font});
    }
`;

export default FontStyles;

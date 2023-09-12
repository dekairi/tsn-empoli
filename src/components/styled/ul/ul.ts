import styled, { css } from "styled-components";

interface ListProps {
  $indent?: number;
  $align?: string;
  $fontSize?: number;
  $lineHeight?: number;
}

interface UlProps {
  $isGridList?: boolean;
}

const gridList = css<ListProps>`
  margin-left: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  margin-top: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => props.$align || "center"};

  li {
    display: inline-block;
    margin-left: ${(props) =>
    props.$indent ? `${props.$indent}px` : props.theme.indent};
    margin-top: ${(props) =>
    props.$indent ? `${props.$indent}px` : props.theme.indent};
    font-size: ${(props) =>
    props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
    props.$lineHeight
        ? `${props.$lineHeight}px`
        : props.theme.lineHeightDefault};
    vertical-align: top;
  }
`;

const Ul = styled.ul<UlProps>`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;

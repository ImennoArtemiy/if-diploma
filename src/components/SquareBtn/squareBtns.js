import styled from "styled-components";
import {btn, fontSetting} from "../../data/siteConfig";

const Btn = styled.button.attrs({type: 'button'})`
  width: ${props => props.width};
  background-color: ${props => props.bg};
  color: ${props => props.cl};
  border: ${props => props.br};
  text-transform: uppercase;
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  padding: 10px 10px;
  transition: .2s ease;
  &:hover {
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverCl};
    border: ${props => props.hoverBr};
  }
  &:active {
    background-color: ${props => props.activeBg};
    color: ${props => props.activeCl};
    border: ${props => props.activeBr};
  }
`

export const SquareTransparentBtn = ({text, onClick}) => {
    return (
        <Btn onClick={onClick}
             bg={btn.transparentWhite.bg}
             cl={btn.transparentWhite.cl}
             br={btn.transparentWhite.br}
             hoverBg={btn.transparentWhite.hoverBg}
             hoverCl={btn.transparentWhite.hoverCl}
             hoverBr={btn.transparentWhite.hoverBr}
             activeBg={btn.transparentWhite.activeBg}
             activeCl={btn.transparentWhite.activeCl}
             activeBr={btn.transparentWhite.activeBr}
        >{text}</Btn>
    )
}

export const SquareBlackBtn = ({text, width, onClick}) => {
    return (
        <Btn onClick={onClick}
             bg={btn.black.bg}
             cl={btn.black.cl}
             br={btn.black.br}
             hoverBg={btn.black.hoverBg}
             hoverCl={btn.black.hoverCl}
             hoverBr={btn.black.hoverBr}
             width={width}
        >{text}</Btn>
    )
}

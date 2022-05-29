import styled from "styled-components";
import {btn, fontSetting} from "../../data/siteConfig";

const Btn = styled.button.attrs({type: 'button'})`
  background-color: ${btn.transparentWhite.bg};
  color: ${btn.transparentWhite.cl};
  border: ${btn.transparentWhite.br};
  text-transform: uppercase;
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  padding: 10px 20px;
  transition: .2s ease;
  border-radius: 8px;

  &:hover {
    background-color: ${btn.transparentWhite.hoverBg};
    color: ${btn.transparentWhite.hoverCl};
    border: ${btn.transparentWhite.hoverBr};
  }

  &:active {
    background-color: ${btn.transparentWhite.activeBg};
    color: ${btn.transparentWhite.activeCl};
    border: ${btn.transparentWhite.activeBr};
  }
`

export const TransparentWhiteBtn = ({id, text, onClick}) => {
    return (
        <Btn id={id} onClick={onClick}>{text}</Btn>
    )
}

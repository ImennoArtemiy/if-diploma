import styled from "styled-components";
import {btn, fontSetting} from "../../data/siteConfig";

const Btn = styled.button.attrs({type: 'button'})`
  background-color: ${btn.transparentBlack.bg};
  color: ${btn.transparentBlack.cl};
  border: ${btn.transparentBlack.br};
  text-transform: uppercase;
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  padding: 10px 30px;
  transition: .2s ease;
  border-radius: 8px;

  &:hover {
    background-color: ${btn.transparentBlack.hoverBg};
    color: ${btn.transparentBlack.hoverCl};
    border: ${btn.transparentBlack.hoverBr};
  }

  &:active {
    background-color: ${btn.transparentBlack.activeBg};
    color: ${btn.transparentBlack.activeCl};
    border: ${btn.transparentBlack.activeBr};
  }
`
export const TransparentBrownBtn = ({text, onClick}) => {
    return (
        <Btn onClick={onClick}>{text}</Btn>
    )
}

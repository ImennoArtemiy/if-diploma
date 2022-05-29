import styled from "styled-components";
import {btn, fontSetting} from "../../data/siteConfig";

const Btn = styled.button.attrs({type: 'button'})`
  min-width: 100px;
  background-color: ${btn.black.bg};
  color: ${btn.black.cl};
  border: ${btn.black.br};
  text-transform: uppercase;
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  padding: 5px 15px;
  transition: .2s ease;
  border-radius: 8px;

  &:hover {
    background-color: ${btn.black.hoverBg};
    color: ${btn.black.hoverCl};
    border: ${btn.black.hoverBr};
  }

  &:active {
    background-color: ${btn.black.activeBg};
    color: ${btn.black.hoverCl};
    border: ${btn.black.hoverBr};
  }
`

const BlackBtn = ({btnText, onClick}) => {
    return (
        <Btn onClick={onClick}>{btnText}</Btn>
    )
}

export default BlackBtn

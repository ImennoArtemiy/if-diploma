import styled from "styled-components";
import {btn, fontSetting} from "../../data/siteConfig";

const Btn = styled.button.attrs({type: 'button'})`
  min-width: 50px;
  background-color: ${btn.black.bg};
  color: ${props => props.color || btn.black.cl};
  border: ${btn.black.br};
  text-transform: uppercase;
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  padding: 5px 15px;
  transition: .2s ease;
  border-radius: 8px;
  margin-right: ${props => props.mr};

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

const BlackBtn = ({btnText, onClick, mr, color}) => {
    return (
        <Btn onClick={onClick} mr={mr} color={color}>{btnText}</Btn>
    )
}

export default BlackBtn

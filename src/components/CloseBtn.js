import {svgName} from "../data/svg";
import styled from "styled-components";

const Btn = styled.svg`
  width: 20px;
  height: 20px;
  margin: ${props => props.margin};
  fill: ${props => props.fill};
  cursor: pointer;
`

const CloseBtn = ({margin, fill, onClick}) => {
  return (
      <Btn fill={fill}
           margin={margin} onClick={onClick}>
          <use href={svgName.close}/>
      </Btn>
  )
}

export default CloseBtn

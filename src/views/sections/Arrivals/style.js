import styled from "styled-components";
import {colors} from "../../../data/siteConfig";

export const Section = styled.section`
  
`
export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const Btn = styled.p`
  cursor: pointer;
  color: ${props => props.arrivalsSelected};
  transition: .2s ease;

  &:not(:first-child) {
    margin-left: 45px;
  }
`
export const ArrowIcon = styled.svg`
  position: absolute;
  left: ${props => props.arrivalsSelected ? '170px' : '357px'};
  width: 20px;
  height: 20px;
  fill: ${colors.red};
`
export const ImgWrapper = styled.div`
  display: flex;
  height: 595px;
`
export const MainPhoto = styled.img`
  width: 50%;
  height: 596px;
`
export const Collage = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 50%;
    height: 298px;
  }
`

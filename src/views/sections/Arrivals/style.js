import styled from "styled-components";
import {colors} from "../../../data/siteConfig";

export const Section = styled.section`
  
`
export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
export const Btn = styled.p`
  cursor: pointer;
  color: ${props => props.arrivalsSelected};
  transition: .2s ease;

  &:not(:first-child) {
    margin-left: 45px;
    @media (max-width: 768px) {
      margin-left: 25px;
    }
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const ArrowIcon = styled.svg`
  position: absolute;
  left: ${props => props.arrivalsSelected ? '170px' : '357px'};
  width: 20px;
  height: 20px;
  fill: ${colors.red};
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    left: ${props => props.arrivalsSelected ? '86px' : '182px'};
  }
`
export const ImgWrapper = styled.div`
  display: flex;
  height: 595px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`
export const MainPhoto = styled.img`
  width: 50%;
  height: 596px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const Collage = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 50%;
    height: 298px;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%
    }
  }
`

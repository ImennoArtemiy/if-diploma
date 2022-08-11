import styled from "styled-components";
import bgImg from "../../../assets/img/topBg.png";
import {colors, fontSetting} from "../../../data/siteConfig";
import {clearBlur} from "../../../globalStyles";

export const Section = styled.section`
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  color: ${colors.white};
`
export const ClearBlurWrap = styled.div`
  display: flex;
  align-items: end;
  height: 100vh;
  animation: ${clearBlur} .2s ease;
`
export const Wrapper = styled.div`
  position: relative;
  max-width: 1232px;
  margin: 0 auto;
  padding: ${props => props.padding || '50px 32px'};
  @media (max-width: 768px) {
    padding: 0
  }
`
export const ContentWrap = styled.div`
  max-width: 65%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    min-width: 100%;
    color: ${colors.black};
  }
`
export const MainTitle = styled.h1`
  font-size: 56px;
  line-height: 84px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 42px;
    text-align: center;
    padding: 30px 16px 0;
  }
`
export const MainText = styled.p`
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 16px;
    font-size: 16px;
    line-height: 20px;
  }
`

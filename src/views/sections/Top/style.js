import styled from "styled-components";
import bgImg from "../../../assets/img/topBg.png";
import {colors, fontSetting} from "../../../data/siteConfig";

export const Section = styled.section`
  display: flex;
  align-items: end;
  height: 100vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  color: ${colors.white};
`
export const ContentWrap = styled.div`
  max-width: 65%;
`
export const MainTitle = styled.h1`
  font-size: 56px;
  text-transform: uppercase;
  margin-bottom: 30px;
`
export const MainText = styled.p`
  font-size: ${fontSetting.large.fs};
  line-height: ${fontSetting.large.lh};
  margin-bottom: 30px;
`

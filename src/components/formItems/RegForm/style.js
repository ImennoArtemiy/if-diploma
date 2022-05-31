import styled from "styled-components";
import {colors, fontSetting} from "../../../data/siteConfig";
import {appearance} from "../../../globalStyles";

export const Form = styled.form`
  width: 520px;
  background-color: ${colors.white};
  padding: 30px;
  font-weight: 300;
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.lh};
  animation: ${appearance} .2s ease;
`
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const Title = styled.h3`
  color: ${colors.black};
`
export const Politics = styled.p`
  color: ${colors.gray};
  margin-bottom: 30px;

  span {
    text-decoration: underline;
    color: ${colors.black};
    cursor: pointer;
  }
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GoTo = styled.p`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-transform: uppercase;
  margin-top: ${props => props.mt};
`
export const Error = styled.p`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-weight: 400;
  font-size: 16px;
  color: ${colors.red};
  padding: 10px;
`

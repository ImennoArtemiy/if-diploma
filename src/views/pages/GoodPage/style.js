import styled from "styled-components";
import {colors} from "../../../data/siteConfig";

export const Main = styled.main`
  padding: 60px 32px;
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
`
export const ImgWrapper = styled.div`
  display: flex;
  width: 60%;

  img {
    width: 50%;
  }
`
export const InfoWrapper = styled.div`
  width: 40%;
  padding: 50px;
`
export const Name = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 15px;
`
export const Price = styled.p`
  margin-bottom: 5px;
`
export const PreOrder = styled.a`
  color: ${colors.gray};
`
export const ColorTitle = styled.p`
  margin: 15px 0 5px 0;
  color: ${colors.gray};
`
export const ColorSquare = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid ${colors.black};
  margin-bottom: 15px;
`
export const InnerSquare = styled.p`
  background-color: ${props => props.bg};
  border: 2px solid ${colors.white};
  height: 100%;
`
export const SizeTitle = styled.p`
  margin-bottom: 10px;
  color: ${colors.gray};
`
export const SizeOptions = styled.p`
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
`
export const BtnWrapper = styled.div`
  margin: 25px 0;
`
export const Description = styled.div`
  cursor: pointer;
`
export const DescriptionText = styled.p`
  margin-top: 5px;
  color: ${colors.gray}
`

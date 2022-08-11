import styled from "styled-components";
import {colors, fontSetting} from "../../../../data/siteConfig";

export const Card = styled.div`
  position: relative;
  border-bottom: 2px solid ${colors.gray};
  width: 40%;
  margin-bottom: 30px;
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.lh};
  color: ${colors.gray}
`
export const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  img {
    width: 30%;
    margin-right: 30px;
  }
`
export const Name = styled.h4`
  color: ${colors.black};
  margin: 20px 0 20px 2px;
`
export const Price = styled.p`
  margin: 20px 0 120px 2px;
`
export const Select = styled.select`
  color: ${colors.gray};
  display: block;
  margin-bottom: 10px;
`
export const AddToBagBtn = styled.p`
  position: absolute;
  bottom: 30px;
  right: 90px;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
`
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 30px;
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
  svg {
    width: 11px;
    height: 11px;
    fill: ${colors.gray};
    margin-right: 5px;
  }
`
export const Info = styled.div``

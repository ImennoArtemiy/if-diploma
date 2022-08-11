import styled from "styled-components";
import {colors} from "../../../data/siteConfig";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0 70px 0;
`
export const QuantityBody = styled.div`
  margin: 30px 0;
  display: flex;
  width: 40%;
  border-bottom: 2px solid ${colors.gray};
`
export const Title = styled.p`
  margin-right: 20px;
  padding-bottom: 5px;
`
export const Quantity = styled.p`
  font-size: 16px;
  color: ${colors.gray};
`
export const CardBody = styled.div`
  margin-top: 35px;
`
export const TotalPrice = styled.p`
  margin: 35px 0 30px 0;
`
export const PayBody = styled.div`
  display: flex;
  margin-top: 35px;
  img {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`
export const MessageWrap = styled.div`
  margin-top: 60px;
`

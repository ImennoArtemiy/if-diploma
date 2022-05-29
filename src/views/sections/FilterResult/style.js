import styled from "styled-components";
import {colors, fontSetting} from "../../../data/siteConfig";

export const LikeBtn = styled.svg`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  z-index: 5;
  margin: 10px;
  fill: ${props => props.fill};
  cursor: pointer;
`

export const Card = styled.div`
  position: relative;
  width: calc(25% - 16px);
  margin: 24px 16px 0 0;
  @media (max-width: 900px) {
    margin: 8px 0 0 0;
    width: calc(50% - 8px);
    &:nth-child(odd) {
      margin-right: 16px;
    }
  }
  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 21px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
`
export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    opacity: 1;
    transition: .5s ease;

    &:hover {
      opacity: 0.3;
    }
  }
`
export const BlackOutContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(208, 196, 185, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: .5s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`
export const ReservationBtn = styled.button.attrs({type: 'button'})`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${colors.brown};
  transform: translate(-50%, -50%);
  padding: 15px;
  width: 70%;
  background-color: #FFFFFF;
  border: 1px solid ${colors.brown};
  border-radius: 48px;
  font-size: ${fontSetting.small.fs};
  transition: .2s ease;
  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 21px;
    padding: 7px 12px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }

  &:hover {
    background-color: ${colors.brown};
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

  &:active {
    background-color: ${colors.black};
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
`
export const Text = styled.p`
  max-width: 280px;
  color: ${colors.black};
  margin: 10px 0;
  @media (max-width: 900px) {
    margin: 8px 0;
  }
  @media (max-width: 576px) {
    margin: 4px 0;
  }
`

import styled from "styled-components";
import {colors, fontSetting} from "../../data/siteConfig";
import {Link} from "react-router-dom";

export const HeaderBlock = styled.header`
  position: absolute;
  width: 100%;
  background-color: ${props => props.bg || 'rgba(208, 196, 185, 0)'};
  text-transform: uppercase;
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.lh};
  transition: .5s ease;
  &:hover {
    background-color: ${props => props.hoverBg || 'rgba(208, 196, 185, 0.8)'};
  }
  @media (max-width: 768px) {
    
  }
`
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1232px;
  padding: 0 16px;
  margin: 0 auto;
`

export const LeftNav = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.svg`
  height: 55px;
  fill: ${props => props.color || colors.white};
  transition: .2s ease;

  &:hover {
    fill: ${colors.brown};
  }

  &:active {
    fill: ${colors.black};
  }
`

export const RightNav = styled.div`
  display: flex;
  position: relative;
`

export const NavItem = styled.div`
  cursor: pointer;
  color: ${props => props.color || colors.white};
  transition: .2s ease;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    color: ${colors.brown};
  }

  &:active {
    color: ${colors.black};
  }
`
export const HeaderLink = styled(Link)`
  color: ${props => props.color || colors.white};
  transition: .2s ease;

  &:hover {
    color: ${colors.brown};
  }

  &:active {
    color: ${colors.black};
  }
`

export const NavItemSearch = styled.div`
  position: relative;
  color: ${props => props.color || colors.white};
  transition: .2s ease;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    color: ${colors.brown};
  }

  &:hover .icon {
    fill: ${colors.brown};
  }

  &:active {
    color: ${colors.black};
  }

  &:active .icon {
    fill: ${colors.black};
  }

  .registrationLink {
    color: ${colors.white};
  }
`

export const SearchIcon = styled.svg`
  position: absolute;
  left: -20px;
  bottom: 3px;
  width: 15px;
  height: 15px;
  fill: ${props => props.color || colors.white};
  margin-right: 5px;
  transition: .2s ease;
`

export const HeartIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${props => props.color || colors.white};

  &:hover {
    fill: ${colors.brown};
  }

  &:active {
    fill: ${colors.black};
  }
`

import styled from "styled-components";
import {colors, fontSetting} from "../../data/siteConfig";

export const HeaderBlock = styled.header`
  position: absolute;
  width: 100%;
  background-color: rgba(208, 196, 185, 0);
  text-transform: uppercase;
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.lh};
  transition: .5s ease;

  &:hover {
    background-color: rgba(208, 196, 185, 0.5);
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
`

export const Logo = styled.svg`
  height: 55px;
  fill: ${colors.white};
  transition: .2s ease;

  &:hover {
    fill: ${colors.purpleBlue};
  }

  &:active {
    fill: ${colors.black};
  }
`

export const RightNav = styled.div`
  display: flex;
`

export const NavItem = styled.a`
  color: ${colors.white};
  transition: .2s ease;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    color: ${colors.purpleBlue};
  }

  &:active {
    color: ${colors.black};
  }
`

export const NavItemSearch = styled.a`
  position: relative;
  color: ${colors.white};
  transition: .2s ease;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    color: ${colors.purpleBlue};
  }

  &:hover .icon {
    fill: ${colors.purpleBlue};
  }

  &:active {
    color: ${colors.black};
  }

  &:active .icon {
    fill: ${colors.black};
  }
`

export const SearchIcon = styled.svg`
  position: absolute;
  left: -20px;
  bottom: 3px;
  width: 15px;
  height: 15px;
  fill: ${colors.white};
  margin-right: 5px;
  transition: .2s ease;
`

export const HeartIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${colors.white};

  &:hover {
    fill: ${colors.purpleBlue};
  }

  &:active {
    fill: ${colors.black};
  }
`

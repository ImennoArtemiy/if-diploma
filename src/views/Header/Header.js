import {headerData} from "../../data/header";
import {HeaderBlock, NavItem, Logo, LeftNav, HeartIcon, NavItemSearch, RightNav, Navigation, SearchIcon} from "./style";

const Header = () => {
    return (
        <HeaderBlock>
            <Navigation>
                <LeftNav>
                    <NavItem href='#'>{headerData.leftNav.first}</NavItem>
                    <NavItem href='#'>{headerData.leftNav.middle}</NavItem>
                    <NavItem href='#'>{headerData.leftNav.last}</NavItem>
                </LeftNav>
                <NavItem href='#'>
                    <Logo>
                        <use href='#logo'/>
                    </Logo>
                </NavItem>
                <RightNav>
                    <NavItemSearch href='#'>
                        <SearchIcon className='icon'>
                            <use href='#searchIcon'/>
                        </SearchIcon>
                        {headerData.rightNav.first}
                    </NavItemSearch>
                    <NavItem href='#'>{headerData.rightNav.middle}</NavItem>
                    <NavItem href='#'>{headerData.rightNav.last}</NavItem>
                    <HeartIcon>
                        <use href='#heartIcon'/>
                    </HeartIcon>
                </RightNav>
            </Navigation>
        </HeaderBlock>
    )
}

export default Header

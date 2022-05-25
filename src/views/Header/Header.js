import {headerData} from "../../data/header";
import {
    HeaderBlock,
    NavItem,
    Logo,
    LeftNav,
    HeartIcon,
    NavItemSearch,
    RightNav,
    Navigation,
    SearchIcon,
    HeaderLink
} from "./style";
import {svgName} from "../../data/svg";
import {navigatePageUrl} from "../../data/siteConfig";
import {useDispatch, useSelector} from "react-redux";
import {isLogged} from "../../ducks/user/selectors";
import {logout} from "../../ducks/user/actions";

const Header = ({userWantsToSearch, setUserWantsToSearch}) => {
    const userIsLogged = useSelector(isLogged)
    const dispatch = useDispatch()

    const handleLogoutClick = () => {
        dispatch(logout(false))
    }

    const handleSearchClick = () => {
        setUserWantsToSearch(!userWantsToSearch)
    }

    return (
        <HeaderBlock>
            <Navigation>
                {
                    userIsLogged && (
                        <LeftNav>
                            <NavItem>{headerData.leftNav.arrivals}</NavItem>
                            <NavItem>{headerData.leftNav.shop}</NavItem>
                            <NavItem>{headerData.leftNav.collections}</NavItem>
                        </LeftNav>
                    )
                }
                <NavItem>
                    <Logo>
                        <use href={svgName.logo}/>
                    </Logo>
                </NavItem>
                <RightNav>
                    <NavItemSearch onClick={handleSearchClick}>
                        <SearchIcon className='icon'>
                            <use href={svgName.search}/>
                        </SearchIcon>
                        {headerData.rightNav.search}
                    </NavItemSearch>
                    <NavItem>
                        {
                            !userIsLogged && (
                                <HeaderLink to={navigatePageUrl.registration}>
                                    {headerData.rightNav.signIn}
                                </HeaderLink>
                            )
                        }
                        {
                            userIsLogged && (
                                <HeaderLink onClick={handleLogoutClick} to={navigatePageUrl.main}>
                                    {headerData.rightNav.signOut}
                                </HeaderLink>
                            )
                        }

                    </NavItem>
                    {
                        userIsLogged && (
                            <>
                                <NavItem>{headerData.rightNav.bag}</NavItem>
                                <HeartIcon>
                                    <use href={svgName.heart}/>
                                </HeartIcon>
                            </>
                        )
                    }

                </RightNav>
            </Navigation>
        </HeaderBlock>
    )
}

export default Header

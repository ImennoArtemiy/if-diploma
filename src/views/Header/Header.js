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
import SearchInput from "../../components/formItems/SearchInput";

const Header = ({
                    userWantsToSearch,
                    setUserWantsToSearch,
                    arrivalRef,
                    shopRef,
                    salesRef,
                    setArrivalsSelected,
                }) => {
    const userIsLogged = useSelector(isLogged)
    const dispatch = useDispatch()

    const scrollTo = (e) => {
        let id = e.target.id

        if (id === 'collectionBtn') {
            window.scrollTo(0, arrivalRef.current.offsetTop)
            setArrivalsSelected(false)
        }
        if (id === 'shopBtn') {
            window.scrollTo(0, shopRef.current.offsetTop)
            setArrivalsSelected(false)
        }
        if (id === 'salesBtn') {
            window.scrollTo(0, salesRef.current.offsetTop)
        }
    }

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
                            <NavItem onClick={scrollTo}
                                     id='collectionBtn'>{headerData.leftNav.collections}</NavItem>
                            <NavItem id='shopBtn' onClick={scrollTo}>{headerData.leftNav.shop}</NavItem>
                            <NavItem id='salesBtn'onClick={scrollTo}>{headerData.leftNav.sales}</NavItem>
                        </LeftNav>
                    )
                }
                <NavItem>
                    <Logo>
                        <use href={svgName.logo}/>
                    </Logo>
                </NavItem>
                <RightNav>
                    {
                        userWantsToSearch && <SearchInput/>
                    }
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

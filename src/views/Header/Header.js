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
import {inMainPage, isLogged} from "../../ducks/user/selectors";
import {
    enteredTheFavorites,
    enteredTheMainPage,
    logout,
    outOfTheFavorites,
    outOfTheMainPage
} from "../../ducks/user/actions";
import SearchInput from "../../components/formItems/SearchInput";
import {bag} from "../../ducks/addRemoveFromBag/selectors";

const Header = ({
                    userWantsToSearch,
                    setUserWantsToSearch,
                    arrivalRef,
                    searchResultRef,
                    shopRef,
                    salesRef,
                    setArrivalsSelected,
                    color,
                    bg,
                    hoverBg,
                }) => {

    const dispatch = useDispatch()
    const userIsLogged = useSelector(isLogged)
    const userBag = useSelector(bag)
    const userInMainPage = useSelector(inMainPage)

    const scrollTo = (e) => {
        let id = e.target.id

        if (id === 'collectionBtn') {
            window.scrollTo(0, arrivalRef.current.offsetTop)
            setArrivalsSelected(false)
        }
        if (id === 'shopBtn') {
            window.scrollTo(0, shopRef.current.offsetTop)
        }
        if (id === 'salesBtn') {
            window.scrollTo(0, salesRef.current.offsetTop)
        }
    }

    const handleLogoutClick = () => {
        dispatch(logout())
        dispatch(enteredTheMainPage())
        dispatch((outOfTheFavorites()))
    }

    const handleSearchClick = () => {
        setUserWantsToSearch(!userWantsToSearch)
    }

    return (
        <HeaderBlock bg={bg} hoverBg={hoverBg}>
            <Navigation>
                {
                    userIsLogged && userInMainPage && (
                        <LeftNav>
                            <NavItem color={color}
                                     onClick={scrollTo}
                                     id='collectionBtn'
                            >{headerData.leftNav.collections}</NavItem>
                            <NavItem color={color}
                                     id='shopBtn'
                                     onClick={scrollTo}
                            >{headerData.leftNav.shop}</NavItem>
                            <NavItem color={color}
                                     id='salesBtn'
                                     onClick={scrollTo}
                            >{headerData.leftNav.sales}</NavItem>
                        </LeftNav>
                    )
                }
                <NavItem onClick={() => {
                    dispatch(enteredTheMainPage())
                    dispatch(outOfTheFavorites())
                }}
                >
                    <HeaderLink to={navigatePageUrl.main}>
                        <Logo color={color}>
                            <use href={svgName.logo}/>
                        </Logo>
                    </HeaderLink>
                </NavItem>
                <RightNav>
                    {
                        userWantsToSearch && <SearchInput searchResultRef={searchResultRef}
                                                          setUserWantsToSearch={setUserWantsToSearch}
                        />
                    }
                    {
                        userInMainPage && (
                            <NavItemSearch color={color}
                                           onClick={handleSearchClick}
                            >
                                <SearchIcon color={color}
                                            className='icon'
                                >
                                    <use href={svgName.search}/>
                                </SearchIcon>
                                {headerData.rightNav.search}
                            </NavItemSearch>
                        )
                    }
                    <NavItem>
                        {
                            !userIsLogged && (
                                <HeaderLink color={color}
                                            to={navigatePageUrl.registration}
                                >
                                    {headerData.rightNav.signIn}
                                </HeaderLink>
                            )
                        }
                        {
                            userIsLogged && (
                                <HeaderLink color={color}
                                            onClick={handleLogoutClick}
                                            to={navigatePageUrl.main}
                                >
                                    {headerData.rightNav.signOut}
                                </HeaderLink>
                            )
                        }

                    </NavItem>
                    {
                        userIsLogged && (
                            <>
                                <NavItem onClick={() => {
                                    dispatch(outOfTheMainPage())
                                    dispatch(outOfTheFavorites())
                                }}
                                >
                                    <HeaderLink color={color}
                                                to={navigatePageUrl.bag}
                                    >
                                        {`${headerData.rightNav.bag}(${userBag.length})`}
                                    </HeaderLink>
                                </NavItem>
                                <HeaderLink onClick={() => {
                                    dispatch(outOfTheMainPage())
                                    dispatch(enteredTheFavorites())
                                }}
                                            to={navigatePageUrl.favorites}
                                >
                                    <HeartIcon color={color}>
                                        <use href={svgName.heart}/>
                                    </HeartIcon>
                                </HeaderLink>
                            </>
                        )
                    }
                </RightNav>
            </Navigation>
        </HeaderBlock>
    )
}

export default Header

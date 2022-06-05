import Top from "../sections/Top/Top";
import Header from "../Header/Header";
import {createRef, useState} from "react";
import Category from "../sections/Category/Category";
import FilterResult from "../sections/FilterResult/FilterResult";
import NotFound from "../sections/FilterResult/NotFound";
import Sale from "../sections/Sale/Sale";
import Arrivals from "../sections/Arrivals/Arrivals";
import Subcsribe from "../sections/Subcsribe/Subcsribe";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {searchResult} from "../../ducks/searchValue/selectors";
import {goods} from "../../ducks/getAllGoods/selectors";
import {clickFilter} from "../../ducks/clickFilter/slectors";
import SearchResult from "../sections/SearchResult/SearchResult";

const MainPage = () => {

    const searchResultData = useSelector(searchResult)
    const goodsData = useSelector(goods)
    const userClickFilter = useSelector(clickFilter)

    const [userWantsToSearch, setUserWantsToSearch] = useState(false)
    const [sumVisibleCards, setSumVisibleCards] = useState(4)
    const [arrivalsSelected, setArrivalsSelected] = useState(true)

    const resultRef = createRef()
    const arrivalRef = createRef()
    const shopRef = createRef()
    const salesRef = createRef()
    const searchRef = createRef()

    return (
        <>
            <main>
                <Header arrivalRef={arrivalRef}
                        shopRef={shopRef}
                        salesRef={salesRef}
                        searchRef={searchRef}
                        userWantsToSearch={userWantsToSearch}
                        setUserWantsToSearch={setUserWantsToSearch}
                        setArrivalsSelected={setArrivalsSelected}
                />
                <Top arrivalRef={arrivalRef}
                     userWantsToSearch={userWantsToSearch}
                     setArrivalsSelected={setArrivalsSelected}
                />
                <SearchResult
                              arrayData={searchResultData}
                              condition={true}
                              myRef={searchRef}
                              sumVisibleCards={sumVisibleCards}
                              setSumVisibleCards={setSumVisibleCards}
                />
                <Category shopRef={shopRef}
                          resultRef={resultRef}
                          setSumVisibleCards={setSumVisibleCards}
                />
                <FilterResult arrayData={goodsData}
                              condition={userClickFilter}
                              myRef={resultRef}
                              sumVisibleCards={sumVisibleCards}
                              setSumVisibleCards={setSumVisibleCards}
                />
                <NotFound resultRef={resultRef}/>
                <Sale salesRef={salesRef}/>
                <Arrivals arrivalRef={arrivalRef}
                          arrivalsSelected={arrivalsSelected}
                          setArrivalsSelected={setArrivalsSelected}
                />
                <Subcsribe/>
            </main>
            <Footer/>
        </>
    )
}

export default MainPage

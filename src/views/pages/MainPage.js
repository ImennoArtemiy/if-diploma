import Top from "../sections/Top/Top";
import Header from "../Header/Header";
import {createRef, useState} from "react";
import Category from "../sections/Category/Category";
import FilterResult from "../sections/FilterResult/FilterResult";
import NotFound from "../sections/FilterResult/NotFound";
import Sale from "../sections/Sale/Sale";
import Arrivals from "../sections/Arrivals/Arrivals";
import Subscribe from "../sections/Subscribe/Subscribe";
import PreLoader from "../../components/PreLoader";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {searchResult} from "../../ducks/searchValue/selectors";
import {goods} from "../../ducks/getAllGoods/selectors";
import {clickFilter} from "../../ducks/clickFilter/slectors";
import {clickSearch} from "../../ducks/clickSearch/slectors";
import {loading} from "../../ducks/preLoad/selectors";

const MainPage = () => {
    const isLoad = useSelector(loading)

    const searchResultData = useSelector(searchResult)
    const goodsData = useSelector(goods)
    const userClickFilter = useSelector(clickFilter)
    const userClickSearch = useSelector(clickSearch)

    const [userWantsToSearch, setUserWantsToSearch] = useState(false)
    const [sumVisibleCards, setSumVisibleCards] = useState(4)
    const [arrivalsSelected, setArrivalsSelected] = useState(true)

    const arrivalRef = createRef()
    const shopRef = createRef()
    const salesRef = createRef()
    const filterResultRef = createRef()
    const searchResultRef = createRef()

    return (
        <>
            <main>
                <Header arrivalRef={arrivalRef}
                        searchResultRef={searchResultRef}
                        shopRef={shopRef}
                        salesRef={salesRef}
                        userWantsToSearch={userWantsToSearch}
                        setUserWantsToSearch={setUserWantsToSearch}
                        setArrivalsSelected={setArrivalsSelected}
                />
                <Top arrivalRef={arrivalRef}
                     userWantsToSearch={userWantsToSearch}
                     setArrivalsSelected={setArrivalsSelected}
                />
                <div ref={searchResultRef}>
                    {
                        isLoad && userClickSearch && <PreLoader/>
                    }
                    <FilterResult title={'Search results: '}
                                  arrayData={searchResultData}
                                  condition={userClickSearch}
                                  sumVisibleCards={sumVisibleCards}
                                  setSumVisibleCards={setSumVisibleCards}
                    />
                </div>
                {
                    !isLoad && userClickSearch && searchResultData.length === 0 && <NotFound margin={'70px auto 0'}/>
                }
                <Category shopRef={shopRef}
                          filterResultRef={filterResultRef}
                          setSumVisibleCards={setSumVisibleCards}
                />
                <div ref={filterResultRef}>
                    {
                        isLoad && userClickFilter && <PreLoader/>
                    }
                    <FilterResult arrayData={goodsData}
                                  condition={userClickFilter}
                                  sumVisibleCards={sumVisibleCards}
                                  setSumVisibleCards={setSumVisibleCards}
                    />
                </div>
                {
                    !isLoad && userClickFilter && goodsData.length === 0 && <NotFound/>
                }
                <Sale salesRef={salesRef}/>
                <Arrivals arrivalRef={arrivalRef}
                          arrivalsSelected={arrivalsSelected}
                          setArrivalsSelected={setArrivalsSelected}
                />
                <Subscribe/>
            </main>
            <Footer/>
        </>
    )
}

export default MainPage

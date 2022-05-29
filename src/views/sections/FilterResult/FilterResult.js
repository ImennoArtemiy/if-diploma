import {Wrapper} from "../../../globalStyles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {goods} from "../../../ducks/getAllGoods/selectors";
import {clickFilter} from "../../../ducks/clickFilter/slectors";
import FilterCard from "./FilterCard";
import {useEffect, useState} from "react";
import {loading} from "../../../ducks/preLoad/selectors";
import PreLoader from "../../../components/PreLoader";
import {TransparentBrownBtn} from "../../../components/Btns/TransparentBrownBtn";

const Section = styled.section`
 
`
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FilterResult = ({resultRef, sumVisibleCards, setSumVisibleCards}) => {

    const isLoad = useSelector(loading)
    const goodsData = useSelector(goods)
    const userClickFilter = useSelector(clickFilter)

    const [data, setData] = useState([])

    useEffect(() => {
        setData(goodsData)
    }, [goodsData, sumVisibleCards])

    const handleShowMoreClick = () => {
        setSumVisibleCards((prevValue) => prevValue + 4)
    }

    return (

        userClickFilter && goodsData.length > 0 &&
        <Section ref={resultRef}>
            <Wrapper>
                {
                    !isLoad && (
                        <>
                            <h2>{goodsData[0].type}</h2>
                            <CardsWrapper>
                                {
                                    data.slice(0, sumVisibleCards).map(item => <FilterCard key={item.id} item={item}/>)
                                }
                            </CardsWrapper>
                            {
                                sumVisibleCards < data.length && (
                                    <BtnContainer>
                                        <TransparentBrownBtn onClick={handleShowMoreClick} text='SHOW MORE'/>
                                    </BtnContainer>
                                )
                            }
                        </>
                    )
                }
                {
                    isLoad && (
                        <PreLoader/>
                    )
                }

            </Wrapper>
        </Section>
    )
}

export default FilterResult

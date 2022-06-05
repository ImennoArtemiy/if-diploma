import {Wrapper} from "../../../globalStyles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import FilterCard from "../FilterResult/FilterCard";
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

const SearchResult = ({myRef, sumVisibleCards, setSumVisibleCards, arrayData, condition}) => {

    const isLoad = useSelector(loading)

    const [data, setData] = useState([])

    useEffect(() => {
        setData(arrayData)
    }, [arrayData, sumVisibleCards])

    const handleShowMoreClick = () => {
        setSumVisibleCards((prevValue) => prevValue + 4)
    }


    return (

        condition && arrayData.length > 0 &&
        <Section ref={myRef}>
            <Wrapper>
                {
                    !isLoad && (
                        <>
                            <h2>Search results:</h2>
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

export default SearchResult


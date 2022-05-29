import {Wrapper} from "../../../globalStyles";
import {categoryTitle} from "../../../data/category";
import {category} from "../../../data/category";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const Section = styled.section`
  
`
const CategoryWrapper = styled.div`
  display: flex;
`


const Category = ({resultRef, shopRef, setSumVisibleCards}) => {

    return (
        <Section ref={shopRef}>
            <Wrapper>
                <h2>{categoryTitle}</h2>
                <CategoryWrapper>
                    {
                        category.map((item, i) => (
                            <CategoryCard resultRef={resultRef}
                                          key={i}
                                          item={item}
                                          setSumVisibleCards={setSumVisibleCards}/>
                        ))
                    }
                </CategoryWrapper>
            </Wrapper>

        </Section>
    )
}

export default Category

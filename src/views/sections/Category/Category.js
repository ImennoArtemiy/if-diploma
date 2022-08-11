import {Wrapper} from "../../../globalStyles";
import {categoryTitle} from "../../../data/category";
import {category} from "../../../data/category";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const Section = styled.section`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
const CategoryWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`


const Category = ({shopRef, filterResultRef, setSumVisibleCards}) => {

    return (
        <Section ref={shopRef}>
            <Wrapper>
                <h2>{categoryTitle}</h2>
                <CategoryWrapper>
                    {
                        category.map((item, i) => (
                            <CategoryCard filterResultRef={filterResultRef}
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

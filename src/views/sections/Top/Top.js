import topData from "../../../data/top";
import {SquareTransparentBtn} from "../../../components/SquareBtn/squareBtns";
import {Section, MainText, MainTitle, ContentWrap, ClearBlurWrap} from "./style";
import {Wrapper} from "../../../globalStyles";
import SearchInput from "../../../components/formItems/SearchInput/SearchInput";

const Top = ({userWantsToSearch}) => {
    return (
        <Section id={topData.id}>
            <ClearBlurWrap>
                <Wrapper>
                    {
                        userWantsToSearch && <SearchInput/>
                    }
                    <ContentWrap>
                        <MainTitle>{topData.title}</MainTitle>
                        <MainText>{topData.text}</MainText>
                        <SquareTransparentBtn text={topData.btnText}/>
                    </ContentWrap>
                </Wrapper>
            </ClearBlurWrap>
        </Section>
    )
}

export default Top

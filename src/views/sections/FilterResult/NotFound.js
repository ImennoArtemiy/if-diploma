import styled from "styled-components";
import {useSelector} from "react-redux";
import {clickFilter} from "../../../ducks/clickFilter/slectors";
import {goods} from "../../../ducks/getAllGoods/selectors";
import {colors} from "../../../data/siteConfig";
import {loading} from "../../../ducks/preLoad/selectors";
import PreLoader from "../../../components/PreLoader";

const Wrapper = styled.div`
  max-width: 1232px;
  margin:${props => props.margin || '0 auto 55px'};
  padding: 0 32px;
  @media (max-width: 768px){
    padding: 0 16px;
  }
`

const Title = styled.h2`
  color: ${colors.red};
  text-align: center;
  background-color: rgba(208, 196, 185, 0.2);
  padding: 30px 16px;
  border: 2px solid ${colors.red};
  @media (max-width: 768px){
    font-size: 14px;
    padding: 10px 10px;
  }
`

const NotFound = ({resultRef, margin}) => {

    return (
        <Wrapper ref={resultRef} margin={margin}>
            <Title>No beauty products found &#9785;&#9785;&#9785;</Title>
        </Wrapper>
    )
}

export default NotFound

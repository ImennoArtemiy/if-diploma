import {ImageContainer, ReservationBtn, BlackOutContainer, LikeBtn} from "../FilterResult/style";
import {svgName} from '../../../data/svg';
import {useState} from "react";
import {colors} from "../../../data/siteConfig";
import styled from "styled-components";
import {getDiscountPrice, getRubleForUsd} from "../../../functions/functions";

const CardSale = styled.div`
 
`
const Flex = styled.div`
  display: flex;
`
const OldPrice = styled.p`
  color: ${colors.black};
  margin: 10px 15px 0 0;
  text-decoration: line-through;
`
const CurrentPrice = styled.p`
  color: ${colors.red};
  margin: 10px 0;
`
const DiscountValue = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 16px;
  line-height: 1;
  padding: 10px 15px;
`

const SaleCard = ({item}) => {

    const [addLike, setAddLike] = useState(false)

    const discountValue = 55
    const currentPrice = getRubleForUsd(item.price.value)
    const discountPrice = getDiscountPrice(currentPrice, discountValue)

    const handlerLikeClick = () => {
        setAddLike(!addLike)
    }

    return (
        <CardSale>
            <ImageContainer>
                <LikeBtn onClick={handlerLikeClick} fill={addLike ? colors.red : colors.white}>
                    <use href={svgName.fillHeart}/>
                </LikeBtn>
                <img src={item.images[0]} alt={item.text}/>
                <BlackOutContainer>
                    <ReservationBtn>ADD TO BAG</ReservationBtn>
                </BlackOutContainer>
                <DiscountValue>{`${discountValue}%`}</DiscountValue>
            </ImageContainer>
            <Flex>
                <OldPrice>{`$${currentPrice}`}</OldPrice>
                <CurrentPrice>{discountPrice}</CurrentPrice>
            </Flex>

        </CardSale>
    )
}

export default SaleCard

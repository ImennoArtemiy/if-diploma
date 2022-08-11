import {ImageContainer, ReservationBtn, BlackOutContainer, LikeBtn} from "../FilterResult/style";
import {svgName} from '../../../data/svg';
import {useState} from "react";
import {colors} from "../../../data/siteConfig";
import styled from "styled-components";
import {getDiscountPrice, getRubleForUsd} from "../../../functions/functions";
import {addToBag, removeFromBag} from "../../../ducks/addRemoveFromBag/actions";
import {useDispatch} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../../../ducks/addRemoveFromFavorites/actions";

const CardSale = styled.div`
 
`
const Flex = styled.div`
  display: flex;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;
  }
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
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`

const SaleCard = ({item}) => {

    const dispatch = useDispatch()
    const [addBag, setAddBag] = useState(false)
    const [addLike, setAddLike] = useState(false)

    const discountValue = 55
    const currentPrice = getRubleForUsd(item.price.value)
    const discountPrice = getDiscountPrice(currentPrice, discountValue)

    const handlerLikeClick = () => {
        if (!addLike) {
            dispatch(addToFavorites(item))
        } else  {
            dispatch(removeFromFavorites(item.id))
        }
        setAddLike(!addLike)
    }
    const handleAddBagClick = () => {
        if (!addBag) {
            dispatch(addToBag(item))
        } else {
            dispatch(removeFromBag(item.id))
        }
        setAddBag(!addBag)
    }

    return (
        <CardSale>
            <ImageContainer>
                <LikeBtn onClick={handlerLikeClick} fill={addLike ? colors.red : colors.white}>
                    <use href={svgName.fillHeart}/>
                </LikeBtn>
                <img src={item.images[0]} alt={item.text}/>
                <BlackOutContainer>
                    <ReservationBtn onClick={handleAddBagClick}>{!addBag ? 'ADD TO BAG' : 'REMOVE FROM BAG'}</ReservationBtn>
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

import {Card, ImageContainer, ReservationBtn, BlackOutContainer, Text, LikeBtn} from "./style";
import {svgName} from "../../../data/svg";
import {useState} from "react";
import {colors} from "../../../data/siteConfig";
import {getRubleForUsd} from "../../../functions/functions";

const FilterCard = ({item}) => {

    const [addLike, setAddLike] = useState(false)
    const currentPrice = getRubleForUsd(item.price.value)

    const handlerLikeClick = () => {
        setAddLike(!addLike)
    }

    return (
        <Card>
            <LikeBtn onClick={handlerLikeClick} fill={addLike ? colors.red : colors.white}>
                <use href={svgName.fillHeart}/>
            </LikeBtn>
            <ImageContainer>
                <img src={item.images[0]} alt={item.text}/>
                <BlackOutContainer>
                    <ReservationBtn>ADD TO BAG</ReservationBtn>
                </BlackOutContainer>
            </ImageContainer>
            <Text>{`$${currentPrice}`}</Text>
        </Card>
    )
}

export default FilterCard

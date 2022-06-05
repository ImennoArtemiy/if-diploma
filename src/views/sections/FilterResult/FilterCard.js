import {Card, ImageContainer, ReservationBtn, BlackOutContainer, Text, LikeBtn, Name} from "./style";
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

    const toCapitalizeName = item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()



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
            <Name>{toCapitalizeName}</Name>
        </Card>
    )
}

export default FilterCard

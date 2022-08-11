import {Card, ImageContainer, ReservationBtn, BlackOutContainer, Price, LikeBtn, Name} from "./style";
import {svgName} from "../../../data/svg";
import {useState} from "react";
import {colors} from "../../../data/siteConfig";
import {getRubleForUsd} from "../../../functions/functions";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToBag, removeFromBag} from "../../../ducks/addRemoveFromBag/actions";
import {addToFavorites, removeFromFavorites} from "../../../ducks/addRemoveFromFavorites/actions";

const FilterCard = ({item}) => {

    const [addBag, setAddBag] = useState(false)
    const [addLike, setAddLike] = useState(false)
    const currentPrice = getRubleForUsd(item.price.value)
    const dispatch = useDispatch()

    const handleAddBagClick = () => {
        if (!addBag) {
            dispatch(addToBag(item))
        } else {
            dispatch(removeFromBag(item.id))
        }
        setAddBag(!addBag)
    }

    const handlerLikeClick = () => {
        if (!addLike) {
            dispatch(addToFavorites(item))
        } else  {
            dispatch(removeFromFavorites(item.id))
        }
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
                    <ReservationBtn onClick={handleAddBagClick}>{!addBag ? 'ADD TO BAG' : 'REMOVE FROM BAG'}</ReservationBtn>
                </BlackOutContainer>
            </ImageContainer>
            <Price>{`$${currentPrice}`}</Price>
            <Link to={`good/${item.id}`}>
                <Name>{toCapitalizeName}</Name>
            </Link>
        </Card>
    )
}

export default FilterCard

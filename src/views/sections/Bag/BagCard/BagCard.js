import {Card, InfoWrapper, BtnWrapper, Info, Name, Price, Select, AddToBagBtn} from "./style";
import {svgName} from "../../../../data/svg";
import {getRubleForUsd} from "../../../../functions/functions";
import {useDispatch, useSelector} from "react-redux";
import {addToBag, removeFromBag} from "../../../../ducks/addRemoveFromBag/actions";
import {Link} from "react-router-dom";
import {inFavorites} from "../../../../ducks/user/selectors";
import {removeFromFavorites} from "../../../../ducks/addRemoveFromFavorites/actions";
import {useState} from "react";

const BagCard = ({data}) => {

    const [addBag, setAddBag] = useState(false)
    const sizeArr = data.availableSizes.map(i => i.split(', '))
    const dispatch = useDispatch()
    const userInFavorites = useSelector(inFavorites)

    const handleAddBagClick = () => {
        if (!addBag) {
            dispatch(addToBag(data))
        } else {
            dispatch(removeFromBag(data.id))
        }
        setAddBag(!addBag)
    }
    const handleRemoveBagClick = () => {
        dispatch(removeFromBag(data.id))
    }
    const handleRemoveFavoritesClick = () => {
        dispatch(removeFromFavorites(data.id))
    }

    return (
        <Card>
            <InfoWrapper>
                <img src={data.images[0]} alt=""/>
                <Info>
                    <Link to={`/good/${data.id}`}>
                        <Name>{data.name}</Name>
                    </Link>
                    <Price>{`USD $${getRubleForUsd(data.price.value)}`}</Price>
                    <Select>
                        <option>{`COLOR: ${data.color.name.toUpperCase()}`}</option>
                    </Select>
                    <Select>
                        {
                            sizeArr[0].map((size, index) => <option key={index}>{`SIZE: ${size}`}</option>)
                        }
                    </Select>
                </Info>
            </InfoWrapper>
            {
                userInFavorites && <AddToBagBtn onClick={handleAddBagClick}>{!addBag ? 'ADD TO BAG' : 'REMOVE FROM BAG'}</AddToBagBtn>
            }
            <BtnWrapper onClick={!userInFavorites ? handleRemoveBagClick : handleRemoveFavoritesClick}>
                <svg>
                    <use href={svgName.close}/>
                </svg>
                REMOVE
            </BtnWrapper>
        </Card>
    )
}

export default BagCard

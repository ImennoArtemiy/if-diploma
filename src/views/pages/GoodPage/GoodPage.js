import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllGoods, getGoods} from "../../../ducks/getAllGoods/actions";
import {goods} from "../../../ducks/getAllGoods/selectors";
import {useEffect, useState} from "react";
import BlackBtn from "../../../components/Btns/BlackBtn";
import {
    Main, ImgWrapper, InfoWrapper, Name, Price, ColorTitle, ColorSquare, SizeOptions, BtnWrapper, SizeTitle,
    InnerSquare, PreOrder, Description, DescriptionText
} from "./style";
import {getRubleForUsd} from "../../../functions/functions";
import Subscribe from "../../sections/Subscribe/Subscribe";
import {colors} from "../../../data/siteConfig";
import {addToBag, removeFromBag} from "../../../ducks/addRemoveFromBag/actions";
import {addToFavorites, removeFromFavorites} from "../../../ducks/addRemoveFromFavorites/actions";

const GoodPage = () => {

    useEffect(() => {
        dispatch(getGoods(getAllGoods))
    }, [])

    const [addBag, setAddBag] = useState(false)
    const [addLike, setAddLike] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const {id} = useParams()
    const dispatch = useDispatch()
    const allGoods = useSelector(goods)
    const good = allGoods.find(i => i.id === id)

    const handleAddBagClick = () => {
        if (!addBag) {
            dispatch(addToBag(good))
        } else {
            dispatch(removeFromBag(good.id))
        }
        setAddBag(!addBag)
    }

    const sizeArr = good.availableSizes.map(i => i.split(', '))
    const lowDescription = good.description.toLowerCase().split('.')

    const capitalizeWord = lowDescription.map(i => i.replace(/^ +| +$|( ) +/g, "$1").charAt(0).toUpperCase()
        + (i.replace(/^ +| +$|( ) +/g, "$1")).substring(1).toLowerCase())

    const handleAddLikeClick = () => {
        if (!addLike) {
            dispatch(addToFavorites(good))
        } else {
            dispatch(removeFromFavorites(good.id))
        }
        setAddLike(!addLike)
    }

    return (
        <>
            <Header color={colors.black}/>
            <Main>
                <ImgWrapper>
                    <img src={good.images[0]} alt=""/>
                    <img src={good.images[1]} alt=""/>
                </ImgWrapper>
                <InfoWrapper>
                    <Name>{good.name}</Name>
                    <Price>{`${good.price.currency} ${getRubleForUsd(good.price.value)}`}</Price>
                    <PreOrder>PRE-ORDER</PreOrder>
                    <ColorTitle>{good.color.name}</ColorTitle>
                    <ColorSquare>
                        <InnerSquare bg={good.color.hex}/>
                    </ColorSquare>
                    <SizeTitle>SIZE:</SizeTitle>
                    {
                        sizeArr[0].map((el) => {
                              return <SizeOptions key={el}>{el}</SizeOptions>
                        })
                    }
                    <BtnWrapper>
                        <BlackBtn onClick={handleAddBagClick}
                                  btnText={!addBag ? 'ADD TO BAG' : 'REMOVE FROM BAG'}
                                  mr='3px'/>
                        <BlackBtn onClick={handleAddLikeClick}
                                  btnText='&#9825;'
                                  color={addLike && colors.red}/>
                    </BtnWrapper>
                    <Description onClick={() => {
                        setIsOpen(!isOpen)
                    }}>{isOpen ? '- PRODUCT DESCRIPTION' : '+  PRODUCT DESCRIPTION'}
                        {
                            isOpen && <DescriptionText>{capitalizeWord.join('. ')}</DescriptionText>
                        }
                    </Description>
                </InfoWrapper>
            </Main>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default GoodPage

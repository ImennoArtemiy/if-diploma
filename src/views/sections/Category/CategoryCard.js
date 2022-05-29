import styled from "styled-components";
import {useDispatch} from "react-redux";
import {
    getAllDenim,
    getAllDresses, getAllGoods,
    getAllSwimwear,
    getAllTees,
    getAllTops,
    getGoods
} from "../../../ducks/getAllGoods/actions";
import {clickFilter} from "../../../ducks/clickFilter/actions";
import {colors} from "../../../data/siteConfig";

const Card = styled.div`
  width: 18%;
  cursor: pointer;
  position: relative;

  &:not(:last-child) {
    margin-right: 16px;
  }

  img {
    &:hover + p {
      background-color: ${colors.brown};
      color: ${colors.white};
    }

    &:active + p {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }

  p {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    display: block;
    background-color: rgba(208, 196, 185, 0.5);
    color: ${colors.brown};
    transition: .2s ease;

    &:hover {
      background-color: ${colors.brown};
      color: ${colors.white};
    }

    &:active {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
`

const CategoryCard = ({item, resultRef, setSumVisibleCards}) => {

    const dispatch = useDispatch()

    const scrollToRef = () => {
        window.scrollTo(0, resultRef.current.offsetTop)
    }

    const handleClick = (e) => {
        let name = e.target.className

        if (name === 'dresses') {
            dispatch(getGoods(getAllDresses))
        }
        if (name === 'tees') {
            dispatch(getGoods(getAllTees))
        }
        if (name === 'swimwear') {
            dispatch(getGoods(getAllSwimwear))
        }
        if (name === 'denim') {
            dispatch(getGoods(getAllDenim))
        }
        if (name === 'tops') {
            dispatch(getGoods(getAllTops))
        }
        if (name === 'allGoods') {
            dispatch(getGoods(getAllGoods))
        }

        dispatch(clickFilter())
        setTimeout(scrollToRef, 200)
        setSumVisibleCards(4)
    }

    return (
        <Card onClick={handleClick}>
            <img className={item.name} src={item.imageUrl} alt={item.imageUrl}/>
            <p className={item.name}>{item.title}</p>
        </Card>
    )
}

export default CategoryCard

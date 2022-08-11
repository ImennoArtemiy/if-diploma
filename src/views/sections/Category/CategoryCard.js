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

  @media (max-width: 768px) {
    min-width: calc(50% - 8px);
    &:not(:last-child) {
      margin-right: 0;
    }
    &:nth-child(odd) {
      margin-right: 16px;
    }
    margin-top: 16px;
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
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`

const CategoryCard = ({item, setSumVisibleCards, filterResultRef}) => {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        let name = e.target.className
        window.scrollTo(0, filterResultRef.current.offsetTop)

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

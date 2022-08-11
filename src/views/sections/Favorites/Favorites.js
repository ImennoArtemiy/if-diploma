import {CardBody, Flex, Quantity, QuantityBody, Title} from "../Bag/style";
import BagCard from "../Bag/BagCard/BagCard";
import {useSelector} from "react-redux";
import {favorites} from "../../../ducks/addRemoveFromFavorites/selectors";


export const Favorites = () => {

    const userFavorites = useSelector(favorites)

    return (
        <Flex>
            <QuantityBody>
                <Title>FAVORITES</Title>
                <Quantity>{`${userFavorites.length} items`}</Quantity>
            </QuantityBody>
            {
                userFavorites.length === 0 && (
                    <CardBody>
                        No items have been added to your favorites...
                    </CardBody>)
            }
            {
                userFavorites.length > 0 && userFavorites.map((item, index) => <BagCard key={index} data={item}/>)
            }
        </Flex>
    )
}

import {Flex, QuantityBody, Title, Quantity, CardBody, TotalPrice, PayBody, MessageWrap} from "./style";
import BlackBtn from "../../../components/Btns/BlackBtn";
import maestroImg from '../../../assets/img/maestro-logo.png'
import visa from '../../../assets/img/visa-logo.png'
import {useDispatch, useSelector} from "react-redux";
import {bag} from "../../../ducks/addRemoveFromBag/selectors";
import {getRubleForUsd, scrollToTop} from "../../../functions/functions";
import BagCard from "./BagCard/BagCard";
import {useState} from "react";
import SuccessfullyMessage from "../../../components/formItems/SuccessfullyMessage";
import {removeAllFromBag} from "../../../ducks/addRemoveFromBag/actions";
import PreLoader from "../../../components/PreLoader";

const Bag = () => {

    const dispatch = useDispatch()
    const [responseMessage, setResponseMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const userBag = useSelector(bag)
    const itemId = userBag.map(item => item.id)
    const totalPrice = userBag.reduce((acc, currentValue) => acc + Number(getRubleForUsd(currentValue.price.value)), 0)

    async function sendProductId() {

        setIsLoading(true)
        const response = await fetch('https://modnikky-api.herokuapp.com/api/cart', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"products": itemId})
        })
        const data = await response.json()
        setIsLoading(false)
        await setResponseMessage(data.message)

        scrollToTop()
    }

    return (
        <Flex>
            {
                isLoading && <PreLoader/>
            }
            {
                !responseMessage && (
                    <>
                        <QuantityBody>
                            <Title>BAG</Title>
                            <Quantity>{`${userBag.length} items`}</Quantity>
                        </QuantityBody>
                        {
                            userBag.length === 0 && (
                                <CardBody>
                                    No items have been added to your bag...
                                </CardBody>)
                        }
                        {
                            userBag.length > 0 && userBag.map((item, index) => <BagCard key={index} data={item}/>)
                        }
                        <TotalPrice>{`Total USD: $${totalPrice}`}</TotalPrice>
                        {
                            userBag.length !== 0 && <BlackBtn onClick={sendProductId} btnText='PROCEED TO CHECKOUT'/>
                        }
                        <PayBody>
                            <img src={maestroImg} alt="maestro card"/>
                            <img src={visa} alt="visa card"/>
                        </PayBody>
                    </>)
            }
            {
                responseMessage && (
                    <MessageWrap>
                        <SuccessfullyMessage message={`${responseMessage} :)`}
                                             btnText='OK'
                                             bg='rgba(208,196,185,0.2)'
                                             onClick={()=> {
                                                 setResponseMessage(null)
                                                 dispatch(removeAllFromBag())
                                             }}
                        />
                    </MessageWrap>
                )
            }
        </Flex>
    )
}

export default Bag

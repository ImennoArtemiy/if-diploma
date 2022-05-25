import styled from "styled-components";
import {colors} from "../../data/siteConfig";
import {useSelector} from "react-redux";
import {firstName} from "../../ducks/user/selectors";
import {appearance} from "../../globalStyles";
import {SquareBlackBtn} from "../SquareBtn/squareBtns";
import {form} from "../../data/forms";

const Window = styled.div`
  width: 520px;
  padding: 30px;
  background-color: ${colors.white};
  animation: ${appearance} .2s ease;
  font-weight: 300;
`
const Message = styled.p`
  margin-bottom: 30px;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const SuccessfullyMessage = ({setHaveAnAccount}) => {

    const userName = useSelector(firstName)

    const handleClick = () => {
        setHaveAnAccount(true)
    }


    return (
        <Window>
            <Message>{`Thank you for choosing our service ${userName}!`}</Message>
            <Flex>
                <SquareBlackBtn text={form.signInText}
                                width='30%' onClick={handleClick}/>
            </Flex>
        </Window>
    )
}

export default SuccessfullyMessage

import styled from "styled-components";
import {colors} from "../../data/siteConfig";
import {appearance} from "../../globalStyles";
import BlackBtn from "../Btns/BlackBtn";

const Window = styled.div`
  width: 520px;
  padding: 30px;
  background-color: ${props => props.bg || colors.white};
  animation: ${appearance} .2s ease;
  font-weight: 300;
  border-radius: 8px;
`
const Message = styled.p`
  margin-bottom: 30px;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const SuccessfullyMessage = ({message, btnText, bg, onClick}) => {

    return (
        <Window bg={bg}>
            <Message>{message}</Message>
            <Flex>
                <BlackBtn btnText={btnText}
                          onClick={onClick}
                />
            </Flex>
        </Window>
    )
}

export default SuccessfullyMessage

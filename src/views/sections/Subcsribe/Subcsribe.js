import styled from "styled-components";
import {Wrapper} from "../../../globalStyles";
import {title, text, btnText, labelText, emptyErrorText, emailErrorText} from "../../../data/subcsribe";
import LabelInput from "../../../components/formItems/LabelInput";
import {colors, fontSetting} from "../../../data/siteConfig";
import {useState} from "react";
import {Error, Flex} from "../../../components/formItems/RegForm/style";
import SuccessfullyMessage from "../../../components/formItems/SuccessfullyMessage";
import {useSelector} from "react-redux";
import {firstName} from "../../../ducks/user/selectors";
import PreLoader from "../../../components/PreLoader";

const Section = styled.section`
  text-align: center;
`
const Title = styled.h4`
  text-align: center;
`
const Text = styled.p`
  font-size: 16px;
  margin-bottom: 25px;
`
const EmailWrapper = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
`
const Btn = styled.p`
  position: absolute;
  bottom: 3px;
  right: 0;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    color: ${colors.gray};
  }

  &:active {
    color: ${colors.black};
  }
`

const Subscribe = () => {
    const [emailValue, setEmailValue] = useState('')
    const [emptyFieldEmail, setEmptyFieldEmail] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [responseMessage, setResponseMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const userName = useSelector(firstName)

    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    const disableInputFocus = (e) => {
        if (e.target.value.length === 0) {
            setEmailValue(null)
            setEmptyFieldEmail(true)
        }
    }
    const handleInputFocus = () => {
        setEmailValue(emailValue)
    }
    const handleInputChange = (e) => {
        setEmailValue(e.target.value)
        setEmptyFieldEmail(false)
        setEmailError(false)
        setSubmit(false)
    }

    async function setPostEmail () {
        setIsLoading(true)
        const response = await fetch('https://modnikky-api.herokuapp.com/api/subscription', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: `${emailValue}`})
        })
        const data = await response.json()
        setIsLoading(false)
        await setResponseMessage(data.message)
    }

    const handleEmailSubmit = () => {
        if (!emailValue) {
            setEmptyFieldEmail(true)
            setEmailError(false)
        }
        if (!emailReg.test(emailValue) && emailValue) {
            setEmailError(true)
            setEmptyFieldEmail(true)
        }
        if (emailReg.test(emailValue)) {
            setPostEmail()
            setEmailValue(null)
        }
        setSubmit(true)
    }

    return (
        <Section>
            {
                isLoading && <PreLoader/>

            }
            <Wrapper>
                {
                    !isLoading && !responseMessage && (
                        <>
                            <Title>{title}</Title>
                            <Text>{text}</Text>
                            <EmailWrapper>
                                <LabelInput labelText={labelText}
                                            labelCl={colors.gray}
                                            inputWidth='100%' fs={fontSetting.middle.fs}
                                            fw={400}
                                            lh='17px'
                                            inputId='subscribeInput'
                                            inputType='text'
                                            isActive={emailValue}
                                            inputBrCl={emptyFieldEmail ? colors.red : colors.gray}
                                            onFocus={handleInputFocus}
                                            onBlur={disableInputFocus}
                                            inputOnChange={handleInputChange}
                                />
                                <Btn onClick={handleEmailSubmit}>{btnText}</Btn>
                            </EmailWrapper>
                            <Error>
                                {
                                    emptyFieldEmail && !emailError && submit && emptyErrorText
                                }
                                {
                                    emailError && submit && emailErrorText
                                }
                            </Error>
                        </>
                    )
                }
                {
                     responseMessage && (
                        <Flex>
                            <SuccessfullyMessage message={`${responseMessage}, ${userName}!`}
                                                 btnText='OK'
                                                 bg='rgba(208,196,185,0.2)'
                                                 onClick={()=> {
                                                     setResponseMessage(null)
                                                 }}
                            />
                        </Flex>
                    )
                }
            </Wrapper>
        </Section>
    )
}

export default Subscribe

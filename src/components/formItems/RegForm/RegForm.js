import {form} from "../../../data/forms";
import {Link} from "react-router-dom";
import {colors, navigatePageUrl} from "../../../data/siteConfig";
import LabelInput from "../LabelInput/LabelInput";
import {useState} from "react";
import Checkbox from "../Checkbox/Checkbox";
import {SquareBlackBtn} from "../../SquareBtn/squareBtns";
import {Form, Flex, TitleWrap, Title, Politics, GoTo} from "./style";
import {useDispatch} from "react-redux";
import {setEmail, setFirstName, setLastName, setPassword} from "../../../ducks/user/actions";
import SuccessfullyMessage from "../SuccessfullyMessage";
import CloseBtn from "../../CloseBtn";

const RegForm = ({setHaveAnAccount}) => {

    const [firstNameValue, setFirstNameValue] = useState(null)
    const [lastNameValue, setLastNameValue] = useState(null)
    const [emailValue, setEmailValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState(null)

    const [emptyFieldFirstName, setEmptyFieldFirstName] = useState(false)
    const [emptyFieldLastName, setEmptyFieldLastName] = useState(false)
    const [emptyFieldEmail, setEmptyFieldEmail] = useState(false)
    const [emptyFieldPassword, setEmptyFieldPassword] = useState(false)

    const [isRegistered, setIsRegistered] = useState(false)

    const dispatch = useDispatch()

    const disableInputFocus = (e) => {

        let id = e.target.id
        let value = e.target.value

        if (id === form.id.firstName && value.length === 0) {
            setFirstNameValue(null)
            setEmptyFieldFirstName(true)
        }
        if (id === form.id.lastName && value.length === 0) {
            setLastNameValue(null)
            setEmptyFieldLastName(true)
        }
        if (id === form.id.email && value.length === 0) {
            setEmailValue(null)
            setEmptyFieldEmail(true)
        }
        if (id === form.id.password && value.length === 0) {
            setPasswordValue(null)
            setEmptyFieldPassword(true)
        }
    }

    const handleInputFocus = (e) => {
        let id = e.target.id

        if (id === form.id.firstName) {
            setFirstNameValue(firstNameValue)
        }
        if (id === form.id.lastName) {
            setLastNameValue(lastNameValue)
        }
        if (id === form.id.email) {
            setEmailValue(emailValue)
        }
        if (id === form.id.password) {
            setPasswordValue(passwordValue)
        }
    }

    const handleInputChange = (e) => {
        let id = e.target.id
        let value = e.target.value

        if (id === form.id.firstName) {
            setFirstNameValue(value)
            setEmptyFieldFirstName(false)
        }
        if (id === form.id.lastName) {
            setLastNameValue(value)
            setEmptyFieldLastName(false)
        }
        if (id === form.id.email) {
            setEmailValue(value)
            setEmptyFieldEmail(false)
        }
        if (id === form.id.password) {
            setPasswordValue(value)
            setEmptyFieldPassword(false)
        }
    }

    const handleClickSubmit = () => {
        dispatch(setFirstName(firstNameValue))
        dispatch(setLastName(lastNameValue))
        dispatch(setEmail(emailValue))
        dispatch(setPassword(passwordValue))
        setIsRegistered(true)
    }

    return (
        <>
            {
                isRegistered ? <SuccessfullyMessage setHaveAnAccount={setHaveAnAccount}/> :
                    <Form>
                        <TitleWrap>
                            <Title>{form.titleCreateAccount}</Title>
                            <Link to={navigatePageUrl.main}>
                                <CloseBtn/>
                            </Link>
                        </TitleWrap>
                        <LabelInput labelText={form.labels.firstName}
                                    labelCl={colors.gray}
                                    inputWidth='100%'
                                    inputId={form.id.firstName}
                                    inputType={form.inputType.text}
                                    inputMb='30px'
                                    inputBrCl={emptyFieldFirstName ? colors.red : colors.gray}
                                    isActive={firstNameValue}
                                    onFocus={handleInputFocus}
                                    onBlur={disableInputFocus}
                                    inputOnChange={handleInputChange}
                        />
                        <LabelInput labelText={form.labels.lastName}
                                    labelCl={colors.gray}
                                    inputWidth='100%'
                                    inputId={form.id.lastName}
                                    inputType={form.inputType.text}
                                    inputMb='30px'
                                    inputBrCl={emptyFieldLastName ? colors.red : colors.gray}
                                    isActive={lastNameValue}
                                    onFocus={handleInputFocus}
                                    onBlur={disableInputFocus}
                                    inputOnChange={handleInputChange}
                        />
                        <LabelInput labelText={form.labels.email}
                                    labelCl={colors.gray}
                                    inputWidth='100%'
                                    inputId={form.id.email}
                                    inputType={form.inputType.text}
                                    inputMb='30px'
                                    inputBrCl={emptyFieldEmail ? colors.red : colors.gray}
                                    isActive={emailValue}
                                    onFocus={handleInputFocus}
                                    onBlur={disableInputFocus}
                                    inputOnChange={handleInputChange}
                        />
                        <LabelInput labelText={form.labels.password}
                                    labelCl={colors.gray}
                                    inputWidth='100%'
                                    inputId={form.id.password}
                                    inputType={form.inputType.password}
                                    inputMb='30px'
                                    inputBrCl={emptyFieldPassword ? colors.red : colors.gray}
                                    isActive={passwordValue}
                                    onFocus={handleInputFocus}
                                    onBlur={disableInputFocus}
                                    inputOnChange={handleInputChange}
                        />
                        <Checkbox/>
                        <Politics>By signing up you agree
                            to <span>Terms of Service</span> and <span>Privacy Policy</span></Politics>
                        <Flex>
                            <SquareBlackBtn text={form.signUpText}
                                            width='50%'
                                            onClick={handleClickSubmit}/>
                        </Flex>
                        <GoTo onClick={() => setHaveAnAccount(true)} mt='30px'>{form.iHaveAnAccount}</GoTo>
                    </Form>
            }
        </>

    )
}

export default RegForm

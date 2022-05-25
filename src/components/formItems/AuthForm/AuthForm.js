import {form} from "../../../data/forms";
import {Link} from "react-router-dom";
import {colors, navigatePageUrl} from "../../../data/siteConfig";
import LabelInput from "../LabelInput/LabelInput";
import {SquareBlackBtn} from "../../SquareBtn/squareBtns";
import {Form, TitleWrap, Title, Flex, GoTo, Error} from "../RegForm/style";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../ducks/user/actions";
import {email, password} from "../../../ducks/user/selectors";
import CloseBtn from "../../CloseBtn";

const AuthForm = ({setHaveAnAccount}) => {

    const [emailValue, setEmailValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState(null)

    const [emptyFieldEmail, setEmptyFieldEmail] = useState(false)
    const [emptyFieldPassword, setEmptyFieldPassword] = useState(false)

    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const userEmail = useSelector(email)
    const userPassword = useSelector(password)

    const disableInputFocus = (e) => {

        let id = e.target.id
        let value = e.target.value

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

        if (id === form.id.email) {
            setEmailValue(value)
            setEmptyFieldEmail(false)
        }
        if (id === form.id.password) {
            setPasswordValue(value)
            setEmptyFieldPassword(false)
        }
    }

    const handleLoginClick = () => {
        if (emailValue === userEmail && passwordValue === userPassword) {
            dispatch(login())
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <Form>
            <TitleWrap>
                <Title>{form.titleSignIn}</Title>
                <Link to={navigatePageUrl.main}>
                    <CloseBtn/>
                </Link>
            </TitleWrap>
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
                        inputMb='50px'
                        inputBrCl={emptyFieldPassword ? colors.red : colors.gray}
                        isActive={passwordValue}
                        onFocus={handleInputFocus}
                        onBlur={disableInputFocus}
                        inputOnChange={handleInputChange}
            />
            <Flex>
                <SquareBlackBtn text={form.signInText}
                                width='50%'
                                onClick={handleLoginClick}/>

                <Error opacity={error ? 1 : 0}>Incorrect email or password!</Error>

            </Flex>
            <GoTo onClick={() => setHaveAnAccount(false)}>{form.backToRegistration}</GoTo>
        </Form>
    )
}

export default AuthForm

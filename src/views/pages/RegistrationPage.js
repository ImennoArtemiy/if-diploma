import styled from "styled-components";
import bgImg from '../../assets/img/topBg.png';
import RegForm from "../../components/formItems/RegForm/RegForm";
import {blur} from "../../globalStyles";
import {useState} from "react";
import AuthForm from "../../components/formItems/AuthForm";
import {useSelector} from "react-redux";
import {isLogged} from "../../ducks/user/selectors";
import {Navigate} from "react-router-dom";
import {navigatePageUrl} from "../../data/siteConfig";

const Body = styled.main`
  background: url(${bgImg}) no-repeat;
  background-size: cover;
`
const BlurWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(5px);
  animation: ${blur} .2s ease;
`

const RegistrationPage = () => {
    const [haveAnAccount, setHaveAnAccount] = useState(false)
    const userIsLogged = useSelector(isLogged)

    return (
        !userIsLogged ?
        <Body>
            <BlurWrap animationName={blur}>
                {
                    haveAnAccount && <AuthForm setHaveAnAccount={setHaveAnAccount}/>
                }
                {
                    !haveAnAccount && <RegForm setHaveAnAccount={setHaveAnAccount}/>
                }
            </BlurWrap>
        </Body>
            : <Navigate replace to={navigatePageUrl.main}/>
    )
}

export default RegistrationPage

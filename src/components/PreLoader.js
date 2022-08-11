import styled from "styled-components";
import {colors} from "../data/siteConfig";
import {Wrapper} from "../globalStyles";

const Section = styled.div`
 
`

const Title = styled.h2`
  text-align: center;
  color: ${colors.brown}
`

const Loader = styled.div`
  overflow: hidden;
  font-size: 5px;
  margin: 25px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: transparent;
  background: -moz-linear-gradient(left, ${colors.brown} 10%, rgba(101, 171, 248, 0) 42%);
  background: -webkit-linear-gradient(left, ${colors.brown} 10%, rgba(101, 171, 248, 0) 42%);
  background: -o-linear-gradient(left, ${colors.brown} 10%, rgba(101, 171, 248, 0) 42%);
  background: -ms-linear-gradient(left, ${colors.brown} 10%, rgba(101, 171, 248, 0) 42%);
  background: linear-gradient(to right, ${colors.brown} 10%, rgba(101, 171, 248, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${colors.brown};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background-color: ${colors.white};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`

const PreLoader = ({width, bg}) => {

    return (
        <Section id='preLoader' width={width} bg={bg}
        >
            <Wrapper>
                <Title>Loading...</Title>
                <Loader/>
            </Wrapper>
        </Section>
    )
}

export default PreLoader

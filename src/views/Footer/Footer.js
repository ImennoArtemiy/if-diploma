import styled from "styled-components";
import {Wrapper} from "../../globalStyles";
import Column from "./Column";
import {
    customerArray,
    customerService,
    followUs,
    info,
    infoArray,
    followUsArray,
    contactUs,
    contactUsArray
} from "../../data/footer";
import ColumnWithIcon from "./ColumnWithIcon";

const Section = styled.footer`
  background-color: rgba(208,196,185,0.2);
`
const Flex = styled.div`
  display: flex;
`


const Footer = () => {
    return (
        <Section>
            <Wrapper>
                <Flex>
                    <Column titleText={customerService} data={customerArray}/>
                    <Column titleText={info} data={infoArray}/>
                    <ColumnWithIcon titleText={followUs} data={followUsArray}/>
                    <Column titleText={contactUs} data={contactUsArray}/>
                </Flex>
            </Wrapper>
        </Section>
    )
}

export default Footer

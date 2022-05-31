import styled from "styled-components";
import {svgIcon} from "../../data/footer";


const Body = styled.ul`
  width: 25%;
`
const Title = styled.h4`
  margin-bottom: 15px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
const Icon = styled.svg`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
const Item = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
`

const ColumnWithIcon = ({titleText, data,}) => {
    return (
        <Body>
            <Title>{titleText}</Title>
            {
                data.map((item, index) => (
                    <Flex key={index}>
                        <Icon>
                            <use href={svgIcon[index]}/>
                        </Icon>
                        <Item>{item}</Item>
                    </Flex>
                ))
            }
        </Body>
    )
}

export default ColumnWithIcon

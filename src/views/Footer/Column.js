import styled from "styled-components";


const Body = styled.ul`
  width: 25%;
`
const Title = styled.h4`
  margin-bottom: 15px;
`
const Item = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Column = ({titleText, data}) => {
    return (
        <Body>
            <Title>{titleText}</Title>
            {
                data.map((item, index) => <Item key={index}>{item}</Item>)
            }
        </Body>
    )
}

export default Column

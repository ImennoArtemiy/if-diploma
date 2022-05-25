import styled from "styled-components";
import {form} from "../../../data/forms";

const Wrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`
const Input = styled.input.attrs({type: 'checkbox', id: 'subscription'})`
  margin: 2px 5px 0 0;
`
const Label = styled.label.attrs({htmlFor: 'subscription'})`
  white-space: pre-wrap;
`

const Checkbox = () => {
    return (
        <Wrap>
            <Input id='subscription'/>
            <Label>{form.subscription}</Label>
        </Wrap>
    )
}

export default Checkbox

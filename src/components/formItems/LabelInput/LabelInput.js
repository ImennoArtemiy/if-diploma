import styled from "styled-components";
import {colors, fontSetting} from "../../../data/siteConfig";

const Container = styled.div`
  position: relative;
`
const Label = styled.label`
  position: absolute;
  bottom: 10px;
  display: block;
  color: ${props => props.color};
  font-weight: 300;
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.fs};
  transition: .2s ease;
`
const Input = styled.input`
  display: block;
  background-color: transparent;
  width: ${props => props.width};
  color: ${props => props.color};
  font-size: ${fontSetting.small.fs};
  line-height: ${fontSetting.small.lh};
  height: 30px;
  border-bottom: 2px solid ${props => props.brColor};
  margin-bottom: ${props => props.mb};
`
const LabelInput = ({
                        labelText,
                        labelCl,
                        inputWidth,
                        inputMb,
                        inputColor,
                        inputBrCl,
                        inputId,
                        inputType,
                        inputOnChange,
                        isActive,
                        onFocus,
                        onBlur,
                        value,
                    }) => {


    return (
        <Container>
            <Label className={isActive ? "labelActive" : ""}
                   htmlFor={inputId}
                   color={labelCl}>{labelText}</Label>
            <Input mb={inputMb} width={inputWidth}
                   color={inputColor}
                   brColor={inputBrCl}
                   id={inputId}
                   type={inputType}
                   onChange={inputOnChange}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   value={value}
            />
        </Container>
    )
}

export default LabelInput

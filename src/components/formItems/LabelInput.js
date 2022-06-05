import styled from "styled-components";
import {fontSetting} from "../../data/siteConfig";

const Container = styled.div`
  position: relative;
`
const Label = styled.label`
  position: absolute;
  bottom: 10px;
  display: block;
  color: ${props => props.color};
  font-weight: ${props => props.fw || 300};
  font-size: ${props => props.fs};
  line-height: ${props => props.lh};
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
const LabelInput = ({   fw,
                        fs,
                        lh,
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
                        onKeyDown,
                        value,
                    }) => {
    return (
        <Container>
            <Label className={isActive ? "labelActive" : ""}
                   htmlFor={inputId}
                   fw={fw}
                   fs={fs}
                   lh={lh}
                   color={labelCl}>{labelText}</Label>
            <Input mb={inputMb} width={inputWidth}
                   color={inputColor}
                   brColor={inputBrCl}
                   id={inputId}
                   type={inputType}
                   onChange={inputOnChange}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   onKeyDown={onKeyDown}
                   value={value}
            />
        </Container>
    )
}

export default LabelInput

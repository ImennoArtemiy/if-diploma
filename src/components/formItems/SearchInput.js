import LabelInput from "./LabelInput";
import styled from "styled-components";
import {colors} from "../../data/siteConfig";
import {useState} from "react";
import CloseBtn from "../CloseBtn";
import {useDispatch} from "react-redux";
import {changeValue, clearValue, findValue} from "../../ducks/searchValue/actions";
import {search} from "../../data/forms";
import {getGoods} from "../../ducks/getAllGoods/actions";

const Form = styled.form`
  display: flex;
  color: ${colors.white};
  position: absolute;
  bottom: -120px;
  left: -20px;
  background-color: rgba(208, 196, 185, 0.9);
  padding: 25px;
  border-radius: 8px;
`

const SearchInput = () => {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    const handleInputChange = (e) => {

        if (e.target.id === search.id) {
            setSearchValue(e.target.value)
            dispatch(changeValue(e.target.value))
        }
    }

    const handleCloseClick = () => {
        setSearchValue('')
        dispatch(clearValue())
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            dispatch(getGoods(findValue))
        }
    }


    return (
        <Form id={search.form}>
            <CloseBtn margin='8px 8px 0 0'
                      fill={colors.white} onClick={handleCloseClick}
            />
            <LabelInput inputId={search.id}
                        fw={400}
                        labelText={search.labelText}
                        labelCL={colors.white}
                        inputWidth='200px'
                        inputColor={colors.white}
                        inputBrCl={colors.white}
                        inputType={search.inputType}
                        isActive={searchValue}
                        value={searchValue}
                        inputOnChange={handleInputChange}
                        onKeyDown={handleKeyDown}
            />
        </Form>
    )
}
export default SearchInput

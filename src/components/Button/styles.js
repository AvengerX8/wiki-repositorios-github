import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    color: #0F0F0F;
    height: 62px;
    width: 80%;
    margin: 20px;
    font-family: Arial;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 7px 7px 1px #000000;
    text-shadow: 1px 1px 1px #0F0F0F;
     
    &:hover {
        background-color:#FAFAFA40 ;
        color: #FAFAFA;
        cursor: pointer;
        box-shadow: 5px 5px 1px #000000;
    }
` 
import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    width: 80vw;
    height: 80vh;
    background: white;
    box-shadow: 5px 5px 20px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
            top: 10px;    
        } 
`;
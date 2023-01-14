import styled from "styled-components";

export const ContactWrapper = styled.div`
    width: 100%;
    color: #0099FF;

    div{
        font-size: 2.5rem;
        font-weight: 550;
        display: block;
        margin: 0 1rem 2rem 1rem;
    }

    ul{
        display: block;
    }

    li{
        list-style: none;
        display: inline-block;
        margin: 0 1rem;
        cursor: pointer;
    }
    
    .toast{
        display: flex;
        justify-content: center;
        width: 100%;
        color: white;
        font-size: 1rem;
        position: fixed;
        z-index: 1;
        bottom: 10%;
        margin: 0;
    }

    .toast span{
        background: #0099ff;
        padding: 1rem;
        border-radius: 2rem;
    }
`;
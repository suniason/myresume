import styled from "styled-components";

export const ProfileWrapper = styled.div`
    margin: 5rem 0 0 0;
    display: grid;
    width: 80%;
    grid-template-columns: 30% 70%;
    grid-template-rows: 20% 70%;
    text-align: left;
    height: 25rem;
    gap: 20px;
    box-shadow: 3px 3px 20px 3px #0099ff;

    .head{
        display: flex;
        grid-column: 1/3;   
        justify-content: center;
    }

    h1{
        height: 1rem;
        color: #0099ff;
        font-size: 2.5rem;
        cursor: pointer;
    }
    
    h1::before, h1::after{
        content: '';
        display: block;
        width: 100%;
        height: .3rem;
        background: #0099ff;
        transition: transform .5s;
        transform: scaleX(0);
    }

    h1::before{
        transform-origin: right;
    }

    h1:hover:before{
        transform: scaleX(1);
        transform-origin: left;
    }

    h1::after{
        transform-origin: left;
    }

    h1:hover:after{
        transform: scaleX(1);
        transform-origin: right;
    }

    .photo{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 85%;
        pointer-events: none;
        border-radius: 100%;
        border: #0099ff solid .5rem;
    }

    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: #0099ff;
        width: 95%;
        font-size: 1.25rem;
        line-height: 2rem;
        overflow-y: auto;
    }

`;
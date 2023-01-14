import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: grid;
    width: 100%;
    background: #0099ff;
    height: 22.5rem;
    color: white;
    text-align: left;
    grid-template-columns: 70% 30%;
`;

export const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 60%;
    margin: 0 0 0 5rem;
    z-index: 0;

    .greet{
        font-size: 2.5rem;
        font-weight: 500;
    }

    .name{
        overflow: hidden;
        font-size: 72px;
        font-weight: 750;    
        cursor:pointer;
        position: relative;
    }

    .name::after{
        content:'';
        display: block;
        background: #33ffff;
        height: .5rem;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 1s;
    }

    .name:hover:after{
        transform: scaleX(1);
        transform-origin: right;
        background: #33ffff;
    }

    .name::before{
        content:'Brett Josef C. Galvez';
        display: inline-block;
        position: absolute;
        font-size: 72px;
        font-weight: 750;    
        width: 100%;
        cursor:pointer;
        color: #33ffff;
        transition: transform 1s;
        transform: translate3d(-120%, 0, 0);
    }

    .name:hover:before{
        transform: translate3d(0, 0, 0);
        
    }

    .name span{
        display: inline-block;
        transition: transform 1s;
    }
    
    .name:hover span{
        transform: translate3d(120%, 0, 0);
    }
`;

export const MascotWrapper = styled.div`
    display: flex;
    justify-content:center;
    pointer-events: none;
    
    img{
        width: 17rem ;
    }
`;



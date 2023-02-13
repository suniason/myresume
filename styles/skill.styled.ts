import styled from "styled-components";

export const SkillWrapper = styled.div`
    color: white;
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 1fr;    
    grid-template-rows: 25% 40% 47%;



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
    
    ul{
        padding: 0;
        margin: 0;
    }

    div{
        font-size: 1.5rem;
        padding: 1rem 0;
        text-align: center;
    }

    .one{
        grid-row: 2/4;
    }

    .one, .three, .four{
        background: #0099ff;
        border-radius: .5rem;
        font-size: 1.15rem;
        margin: 1rem;
        list-style: none;
    }

    .two{
        margin: 0 2rem;
    }

    .one div, .three div, .four div{
        font-weight: 700;
    }

    li{
        margin: 0 4rem;
    }
`;
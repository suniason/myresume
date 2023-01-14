import styled from "styled-components";

export const EducationWrapper = styled.div`
    height: 25rem;
    width: 100%;
    color: #ffffff;
    background: #0099ff;

    h1{
        margin: 3rem 0;
        font-size: 2.5rem;
    }

    .gridcontainer{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        color: #0099ff;
        margin: 0 1rem;
    }

    span{
        font-weight: bold;
        font-size: 1.5rem;
        background: white;
        padding: 1.5rem;
        border-radius: 2rem;
    }

    .content{
        margin: 1rem 0 0 0;
        font-size: 1rem;
    }

    .school{
        font-size: 1.25rem;
    }

    .date{
        font-size: 1rem;
        font-weight: 500;
    }

`;
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(180deg, #0099ffaa, #000000bb);
    display: flex;
    cursor: pointer;
    position: fixed;
    top:0;
    left:0;
    padding: .75rem 0;
    z-index: 1;

    span{
        margin: 0 20% 0 0;
    }

    .navigation{
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
    }

    .division1{
        width: 30%;
    }
    .division2{
        width: 60%;
    }

    .name{
        font-size: 2rem;
        font-weight: 700;
        color: #0099ff;
        display: inline-block;
        transition: transform .15s cubic-bezier(0.76, 0, 0.24, 1);
    }
    
    ul{
        list-style: none;
        color: #0099ff;
        font-size: 1.2rem;
        font-weight: 400;
    }
    
    li{
        display: inline-block;
        padding: .5rem 2rem;
        text-align: center;
    }

    li:hover{
        color: white;
        transform: translateY(-0.25rem);
    }

    .zoom{
        animation: zoom .5s;
    }

    @keyframes zoom{
        50%{
            transform: scale(150%);
        }
        100%{
            transform: scale(100%);
        }
    }
`;
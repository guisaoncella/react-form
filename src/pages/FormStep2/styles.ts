import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #b8b8da;
    }

    h1{
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    button{
        background-color: #25CD89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        margin-right: 50px;

        &:hover{
            opacity: .8;
            transition: opacity 300ms;
        }
    }

    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }
`
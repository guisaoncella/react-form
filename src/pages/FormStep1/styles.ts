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

    label{
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #000814;
        }
    }

    button {
        background-color: #25CD89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;

        &:hover{
            opacity: .8;
            transition: opacity 300ms;
        }
    }
`
import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`

export const Icon = styled.div<{active: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Point = styled.div<{active: boolean}>`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid #494A7C;
    margin-left: 30px;
    margin-right: -8px;
    background-color: ${props => props.active ? '#25CD89' : '#000814'};
`

import styled from "styled-components";

export const ChartWrapper = styled.div`
display:flex;
flex-direction:column;
gap:8px;
height:13vh;
border:none;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 8px;
padding:16px 12px;
background-color:white;
`


export const P = styled.p`
font-family:"Montserrat", sans-serif;
font-size:12px;
font-weight:bolder;
padding-top:2px

`
export const ChartNumber = styled.p`
font-family:"Montserrat", sans-serif;
color:#31A5BE;
font-size:14px;
font-weight:700;
`



export const ChartNumberRed = styled(ChartNumber)`
color:#b2413b;
`
export const ChartNumberGreen = styled(ChartNumber)`
color:#9AC345;
`


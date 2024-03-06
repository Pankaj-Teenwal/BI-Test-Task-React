import styled, { ServerStyleSheet } from "styled-components";

export const WorldMapWrapper = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
font-family:"Montserrat", sans-serif;
padding:12px;
border-radius:8px;
`

export const MapTitle = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:22px;
font-weight:bold;
`

export const CountryWrapper = styled.div`
display:flex;
flex-direction:column;
font-size:18px;
gap:4px;
font-weight:500;
`
export const CountryCount = styled.p`
display:flex;
gap:22px;
font-weight:bold;
`

export const CountryName = styled.span`
font-weight:400;
color:gray;
`
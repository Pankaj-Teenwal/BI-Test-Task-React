import styled from "styled-components";

export const ListWrapper = styled.div`
list-style:none;
font-family:"Montserrat", sans-serif;
padding-left:12px;
font-size:14px;
border:none;
border-radius:8px;
box-sizing:border-box;
width:100%;
display:flex;
flex-direction:column;
background-color:#FFFF;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
&>div>li{
    padding:10px 0px 10px 8px;
}

`

export const ImageWrapper = styled.div`
background-color:#6236FF;
width:100%;
display:flex;
align-items:center;
justify-content:center;
border-radius:12px;
`
export const Img = styled.img`
width:200px;
`

export const CovidCardWrapper = styled.div`
background-color:#6236FF;
width:100%;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius:12px;
margin-bottom:-24px;
padding:8px 0px;
`

export const Symptoms = styled.p`
font-family:"Montserrat", sans-serif;
color:#FFFFFF;
font-size:20px;
font-weight:700;
`
export const SymptomsDescription = styled.p`
font-family:"Montserrat", sans-serif;
color:#FFFFFF;
line-height:20px;
`

export const SymptomsWrapper = styled.div`
display:flex;
padding:0px 8px;

`

export const AsideWrapper = styled.div`
width:18vw;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`


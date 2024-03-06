import styled from "styled-components";

export const HeaderWrapper = styled.div`
height:32px;
font-family:"Montserrat", sans-serif;
background-color:#F9FDFF;
display:flex;
align-items:center;  
justify-content:space-between;
padding:12px 32px;
`

export const HeaderTextWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:200px;
`

export const Covid = styled.p`
    font-size:28px;
    font-weight:700;
    color:#5B39A0;
`

export const Tracker = styled.p`
font-size:12px;
color:#C7C6C6;
font-weight:500;
`

export const SearchBarWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;

border-radius: 30px;
padding: 8px 12px;
background-color:#FFFF;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const SearchInput = styled.input`
border:none;
outline:none;
font-size:12px;
::placeholder{
    color: #C7C6C6;
}

`

export const IconWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;

`

export const IconSearchBarWrapper = styled.div`
display:flex;
align-items:center;
gap:92px;
`

export const Icons = styled.div`
display:flex;
align-items:center;
gap:8px;
padding:0px 8px;
&:hover{
    cursor:pointer;
}

`
export const IconsWithBorder = styled.div`
display:flex;
border-right:1px solid black;
align-items:center;
gap:8px;
padding:0px 8px;
&:hover{
    cursor:pointer;
}
`
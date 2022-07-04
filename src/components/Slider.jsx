import styled from "styled-components";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
background-color:coral;
position:relative;`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left: ${props=> props.direction === "left" && "10px"} ;
right: ${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
`
const Wrapper = styled.div`
height:100%;`
const Slide=styled.div`
display:flex;
align-items:center;
`
const ImgContainer=styled.div`
flex:1`
const InfoContainer=styled.div`
flex:1
`
const Slider = () => {
  return (
    <Container>
     <Arrow direction="left">
   <ArrowLeftOutlinedIcon/>
     </Arrow >
     <Wrapper></Wrapper>
     <Arrow direction="right">
        <ArrowRightOutlinedIcon/>
     </Arrow>
        
    </Container>
  )
}

export default Slider
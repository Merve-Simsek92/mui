
import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";

import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;
const SearchContainer = styled.div`
border:0.05px solid lightgray ;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input=styled.input`
border:none;
`
const Logo=styled.h1`
font-weight:bold`
const Left = styled.div`
  width: 33.3%;
  display:flex;
  align-items:center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: cursor-pointer;
`;
const Center = styled.div`
  width: 33.3%;
`;
const Right = styled.div`
  width: 33.3%;
  display:flex;
  align-items:center;
  justify-content:flex-end;


`;
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
         <SearchIcon style={{color:"gray",fontSize:"16px"}}/>
      
          </SearchContainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
<ShoppingCartOutlined/>
</Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import React from 'react'
import{Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import {SearchBar} from './'
const NavBar = () =>(
    <Stack direction="row"
     alignItems="center"
     p={2}
    sx={{background:'#00',top:0,position:'sticky',justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'center'}}>
          <img src={logo} alt='Logo' height={45}/>
      </Link>
      <h1 style={{color:"#fff"}}>Youtube</h1>
      <SearchBar/>
    </Stack>
  );


export default NavBar
import React from 'react'
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import {Box} from '@mui/material';
import {NavBar, Feed, VideoDetails, ChannelDetail, SearchFeed} from './Components'
const App = () => (
  <BrowserRouter>
        <Box sx={{background:'#000'}}>
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetails/>}/>
                <Route path="/channels/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

            </Routes>{}
        </Box>
  </BrowserRouter>
   
);

export default App
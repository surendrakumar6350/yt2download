'use client'
import React, { useRef, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { searchdata } from './apicalling/call'
import Videos from './Components/Videos'
import { adddata } from './redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Container from '@mui/material/Container';
import Link from 'next/link';



const page = () => {
  const dispatch = useDispatch()
  const [searchq, setsearchq] = useState('')
  const [classNames, setclassNames] = useState(true)
  const [response, setresponse] = useState()





  const searchnow = () => {
    (async () => {
      if (searchq.length > 1) {
        setclassNames(false)
        const result = await searchdata(searchq)
        const ddd = []
        await result.contents.map((e) => {
          e.video ? ddd.push(e.video) : console.log("nothing")
        })
        setclassNames(true)
        dispatch(adddata({ videos: [...ddd] }))
      }
    })()
  }


  return (
    <>

      <div className='nav2'>
        <Link style={{width: "100%", height: "100%"}} href={'/'}>
        <div className='logo2'></div>
        </Link>
      </div>
<div className='h22'>
<h2 >YouTube Video Downloader</h2>
<p className='p2'>DOWNLOAD ANYTHING</p>
</div>


      <CssBaseline />
      <Container className='mainsearch2' maxWidth="sm">
        <Box className='boxss' sx={{  height: '10vh' }}>
          <input type="text" value={searchq} onChange={(e) => setsearchq(e.target.value)} placeholder="Search" className="px-4 py-2 search2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring focus:border-blue-500" />
          {classNames ? <LoadingButton style={{marginLeft: "5px", background: "blue", color: "white"}}
            
            onClick={searchnow}
            variant="outlined">
            search
          </LoadingButton> : <LoadingButton style={{marginLeft: "3px"}}
            loading
            
          >
            search
          </LoadingButton>}
        </Box>
      </Container>








      <div style={{minHeight: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center" }} >
        <Videos />
      </div>

<div className='after2'>

<div className='text2'>
Explore the ultimate solution for easy and efficient video and music downloads from the internet: our yt2download video downloader. This user-friendly, free tool simplifies the process of downloading your favorite videos and music with a single click, ensuring a seamless experience!
</div>
<h5 className="text-muted mb-0 text-center">Supported Platforms:</h5>
<div className="icons2 row justify-content-center">
    <div className="col-6 col-sm-2 p-4 text-center">
        <img src="https://ssyoutube.com/img/platforms/windows.svg" alt="" width="150" height="150" />
    </div>
    <div className="col-6 col-sm-2 p-4 text-center">
        <img src="https://ssyoutube.com/img/platforms/apple.svg" alt="" width="150" height="150" / >
    </div>
    <div className="col-6 col-sm-2 p-4 text-center">
        <img src="https://ssyoutube.com/img/platforms/android.svg" alt="" width="150" height="150" />
    </div>
    <div className="col-6 col-sm-2 p-4 text-center">
        <img src="https://ssyoutube.com/img/platforms/linux.svg" alt="" width="150" height="150" />
    </div>
</div>
</div>


<footer className="footer">
    <div className="container text-center">
      <span className="footer-text">Copyright © 2023 | All Rights Reserved </span>
    </div>
  </footer>

    </>
  )
}

export default page

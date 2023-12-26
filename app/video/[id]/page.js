"use client"
import Relate from '@/app/Components/Relate'
import React, { useEffect, useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { download, related } from '@/app/apicalling/call';






const page1 = ({ params }) => {
  const [data, setdata] = useState({})
  const [content, setcontent] = useState();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )


  useEffect(() => {
    (async () => {
      const result = await download(params.id)
      setdata(result)
      const relatedvideos = await related(params.id)
      setcontent(relatedvideos)
    })()
  }, [])

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);



  return (
    <>

      <div className='nav2'>
        <div className='logo2'></div>
      </div>


      <section style={{ padding: "0px", marginTop: "20px" }} className="text-gray-600 body-font">

        {Object.values(data).length < 1 &&
          <div className='mainn'>
            <div className="clearfix">
              <div className="loader"></div>
              <div className="loader-text">loading...</div>
            </div>
          </div>
        }

        {Object.values(data).length > 1 && <>
          <Card style={matches ? { display: "flex", overflow: "visible", boxShadow: "none" } : {}} className='cardh' sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={data?.thumbnail[3]?.url || "https://designmodo.com/wp-content/uploads/2014/11/page-load.jpg"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.channelTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.title}
              </Typography>
              <p style={{ color: "blue" }}>{data.viewCount} views</p>
              <div >
                {data.formats?.map((e) => {
                  const arr = e.mimeType.split(";")
                  return <>
                    <div className=" w-full">
                      <div style={{ justifyContent: "space-between", fontSize: "12px" }} className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <span className="title-font font-medium">{arr[0]}</span> -
                        <span className="title-font font-medium">{e.qualityLabel}</span> -
                        <Button onClick={() => {
                          window.location.href = `${e.url}`
                        }} variant="outlined" startIcon={<FileDownloadIcon />}>
                          download
                        </Button>
                      </div>
                    </div>
                  </>
                })
                }
              </div>
            </CardContent>
          </Card>
        </>}

      </section>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center" }} >
        {content?.contents?.map((e) => {
          return <>
            <Relate key={Math.floor(Math.random() * 234)} e={e} />
          </>
        })}
      </div>
      <footer className="footer">
        <div className="container text-center">
          <span className="footer-text">Copyright © 2018 | All Rights Reserved</span>
        </div>
      </footer>
    </>
  )
}

export default page1


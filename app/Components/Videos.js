"use client"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Singlevid from './Singlevid'


const Videos = () => {
  const videosdata = useSelector((state) => state.Slice.data)

  return (
    <>
      {videosdata.map((a) => {
        const ankit = a.videos.map((e) => {
          return <>

            <Singlevid e={e} />
          </>
        })
        return ankit
      })}
    </>
  )
}

export default Videos
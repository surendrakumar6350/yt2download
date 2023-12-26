"use client"
import Link from 'next/link'
import React from 'react'



const Relate = ({e}) => {
  
return <>

<div style={{width: "300px", cursor: "pointer"}}  className="p-4 md:w-1/3">
  <Link href={e.video.videoId}>
        <div style={{ cursor: "pointer"}} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={e.video.thumbnails[1]?.url} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{e?.video.channelName}</h1>
            <p style={{color: "black"}} className="leading-relaxed mb-3">{e.video.title}</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{e.video.viewCountText}
              </a>
            </div>
          </div>
        </div>
        </Link>
      </div>
</>
 
}

export default Relate
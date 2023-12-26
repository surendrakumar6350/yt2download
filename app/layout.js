import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yt2download',
  description: 'yt2download download youtube video',
  keywords: 'download youtube videos, youtube, vercel, y2mate, ssyoutube, songs, download songs, youtube downloader',
  author: 'yt2download'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        <link href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' rel='stylesheet'></link>
      </head>
      <Providers>
        <body className={inter.className}>{children}</body>

      </Providers>
    </html>
  )
}

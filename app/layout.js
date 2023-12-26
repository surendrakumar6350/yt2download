import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yt2download - Download Youtube Videos for Free',
  description: 'Explore the ultimate online destination for seamless YouTube video downloads in high definition! Our website offers users a hassle-free experience, allowing them to effortlessly download their favorite YouTube videos for free, all while enjoying top-notch HD quality. Unlock a world of entertainment with our user-friendly platform, designed to make video downloads quick, easy, and accessible to everyone',
  keywords: 'yt2download vercel app, download youtube videos, youtube, youtube to mp4, y2mate, ssyoutube, yt to mp3, download songs, youtube downloader,youtube downloader online mp4',
  author: 'yt2download'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="hR4AqXBgSPLZPrEaweMphwTCyFFmUF7REfYj3dqi9b8" />
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

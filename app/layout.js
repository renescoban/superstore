import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Custom',
  description: 'Custom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from './store/ReduxProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sejal | Blog App',
  description: 'Blog App',
}

//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      
    <ReduxProvider>
    <html lang='en'>
    <body className=' bg-black'>
    <div className='main' >
        <div  className='gradient' />
    </div>
    <main className='app'>
        {children}
    </main>
    
    </body>
</html>
    </ReduxProvider>
  

  )
}

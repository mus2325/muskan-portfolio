import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = {title:'Muskan Saxena | Analytics & Product Portfolio',description:'Selected analytics, product, and accessibility projects by Muskan Saxena, NYU Tandon graduate student and Digital Accessibility Analyst at NYU IT.'}
export const viewport: Viewport = { colorScheme:'light',themeColor:'#fdfdfb' }
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}

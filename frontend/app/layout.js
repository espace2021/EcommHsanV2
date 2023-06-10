'use client';
import "./globals.css";
import { SessionProvider } from 'next-auth/react'


export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce application with filters',
}

export default function RootLayout({ children,session  }) {
  return (
    <html lang="en">
      <head /> 
      <body >
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}

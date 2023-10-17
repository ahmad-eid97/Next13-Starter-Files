//== Components
import { Navbar } from '@/components';
//== Meta data
import type { Metadata } from 'next'
//== Styles
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'IBook',
  description: 'IBook Landing Page',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

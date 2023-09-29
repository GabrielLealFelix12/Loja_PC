import '/app/globals.css'

export default function RootLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
      <html lang="pt-br">
        <body className='bg-indigo-400'>
          {children}
        </body>
      </html>
    </>
      )
    }
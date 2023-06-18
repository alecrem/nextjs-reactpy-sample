import './globals.css'
import { ChakraProvider } from '@/tools/chakra-client-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  )
}

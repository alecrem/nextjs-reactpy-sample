import { ChakraProvider } from '@/tools/chakra-client-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Next.js 13 + Chakra + react-py</title>
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}

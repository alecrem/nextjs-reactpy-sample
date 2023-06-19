import { ChakraProvider } from '@/tools/chakra-client-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <ChakraProvider>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  )
}

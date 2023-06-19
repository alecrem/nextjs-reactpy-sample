'use client'

import { Container, Heading, Box } from '@/tools/chakra-client-components'
import { PythonProvider } from 'react-py'

import Codeblock from '@/components/Codeblock'

export default function Home() {
  return (
    <PythonProvider>
      <Container mt="4em">
        <Heading>Next.js 13 + Chakra + react-py</Heading>
        <Box mt="2em">
          <Codeblock />
        </Box>
      </Container>
    </PythonProvider>
  )
}

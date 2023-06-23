'use client'

import { Container, Heading, Box, Link } from '@/tools/chakra-client-components'
import { PythonProvider } from 'react-py'

import Codeblock from '@/components/Codeblock'

export default function Home() {
  return (
    <PythonProvider>
      <Container mt="4em">
        <Heading>Next.js 13 + Chakra + react-py</Heading>
        <Box my="2em">
          <Codeblock />
        </Box>
        <hr />
        <Box>
          <Link href="https://qiita.com/alecrem/items/54b6d989f8ccf109efe1">
            記事を読む
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="https://github.com/alecrem/nextjs-reactpy-sample">
            View Repo
          </Link>
        </Box>
      </Container>
    </PythonProvider>
  )
}

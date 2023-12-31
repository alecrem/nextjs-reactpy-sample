'use client'

import { useState } from 'react'
import { usePython } from 'react-py'
import {
  Heading,
  Code,
  Textarea,
  Button,
  Tag,
} from '@/tools/chakra-client-components'

export default function Codeblock() {
  const [input, setInput] = useState('')

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

  return (
    <>
      {isLoading ? (
        <Tag colorScheme="blue">Loading Python environment...</Tag>
      ) : (
        <Tag colorScheme="green">Python environment ready</Tag>
      )}
      <Textarea
        mt={2}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your code here"
      />
      <Button
        mt={2}
        isDisabled={isLoading || isRunning}
        onClick={(e) => {
          e.preventDefault()
          runPython(input)
        }}
      >
        {!isRunning ? 'Run' : 'Running...'}
      </Button>
      {stdout && (
        <>
          <Heading as="h3" size="sm">
            Output
          </Heading>
          <Code>{stdout}</Code>
        </>
      )}
      {stderr && (
        <>
          <Heading as="h3" size="sm">
            Error
          </Heading>
          <Code>{stderr}</Code>
        </>
      )}
    </>
  )
}

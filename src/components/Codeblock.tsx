'use client'

import { useState } from 'react'
import { usePython } from 'react-py'

export default function Codeblock() {
  const [input, setInput] = useState('')

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

  return (
    <>
      {isLoading ? (
        <p>⏳ Loading Python environment...</p>
      ) : (
        <p>✅ Python environment ready</p>
      )}
      <textarea
        style={{
          marginTop: '1em',
          display: 'block',
          width: '100%',
          height: '200px',
          fontSize: 'max(16px, 1em)',
          padding: '0.25em 0.5em',
          border: '1px solid',
          borderRadius: '4px',
        }}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your code here"
      />
      <button
        style={{
          marginTop: '1em',
          display: 'block',
          border: 'none',
          padding: '.5em 1em',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '16px',
          borderRadius: '4px',
        }}
        disabled={isLoading || isRunning}
        onClick={(e) => {
          e.preventDefault()
          runPython(input)
        }}
      >
        {!isRunning ? 'Run' : 'Running...'}
      </button>
      {stdout && (
        <>
          <h3>Output</h3>
          <code>{stdout}</code>
        </>
      )}
      {stderr && (
        <>
          <h3>Error</h3>
          <code>{stderr}</code>
        </>
      )}
    </>
  )
}

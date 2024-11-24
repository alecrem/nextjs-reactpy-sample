'use client'

import { PythonProvider } from 'react-py'

import Codeblock from '@/components/Codeblock'

export default function Home() {
  return (
    <PythonProvider>
      <div
        style={{
          margin: '2em 1em',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }}
      >
        <h1>Next.js + react-py</h1>
        <div style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Codeblock />
        </div>
        <hr />
        <div>
          <a href="https://qiita.com/alecrem/items/54b6d989f8ccf109efe1">
            記事を読む
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://github.com/alecrem/nextjs-reactpy-sample">
            View Repo
          </a>
        </div>
      </div>
    </PythonProvider>
  )
}

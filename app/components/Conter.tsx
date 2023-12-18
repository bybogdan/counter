'use client'

import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const reset = () => setCount(0)

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Counter</h1>
      <p id="counter-value" className="text-2xl mb-4">
        Count: {count}
      </p>
      <div className="flex space-x-4">
        <button
          id="increment-btn"
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          id="reset-btn"
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

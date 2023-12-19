import { test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from '../../app/components/Conter'

test('Counter', () => {
  render(<Counter />)

  expect(screen.getByText('Count: 0')).toBeDefined()

  fireEvent.click(screen.getByText('Increment'))
  expect(screen.getByText('Count: 1')).toBeDefined()

  fireEvent.click(screen.getByText('Reset'))
  expect(screen.getByText('Count: 0')).toBeDefined()

  fireEvent.click(screen.getByText('Increment'))
  fireEvent.click(screen.getByText('Increment'))
  fireEvent.click(screen.getByText('Increment'))
  fireEvent.click(screen.getByText('Increment'))
  fireEvent.click(screen.getByText('Increment'))

  expect(screen.getByText('Count: 5')).toBeDefined()
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Hello World heading', () => {
    render(<App />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })

  it('renders welcome message', () => {
    render(<App />)
    expect(screen.getByText('Welcome to your React application.')).toBeInTheDocument()
  })
})

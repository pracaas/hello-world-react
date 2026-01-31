import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Hello Mint Julep World heading', () => {
    render(<App />)
    expect(screen.getByText('Hello Mint Julep World!')).toBeInTheDocument()
  })

  it('renders welcome message with creators', () => {
    render(<App />)
    expect(screen.getByText('Welcome to your React application, created by Claude and Prakash Poudel.')).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    render(<App />)
    const link = screen.getByText('View on GitHub')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/pracaas/hello-world-react')
  })
})

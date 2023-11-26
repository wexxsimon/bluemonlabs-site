import { type ReactElement, type ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href: string
  className?: string
  outline: boolean
  width: string
  dark: boolean
}

const Button = ({
  children,
  href,
  className = '',
  outline,
  width,
  dark
}: ButtonProps): ReactElement => {
  return (
    <Link
      href={href}
      className={`
    ${
      dark
        ? outline
          ? 'bg-transparent border-2 border-persian-blue-950  text-persian-blue-950'
          : 'border border-transparent border-persian-blue-950  bg-persian-blue-950 text-persian-blue-100 hover:bg-blue-700 disabled:opacity-50'
        : outline
          ? 'bg-transparent border-2 border-white-100  text-white-100'
          : 'border border-transparent bg-white-100 text-persian-blue-950 hover:bg-blue-700 disabled:opacity-50'
    } 
    font-acumin
    text-sm
    rounded-full
    max-w-[${width}] text-center py-2 px-6
    ${className}
    `}
    >
      {children}
    </Link>
  )
}

export default Button

import { type ReactElement, type ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href: string
  className?: string
  border: boolean
  width: string
}

const Button = ({
  children,
  href,
  className,
  border,
  width
}: ButtonProps): ReactElement => {
  return (
    <Link
      href={href}
      className={`
    ${
      border
        ? 'bg-transparent border-2 border-white-100  text-white-100'
        : 'border border-transparent bg-white-100 text-persian-blue-950 hover:bg-blue-700 disabled:opacity-50'
    } 
    block  font-acumin
    font-light text-sm
    rounded-full
    max-w-[${width}] text-center py-1.5 px-3 mt-8
    ${className}
    `}
    >
      {children}
    </Link>
  )
}

export default Button

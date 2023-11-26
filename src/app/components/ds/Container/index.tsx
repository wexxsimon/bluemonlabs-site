import React, { type ReactElement, type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  paddingX: boolean
  paddingY: boolean
  className?: string
  row: boolean
}

const Container = ({
  children,
  paddingX,
  paddingY,
  className = '',
  row
}: ContainerProps): ReactElement => {
  return (
    <section
      className={`
    flex flex-col md:flex-wrap justify-end
    ${row ? 'md:flex-row' : ''}
    ${paddingX ? 'px-6 md:px-12' : 'px-0'}
    ${paddingY ? 'pt-36 pb-36 md:pt-20 md:pb-2' : 'py-0'}
    ${className}
    `}
    >
      {children}
    </section>
  )
}
export default Container

import { AppProps } from 'next/app'
import { ReactNode } from 'react'

export interface IProps extends AppProps {
  children: ReactNode
}

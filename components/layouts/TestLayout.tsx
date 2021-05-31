import Link from 'next/link'
import Head from 'next/head'
import { IProps } from '../../interfaces/children.interface'

export default function Layout({ children, pageProps }: IProps) {
  return (
    <div>
      <Head>
        <title>{pageProps.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}

import Link from 'next/link'
export default () => {
    return (
      <div>
        <h2>This is index page</h2>
        <Link href="/">
      <a>index
          </a>
          </Link>
      <Link href="/about">
      <a>about
          </a>
          </Link>
      </div>
    )
  }
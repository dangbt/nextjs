import Link from 'next/link'

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/image">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
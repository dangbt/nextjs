import React from 'react'

class Footer extends React.Component {

  render() {
    const { stars } = this.props
    return <div>Hello World {stars}</div>
  }
}

Footer.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Footer
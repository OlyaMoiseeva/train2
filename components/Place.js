import Router from 'next/router'
import Link from 'next/link'

const handler = (to) => {
  Router.push({
    pathname: '/point',
    query: { to },
    as: process.env.BACKEND_URL + '/point'
  })
}

export default function Place(props) {
  return (
    <div>
      <span onClick={ () => handler(props.to.to) }>{props.to.title}</span>
      <div><Link href={{ pathname: '/', query: { to: props.to.to } }} as={ process.env.BACKEND_URL + '/point'}><a>{props.to.title}</a></Link></div>
      <div><Link href='/point' as={ process.env.BACKEND_URL + '/point'}><a>Point</a></Link></div>
    </div>
  )
}

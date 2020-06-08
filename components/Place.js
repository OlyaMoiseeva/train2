import Router from 'next/router'
import Link from 'next/link'

const handler = (to) => {
  Router.push({
    pathname: '/point',
    query: { to }
  })
}

export default function Place(props) {
  return (
    <div>
      <span onClick={ () => handler(props.to.to) }>{props.to.title}</span>
      <div><Link href={{ pathname: '/point', query: { to: props.to.to } }} as={ props.aas + '/point?to=' + props.to.to }><a>{props.to.title}</a></Link></div>
    </div>
  )
}

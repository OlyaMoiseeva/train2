import Router from 'next/router'

const handler = (to) => {
  Router.push({
    pathname: '/point',
    query: { to },
  })
}

export default function Place(props) {
  return (
    <div>
      <span onClick={ () => handler(props.to.to) }>{props.to.title}</span>
    </div>
  )
}

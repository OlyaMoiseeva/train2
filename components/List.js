import Place from './Place'

export default function List(props) {
  return (
      <main>
        <ul>
          {props.to.map(to => {
            return (
              <Place
                to={to}
                key={to.to}
                path={props.path}
              />
            )
          })}
        </ul>
      </main>
  )
}

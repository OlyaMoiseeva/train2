import useSWR from 'swr'
import Place from '../components/Place'

export default function Home() {

  const to = [
    {to: 'c41320', title: 'Павловск'},
    {to: 'c10885', title: 'Рощино'},
    {to: 'c969', title: 'Выборг'}
  ]

  return (
    <div className="container">
      <main>
        <ul>
          {to.map(to => {
            return (
              <Place
                to={to}
                key={to.to}
              />
            )
          })}
        </ul>
      </main>
    </div>
  )
}

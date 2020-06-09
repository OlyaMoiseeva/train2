import useSWR from 'swr'
import { useRouter } from 'next/router'

import Time from '../components/Time'
import Layout from '../components/layouts/layout'


const point = () => {

  const router = useRouter()
  const pid = router.query

  function fetcher() {
    return fetch('https://api.rasp.yandex.net/v3.0/search'
      + '?from=c2'
      + '&to=' + pid.to
      + '&format=json'
      + '&lang=ru_RU'
      + '&apikey=e98f8922-efd4-485f-a967-35e5072eccc5'
      + '&transport_types=suburban'
    )
    .then(data => data.json())
  }

  const { data, error } = useSWR(['rasp', pid], fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  

  return (
    <Layout>
      <span>{ data.search.from.title} -</span>
      <span> { data.search.to.title}</span>
      <ul>
        {data.segments.map(time => {
          return (
            <Time
              time={time}
              key={time.thread.uid}
            />
          )
        })}
      </ul>
    </Layout>

  )
}

export default point
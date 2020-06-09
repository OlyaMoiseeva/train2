import useSWR from 'swr'

import List from '../components/List'
import Layout from '../components/layouts/layout'

export default function Home() {

  const to = [
    {to: 'c41320', title: 'Павловск'},
    {to: 'c10885', title: 'Рощино'},
    {to: 'c969', title: 'Выборг'}
  ]
  const path = process.env.BACKEND_URL

  return (
    <Layout>
      <List
        to={to}
        path={path}
      />
    </Layout>
  )
}

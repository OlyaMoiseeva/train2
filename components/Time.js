export default function Time(props) {
  return (
    <li>
      <span>{props.time.departure} -</span>
      <span> {props.time.arrival}</span>
      <span> {props.time.thread.title}</span>
      <span> {props.time.thread.transport_subtype.title}</span>
      <span> {props.time.days}</span>
    </li>
  )
}
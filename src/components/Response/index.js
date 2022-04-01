import './index.css'

const Response = props => {
  const {certificationDetails} = props
  const {id, name} = certificationDetails

  return (
    <li className="response-container">
      <p className="id">
        {id}
        <span className="name">{name}</span>
      </p>
      <p className="note">View certification</p>
    </li>
  )
}
export default Response

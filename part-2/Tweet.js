const Tweet = (props) => {
  return (
    <div>
      <h2>{props.username}</h2>
      <div>
        <p>
          <b>{props.date}</b>
          <br />
          {props.message}
          <br />
          {props.name}
        </p>
      </div>
    </div>
  )
}
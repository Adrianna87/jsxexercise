const App = () => (
  <div>
    <Tweet
      name="Adrianna"
      username="Annairda"
      date={20210920}
      message="I'm learning React!"
    />
    <Tweet
      name="Adrianna"
      username="Annairda"
      date={20210920}
      message="This is my second tweet"
    />
    <Tweet
      name="Adrianna"
      username="Annairda"
      date={20210920}
      message="Third example"
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
const App = () => (
  <div>
    <Person
      name="Adrianna"
      age={34}
      hobbies={["programming", "board games", "wrestling"]}
    />
    <Person
      name="David"
      age={10}
      hobbies={["soccer", "karate", "reading"]}
    />
    <Person
      name="Agnes"
      age={94}
      hobbies={["knitting", "tea", "story telling"]}
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
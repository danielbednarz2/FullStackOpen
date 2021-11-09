
const Hello = (props) => {
  return (
      <div>
        <p>Hello {props.name} you are {props.age} years old</p>
      </div>
    )
  }

const App = () => {
  const name = "Daniel"
  const age = 29

  return (
    <div>
        <h1>Greetings</h1>
        <Hello name={name} age={age}/>
        <Hello name="Joe" age={age + 3}/>
        <Hello name="Bob" age={age*2}/>
    </div>
  );
}

export default App;

const Hello = ({ name, age }) => {
  // Destructure props object in argument ^^^ 
  /* 
  // Assigning props object
  const name = props.name
  const age = props.age

  // Destructuring props object inside component
  const { name, age } = props
  */

  // Component Helper Function
  const bornYear = () => new Date().getFullYear() - age 
    /* Long Way for Arrow Function
    { const yearNow = new Date().getFullYear()
      return yearNow - age }
    */

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;

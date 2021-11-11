const Total = ({parts}) => {
    let total = 0
    parts.map(part => total += part.exercises)
    return <p>total of {total} exercises</p>
  }

export default Total;
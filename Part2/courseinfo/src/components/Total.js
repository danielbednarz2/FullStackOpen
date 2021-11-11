const Total = ({parts}) => {
    const total = parts.reduce(((pre, cur) => pre + cur.exercises),0)
    return <p><b>total of {total} exercises</b></p>
  }

export default Total;
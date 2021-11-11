const Total = ({parts}) => {
    const total = parts.reduce(((pre, cur) => pre + cur.exercises),0)
    return <p>total of {total} exercises</p>
  }

export default Total;
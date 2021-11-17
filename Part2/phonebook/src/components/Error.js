
const Notification = ({ message }) => {
    const errorStyle = {
        color: 'green',
        background: 'lightgray',
        fontSize: 25,
        borderRadius: '5px',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '10px'
    }

    if (message === null) {
        return null
    }

    return (
        <div style={errorStyle}>
            {message}
        </div>
    )
}

export default Notification
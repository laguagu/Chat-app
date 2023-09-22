

function MessageItem( {message} ) {
    return(
        <div>
            <h3>{message.sender}</h3>
            <p>{message.text}</p>
        </div>
    )
}

export default MessageItem;
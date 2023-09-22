import { useEffect, useState } from "react"
import messageApi from "../api/messages"
import MessageItem from "../components/MessageItem";



export default function HomeComponent() {
    const[messages, setMessage] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await messageApi.fetchMessages();
            setMessage(data)
        }
        fetchData();
    }, [])

    
    return (
        <div>
          <h1>Messages</h1>
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
      );
    };
    

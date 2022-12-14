import {useEffect, useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";

const Messages = () => {

    const [messages, setMessages] = useState([])
    const [holder] = useState(0);

    // READ (GET)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read_messages`).then((response) => {
            setMessages(response.data)
        })
    }, [holder])

    console.log('message data is ', messages);

    const columns = [
        {
            field: 'first_name',
            headerName: 'Name',
            minWidth: 150,
            //valueGetter: (params) => params.row.details.first_name,
        },
        {
            field: 'email_address',
            headerName: 'Email',
            minWidth: 200,
            //valueGetter: (params) => params.row.details.email_address,
        },

        {
            field: 'subjects',
            headerName: 'Subject',
            minWidth: 200,
            //valueGetter: (params) => params.row.details.subjects,
        },

        {
            field: 'messagem',
            headerName: 'Message',
            minWidth: 500,
        },
    ]

    return (
        <div class= "messagesTable" style={{ height: '75vh' }}>
            <DataGrid
                columns={columns}
                rows={messages}
                getRowId={(r) => r.messagem}
            />
        </div>
        
    )
}

export default Messages;

import {useEffect, useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";

const Messages = () => {

    const [messages, setMessages] = useState([])

    // READ (GET)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read_messages`).then((response) => {
            setMessages(response.data)
        })
    }, [messages])

    console.log('message data is ', messages);

    const columns = [
        {
            field: 'first_name',
            headerName: 'Name',
            //valueGetter: (params) => params.row.details.first_name,
        },
        {
            field: 'email_address',
            headerName: 'Email',
            //valueGetter: (params) => params.row.details.email_address,
        },

        {
            field: 'subjects',
            headerName: 'Subject',
            //valueGetter: (params) => params.row.details.subjects,
        },

        {
            field: 'messagem',
            headerName: 'Message',
        },
    ]

    return (
        <div>
            <DataGrid
                columns={columns}
                rows={messages}
                getRowId={(r) => r.messagem}
            />
        </div>
    )
}

export default Messages;
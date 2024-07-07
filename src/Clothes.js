import { DeleteOutlineOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Clothes = (props) => {
    const deleteItem = props.deleteItem;
    const [item, setItem] = useState(props.item);

    // useEffect to update the state when props.item changes
    useEffect(() => {
        setItem(props.item);
    }, [props.item]);

    const deleteEventHandler = () => {
        deleteItem(item.title);
    }

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.userId}</td>
            <td>
                <IconButton onClick={deleteEventHandler} aria-label="Delete Todo">
                    <DeleteOutlineOutlined />
                </IconButton>
            </td>
        </tr>
    );
};

export default Clothes;
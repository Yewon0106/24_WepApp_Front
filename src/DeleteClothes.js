import { Button, Grid, TextField } from '@mui/material';
import React, {useState} from 'react';

const DeleteClothes = (props) => {
    const [title, setItem] = useState("");

    const deleteItem = props.deleteItem;

    const onInputChange = (e) => {
        setItem(e.target.value);
        //console.log(item);
    }

    const onButtonClick = () => {
        deleteItem(title);
        setItem("");
    }

    return (
        <Grid container style={{marginTop:20}}>
            <Grid item style={{margin: 20}}>
                title: 
                <TextField name="title" value={title} onChange={onInputChange} style={{marginLeft:20}}/>
                <Button onClick={onButtonClick} variant="contained" color="warning" style={{margin:10}}>
                    제품 삭제
                </Button>
            </Grid>

        </Grid>
    );
}

export default DeleteClothes;
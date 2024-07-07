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
        <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <Grid item xs={12} md={6} style={{ margin: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        
                        <TextField
                            name="title"
                            value={title}
                            onChange={onInputChange}
                            label="Title"
                            variant="outlined"
                            fullWidth
                            
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button onClick={onButtonClick} variant="contained" color="warning" style={{ margin: 10 }}>
                            제품 삭제
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DeleteClothes;
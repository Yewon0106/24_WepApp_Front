import { Button, Container, Grid, TextField } from '@mui/material';
import React, {useState} from 'react';

const AddClothes = (props) => {
    const [item, setItem] = useState({
        title: "",
        category: "",
        price:"",
        userId:"",
    });
    const addItem = props.addItem;

    const onButtonClick= () => {
        addItem(item);
        setItem({
            title:"",
            category:"",
            price:"",
            userId:""
        });
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
        console.log(item);
    }

    return (
        <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <Grid item xs={12} md={6} style={{ margin: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        
                        <TextField
                            name="title"
                            value={item.title}
                            onChange={onInputChange}
                            label="Title"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="category"
                            value={item.category}
                            onChange={onInputChange}
                            label="Category"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="price"
                            value={item.price}
                            onChange={onInputChange}
                            label="Price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="userId"
                            value={item.userId}
                            onChange={onInputChange}
                            label="User ID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button onClick={onButtonClick} variant="contained" color="warning" style={{ margin: 10 }}>
                            제품 추가
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AddClothes;
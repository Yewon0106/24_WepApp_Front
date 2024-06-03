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
        <Grid container style={{marginTop:20}}>
            <Grid xs={12} md={12} item style={{margin: 20}}>
                <Grid xs={6} md={6} item>
                    title:
                </Grid>
                <Grid xs={6} md={6} item>
                    <TextField name="title" value={item.title} onChange={onInputChange}/>
                </Grid>
                <Grid xs={6} md={6} item>
                    category:
                </Grid>
                <Grid xs={6} md={6} item>
                    <TextField name="category" value={item.category} onChange={onInputChange}/>
                </Grid>
                <Grid xs={6} md={6} item>
                    price:
                </Grid>
                <Grid xs={6} md={6} item>
                    <TextField name="price" value={item.price} onChange={onInputChange}/>
                </Grid>
                <Grid xs={6} md={6} item>
                    userId:
                </Grid>
                <Grid xs={6} md={6} item>
                    <TextField name="userId" value={item.userId} onChange={onInputChange}/>
                </Grid>
            </Grid>
            <Grid xs={12} md={12} item style={{margin: 20}}>
                <Button onClick={onButtonClick} variant="contained" color="warning">
                    제품 추가
                </Button>
            </Grid>

        </Grid>
    );
}

export default AddClothes;
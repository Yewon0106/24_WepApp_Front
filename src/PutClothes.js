import React, {useState} from 'react';
import { Button, Grid, TextField } from '@mui/material';

const PutClothes = (props) => {
    const [title, setTitle] = useState("");
    const [item, setItem] = useState(
        {
        title: "",
        category: "",
        price: "",
        userId: ""
    }
    );

    const updateItem = props.updateItem;
    const searchItem = props.searchItem;
    const [clothes, setClothes] = useState(props.item);

    const onButtonClick= () => {
        updateItem(item);

        setClothes({...clothes})
            
        setItem({
            title:"",
            category:"",
            price:"",
            userId:""
        });
    }


    const onSearchClick = () => {
        if (searchItem) {
            searchItem(title)
                .then(response => {
                    if (response.length > 0) {
                        setItem(response[0]); // Assuming the response is an array of items and we take the first match
                    } else {
                        alert("No item found with the given title.");
                    }
                })
                .catch(err => {
                    console.error("Error searching item:", err);
                    alert("Error searching item.");
                });
        } else {
            alert("searchItem function is not provided.");
        }
    }

    const onInputChange = (e) => {
        setTitle(e.target.value);
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
                    <Grid item xs={12} container justifyContent="space-between">
                        <Button onClick={onSearchClick} variant="contained" color="warning" style={{ margin: 10 }}>
                            제품 검색
                        </Button>
                        <Button onClick={onButtonClick} variant="contained" color="warning" style={{ margin: 10 }}>
                            제품 수정
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default PutClothes;



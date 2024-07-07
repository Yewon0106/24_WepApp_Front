import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const SearchClothes = (props) => {
    const [title, setTitle] = useState("");
    const [item, setItem] = useState({
        title: "",
        category: "",
        price: "",
        userId: ""
    });

    const searchItem = props.searchItem;

    const onInputChange = (e) => {
        setTitle(e.target.value);
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

    return (
        <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <Grid item xs={12} md={6} style={{ margin: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="title"
                            value={title}
                            onChange={onInputChange}
                            label="Search Title"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="category"
                            value={item.category}
                            label="Category"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="price"
                            value={item.price}
                            label="Price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        
                        <TextField
                            name="userId"
                            value={item.userId}
                            label="User ID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={onSearchClick} variant="contained" color="warning">
                            제품 검색
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SearchClothes; 
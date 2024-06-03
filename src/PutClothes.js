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
        <Grid container style={{ marginTop: 20 }}>
            <Grid item xs={6} md={6} style={{ margin: 20 }}>
                <Grid item xs={12}>
                    title:
                    <TextField name="title" value={item.title} onChange={onInputChange} style={{marginLeft:20}}></TextField>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    category:
                    <TextField name="category" value={item.category} onChange={onInputChange} style={{marginLeft:20}}/>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    price:
                    <TextField name="price" value={item.price} onChange={onInputChange} style={{marginLeft:20}}/>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    userId:
                    <TextField name="userId" value={item.userId} onChange={onInputChange} style={{marginLeft:20}}/>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={onSearchClick} variant="contained" color="warning" style={{margin:10}}>
                        제품 검색
                    </Button>
                    <Button onClick={onButtonClick} variant="contained" color="warning" style={{margin:10}}>
                        제품 수정
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default PutClothes;



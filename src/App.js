//import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Clothes from './Clothes';
import AddClothes from './AddClothes';
import SearchClothes from './SearchClothes';
import PutClothes from './PutClothes';
import DeleteClothes from './DeleteClothes';
import { Container, Grid, Button, AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';
import { call, signout } from './ApiService';
import CardClothes from './CardClothes';




function App() {
  //const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [editItems, setEditItems] = useState([]);
  const [value, setValue] = useState(0);


  useEffect(() => {
    call("/item", "GET", null)
      .then((response) => {
        setAllItems(response.data);
      });
  }, []);

  useEffect(() => {
    console.log("All items updated:", allItems);
  }, [allItems]);

  const addItem = (item) => {
    call("/item", "POST", item)
      .then((response) => {
        setAllItems(response.data);
      });
  };

  const deleteItem = (title) => {
    const item = allItems.find(i => i.title === title);
    call("/item", "DELETE", item)
      .then((response) => {
        setAllItems(response.data);
      });
  };

  const updateItem = (item) => {
    call("/item", "PUT", item)
      .then((response) => {
        setAllItems(response.data); // 상태 업데이트
      });
    
  };

  const searchItem = (title) => {
    return call("/item/search", "POST", { title })
      .then((response) => {
        setSearchedItems(response.data);
        return response.data;
      });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let ClothesItems = 
      allItems.length > 0 &&(
    <Grid container justifyContent="center" style={{ marginTop: 20 }}>
      <Grid item xs={12} md={10}>
        <table border={"1"} style={{ width: '100%', marginBottom: 20 }}>
          <caption style={{ marginBottom: 10 }}>
            Clothes item table
            <br/>
          </caption>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>category</th>
              <th>price</th>
              <th>userId</th>
              <th>삭제 버튼</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item)=><Clothes item={item} deleteItem={deleteItem} key={item.id}/>)}
          </tbody>
        </table>
      </Grid>
    </Grid>
  )

  let CardClothesItems = allItems.length > 0 && (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {allItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <CardClothes item={item} />
        </Grid>
      ))}
    </Grid>
  );



    let navigationBar = (
      <AppBar position="static" color="warning">
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant="h6">웹프로그래밍응용</Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" raised onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );


  return (
    <div className="App">
      {navigationBar}
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={12}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Tabs value={value} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary">
                <Tab label="Add Clothes" />
                <Tab label="Search Clothes" />
                <Tab label="Update Clothes" />
                <Tab label="Delete Clothes" />
              </Tabs>
            </Box>
            {value === 0 && <AddClothes addItem={addItem} />}
            {value === 1 && <SearchClothes searchItem={searchItem} />}
            {value === 2 && <PutClothes searchItem={searchItem} updateItem={updateItem} />}
            {value === 3 && <DeleteClothes deleteItem={deleteItem} />}
          </Grid>
        </Grid>
        <div className="ClothesList">{ClothesItems}</div>
        <div className="CardClothesList">{CardClothesItems}</div>
      </Container>
    </div>
  );
}

export default App;

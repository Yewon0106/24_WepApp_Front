import { useState, useEffect } from 'react';
import './App.css';
import Clothes from './Clothes';
import AddClothes from './AddClothes';
import SearchClothes from './SearchClothes';
import PutClothes from './PutClothes';
import DeleteClothes from './DeleteClothes';
import { Container, Grid } from '@mui/material';
import { call } from './ApiService';

function App() {
  //const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [editItems, setEditItems] = useState([]);


  useEffect(() => {
    call("/item", "GET", null)
      .then((response) => {
        setAllItems(response.data);
      });
  }, []);

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
      .then((response)=> {
        //setAllItems(response.data);
        setAllItems(response.data);
        
      });
    //window.location.reload();
    
  };

  const searchItem = (title) => {
    return call("/item/search", "POST", { title })
      .then((response) => {
        setSearchedItems(response.data);
        return response.data;
      });
  }

  let ClothesItems = 
      allItems.length > 0 &&(
    <table border={"1"}>
      <caption style={{marginBottom:10}}>
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
        {/*items.map((item)=><Clothes item={item} key={item.id}/>)*/}
        {allItems.map((item)=><Clothes item={item} deleteItem={deleteItem} key={item.id}/>)}
        {/*editItems.map((item)=><Clothes item={item} deleteItem={deleteItem} key={item.id}/>)*/}
      </tbody>
    </table>
    )
  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container justifyContent="center">
        <Grid item xs={12} md={12}>
          <div className="ClothesList">{ClothesItems}</div>
        
      
          <AddClothes addItem={addItem}/>
          <SearchClothes searchItem={searchItem}/>
          <PutClothes searchItem={searchItem} updateItem={updateItem} />
          <DeleteClothes deleteItem={deleteItem}/>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardClothes = (props) => {
    const { item } = props;

    return (
        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.category}
        </Typography>
        <Typography variant="h5" component="div">
            {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Price: ${item.price}
        </Typography>
        <Typography variant="body2">
            User ID: {item.userId}
        </Typography>
        </CardContent>
        
        </Card>
    );
};

export default CardClothes;
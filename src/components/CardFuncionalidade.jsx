import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';

export default function CardFuncionalidade({ img, header, url }) {
    return (
        <Card sx={{ width: '45%', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <CardActionArea>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar sx={{ width: '100px', height: '100px', marginBottom: '10px' }} src={img} variant="square" />
                    <Typography variant="h5" component="div">
                        {header}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={url} variant='contained'>
                    Acessar
                </Button>
            </CardActions>
        </Card>
    );
}

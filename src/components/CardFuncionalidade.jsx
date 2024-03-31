import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';

export default function CardFuncionalidade({img, header, url}) {
  return (
    <Card sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-around' }}>
      <CardActionArea >
        
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}  >
            <Avatar sx={{width: '50%', height: '50%'}} src={img}  variant="square"/>
        </CardContent>

        <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}  >
            <Typography  variant="h5" component="div">
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
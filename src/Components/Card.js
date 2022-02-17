import * as React from 'react';
import { styled, red, Typography, ThemeProvider, IconButton, createTheme, Avatar, Collapse, CardActions, CardContent, Card, CardMedia, CardHeader, Grid } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import products from '../data/products';
import Logo from '../img/logopinky.png'


console.log(products)
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const darkTheme = createTheme({
    typography: {
      poster: {
        fontSize: 40,
        inlineSpacing: 2,
        fontFamily: ['Mea Culpa', 'cursive'].join(','),
        color: '#F99B9B',
      },
      par: {
        fontSize: 20,
        inlineSpacing: 2,
        fontFamily: ['Mea Culpa', 'cursive'].join(','),
        color: '#F99B9B',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#F96488',
      },
    },
  });
  return (
    <>
        <Grid sx={{padding: 0, margin: 5}}>
            {
                products.map((product) => (
                    <Grid 
                    // sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    
                    lg={10} md={8} xs={12}>
                        <ThemeProvider theme={darkTheme}>
                            <Card sx={{padding: 0}}
                            >
                            <Typography variant='poster'>
                                {product.name}
                            </Typography>                              
                            <CardHeader
                                avatar={
                                <Avatar sx={{width: 50, height: 70, }} src={Logo} alt="product" aria-label="recipe"/>
                                }
                                variant='poster' title={product.name}
                                subheader={`R ${product.price}`}
                            >
                            </CardHeader>
                            <Card xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 150, }}
                                    image={product.image}
                                    alt={product.alt}
                                />                     
                            </Card>
                            <CardActions disableSpacing>
                                <IconButton aria-label="share">
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography variant='poster' paragraph>Method:</Typography>
                                <Typography paragraph>{product.desc}
                                </Typography>        
                                </CardContent>
                            </Collapse>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                ))
            }
        </Grid>
    </>
  );
}

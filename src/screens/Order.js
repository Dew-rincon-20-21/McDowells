import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, List, ListItem, Typography, } from '@material-ui/core';

import React, { useContext, useEffect, useState } from 'react'
import { listCategories, listProducts } from '../actions';
import Logo from '../components/Logo';
import { CURRENCY_SYMBOL } from '../constants';
import { Store } from '../Store';
import { useStyles } from '../styles'

export default function Order() {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { categories } = state.categoryList;
    const { products } = state.productList;
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        if (!categories.length) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }
    }, [dispatch, categoryName, categories])



    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    }


    return (
        <Box className={styles.root}>
            <Box className={styles.main}>
                <Grid container>
                    <Grid item md={2}>
                        <List>
                            <ListItem onClick={() => categoryClickHandler("")} button>
                                <Logo ></Logo>
                            </ListItem>
                            {categories.map((category) => (
                                <ListItem key={category.name} onClick={() => categoryClickHandler(category.name)}>
                                    <Avatar alt={category.name} src={category.img} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item md={10}>
                        <Typography gutterBottom className={styles.title} variant="h2" component="h2">
                            {categoryName || "Bienvenido"}
                        </Typography>
                        <Grid container spacing={1}>
                            {products.map((product) => (
                                <Grid item md={6}>
                                    <Card>
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                image={product.image}
                                                className={styles.media}>
                                            </CardMedia>
                                        </CardActionArea>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="body2"
                                                color="textPrimary"
                                                component="p" >
                                                {product.name}
                                            </Typography>
                                            < Box>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p">
                                                    {product.price} {CURRENCY_SYMBOL}

                                                </Typography>
                                            </Box>
                                            <Container >
                                                <Button variant="outlined" color="secondary" size="small">
                                                    - </Button>
                                                <Typography

                                                    variant="body1"
                                                    color="textPrimary"
                                                    component="span" >0
                                                </Typography>
                                                <Button variant="outlined" color="secondary" size="small" spacing="mx">
                                                    + </Button>
                                            </Container>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

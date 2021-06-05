import {Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Dialog, DialogTitle, Grid, List, ListItem, TextField, Typography, } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import React, { useContext, useEffect, useState } from 'react'
import { listCategories, listProducts, removeFromOrder, addToOrder } from '../actions';
import Logo from '../components/Logo';
import { CURRENCY_SYMBOL } from '../constants';
import { Store } from '../Store';
import { useStyles } from '../styles'

export default function Order(props) {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { categories } = state.categoryList;
    const { products } = state.productList;
    const {
        items,
        itemsCount,
        totalPrice,
    } = state.order;

    const [categoryName, setCategoryName] = useState('')
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({});

    const closeHandler = () => {
        setIsOpen(false);
    };

    const productClickHandler = (p) => {
        setProduct(p);
        setIsOpen(true);
    };

    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    }

    const addToOrderHandler = () => {
        addToOrder(dispatch, { ...product, quantity });
        setIsOpen(false);
    };
    const cancelOrRemoveFromOrder = () => {
        removeFromOrder(dispatch, product);
        setIsOpen(false);
    };
    const previewOrderHandler = () => {
        props.history.push("/review");
    };


    useEffect(() => {
        if (!categories.length) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }
    }, [dispatch, categoryName, categories])

    console.log(items);
    return (
        <Box className={styles.root}>
            <Box className={styles.main}>
                <Dialog
                    onClose={closeHandler}
                    aria-labelledby="max-width-dialog-title"
                    open={isOpen}
                    fullWidth={true}
                    maxWidth="sm">

                    <DialogTitle className={styles.center}>
                        Añadir {product.name}
                        <Card>
                            <CardMedia
                                component="img"
                                alt={product.name}
                                image={product.image}
                                className={styles.media}>
                            </CardMedia>
                        </Card>
                    </DialogTitle>

                    <Box className={[styles.row, styles.center]}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={quantity === 1}
                            onClick={(e) =>  setQuantity(quantity - 1)}                        >
                            <RemoveIcon />
                        </Button>
                        <TextField
                            inputProps={{ className: styles.largeInput }}
                            InputProps={{
                                bar: true,
                                inputProps: {
                                    className: styles.largeInput,
                                },
                            }}
                            className={styles.largeNumber}
                            variant="filled"
                            min={1}
                            value={quantity} />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => setQuantity(quantity + 1)}                        >
                            <AddIcon />
                        </Button>
                    </Box>
                    <Box className={[styles.row, styles.around]}>
                        <Button
                            onClick={cancelOrRemoveFromOrder}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={styles.largeButton}                        >
                            {items.find((x) => x.name === product.name)
                                ? 'Remove From Order'
                                : 'Cancel'}
                        </Button>

                        <Button
                            onClick={addToOrderHandler}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={styles.largeButton}                        >
                            ADD To Order
                        </Button>
                    </Box>
                </Dialog>


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
                                        <CardActionArea onClick={() => productClickHandler(product)} >
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
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Box  className = {[styles.center, styles.footOrder, styles.footer]}>
                    Productos pedidos: {itemsCount} / Precio del pedido: {totalPrice} {CURRENCY_SYMBOL}
                    <Button 
                            onClick={previewOrderHandler}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={styles.largeButton}                        >
                            Finalizar Pedido
                        </Button>
                </Box>
            </Box>
        </Box >

    )
}

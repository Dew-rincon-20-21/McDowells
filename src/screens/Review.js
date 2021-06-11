import React, { useContext } from 'react'
import { Avatar, Box, Button, Grid, List, ListItem, Divider, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { CURRENCY_SYMBOL } from '../constants';




export default function Review(props) {
    const styles = useStyles();
    const { state, /*dispatch*/ } = useContext(Store);

    const {
        items,
        itemsCount,
        totalPrice,
    } = state.order;
    console.log(items);
    const ReturnToOrderHandler = () => {
        props.history.push("/order");
    };
    return (
        <Box className={styles.root}>
            <Box className={[styles.main]}>
                <Grid container spacing={12}>
                    <Grid item md={2} justify="center" alignItems="center" alignContent="center">
                        <Logo ></Logo>
                    </Grid>
                    <Grid item md={10} justify="center" alignItems="center" alignContent="center">
                        <Typography gutterBottom className={[styles.title, styles.center]} variant="h2" component="h2">
                            Resumen del pedido
                    </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <List style={{ maxHeight: '100%', overflow: 'auto' }} >
                    {items.map((element) => (

                        <ListItem key={element.name} >
                            <Avatar alt={element.name} src={element.image} />
                            <ListItemText className={[styles.ReviewTitle]} primary={element.name} secondary={"Precio: " + element.price.toFixed(2) + "   " + CURRENCY_SYMBOL + " / Cantidad: " + element.quantity} />
                            <ListItemText secondary={"Subtotal: " + (element.price * element.quantity).toFixed(2) + " " + CURRENCY_SYMBOL} />
                        </ListItem>
                    ))}
                    <Divider/>
                    number ()
                    <ListItem key="total" className={styles.right}>
                        <Typography gutterBottom
                        variant="subtitle1"
                        color="textPrimary"
                        component="p">
                        Precio total del pedido: {totalPrice.toFixed(2)} {CURRENCY_SYMBOL}
                        </Typography>
                    </ListItem>
                </List>


                <Box className={[styles.center, styles.footOrder]}>
                    Productos en el pedido: {itemsCount} / Precio del pedido: {totalPrice.toFixed(2)} {CURRENCY_SYMBOL}
                </Box>

                <Button
                    onClick={ReturnToOrderHandler}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={styles.largeButton}                        >
                    Volver al Menú
                </Button>
            </Box>
        </Box >
    )
}
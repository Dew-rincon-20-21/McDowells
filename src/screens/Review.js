import React, { useContext } from 'react'
import { Box, Button, Card, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { CURRENCY_SYMBOL } from '../constants';



export default function Review(props) {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);

    const {
        items,
        itemsCount,
        totalPrice,
    } = state.order;
    const ReturnToOrderHandler = () => {
        props.history.push("/order");
    };
    return (
        <Box className={styles.root}>
            <Box className={styles.main}>
                <Card>
                    <Box md={2}>
                    </Box>
                    <Typography component="h4" variant="h4">
                        Resumen del pedido:
                    </Typography>
                    <Box className = {[styles.center, styles.footOrder]}>
                    Productos en el pedido: {itemsCount} / Precio del pedido: {totalPrice} {CURRENCY_SYMBOL}
                </Box>
                <Button
                            onClick={ReturnToOrderHandler}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={styles.largeButton}                        >
                            Volver al Menú
                </Button>

                </Card>
            </Box>
        </Box >
    )
}
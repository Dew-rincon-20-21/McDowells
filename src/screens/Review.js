import React from 'react'
import { Box, Card, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';


export default function Review(props) {
    const styles = useStyles();
    return (
        <Card>
            <Box md={2}>
                        <Logo >
                        </Logo>             
            </Box>
                    <Typography component="h1" variant="h1">
                        Resumen del pedido:
                    </Typography>
                    
               

        </Card>

    )
}

import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';


export default function Home(props) {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea onClick={() => props.history.push("/order")}>
                <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Logo >

                        </Logo>
                        <Typography component="h1" variant="h1">
                            Haz tu pedido aquí.
                    </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>

                </Box>
            </CardActionArea>
        </Card>
    )
}

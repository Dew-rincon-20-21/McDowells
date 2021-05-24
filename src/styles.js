import { makeStyles, rgbToHex } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    red: {
        backgroundColor: "#c9321a",
        color: "#ffffff"
    },
    green: {
        backgroundColor: "#70de6d",
    },
    main: {
        flex: 1,
        overflow: "auto",
        flexDirection: "column",
        display: 'flex',
        color: "#ffffff"
    },
    center: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    largeLogo: {
        height: 100,
    },
}));
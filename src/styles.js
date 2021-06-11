import { makeStyles } from "@material-ui/core";


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
    right: {
        display: 'flex',
        justifyContent: "right",
        alignItems: "right",
        textAlign: "right",
    },
    largeLogo: {
        height: 100,
    },
    card: { margin: 10 },
    media: { width: 200 },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
    },
    footOrder: {
        color: "red",
        backgroundColor: "#bbbbbb",
        borderWidth: 2,
        borderRadius: 10,
        fontWeight: "bold",
    },
    footer: {
        position: "fixed",
        bottom: 0,
    },
    ReviewTitle: {
        color: "black",
        fontWeight: "bold",
    },
    row: {
        display:"flex",
        padding:10,
        justifyContent:"space-around",
    },
}));
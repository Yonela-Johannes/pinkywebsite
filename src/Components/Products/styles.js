import { makeStyles } from '@mui/styles';

export default makeStyles (() => ({
    root: {
        maxWidth: '100%',
    }, 
    media: {
        height: 0,
        paddingTop: '40%',
        padding: 5,
        margin: 10,
        borderRadius: 15,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name : {
        padding: 5,
        borderRadius: 15,
    }
}));
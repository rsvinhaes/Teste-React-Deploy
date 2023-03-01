import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerProduct: {
        width: theme.spacing(32),
        height: theme.spacing(38),
        margin: '10px',
        borderRadius: '8px'
    },

    product: {
        height: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between'
    },

    img: {
        height: theme.spacing(25),
    },

    cardContent: {
        padding: 0,
    },

    title: {
        fontFamily: 'Public Sans',
        fontWeight: 500,
        fontSize: '14px',
        color: '#191919',
    },
    value: {

        fontFamily: 'Public Sans',
        fontWeight: 600,
        fontSize: '20px',
        color: '#D10070',

    },

}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerDetailProduct: {
        width: theme.spacing(150),
        height: theme.spacing(45),
        backgroundColor: '#FCFCFC',
        borderRadius: '6px'
    },

    detailProduct: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    detailImg: {
        height: theme.spacing(45),
        width: theme.spacing(45),
        padding: '15px',
    },

    cardDetailContent: {
        padding: 0,
    },

    detailProductData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },

    detailTitle: {
        fontFamily: 'Public Sans',
        fontWeight: 600,
        fontSize: '20px',
        color: '#383842',
    },

    detailMarket: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#858585'
    },

    detailValue: {
        fontWeight: 700,
        fontSize: '30px',
        color: '#D10070',
    },

    detailQuantidade: {
        backgroundColor: '#F4F4F4'
    },

    detailTextDescription: {
        fontSize: '20px',
        fontWeight: 600,
        color: '#383842'
    },

    detailDescription: {
        fontSize: '16px',
        fontWeight: 400,
        color: '##191919'
    },

    containerDetailDescription: {
        width: theme.spacing(150),
        height: theme.spacing(16),
        backgroundColor: '#FCFCFC',
        borderRadius: '6px'
    },

    detailProductDescription: {
        height: '100%',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    containerOtherProducts: {
        width: theme.spacing(150),
        height: theme.spacing(35),
        backgroundColor: '#FCFCFC',
        borderRadius: '6px',
    },

    detailOtherProduct: {
        height: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

}));

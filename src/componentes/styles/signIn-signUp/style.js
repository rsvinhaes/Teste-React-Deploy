import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    typoh3: {
        fontSize: theme.spacing(2.8),
        fontWeight: 700,
        color: '#252531',
        paddingTop: '6px',
    },

    typoh4: {
        fontWeight: 600,
        fontSize: theme.spacing(2.3),
        color: '#383842',
        paddingTop: '24px',

    },

    typoh5: {
        color: '#191919',
        padding: theme.spacing(1, 1),
        fontSize: theme.spacing(1.6),
        fontWeight: 400
    },

    typoh6: {
        color: '#191919',
        padding: '16px 35px 0',
        fontSize: theme.spacing(1.6),
        fontWeight: 400
    },

    container: {
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#F4F4F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        width: theme.spacing(56),
        minHeight: '90%',
        padding: theme.spacing(3, 4),
        backgroundColor: '#FCFCFC',
    },

    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatar: {
        backgroundColor: '#FCFCFC',
        padding: theme.spacing(1),
        width: theme.spacing(6),
        height: theme.spacing(7.2)
    },

    form: {
        width: '100%',
    },

    label: {
        fontWeight: 'bold',
        color: '#383842',
        fontSize: theme.spacing(2),
        paddingLeft: theme.spacing(0.5),
        paddingTop: theme.spacing(2),
    },

    text: {
        backgroundColor: ' #F8F8F8',
    },

    submit: {
        width: theme.spacing(14),
        height: theme.spacing(6),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2.5, 2),
        borderRadius: '30px',
        backgroundColor: '#B7005C',
        color: "#F3F3F3",
    },
}));
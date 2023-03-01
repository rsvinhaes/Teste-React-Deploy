import { Box, InputLabel } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Logo from '../../assets/logo.svg';
import { useStyles } from '../../componentes/styles/signIn-signUp/style';
import '../../index.css';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';




export default function SignUp() {
    const navigate = useNavigate()
    const classes = useStyles();
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    //     const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!email || !senha || !nome || !confirmaSenha) {
                return
            }

            if (senha !== confirmaSenha) {
                return
            }

            const response = await api.post('/usuarios', {
                nome,
                email,
                senha

            });

            if (response) {
                navigate('/SignIn');
            }
        } catch (error) {

            return
        }
    }


    return (
        <div className={classes.container}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={classes.box} >
                    <div className={classes.paper}>
                        <Avatar
                            className={classes.avatar}
                            src={Logo}
                            variant='rounded'
                        >
                        </Avatar>
                        <Typography variant="h3" className={classes.typoh3}>
                            Market Cubos
                        </Typography>
                        <Typography variant="h4" className={classes.typoh4}>
                            Cadastre-se
                        </Typography>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label}
                                        children='Nome'
                                        shrink htmlFor="nome"
                                    />
                                    <TextField className={classes.text}
                                        autoComplete="name"
                                        name="nome"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="nome"
                                        autoFocus
                                        size='small'
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label}
                                        children='E-mail'
                                        shrink htmlFor="email"
                                    />

                                    <TextField className={classes.text}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        size='small'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label}
                                        children='Senha'
                                        shrink htmlFor="senha"
                                    />

                                    <TextField className={classes.text}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="senha"
                                        name="senha"
                                        type="password"
                                        autoComplete="senha"
                                        size='small'
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label}
                                        children='Confirme sua senha'
                                        shrink htmlFor="senha"
                                    />

                                    <TextField className={classes.text}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="confirmaSenha"
                                        type="password"
                                        id="confirmaSenha"
                                        autoComplete="confirmaSenha"
                                        size='small'
                                        value={confirmaSenha}
                                        onChange={(e) => setConfirmaSenha(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Typography variant="h6" className={classes.typoh6} align='center'>
                                Ao criar uma conta, você concorda com a nossa
                                {' '}<Link>
                                    Política de Privacidade
                                </Link>{' '}
                                e
                                {' '}<Link>Termos de serviço</Link>
                            </Typography>

                            <Grid container justifyContent="center">

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}

                                >
                                    Criar Conta
                                </Button>
                            </Grid>

                            <Typography variant='h6' align='center'>
                                Já tem uma conta?
                                {' '}<Link href="#" variant="h6">
                                    Fazer login
                                </Link>
                            </Typography>

                        </form>
                    </div>
                </Box>
            </Container >
        </div>
    );
}
import './styles.css'
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../assets/logo.svg'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../componentes/styles/signIn-signUp/style'
import Container from '@material-ui/core/Container';
import { Box, InputLabel } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../../services/api';
import useGlobalContext from '../../hooks/useGlobalContext'


export default function SignIn() {

  const { token, setToken, setUser } = useGlobalContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const classes = useStyles();
  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (!email || !senha) {
        return
      }

      const response = await api.post('/login', {
        email,
        senha
      });

      const { token, dadosUsuario } = response.data
      setToken(token)
      setUser(dadosUsuario)

      navigate('/Main')
      setEmail('')
      setSenha('')


    } catch (error) {
      const erro = error.response.data.mensagem
      return alert(erro)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/Main')
    }
  }, [])


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
            />

            <Typography variant="h3" className={classes.typoh3} >
              Market Cubos
            </Typography>

            <Typography variant="h4" className={classes.typoh4} >
              Boas-vindas!
            </Typography>

            <Typography variant="h5" className={classes.typoh5} >
              Use seu e-mail e senha para acessar a conta
            </Typography>

            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
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
                    autoComplete="email"
                    autoFocus
                    placeholder='exemplo@email.com'
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
                    placeholder='insira sua senha'
                    size='small'
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </Grid>

              </Grid>
              <Grid container justifyContent="center">

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Fazer Login
                </Button>
              </Grid>
              <Typography variant='h6' align='center'>
                Não possui conta?
                {' '}<Link href="#" variant="h6">
                  Cadastrar
                </Link>
              </Typography>
            </form>
          </div>
        </Box>
      </Container>
    </div>
  );
}



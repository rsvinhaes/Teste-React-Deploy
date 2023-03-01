import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Header from '../../componentes/Header/index';
import useGlobalContext from '../../hooks/useGlobalContext';
import { formatMoney } from '../../utils/formaters';
import { useStyles } from './style';
import './style.css';
import './style.js';
import IconButton from '@material-ui/core/IconButton';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PixIcon from '@mui/icons-material/PixOutlined';
import TextField from '@material-ui/core/TextField';
import CarrinhoIcon from '@material-ui/icons/LocalGroceryStore';


import Button from '@material-ui/core/Button';



function ProductDetail() {
    const classes = useStyles();
    const { detailProduct } = useGlobalContext()


    return (
        <>
            <Header />
            <div className='containerDetailProduct'>
                <Card className={classes.containerDetailProduct}>
                    <CardActionArea className={classes.detailProduct} >
                        <div>
                            <CardMedia className={classes.detailImg}
                                component="img"
                                image={detailProduct.foto_url}
                                alt={detailProduct.titulo}
                            />
                        </div>
                        <div className={classes.detailProductData} >
                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailTitle} >
                                    {detailProduct.titulo}{' '}- Produto Original C/ Nota Fiscal
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailMarket} >
                                    Vendido e entregue por | <span>Market Cubos</span>
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailValue} >
                                    {formatMoney(detailProduct.valor)}
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailDescription} >
                                    Formas de pagamento
                                </Typography>
                            </CardContent>

                            <div>
                                <IconButton
                                >
                                    <CreditCardIcon />
                                </IconButton>
                                <IconButton>
                                    <PixIcon />
                                </IconButton>
                            </div>
                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailDescription} >
                                    Quantidade
                                </Typography>
                            </CardContent>
                            <div className={classes.detailQuantidade}>
                                <Typography className={classes.detailDescription} >
                                    {'  '} - {'  '} 1 {'  '} + {'  '}
                                </Typography>
                            </div>
                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailDescription} >
                                    Calcular frete e prazo
                                </Typography>
                            </CardContent>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="cep"
                                name="cep"
                                autoFocus
                                placeholder='Digite o CEP'
                                size='small'
                            />
                            <div>
                                <Button
                                    type="submit"
                                    variant="text"
                                    className={classes.icone}
                                    startIcon={<CarrinhoIcon />}
                                >
                                    Meu carrinho
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Comprar agora
                                </Button>
                            </div>
                        </div>
                    </CardActionArea>
                </Card >
                <Card className={classes.containerDetailDescription}>
                    <CardActionArea className={classes.detailProductDescription} >
                        <div>
                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailTextDescription} >
                                    Descrição do produto
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailDescription} >
                                    {detailProduct.descricao}
                                </Typography>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card >
                <Card className={classes.containerOtherProducts}>
                    <CardActionArea className={classes.detailOtherProduct} >
                        <div>
                            <CardMedia className={classes.detailOtherImg}
                                component="img"
                                image={detailProduct.foto_url}
                                alt={detailProduct.titulo}
                            />
                        </div>
                        <div>
                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailTitle} >
                                    {detailProduct.titulo}
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent} >
                                <Typography className={classes.detailValue} >
                                    {formatMoney(detailProduct.valor)}
                                </Typography>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card >
            </div>

        </>

    );
}

export default ProductDetail;

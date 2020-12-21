import React from 'react'
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import {Carousel, Button, Jumbotron} from 'react-bootstrap';
import Banner from '../../assets/img/BannerCerto.jpeg';

const Home = () => {
    return(
        <div>
            <Menu style={{backgroundColor : "00d65f"}}/>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Banner}
                            alt="EduX"
                            />
                            <Carousel.Caption>
                            <h3 style={{color : '#00c2ee'}}>CONHEÇA EDUX</h3>
                            <p style={{color : '#00c2ee'}}>Aprenda melhor e se divirta!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={'https://blog.hondana.com.br/wp-content/uploads/2017/07/exemplos-de-gamificacao-nas-empresas-900x365.jpg'}
                            alt="EduX"
                            />
                            <Carousel.Caption>
                            <h3 style={{color : '#00c2ee'}}>CONHEÇA EDUX</h3>
                            <p style={{color : '#00c2ee'}}>Aprenda melhor e se divirta!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Jumbotron> 
                <h2 className="center">Olá, somos o EduX</h2>
                <p className="center">
                    Somos um WedSite que porporciona uma educação diferente das convencionais, 
                     acreditamos que a forma de ensino pode ser divertida com os Games.
                </p>
                <div className="center">
                    <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }} href="/login">Login</Button>
                    <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }} href="/cadastrar">Cadastrar</Button>
                </div>
                </Jumbotron>
                <div>
                    <row>
                        <col
                        />
                        <col/>
                        <col/>
                    </row>
                </div>
            <Rodape />
        </div>
    )
}

export default Home;
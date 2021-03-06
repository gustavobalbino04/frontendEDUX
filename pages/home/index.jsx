import React from 'react'
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import {Container,Carousel, Button, Jumbotron, Col, Row } from 'react-bootstrap';
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
                <Container>

                    <Col>

                    <Row style={{ display : "flex",justifyContent: "space-between",marginTop: "50px"}} >
                        <img style={{ widht: '250px', height: "250px" }}
                        src={'https://cdn.icon-icons.com/icons2/1090/PNG/512/devices1_78351.png'}
                        
                        />
                        <p style={{ fontSize: "20px", marginTop: "10%"}}>Aplicação desenvolvida para todos os dispositivos;</p>
                    </Row>
                    <Row style={{ display : "flex",justifyContent: "space-between",marginTop: "50px"}}>
                        <p style={{ fontSize: "20px", marginTop: "10%"}}>App ideal para a formação do individuo com jogos;</p>
                        <img style={{ widht: '250px', height: "250px" }}
                        
                        src={'https://cdn.icon-icons.com/icons2/1090/PNG/512/controller_78338.png'}
                        />
                    </Row>
                    <Row style={{ display : "flex",justifyContent: "space-between",marginTop: "50px"}}>
                        <img style={{ widht: '250px', height: "250px" }}
                        src={'https://cdn.icon-icons.com/icons2/1090/PNG/512/internet_78339.png'}
                        />
                        <p style={{ fontSize: "20px", marginTop: "10%"}}>Implementação de um rede de amigos e profesores, visando o melhor apredizado;</p>
                    </Row>
                    
                    </Col>
                        </Container>
                
            <Rodape />
        </div>
    )
}

export default Home;
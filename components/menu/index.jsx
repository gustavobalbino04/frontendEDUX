import React from 'react';
import { useHistory} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/img/logo_2.png';
import jwt_decode from 'jwt-decode';
import '../menu/index.css';

const Menu = () => {
    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux');

        history.push('/');
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-edux');
        
        if(token === null){
            return (
                <Nav style={{backgroundColor : "#9D0DCA"}}>
                    <Nav.Link href="/login"  className="test" style={{color : "white", textdecoration: 'underline', textDecorationColor : "black"
	}}>Login</Nav.Link>
                    <Nav.Link href="/cadastrar" className="test"style={{color : "white"}}>Cadastrar</Nav.Link>
                </Nav>
            )
        } else if( jwt_decode(token).role === 'Admin' ){
            return (
                <Nav style={{backgroundColor : "#9D0DCA"}}>
                    <Nav.Link href="/admin/crudturmas" style={{color : "white"}}>Turmas</Nav.Link>
                    <Nav.Link href="/admin/crudobjetivos" style={{color : "white"}}>Objetivos</Nav.Link>
                    <Nav.Link href="/admin/crudcursos"  style={{color : "white"}}>Cursos</Nav.Link>
                    <Nav.Link href="/dicas"  style={{color : "white"}}>Dicas</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil"  style={{color : "white"}}>Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)} >Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        } else {
            return (
                <Nav style={{backgroundColor : "#9D0DCA"}}>
                    <Nav.Link href="/turmas">Turmas</Nav.Link>
                    <Nav.Link href="/objetivos">Objetivos</Nav.Link>
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                    <Nav.Link href="/dicas">Dicas</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        }
    }

    return (
        

        <Navbar style={{backgroundColor : "#9D0DCA"}} expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt='EduX' style={{ width : '64px'}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"  style={{color : "white"}}>Home</Nav.Link>
                </Nav>
                { renderMenu() }
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Menu;
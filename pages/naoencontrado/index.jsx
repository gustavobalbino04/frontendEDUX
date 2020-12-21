import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/logo_2.png';

const NaoEncontrado = ( ) => {
    return (
        <div>
            <Menu />

                <div style={{marginTop : '200px', fontSize : '50px', marginRight : "200px"}}>
                    <img src={logo} alt='EduX' style={{ width : '200px' , marginLeft: "45%"}}  />
                    <h1 className="text-center">404</h1>
                    <p className="text-center">Página não encontrada</p>
                    <p className="text-center">Retorne a pagina Home , e tente novamente </p>
                </div>
            <Rodape />
                
        </div>
    )
}

export default NaoEncontrado;
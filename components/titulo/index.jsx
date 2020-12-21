import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import Banner from '../../assets/img/BannerCerto.jpeg';
import '../titulo/index.css'


const Titulo = ({titulo, chamada}) => {

    return (
        <Jumbotron >
            

            <div className="texto">
            <h1>{titulo}</h1>
            <p>
               {chamada}
            </p>
            </div>
            
        </Jumbotron>
    )

}

export default Titulo;
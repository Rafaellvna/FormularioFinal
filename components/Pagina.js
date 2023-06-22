import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

function Pagina(props) {
  return (
    <div>
      <Cabecalho />
      <Container className='mt-5'>
        <h1>{props.titulo}</h1>
      </Container>

      <Container className='text-center'>
        {props.children}
      </Container>
    </div>
  )
}

export default Pagina
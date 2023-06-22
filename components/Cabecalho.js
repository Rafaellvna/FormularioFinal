import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Cabecalho() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><h2>Formulários</h2></Navbar.Brand>
                </Container>
            </Navbar>
            <Nav fill variant="tabs">
                <Nav.Item>
                    <Nav.Link href="/clientes"><strong>Clientes</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/categorias"><strong>Categorias</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/fornecedores"><strong>Fornecedores</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/funcionarios"><strong>Funcionários</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/pedidos"><strong>Pedidos</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/produtos"><strong>Produtos</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/vendas"><strong>Vendas</strong></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Cabecalho
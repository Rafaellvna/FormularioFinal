import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [produtos, setProdutos] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  useEffect(() => {
    setProdutos(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const produtos = getAll()
      produtos.splice(id, 1)
      window.localStorage.setItem('produtos', JSON.stringify(produtos))
      setProdutos(produtos)
    }
  }

  return (
    <Pagina titulo="Produtos">

      <div className='text-end'>
        <Link href={'/produtos/form'}><Button variant="primary" className='m-1'>Novo Produto</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Estoque</th>
            <th>Fornecedor</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/produtos/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.categoria}</td>
              <td>{item.estoque}</td>
              <td>{item.fornecedor}</td>
              <td>{item.ativo}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
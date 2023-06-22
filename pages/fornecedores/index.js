import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [fornecedores, setFornecedores] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('fornecedores')) || []
  }

  useEffect(() => {
    setFornecedores(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const fornecedores = getAll()
      fornecedores.splice(id, 1)
      window.localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
      setFornecedores(fornecedores)
    }
  }

  return (
    <Pagina titulo="Fornecedores">

      <div className='text-end'>
        <Link href={'/fornecedores/form'}><Button variant="primary" className='m-1'>Novo Fornecedor</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/fornecedores/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
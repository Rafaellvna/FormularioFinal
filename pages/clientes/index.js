import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [clientes, setClientes] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('clientes')) || []
  }

  useEffect(() => {
    setClientes(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const clientes = getAll()
      clientes.splice(id, 1)
      window.localStorage.setItem('clientes', JSON.stringify(clientes))
      setClientes(clientes)
    }
  }

  return (
    <Pagina titulo="Clientes">

      <div className='text-end'>
        <Link href={'/clientes/form'}><Button variant="primary" className='m-1'>Novo Cliente</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Idade</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/clientes/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.idade}</td>
              <td>{item.cidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [pedidos, setPedidos] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('pedidos')) || []
  }

  useEffect(() => {
    setPedidos(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const pedidos = getAll()
      pedidos.splice(id, 1)
      window.localStorage.setItem('pedidos', JSON.stringify(pedidos))
      setPedidos(pedidos)
    }
  }

  return (
    <Pagina titulo="Pedidos">

      <div className='text-end'>
        <Link href={'/pedidos/form'}><Button variant="primary" className='m-1'>Novo Pedido</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Data Pedido</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/pedidos/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.cliente}</td>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
              <td>{item.dtpedido}</td>
              <td>{item.status}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
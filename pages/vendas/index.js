import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [vendas, setVendas] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('vendas')) || []
  }

  useEffect(() => {
    setVendas(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const vendas = getAll()
      vendas.splice(id, 1)
      window.localStorage.setItem('vendas', JSON.stringify(vendas))
      setVendas(vendas)
    }
  }

  return (
    <Pagina titulo="Vendas">

      <div className='text-end'>
        <Link href={'/vendas/form'}><Button variant="primary" className='m-1'>Novo Pedido</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Data Venda</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/vendas/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
              <td>{item.dtvenda}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
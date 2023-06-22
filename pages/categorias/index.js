import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [categorias, setCategorias] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('categorias')) || []
  }

  useEffect(() => {
    setCategorias(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const categorias = getAll()
      categorias.splice(id, 1)
      window.localStorage.setItem('categorias', JSON.stringify(categorias))
      setCategorias(categorias)
    }
  }

  return (
    <Pagina titulo="Categorias">

      <div className='text-end'>
        <Link href={'/categorias/form'}><Button variant="primary" className='m-1'>Nova Categoria</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/categorias/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
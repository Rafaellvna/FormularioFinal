import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

function index() {

  const [funcionarios, setFuncionarios] = useState([])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('funcionarios')) || []
  }

  useEffect(() => {
    setFuncionarios(getAll())
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const funcionarios = getAll()
      funcionarios.splice(id, 1)
      window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
      setFuncionarios(funcionarios)
    }
  }

  return (
    <Pagina titulo="Funcionários">

      <div className='text-end'>
        <Link href={'/funcionarios/form'}><Button variant="primary" className='m-1'>Novo Funcionário</Button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th>Data Contratação</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/funcionarios/' + i}>
                  <MdEdit className="me-2 text-primary" />
                </Link>
                <IoMdTrash onClick={() => excluir(i)} />
              </td>
              <td>{item.nome}</td>
              <td>{item.cargo}</td>
              <td>{item.salario}</td>
              <td>{item.dtcontratacao}</td>
              <td>{item.ativo}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index
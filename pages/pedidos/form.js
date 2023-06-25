import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { mask } from 'remask'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import pedidosValidator from '@/validators/pedidosValidator'

function form() {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
    const produtos = JSON.parse(window.localStorage.getItem('produtos')) || []

    function salvar(dados) {
        const pedidos = JSON.parse(window.localStorage.getItem('pedidos')) || []
        pedidos.push(dados)
        window.localStorage.setItem('pedidos', JSON.stringify(pedidos))
        push('/pedidos')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Pedidos">

            <Form>
                <Form.Group className="mb-3" controlId="cliente">
                    <Form.Label><strong>Cliente: </strong></Form.Label>
                    <Form.Select isInvalid={errors.cliente} type="number" {...register('cliente')} >
                        <option></option>
                        {clientes.map((cliente, i) => (
                            <option key={i} value={cliente.nome}>{cliente.nome}</option>
                        ))}
                    </Form.Select>
                    {
                        errors.cliente &&
                        <small>{errors.cliente.message}</small>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="produto">
                    <Form.Label><strong>Produto: </strong></Form.Label>
                    <Form.Select isInvalid={errors.produto} type="number" {...register('produto')} >
                        <option></option>
                        {produtos.map((produto, i) => (
                            <option key={i} value={produto.nome}>{produto.nome}</option>
                        ))}
                    </Form.Select>
                    {
                        errors.produto &&
                        <small>{errors.produto.message}</small>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label><strong>Quantidade: </strong></Form.Label>
                    <Form.Control isInvalid={errors.quantidade} type="number" {...register('quantidade', pedidosValidator.quantidade)} />
                    {
                        errors.quantidade &&
                        <small>{errors.quantidade.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dtpedido">
                    <Form.Label><strong>Data Pedido: </strong></Form.Label>
                    <Form.Control isInvalid={errors.dtpedido} type="text" mask="99/99/9999" {...register('dtpedido', pedidosValidator.dtpedido)} onChange={handleChange} />
                    {
                        errors.dtpedido &&
                        <small>{errors.dtpedido.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label><strong>Status: </strong></Form.Label>
                    <Form.Select isInvalid={errors.status} type="text" {...register('status', pedidosValidator.status)} >
                        <option></option>
                        <option value="Pendente">Pendente</option>
                        <option value="Entregue">Entregue</option>
                    </Form.Select>
                    {
                        errors.status &&
                        <small>{errors.status.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="total">
                    <Form.Label><strong>Total: </strong></Form.Label>
                    <Form.Control isInvalid={errors.total} type="text" {...register('total', pedidosValidator.total)} />
                    {
                        errors.total &&
                        <small>{errors.total.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
                    <Link href={'/pedidos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
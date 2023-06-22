import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import clientesValidator from '@/validators/clientesValidator'
import { mask } from 'remask'

function form() {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function getAll() {
        return JSON.parse(window.localStorage.getItem('clientes')) || []
    }

    useEffect(() => {
        if (query.id) {
            const clientes = getAll()
            const cliente = clientes[query.id]

            for (let atributo in cliente) {
                setValue(atributo, cliente[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const clientes = getAll()
        clientes.splice(query.id, 1, dados)
        window.localStorage.setItem('clientes', JSON.stringify(clientes))
        push('/clientes')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Clientes">

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label><strong>Nome: </strong></Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', clientesValidator.nome)} />
                    {
                        errors.nome &&
                        <small>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label><strong>Email: </strong></Form.Label>
                    <Form.Control isInvalid={errors.email} type="email" {...register('email', clientesValidator.email)} />
                    {
                        errors.email &&
                        <small>{errors.email.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label><strong>Telefone: </strong></Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" mask="(99) 99999-9999" {...register('telefone', clientesValidator.telefone)} onChange={handleChange} />
                    {
                        errors.telefone &&
                        <small>{errors.telefone.message}</small>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="idade">
                    <Form.Label><strong>Idade: </strong></Form.Label>
                    <Form.Control isInvalid={errors.idade} type="number" {...register('idade', clientesValidator.idade)} />
                    {
                        errors.idade &&
                        <small>{errors.idade.message}</small>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label><strong>Cidade: </strong></Form.Label>
                    <Form.Control isInvalid={errors.cidade} type="text" {...register('cidade', clientesValidator.cidade)} />
                    {
                        errors.cidade &&
                        <small>{errors.cidade.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
                    <Link href={'/clientes'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
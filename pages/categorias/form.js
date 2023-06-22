import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { mask } from 'remask'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import categoriasValidator from '@/validators/categoriasValidator'

function form() {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function salvar(dados) {
        const categorias = JSON.parse(window.localStorage.getItem('categorias')) || []
        categorias.push(dados)
        window.localStorage.setItem('categorias', JSON.stringify(categorias))
        push('/categorias')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Categorias">

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label><strong>Nome: </strong></Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', categoriasValidator.nome)} />
                    {
                        errors.nome &&
                        <small>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label><strong>Descrição: </strong></Form.Label>
                    <Form.Control isInvalid={errors.descricao} type="text" {...register('descricao', categoriasValidator.descricao)} />
                    {
                        errors.descricao &&
                        <small>{errors.descricao.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
                    <Link href={'/categorias'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import vendasValidator from '@/validators/vendasValidator'
import { mask } from 'remask'

function form() {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function getAll() {
        return JSON.parse(window.localStorage.getItem('vendas')) || []
    }

    useEffect(() => {
        if (query.id) {
            const vendas = getAll()
            const venda = vendas[query.id]

            for (let atributo in venda) {
                setValue(atributo, venda[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const vendas = getAll()
        vendas.splice(query.id, 1, dados)
        window.localStorage.setItem('vendas', JSON.stringify(vendas))
        push('/vendas')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Vendas">

            <Form>
                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label><strong>Quantidade: </strong></Form.Label>
                    <Form.Control isInvalid={errors.quantidade} type="number" {...register('quantidade', vendasValidator.quantidade)} />
                    {
                        errors.quantidade &&
                        <small>{errors.quantidade.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dtvenda">
                    <Form.Label><strong>Data Venda: </strong></Form.Label>
                    <Form.Control isInvalid={errors.dtvenda} type="text" mask="99/99/9999" {...register('dtvenda', vendasValidator.dtvenda)} onChange={handleChange} />
                    {
                        errors.dtvenda &&
                        <small>{errors.dtvenda.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
                    <Link href={'/vendas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
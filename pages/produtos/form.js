import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { mask } from 'remask'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import produtosValidator from '@/validators/produtosValidator'

function form() {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const fornecedores = JSON.parse(window.localStorage.getItem('fornecedores')) || []

    function salvar(dados) {
        const produtos = JSON.parse(window.localStorage.getItem('produtos')) || []
        produtos.push(dados)
        window.localStorage.setItem('produtos', JSON.stringify(produtos))
        push('/produtos')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Produtos">

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label><strong>Nome: </strong></Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', produtosValidator.nome)} />
                    {
                        errors.nome &&
                        <small>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="preco">
                    <Form.Label><strong>Preço: </strong></Form.Label>
                    <Form.Control isInvalid={errors.preco} type="text" {...register('preco', produtosValidator.preco)} />
                    {
                        errors.preco &&
                        <small>{errors.preco.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label><strong>Categoria: </strong></Form.Label>
                    <Form.Control isInvalid={errors.categoria} type="text" {...register('categoria', produtosValidator.categoria)} />
                    {
                        errors.categoria &&
                        <small>{errors.categoria.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="estoque">
                    <Form.Label><strong>Estoque: </strong></Form.Label>
                    <Form.Control isInvalid={errors.estoque} type="text" {...register('estoque', produtosValidator.estoque)} />
                    {
                        errors.estoque &&
                        <small>{errors.estoque.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="fornecedor">
                    <Form.Label><strong>Fornecedor: </strong></Form.Label>
                    <Form.Select isInvalid={errors.fornecedor} type="text" {...register('fornecedor')} >
                        <option></option>
                        {fornecedores.map((fornecedor, i) => (
                            <option key={i} value={fornecedor.nome}>{fornecedor.nome}</option>
                        ))}
                    </Form.Select>
                    {
                        errors.fornecedor &&
                        <small>{errors.fornecedor.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="ativo">
                    <Form.Label><strong>Ativo: </strong></Form.Label>
                    <Form.Select isInvalid={errors.ativo} type="text" {...register('ativo', produtosValidator.ativo)} >
                        <option></option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </Form.Select>
                    {
                        errors.ativo &&
                        <small>{errors.ativo.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
                    <Link href={'/produtos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
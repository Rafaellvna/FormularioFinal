import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import funcionariosValidator from '@/validators/funcionariosValidator'
import { mask } from 'remask'

function form() {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function getAll() {
        return JSON.parse(window.localStorage.getItem('funcionarios')) || []
    }

    useEffect(() => {
        if (query.id) {
            const funcionarios = getAll()
            const funcionario = funcionarios[query.id]

            for (let atributo in funcionario) {
                setValue(atributo, funcionario[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const funcionarios = getAll()
        funcionarios.splice(query.id, 1, dados)
        window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
        push('/funcionarios')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo="Funcionarios">

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label><strong>Nome: </strong></Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', funcionariosValidator.nome)} />
                    {
                        errors.nome &&
                        <small>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cargo">
                    <Form.Label><strong>Cargo: </strong></Form.Label>
                    <Form.Control isInvalid={errors.cargo} type="text" {...register('cargo', funcionariosValidator.cargo)} />
                    {
                        errors.cargo &&
                        <small>{errors.cargo.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label><strong>Salário: </strong></Form.Label>
                    <Form.Control isInvalid={errors.salario} type="text" mask="99.999" {...register('salario', funcionariosValidator.salario)} onChange={handleChange} />
                    {
                        errors.salario &&
                        <small>{errors.salario.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dtcontratacao">
                    <Form.Label><strong>Data Contratação: </strong></Form.Label>
                    <Form.Control isInvalid={errors.dtcontratacao} type="text" mask="99/99/9999" {...register('dtcontratacao', funcionariosValidator.dtcontratacao)} onChange={handleChange} />
                    {
                        errors.dtcontratacao &&
                        <small>{errors.dtcontratacao.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="ativo">
                    <Form.Label><strong>Ativo: </strong></Form.Label>
                    <Form.Select isInvalid={errors.ativo} type="text" {...register('ativo', funcionariosValidator.ativo)} >
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
                    <Link href={'/funcionarios'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
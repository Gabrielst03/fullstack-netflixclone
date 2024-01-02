import Button from '@/components/Button'
import Input from '@/components/Input'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'

export default function Home() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()


    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })

            router.push('/auth')
        } catch (err) {
            console.log(err)

        }
    }, [email, name, password])

    return (
        <div className="min-h-screen w-full relative bg-center bg-no-repeat bg-[url('https://viciados.net/wp-content/uploads/2019/09/fala-universidades-netflix-3.jpg')]">
            <div className='w-full min-h-screen bg-black bg-opacity-50'>
                <nav className='px-12 py-6'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className='w-44' alt="" />
                </nav>

                <div className='flex justify-center items-center w-full h-full mt-32'>
                    <div className='w-[350px] rounded-lg p-6 bg-black/70'>
                        <h1 className='text-3xl font-semibold'>Registro</h1>

                        <div className="flex flex-col gap-1 mt-6">
                            <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Usuário' />
                        </div>

                        <div className="flex flex-col gap-1 mt-3">
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
                        </div>
                        <div className="flex flex-col gap-1 mt-3">
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
                        </div>
                        <div className="flex flex-col gap-1 mt-6">
                            <Button onClick={register}>Cadastrar</Button>
                        </div>

                        <div className="flex items-center gap-1 mt-12 text-sm justify-center">
                            <h1 className='text-zinc-500'>Já tem conta?</h1>
                            <Link href='/' className='font-semibold'>Acesse-a</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

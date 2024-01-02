import Button from '@/components/Button'
import Input from '@/components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/profiles'
      })

      router.push('/profiles')
    } catch (err) {
      console.log(err)
    }
  }, [email, password, router])

  return (
    <div className="min-h-screen w-full relative bg-center bg-no-repeat bg-[url('https://viciados.net/wp-content/uploads/2019/09/fala-universidades-netflix-3.jpg')]">
      <div className='w-full min-h-screen bg-black bg-opacity-50'>
        <nav className='px-12 py-6'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className='w-44' alt="" />
        </nav>

        <div className='flex justify-center items-center w-full h-full mt-32'>
          <div className='w-[350px] rounded-lg p-6 bg-black/70'>
            <h1 className='text-3xl font-semibold'>Entrar</h1>

            <div className="flex flex-col gap-1 mt-6">
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <Button onClick={login}>Entrar</Button>
            </div>

            <div className="flex items-center gap-1 mt-12 text-sm justify-center">
              <h1 className='text-zinc-500'>Primeira vez na Netflix?</h1>
              <Link href='/signup' className='font-semibold'>Crie sua conta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

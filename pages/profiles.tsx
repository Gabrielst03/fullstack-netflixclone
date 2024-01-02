import useCurrentUser from '@/hooks/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {

        }
    }
}

export default function Profiles() {

    const { data: user } = useCurrentUser()

    const router = useRouter()

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-medium'>Quem está assistindo?</h1>

                <div onClick={() => { router.push('/') }} className="flex flex-col gap-2 items-center group">
                    <div className='rounded flex items-center justify-center w-44 h-44 overflow-hidden cursor-pointer border-2 border-transparent group-hover:border-white'>
                        <img src="/default-blue.png" alt="" />
                    </div>
                    <h1 className='font-semibold text-lg text-gray-400 group-hover:text-white'>{user?.name}</h1>
                </div>

            </div>

        </div>
    )
}

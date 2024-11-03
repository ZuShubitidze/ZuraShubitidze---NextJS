import { IUser } from '@/app/interfaces/users.interface'
import { fetchUsers } from '@/app/services/fetchUsers'
import React from 'react'

interface UserProps {
  params: {
    id: string
  }
}

// Static
export async function generateStaticParams() {
  const users: IUser[] = await fetchUsers()

  return users.map(user => ({
    slug: user.id.toString()
  }))
}

// Fetch
const fetchUser = async ( id: string ) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res.json()
}

export default async function userPage({ params: { id }}: UserProps) {

  const user: IUser = await fetchUser( id )

  return (
    <div>
      User Page id: { user.id }
    </div>
  )
}

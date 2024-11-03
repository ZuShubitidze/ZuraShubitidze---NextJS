import React from 'react'
import { fetchUsers } from '../services/fetchUsers'
import { IUser } from '../interfaces/users.interface'
import Link from 'next/link'

export default async function UsersPage() {
  // Await fetch
  const users: IUser[] = await fetchUsers()

  return (
    <div>
      <h1>Users: </h1>
        {users.map(({ id, name }) => (
          <Link href={`/ssrUsers/${id}`} key={ id }>
            <div key={ id }>
              <h1>{ name }</h1>
            </div>
          </Link>
        ))}
    </div>
  )
}

import Link from "next/link"
import { IUser } from "../interfaces/users.interface"
import { fetchUsers } from "../services/fetchUsers"

export default async function UsersPage() {

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
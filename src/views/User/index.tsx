import { Button } from 'antd'
import { useState, type FC, type ReactElement } from 'react'

interface IProps {}

type UserObject = {
  id: number
  name: string
  gender: string
}

const userList = [
  { id: 1, name: 'Lantz', gender: 'male' },
  { id: 2, name: 'Fancy', gender: 'female' },
]

const User: FC<IProps> = (props): ReactElement => {
  const [user, setUser] = useState<UserObject[]>(userList)

  const clickHandler = () => {
    setUser(prevUser => {
      const updatedUser = prevUser.map(item => {
        if (item.id === 1) {
          item.name = 'Lantz Shaw'
        }

        return item
      })

      return updatedUser
    })
  }

  return (
    <>
      <ul>
        {user.map(user => (
          <li key={user.id}>
            <span style={{ marginRight: '10px' }}>{user.name}</span>
            <span>{user.gender}</span>
          </li>
        ))}
      </ul>
      <Button onClick={clickHandler}>Click Me</Button>
    </>
  )
}

export default User

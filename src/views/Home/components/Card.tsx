import { FC, memo, ReactElement, useEffect, useState } from 'react'
import { Button } from 'antd'

interface CardProps {
  title: string
  description?: string
  onEdit?: (title: string) => void
}

const Card: FC<CardProps> = (props): ReactElement => {
  const [name, setName] = useState({ name: 'Lantz', gender: 'male' })
  const { title, description, onEdit } = props

  useEffect(() => {
    console.log('---------The Child Component Rendered---------')
  })

  const clickHandler = () => {
    onEdit?.(title)
  }

  const changeHandler = () => {
    setName({ ...name, name: 'Fancy' })
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={clickHandler}>...</Button>

      <Button onClick={changeHandler}>Change Name</Button>

      <div>
        <p>{name.name}</p>
        <p>{name.gender}</p>
      </div>
    </>
  )
}

export default memo(Card)

import { Button } from 'antd'
import { FC, ReactElement, useEffect } from 'react'

interface IProps {}

const SignIn: FC<IProps> = (props): ReactElement => {
  useEffect(() => {
    function effect(e: Event) {
      // NOTE: 会打印 3 次
      console.log('-------------------SignIn Component useEffect-------------------', e)
    }

    window.addEventListener('keydown', effect)

    return () => {
      window.removeEventListener('keydown', effect)
    }
  })

  const clickHandler = () => {}

  return (
    <>
      <Button onClick={clickHandler}>Click Me</Button>
    </>
  )
}

export default SignIn

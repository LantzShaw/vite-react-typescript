import { FC, ReactElement, Suspense } from 'react'

interface IProps {}

const SignUp: FC<IProps> = (props): ReactElement => {
  return (
    <>
      <Suspense fallback={<>...</>}>{/* <YourComponent /> */}</Suspense>
    </>
  )
}

export default SignUp

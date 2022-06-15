import { lazy } from 'react'

const Home = lazy(() => import('@/views/Home'))

const SignIn = lazy(() => import('@/views/SignIn'))

const SignUp = lazy(() => import('@/views/SignUp'))

export { Home, SignIn, SignUp }

import { lazy } from 'react'

const Home = lazy(() => import('@/views/Home'))

const SignIn = lazy(() => import('@/views/SignIn'))

const SignUp = lazy(() => import('@/views/SignUp'))

const User = lazy(() => import('@/views/User'))

export { Home, SignIn, SignUp, User }

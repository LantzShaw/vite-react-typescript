// import { useRef } from 'react'

// const useTest = <T>(handler: () => Promise<T>) => {
//   const inputRef = useRef<HTMLInputElement>(null)

//   const handler = async T => {
//     await handler()
//   }

//   return {
//     inputRef,
//   }
// }

// function Test<T>() {

// }

// TODO:
// declare function foo<T>(bar: () => T): T

// foo(() => 1)

// export default useTest

export {}

// type T10 = ReturnType<() => string> // string
// type T11 = ReturnType<(s: string) => void> // void
// type T12 = ReturnType<<T>() => T> // {}
// type T13 = ReturnType<<T extends U, U extends number[]>() => T> // number[]
// type T14 = ReturnType<typeof f1> // { a: number, b: string }
// type T15 = ReturnType<any> // any
// type T16 = ReturnType<never> // any
// type T17 = ReturnType<string> // Error
// type T18 = ReturnType<Function> // Error

// type T20 = InstanceType<typeof C> // C
// type T21 = InstanceType<any> // any
// type T22 = InstanceType<never> // any
// type T23 = InstanceType<string> // Error
// type T24 = InstanceType<Function> // Error

// NOTE:
// 原文链接：https://blog.csdn.net/wu_xianqiang/article/details/115425818

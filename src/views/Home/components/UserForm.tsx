// ------------------------------------------------------
//
// useImperativeHandle(ref, createHandle, [deps]) 返回暴露的ref的具体类型
//
//
// ------------------------------------------------------

// TODO: 通过父组件聚焦子组件的input

// import { forwardRef } from 'react'

// interface IProps {}

// const UserForm = forwardRef<HTMLInputElement, IProps>((props, ref) => {

//   return (
//     <>
//       <input type="text" ref={ref} />
//     </>
//   )
// })

// export default UserForm

// NOTE: 参考文章: https://www.carlrippon.com/react-forwardref-typescript/
// const Component = React.forwardRef<RefType, PropsType>((props, ref) => {
//     return someComponent;
//   });

// NOTE: About useImperativeHandle() Hook
// 参考文章: https://blog.csdn.net/weixin_43720095/article/details/104967478#:~:text=useImperativeHandle%E4%BB%8B%E7%BB%8D.%20useImperativeHandle%28ref%2C%20createHandle%2C%20%5Bdeps%5D%29%201.%20useImperativeHandle%20%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BD%A0%E5%9C%A8%E4%BD%BF%E7%94%A8%20ref,ref%EF%BC%9A%E5%AE%9A%E4%B9%89%20current%20%E5%AF%B9%E8%B1%A1%E7%9A%84%20ref%20createHandle%EF%BC%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%8C%E8%BF%94%E5%9B%9E%E5%80%BC%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%EF%BC%8C%E5%8D%B3%E8%BF%99%E4%B8%AA%20ref%20%E7%9A%84%20current.

// TODO: 聚焦切换 input
import { useRef, forwardRef, useImperativeHandle } from 'react'

interface IProps {}

type InputHandles = {
  focus: () => void
}

const UserForm = forwardRef<InputHandles, IProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
  }))

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
})

export default UserForm

// NOTE: About useImperativeHandle() Hook 类型定义参考
// 参考文章: https://lzw.me/a/react-useimperativehandle-typescript.html

// TODO: 函数回调函数如何定义类型
// 参考文章: https://www.jianshu.com/p/8e08b2ae8010

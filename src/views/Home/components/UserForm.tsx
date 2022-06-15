import { forwardRef } from 'react'

interface IProps {}

const UserForm = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  )
})

export default UserForm

// NOTE: 参考文章: https://www.carlrippon.com/react-forwardref-typescript/
// const Component = React.forwardRef<RefType, PropsType>((props, ref) => {
//     return someComponent;
//   });

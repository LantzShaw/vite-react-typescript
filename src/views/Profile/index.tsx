/************************************************
 *
 * 注意:
 *
 *  父组件外层的log信息比子组件外层log更先打印，
 *
 * 但是useEffect中的log，则是子组件更先打印，在打印父组件的
 *
 * **********************************************
 */

import { Button } from 'antd'
import { useCallback, useEffect, useMemo, useState, type FC, type ReactElement } from 'react'

import BusinessCard from './components/BusinessCard'

interface IProps {}

const Profile: FC<IProps> = (props): ReactElement => {
  const [name, setName] = useState('Lantz Shaw')

  console.log('----------------Profile component is rendering----------------')

  useEffect(() => {
    console.log('-------------------Profile Component useEffect-------------------')
  })

  const editHandler = useCallback(
    (value: string) => {
      setName(value)
    },
    [name]
  )

  const nickname = useMemo(() => {
    return `Little ${name}`
  }, [name])

  const changeHandler = () => {
    setName('Jack Shaw')
  }

  return (
    <>
      <BusinessCard
        name={name}
        gender="male"
        hobbies={'Playing games, working, writing etc.'}
        nickname={nickname}
        onEdit={editHandler}
      />

      <Button onClick={changeHandler}>Change Some Theing</Button>
    </>
  )
}

export default Profile

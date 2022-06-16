/************************************************
 *
 * NOTE:
 *
 *  父组件外层的log信息比子组件外层log更先打印，
 *
 * 但是useEffect中的log，则是子组件更先打印，在打印父组件的
 *
 ***********************************************/

import { Button } from 'antd'
import { debounce, clone, throttle } from 'lodash-es'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type ReactElement,
} from 'react'

import BusinessCard from './components/BusinessCard'

interface IProps {}

const Profile: FC<IProps> = (props): ReactElement => {
  const [name, setName] = useState('Lantz Shaw')
  // const [age, setAge] = useState(18)

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

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    debounceSearch(value)
  }

  const onSearch = (value: string) => {
    console.log('--------------search value--------------', value)
  }

  const debounceSearch = useCallback(debounce(onSearch, 300), [])

  // const debounceSearch = useCallback(
  //   debounce((value: string) => {
  //     console.log('--------------search value--------------', value)
  //   }, 300),
  //   []
  // )

  return (
    <>
      <input type="text" onChange={inputChangeHandler} />

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

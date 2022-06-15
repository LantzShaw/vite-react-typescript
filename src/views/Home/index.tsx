import { FC, ReactElement, useContext, useEffect, useState, useRef } from 'react'
import { Button, DatePicker, Input, Form, Checkbox, Row, Col, Grid } from 'antd'
import moment from 'moment'

import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'
import type { Moment } from 'moment'

import NotificationContext from '@/contexts/notification-context'
import Card from './components/Card'
import UserForm from './components/UserForm'

interface IProps {}

const { RangePicker } = DatePicker
const { useBreakpoint } = Grid

const dateFormat = 'YYYY-MM-DD'

const Home: FC<IProps> = (props): ReactElement => {
  const [name, setName] = useState<string>('Lantz')
  const [date, setDate] = useState<Moment | null>(moment())
  const [rangeDate, setRangeDate] = useState<RangePickerProps['value'] | null>(null)
  const [cardTitle, setCardTitle] = useState<string>('Vue Course')

  const userFormRef = useRef<HTMLInputElement>(null)

  const notificationContext = useContext(NotificationContext)

  useEffect(() => {
    console.log('---------The Parent Component Rendered---------')
  })

  const screens = useBreakpoint()

  const temp = Object.entries(screens)

  const clickHandler = (): void => {
    setCardTitle('This is a card title')
  }

  const nameChangeHandler = (): void => {
    setName(prevName => {
      return prevName + 1
    })
  }

  const onChange: DatePickerProps['onChange'] = (date): void => {
    setDate(date)
  }

  const onRangePickerChange: RangePickerProps['onChange'] = (
    value: RangePickerProps['value']
  ): void => {
    setRangeDate(value)
  }

  const editHandler = (title: string): void => {
    console.log('---------I am Lantz----------', title)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onFocused = (): void => {
    userFormRef.current?.focus()
  }

  return (
    <>
      <Button type="primary" onClick={clickHandler}>
        Click
      </Button>
      <Button onClick={nameChangeHandler}>Change Name</Button>
      <DatePicker onChange={onChange} value={date} format={dateFormat} />
      <RangePicker onChange={onRangePickerChange} value={rangeDate} format={dateFormat} />
      <Card
        title="React Course"
        description="React is a javascript library for building user interface!"
        onEdit={editHandler}
      />
      <Card title={cardTitle} description="Vue is a progressive javaScript framework!" />

      <Row>
        <Col>
          <UserForm ref={userFormRef} />

          <Button onClick={onFocused}>Focus Me</Button>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Home

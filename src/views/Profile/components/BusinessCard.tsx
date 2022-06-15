import { Button, Card, Col, Row } from 'antd'
import { memo, useEffect, type FC, type ReactElement } from 'react'

interface IProps {
  name: string
  nickname: string
  gender: string
  hobbies: string
  onEdit: (value: string) => void
}

const BusinessCard: FC<IProps> = (props): ReactElement => {
  const { name, nickname, gender, hobbies, onEdit } = props

  console.log('----------------Business card component is rendering----------------')

  const title = `${name}\'s Business Card`

  useEffect(() => {
    console.log('-------------------Business Component useEffect-------------------')
  })

  const clickHandler = () => {
    onEdit('Fancy')
  }

  return (
    <>
      <Row>
        <Col span={8}>
          <Card
            title={title}
            bordered={false}
            actions={[
              <Button type="primary" onClick={clickHandler}>
                Edit
              </Button>,
            ]}
          >
            <p>
              <span>name: {name}</span>
            </p>
            <p>
              <span>nickname: {nickname}</span>
            </p>
            <p>
              <span>gender: {gender}</span>
            </p>
            <p>
              <span>hobbies: {hobbies}</span>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default memo(BusinessCard)

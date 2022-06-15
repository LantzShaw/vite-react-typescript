import { Table } from 'antd'
import { type FC, type ReactElement } from 'react'

interface IProps {}

const dataSource = [
  {
    key: '1',
    name: 'React',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: 'Vue',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: 'Angular',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]

const BaseTable: FC<IProps> = (props): ReactElement => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default BaseTable

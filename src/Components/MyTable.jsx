import React from 'react'
import { Table } from 'antd'

export default function MyTable(props) {
  return (
    <div className='-z-10'>
      <Table className='shadow-md' dataSource={props.data} scroll={{ x: 700 }} columns={props.columns} />
    </div>
  )
}

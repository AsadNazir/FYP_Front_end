import React from 'react'
import { Table } from 'antd'

export default function MyTable(props) {
  return (
    <div className='-z-10'>
      <Table className='shadow-md' dataSource={props.data} scroll={props.scroll ? props.scroll : 700} columns={props.columns} />
    </div>
  )
}

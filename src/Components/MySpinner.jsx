import React from 'react'
import { Spin } from 'antd'

export default function MySpinner(props) {
    return (
        props.fullscreen ?
            <div >
                <Spin spinning={true} tip="Loading" size='large' fullscreen={props.fullscreen} />
            </div>
            :
            <div className='w-full min-h-[70vh] flex flex-col justify-center items-center'>
                <Spin spinning={true} tip="Loading" size='large' />
            </div>
    )
}

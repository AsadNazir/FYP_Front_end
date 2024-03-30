import React from 'react'
import { Tabs } from 'flowbite-react'

export default function TabBar(props) {
    return (
        <Tabs style='underline'>
            {props.tabs.map((tab) => {
                return (
                    <Tabs.Tab title={tab.title} key={tab.key}>
                        <Tabs.Item>
                            {tab.component}
                        </Tabs.Item>
                    </Tabs.Tab>
                )
            })
            }
        </Tabs>
    )
}

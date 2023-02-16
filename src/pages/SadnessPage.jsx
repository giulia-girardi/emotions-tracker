import React from 'react'
import { Tabs } from '@mantine/core';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


function SadnessPage() {
    
  return (
    <Tabs variant="outline" defaultValue="1w">
        <Tabs.List position="center">
            <Tabs.Tab value="1d">1d</Tabs.Tab>
            <Tabs.Tab value="1w">1w</Tabs.Tab>
            <Tabs.Tab value="4w">4w</Tabs.Tab>
            <Tabs.Tab value="1y">1y</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="1d" pt="xs">
        Today's stats
        
        </Tabs.Panel>

        <Tabs.Panel value="1w" pt="xs">
        <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines />
            <LineSeries
                data={[
                {x: 1, y: 10},
                {x: 2, y: 5},
                {x: 3, y: 15}
                ]}/>
            <XAxis />
            <YAxis />
        </XYPlot>
        </Tabs.Panel>

        <Tabs.Panel value="4w" pt="xs">
        Last 4 weeks stats
        </Tabs.Panel>

        <Tabs.Panel value="1y" pt="xs">
        Last year stats
        </Tabs.Panel>
    </Tabs>

  )
}

export default SadnessPage
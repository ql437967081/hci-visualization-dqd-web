import React, { useState } from 'react';
import { Space, Spin } from 'antd';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import graph1 from './graph1.gexf'
export default function UserRelation() {
        const [loading, setLoading] = useState(false);
        setLoading(true);
        const graph = echarts.dataTool.gexf.parse(graph1);
        //设置需要展示的graph的nodes基本属性，后面需要用于序列的data里
        graph.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.symbolSize /= 1.5;
            node.label = {
                show: node.symbolSize > 10//节点size>30时显示node的label
            };
            node.category = node.attributes.modularity_class;
        });

        const option = {
            title: {
                text: "用户和用户之间的关注关系",
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {	//修改图的名字
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    },
                    roam: true,
                    data: graph.nodes,
                    links: graph.links,
                    //focus在节点时显示邻边
                    focusNodeAdjacency: true,
                }
            ]
        };


    return (
        <Space direction={'vertical'} style={{ width: '100%', paddingTop: '2%' }}>
            {/*<TeamInput onSearchTeam={onSearch} />*/}
            <Spin spinning={loading}>
                <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '80vh' }} />
            </Spin>
        </Space>
    );
}
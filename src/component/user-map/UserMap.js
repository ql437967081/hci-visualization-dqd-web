import React, { useState } from 'react';
import { Space } from 'antd';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import chinaJson from './china.json';
import mockData from './mock-data';
import TeamInput from '../team-input/TeamInput';

const allString = '所有';

export default function UserMap() {
    const [data, setData] = useState(mockData);
    const [team, setTeam] = useState(allString);

    const values = data.map(({ value }) => value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const onSearch = team => {
        if (!team) team = allString;
        setTeam(team);
        console.log(`搜索${team}球迷分布`);
    };

    echarts.registerMap('china', chinaJson);
    const option = {
        title: {
            text: `${team}球迷分布`,
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            left: 'right',
            min: minValue,
            max: maxValue,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['High', 'Low'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false, title: '数据'},
                restore: {title: '重置'},
                saveAsImage: {title: '保存'}
            }
        },
        series: [
            {
                name: '全国球迷分布',
                type: 'map',
                roam: true,
                map: 'china',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: data
            }
        ]
    };
    return (
        <Space direction={'vertical'} style={{ width: '100%', paddingTop: '2%' }}>
            <TeamInput onSearchTeam={onSearch} />
            <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '80vh' }} />
        </Space>
    );
}

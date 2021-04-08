import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import chinaJson from './china.json';

export default function UserMap() {
    echarts.registerMap('china', chinaJson);
    const data = [
        {name: '北京市', value: 4822023},
        {name: '天津市', value: 731449},
        {name: '河北省', value: 6553255},
        {name: '山西省', value: 2949131},
        {name: '内蒙古自治区', value: 38041430},
        {name: '辽宁省', value: 5187582},
        {name: '吉林省', value: 3590347},
        {name: '黑龙江省', value: 917092},
        {name: '上海市', value: 632323},
        {name: '江苏省', value: 19317568},
        {name: '浙江省', value: 9919945},
        {name: '安徽省', value: 1392313},
        {name: '福建省', value: 1595728},
        {name: '江西省', value: 12875255},
        {name: '山东省', value: 6537334},
        {name: '河南省', value: 3074186},
        {name: '湖北省', value: 2885905},
        {name: '湖南省', value: 4380415},
        {name: '广东省', value: 4601893},
        {name: '广西壮族自治区', value: 1329192},
        {name: '海南省', value: 5884563},
        {name: '重庆市', value: 6646144},
        {name: '四川省', value: 9883360},
        {name: '贵州省', value: 5379139},
        {name: '云南省', value: 2984926},
        {name: '西藏自治区', value: 6021988},
        {name: '陕西省', value: 1005141},
        {name: '甘肃省', value: 1855525},
        {name: '青海省', value: 2758931},
        {name: '宁夏回族自治区', value: 1320718},
        {name: '新疆维吾尔自治区', value: 8864590},
        {name: '台湾省', value: 2085538},
        {name: '香港特别行政区', value: 19570261},
        {name: '澳门特别行政区', value: 9752073},
        {name: '南海诸岛', value: 699628},
    ];
    const option = {
        title: {
            text: '全国球迷分布',
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
            min: 500000,
            max: 38000000,
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
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
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
        <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '100vh' }} />
    );
}

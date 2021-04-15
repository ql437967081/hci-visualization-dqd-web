import React from 'react';
import { Space, Spin } from 'antd';
import ReactEcharts from 'echarts-for-react';
import area from './area';
import { getAreaCommentsTime } from '../../api/allApi';
import hours from '../comments-time/hours';

export default class AreaCommentsTime extends React.Component {
    state = {
        dataList: [],
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true });
        getAreaCommentsTime(data => {
            const dataList = area.map(p => ({
                name: p,
                type: 'line',
                data: data[p]
            }));
            this.setState({ loading: false, dataList });
        });
    }

    render() {
        const { loading, dataList } = this.state;
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: area
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {title: '保存'}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: hours
            },
            yAxis: {
                type: 'value'
            },
            series: dataList
        };
        return (
            <Space direction={'vertical'} style={{ width: '100%', paddingTop: '2%' }}>
                <Spin spinning={loading}>
                    <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '80vh' }} />
                </Spin>
            </Space>
        );
    }
}

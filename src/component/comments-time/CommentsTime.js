import React, { useState } from 'react';
import { Space, Spin } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { getCommentsTime } from '../../api/allApi';
import TeamInput from '../team-input/TeamInput';
import hours from './hours';


export default function CommentsTime() {
    const [teamList, setTeamList] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSearch = team => {
        if (!team) return;
        setLoading(true);
        getCommentsTime(team, data => {
            console.log(`搜索${team}球迷分布`);
            setTeamList(teamList.concat(team));
            setDataList(dataList.concat({
                name: team,
                type: 'line',
                data
            }));
            setLoading(false);
        });
        console.log(`搜索${team}球迷评论时间分布`);
    };

    const option = {
        title: {
            text: '球迷评论时间分布'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: teamList
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
            <TeamInput onSearchTeam={onSearch} />
            <Spin spinning={loading}>
                <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '80vh' }} />
            </Spin>
        </Space>
    );
}

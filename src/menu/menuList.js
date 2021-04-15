import React from 'react';
import UserMap from '../component/user-map/UserMap';
import CommentsHeatWords from '../component/comments-heat-words/CommentsHeatWords';
import CommentsTime from '../component/comments-time/CommentsTime';
import AreaCommentsTime from '../component/area-comments-time/AreaCommentsTime';

const menuList = [
    {
        title: '用户地图',
        key: '/user-map',
        component: <UserMap />
    },
    {
        title: '评论热词',
        key: '/comments-heat-words',
        component: <CommentsHeatWords />
    },
    {
        title: '球队评论时间分布',
        key: '/comments-time',
        component: <CommentsTime />
    },
    {
        title: '地域评论时间分布',
        key: '/area-comments-time',
        component: <AreaCommentsTime />
    }
];

export default menuList;

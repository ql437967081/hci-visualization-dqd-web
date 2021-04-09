import React from 'react';
import UserMap from '../component/user-map/UserMap';
import CommentsHeatWords from '../component/comments-heat-words/CommentsHeatWords';

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
    }
];

export default menuList;

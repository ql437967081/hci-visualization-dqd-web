import React from 'react';
import { Layout, Space } from 'antd/lib/index';
import HomeMenu from '../menu/HomeMenu';

const { Header, Content, Footer } = Layout;

export default function MainLayout ({ children }) {
    return (
        <Layout  style={{ minHeight: '100vh' }}>
            <Header>
                <Space align={'center'} size={'large'}>
                    <img src={'logo.png'} alt={''} width={30} height={30} />
                    <HomeMenu />
                </Space>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>版权所有：南京大学2021高级人机交互 葛宇组 懂球帝可视化项目</Footer>
        </Layout>
    );
}

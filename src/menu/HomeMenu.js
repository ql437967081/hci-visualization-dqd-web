import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import menuList from './menuList';

class HomeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: null,
            menuItems: this.renderMenuItems()
        };
    }

    renderMenuItems = () => {
        return menuList.map(({ title, key }) => (
            <Menu.Item key={key}>
                <Link to={key}>{title}</Link>
            </Menu.Item>
        ));
    };

    componentDidMount() {
        this.handleMenuPath();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleMenuPath();
    }

    handleMenuPath = () => {
        const { pathname } = this.props.location;
        if (pathname !== this.state.selectedKey) {
            this.setState({ selectedKey: pathname});
        }
    };

    onSelect = x => this.setState({ selectedKey: x.selectedKeys[0] });

    render() {
        const { selectedKey, menuItems } = this.state;
        return (
            <Menu
                theme="dark" mode="horizontal"
                selectedKeys={selectedKey ? [selectedKey] : []}
                onSelect={this.onSelect}
            >
                {menuItems}
            </Menu>
        );
    }
}

export default withRouter(HomeMenu);

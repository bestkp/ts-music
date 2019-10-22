import React, {Component} from 'react'
import {Menu} from "antd";
import {menuData} from './data'
import * as styles from "./index.module.scss";

const {SubMenu} = Menu;

interface IProps {
}

interface IState {
    current: string
}

export default class MenuComponent extends Component<IProps, IState> {
    state = {
        current: '推荐',
    };

    handleClick = (e: { key: any; }) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className={styles.menuWrapper}>
                <Menu theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    {
                        menuData.map(md => {
                            return md.children ? (
                                <SubMenu
                                    key={md.label}
                                    title={
                                        <span className="submenu-title-wrapper">
                                            {md.label}
                                        </span>
                                    }
                                >
                                    {
                                        md.children.map(mdc => <Menu.Item key={mdc.label}>{mdc.label}</Menu.Item>)
                                    }
                                </SubMenu>
                            ) : (
                                <Menu.Item key={md.label}>
                                    {md.label}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}

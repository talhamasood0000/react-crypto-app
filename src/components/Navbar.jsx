import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, MonitorOutlined } from '@ant-design/icons';
import icon from "../images/icon.jfif";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar source={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
            <Link to="/">Cryptography</Link>
            </Typography.Title>
            <Button className="menu-control-container">
            </Button>
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MonitorOutlined/>}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar;
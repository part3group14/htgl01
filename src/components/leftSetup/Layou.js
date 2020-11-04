import React from 'react'
import './Layou.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class Layou extends React.Component {

  constructor(props) {
    super()
    this.state = {
    }
  }
  render = () => {
    return (
      <Layout>
    <Content>
      <Layout className="site-layout-background">
        <Sider className="site-layout-background" width={220} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme="dark"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="项目管理">
              <Menu.Item key="1">项目列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="文章管理">
              <Menu.Item key="5">文章类型列表</Menu.Item>
              <Menu.Item key="6">违章列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="公告管理">
              <Menu.Item key="9">公告类型</Menu.Item>
              <Menu.Item key="10">公告列表</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </Content>
  </Layout>
    )
  }
}

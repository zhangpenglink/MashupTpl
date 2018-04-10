import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import Todo from './Todos'

export default class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            collapsed: false
        }
    }
    render(){
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Content  style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                <Todo/>
                                ...
                                <br />
                                Really
                                <br />...<br />...<br />...<br />
                                long
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />
                                content
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
                <style jsx>{`
                    #components-layout-demo-fixed-sider .logo {
                      height: 32px;
                      background: rgba(255,255,255,.2);
                      margin: 16px;
                    }
                `}</style>
            </div>
        )
    }
}
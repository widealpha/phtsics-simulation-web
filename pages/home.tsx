import {Divider, Drawer, Flex, Layout, Space, Image} from "antd";
import {useState} from "react";
import {
    CaretDownOutlined, CaretUpOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import SettingMenu from "@/components/SettingMenu";
import LogArea from "@/components/LogArea";
import {white} from "next/dist/lib/picocolors";
import {BACKGROUND_COLOR, CARD_COLOR, DIVIDER_COLOR, PRIMARY_COLOR} from "@/constants/colors";

export default function Home() {
    const [drawOpen, setDrawOpen] = useState(true)
    const [showLogArea, setShowLogArea] = useState(true)
    const [showSettingMenu, setShowSettingMenu] = useState(true)
    const showDrawer = () => {
        setDrawOpen(true);
    };

    const onClose = () => {
        setDrawOpen(false);
    };
    return (
        <div>
            <Layout style={{height: "100vh"}}>
                <Layout.Sider width="400px" style={{display: showSettingMenu ? 'block' : 'none'}}>
                    <SettingMenu show={showSettingMenu}></SettingMenu>
                </Layout.Sider>
                <Divider type="vertical"
                         style={{background: BACKGROUND_COLOR, height: '100%', borderColor: DIVIDER_COLOR, margin: 0}}/>
                <Layout.Content style={{height: '100%', background: BACKGROUND_COLOR}}>
                    <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <Flex vertical={false} style={{background: CARD_COLOR}}>
                            <MenuOutlined className={'index-menu-icon'}
                                          onClick={() => setShowSettingMenu(!showSettingMenu)}
                                          style={{color: PRIMARY_COLOR, fontSize: "x-large", padding: "20px"}}/>
                            <h1 style={{color: PRIMARY_COLOR}}>物理模拟</h1>
                        </Flex>
                        <Divider style={{height: 2, margin: 0, background: DIVIDER_COLOR}}/>
                        <div style={{
                            flex: 1,
                            background: CARD_COLOR,
                            width: '100%',
                            marginBottom: 0,
                            marginTop: 0,
                        }}>
                            <center style={{margin: 20}}>
                                <Image style={{background: 'white'}} src={'/next.svg'} alt={''} width={200}
                                       height={200}/>
                            </center>
                        </div>
                        <div style={{marginTop: 'auto', marginBottom: 0}}>
                            <LogArea log={
                                '✓ Compiled in 4.2s (4055 modules)\n' +
                                '✓ Compiled in 4.2s (4055 modules)\n' +
                                '✓ Compiled in 4.2s (4055 modules)\n' +
                                '✓ Compiled in 4.2s (4055 modules)\n' +
                                '✓ Compiled in 4.2s (4055 modules)\n' +
                                '✓ Compiled in 4.2s (4055 modules)\n'
                            }/>
                        </div>
                    </div>
                </Layout.Content>
            </Layout>
        </div>
    );
}
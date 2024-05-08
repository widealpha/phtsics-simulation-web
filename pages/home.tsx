import {Drawer, Layout} from "antd";
import {useState} from "react";
import {
    MenuOutlined,
} from '@ant-design/icons';
import SettingMenu from "@/components/setting-menu";

export default function Home() {
    const [drawOpen, setDrawOpen] = useState(true)
    const showDrawer = () => {
        setDrawOpen(true);
    };

    const onClose = () => {
        setDrawOpen(false);
    };
    return (
        <>
            <Layout>
                <MenuOutlined className={'index-menu-icon'} onClick={showDrawer}/>
                <Layout.Sider>
                    {drawOpen && <Drawer
                        open={drawOpen}
                        closable={false}
                        onClose={onClose}
                        placement="left"
                        width={800}
                        styles={{body: {padding: '0px'}}}
                    >
                        <SettingMenu></SettingMenu>
                    </Drawer>}
                </Layout.Sider>
                <Layout.Content>
                    <p>Welcome to the home page.</p>
                </Layout.Content>
            </Layout>
        </>
    );
}
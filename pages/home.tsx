import {useState} from "react";
import SettingMenu from "@/components/SettingMenu";
import LogArea from "@/components/LogArea";
import {BACKGROUND_COLOR, CARD_COLOR, DIVIDER_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import {Container, Divider, ListItem, ListItemIcon, ListItemText, ThemeProvider} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import Image from "next/image";

import {createTheme} from '@mui/material/styles';

export default function Home() {
    const theme = createTheme({
        palette: {
            primary: {
                main: PRIMARY_COLOR,
            },
        },
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        // "&.Mui-selected": {},
                        '&.MuiTab-root': {
                            color: '#999999', // 未选中状态下的文字颜色
                        },
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input': {
                            color: PRIMARY_COLOR, // 这里更改字体颜色
                        },
                        color: DIVIDER_COLOR,
                    }
                }
            }
        }
    });

    const [showSettingMenu, setShowSettingMenu] = useState(true)
    return (
        <ThemeProvider theme={theme}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{
                    width: 400,
                    height: '100vh',
                    display: showSettingMenu ? 'block' : 'none',
                    background: BACKGROUND_COLOR
                }}>
                    <SettingMenu/>
                </div>
                <Divider orientation="vertical"
                         style={{
                             background: BACKGROUND_COLOR,
                             height: '100vh',
                             borderColor: DIVIDER_COLOR,
                             margin: 0
                         }}/>
                <div style={{display: "flex", flexDirection: 'column', width: '100vw'}}>
                    <ListItem style={{background: CARD_COLOR}}>
                        <ListItemIcon>
                            <MenuOutlined className={'index-menu-icon'}
                                          onClick={() => setShowSettingMenu(!showSettingMenu)}
                                          style={{color: PRIMARY_COLOR, fontSize: "x-large", padding: "20px"}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <h2 style={{color: PRIMARY_COLOR}}>物理模拟</h2>
                        </ListItemText>
                    </ListItem>
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
            </div>
        </ThemeProvider>
    );
}
import React, {useState} from "react";
import GeometrySetting from "@/components/settings/GeometrySetting";
import {CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import {Tab, Tabs} from "@mui/material";
import CustomTabPanel from "@/components/CustomTabPanel";
import TrainingSettings from "@/components/settings/TrainingSettings";
import DatasetSetting from "@/components/settings/DatasetSetting";
import NeuralNetworkSetting from "@/components/settings/NeuralNetworkSetting";

const menuItems = [
    {title: '几何', children: ['软件绘制', '外部导入', '导出几何数据', '几何预处理', '网格设置']},
    {title: '数据集', children: ['人工数据标注', '外部数据导入', '数据预处理']},
    {title: '神经网络', children: ['图像化设置神经网络', '外部代码导入', '控制方程输入', '损失函数设置']},
    {title: '训练设置', children: ['超参数设置', '模型保存设置', '并行训练设置']},
    {title: '推理设置', children: ['模型加载设置', '输入条件设置', '超参数设置', '并行推理设置']},
    {title: '后处理', children: ['数据归一化与还原', '拟合信号处理等', '制作多图或动画', '结果保存']},
];

export default function SettingMenu() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div style={{
            boxSizing: 'border-box',
            padding: 10,
        }}>
            <Tabs
                value={value} onChange={handleChange} aria-label="tabs"
                TabIndicatorProps={{style: {background: PRIMARY_COLOR}}}
                style={{color: PRIMARY_COLOR}}
            >
                <Tab label="几何"  {...a11yProps(0)}  />
                <Tab label="数据集"  {...a11yProps(1)}  />
                <Tab label="神经网络"  {...a11yProps(2)}  />
                <Tab label="训练设置"  {...a11yProps(3)}  />
                <Tab label="推理设置"  {...a11yProps(4)}  />
                <Tab label="后处理"  {...a11yProps(5)}  />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <GeometrySetting/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <DatasetSetting/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <NeuralNetworkSetting/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <TrainingSettings/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                推理设置
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                后处理
            </CustomTabPanel>
        </div>);
}
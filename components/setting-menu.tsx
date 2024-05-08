import {Flex} from "antd";
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import {useState} from "react";

const menuItems = [
    {title: '几何', children: ['软件绘制', '外部导入', '导出几何数据', '几何预处理', '网格设置']},
    {title: '数据集', children: ['人工数据标注', '外部数据导入', '数据预处理']},
    {title: '神经网络', children: ['图像化设置神经网络', '外部代码导入', '控制方程输入', '损失函数设置']},
    {title: '训练设置', children: ['超参数设置', '模型保存设置', '并行训练设置']},
    {title: '推理设置', children: ['模型加载设置', '输入条件设置', '超参数设置', '并行推理设置']},
    {title: '后处理', children: ['数据归一化与还原', '拟合信号处理等', '制作多图或动画', '结果保存']},
];

export default function SettingMenu() {
    const [current, setCurrent] = useState(0)
    return (
        <div style={{
            backgroundColor: '#091743',
            padding: '20px',
            overflow: 'auto',
            height: '100%',
            color: 'white',
        }}>
            <Tabs tabBarStyle={{color: 'white', textDecorationColor: 'white'}}
                  items={menuItems.map((item, index) => {
                      return {
                          'key': index.toString(), 'label': item.title,
                          'children': [...item.children.map((item, index) => {
                              return (
                                  <p key={index}>{item}</p>
                              )
                          })]
                      }
                  })}>
            </Tabs>
        </div>);
}
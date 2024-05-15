import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {ACCORDION_COLOR, CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import {
    Button,
    FormControl,
    InputLabel,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select, Switch, TextField,
    Typography
} from "@mui/material";
import UploadButton from "@/components/settings/UploadButton";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import WifiIcon from "@mui/icons-material/Wifi";
import {useState} from "react";

export default function DatasetSetting() {
    //归一化选项
    const [standardization, setStandardization] = useState(true);
    const [shuffle, setShuffle] = useState(true);
    return (
        <div>
            <UploadButton title={'代码导入'}/>
            <Accordion style={{background: ACCORDION_COLOR, marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="dataset-panel-content"
                    id="dataset-panel-header">
                    <Typography style={{color: PRIMARY_COLOR}}>数据集设置</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField id="filled-basic" label="训练集路径" variant="filled"/>
                    <div style={{height: 10}}></div>
                    <TextField id="filled-basic" label="测试集路径" variant="filled"/>
                    <ListItem>
                        {/*<ListItemIcon>*/}
                        {/*    <WifiIcon/>*/}
                        {/*</ListItemIcon>*/}
                        <ListItemText style={{color: PRIMARY_COLOR}} id="switch-list-label-standardization"
                                      primary="归一化"/>
                        <Switch
                            style={{color: PRIMARY_COLOR}}
                            edge="end"
                            onChange={() => setStandardization(!standardization)}
                            checked={standardization}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-standardization',
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        {/*<ListItemIcon>*/}
                        {/*    <WifiIcon/>*/}
                        {/*</ListItemIcon>*/}
                        <ListItemText style={{color: PRIMARY_COLOR}} id="switch-list-label-standardization"
                                      primary="Shuffle"/>
                        <Switch
                            style={{color: PRIMARY_COLOR}}
                            edge="end"
                            onChange={() => setShuffle(!shuffle)}
                            checked={shuffle}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-standardization',
                            }}
                        />
                    </ListItem>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
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

const dimensions = [
    1, 2, 4, 8, 16, 32, 64
]
const channel = [
    1, 2, 3
]

export default function NeuralNetworkSetting() {
    return (
        <div>
            <UploadButton title={'代码导入'}/>
            <Accordion style={{background: ACCORDION_COLOR, marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="dataset-panel-content"
                    id="dataset-panel-header">
                    <Typography style={{color: PRIMARY_COLOR}}>神经网络参数设置</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="维度数目"
                        defaultValue="1">
                        {dimensions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div style={{height: 10}}></div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="通道数目"
                        defaultValue="1"
                    >
                        {channel.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
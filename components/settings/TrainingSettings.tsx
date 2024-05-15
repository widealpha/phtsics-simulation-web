import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import {CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {styled} from "@mui/system";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadButton from "@/components/settings/UploadButton";

const betaSchedules = ['sigmoid', 'linear', 'cosine',];

export default function TrainingSetting() {
    const [size, setSize] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };
    return (
        <div>
            <UploadButton title={'代码导入'}/>
            <Accordion style={{background: '#374b5a', marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography style={{color: PRIMARY_COLOR}}>超参数设置</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="batch-size-input"
                        label="批量大小"
                        defaultValue="1"
                    />
                    <div style={{height: 10}}/>
                    <TextField
                        id="learning-rate-input"
                        label="学习率"
                        defaultValue="8e-5"
                    />
                    <div style={{height: 10}}/>
                    <TextField
                        id="total-step-input"
                        label="总步数"
                        defaultValue="10000"
                    />
                    <div style={{height: 10}}/>
                    <TextField
                        id="diffusion-time-step-input"
                        label="Diffusion时间步"
                        defaultValue="1000"
                    />
                    <div style={{height: 10}}/>
                    <TextField
                        id="beta-schedule-select"
                        select
                        label="beta_schedule"
                        defaultValue='1'
                    >
                        {betaSchedules.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{background: '#374b5a', marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color: PRIMARY_COLOR}}>模型保存设置</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="save-frequency"
                        label="保存频率"
                        defaultValue="1000"
                    />
                    <div style={{height: 10}}/>
                    <TextField
                        id="save-path"
                        label="保存路径"
                        defaultValue="path/save"
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
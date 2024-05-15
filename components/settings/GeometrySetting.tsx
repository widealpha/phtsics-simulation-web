import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {ACCORDION_COLOR, CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {styled} from "@mui/system";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

//['软件绘制', '外部导入', '导出几何数据', '几何预处理', '网格设置']
export default function GeometrySetting() {
    const [size, setSize] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };
    return (
        <div>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon/>}
                style={{background: CARD_COLOR, color: PRIMARY_COLOR, padding: 10, marginBottom: 20,}}
            >
                外部导入
                <VisuallyHiddenInput type="file"/>
            </Button>

            <Accordion style={{background: ACCORDION_COLOR, marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography style={{color: PRIMARY_COLOR}}>几何预处理</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">处理选项</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="处理选项"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{background: ACCORDION_COLOR, marginBottom: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color: PRIMARY_COLOR}}>网格设置</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">网格设置</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="处理选项"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";


//['软件绘制', '外部导入', '导出几何数据', '几何预处理', '网格设置']
export default function GeometrySetting() {
    return (
        <div>
            <Accordion >
                <AccordionSummary
                    // expandIcon={<ArrowDownwardIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color: PRIMARY_COLOR}}>几何预处理</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={0}
                            label="处理选项"
                            onChange={() => {
                            }}
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
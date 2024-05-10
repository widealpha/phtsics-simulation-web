import {Collapse, CollapseProps, Divider} from "antd";
import {CARD_COLOR, DIVIDER_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import CodeMirror from '@uiw/react-codemirror';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Typography} from "@mui/material";

export default function LogArea({log}: { log: string }) {
    console.log(log)
    const logArea = (
        <CodeMirror theme={'dark'} value={log}/>)
    return (
        <>
            <div style={{background: CARD_COLOR, padding: 20}}>
                <Divider style={{background: DIVIDER_COLOR, margin: 0}}/>
                <Accordion style={{background: CARD_COLOR, color: PRIMARY_COLOR}}>
                    <AccordionSummary style={{paddingLeft: 10}}>
                        <Typography>日志记录</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {logArea}
                    </AccordionDetails>
                </Accordion>
            </div>
        </>

    );
}
import {Button} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {CARD_COLOR, PRIMARY_COLOR} from "@/constants/colors";
import {styled} from "@mui/system";

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

export default function UploadButton({title}: { title: string }) {
    return (<div>
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon/>}
            style={{background: CARD_COLOR, color: PRIMARY_COLOR, padding: 10, marginBottom: 20,}}>
            {title}
            <VisuallyHiddenInput type="file"/>
        </Button>
    </div>);
}
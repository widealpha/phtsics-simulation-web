import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export default function ShowcaseCard({title, content, onClick}: { title: string, content: string, onClick: string }) {
    return (
        <div>
            <Card sx={{width: '20vw'}}>
                <CardMedia
                    sx={{height: 140}}
                    image="/"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button  variant="contained" size="small">查看详情</Button>
                </CardActions>
            </Card>
        </div>
    );
}
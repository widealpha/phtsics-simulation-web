import {PRIMARY_COLOR} from "@/constants/colors";
import ShowcaseCard from "@/components/ShowcaseCard";

export default function ShowcasePage() {
    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <div style={{color: PRIMARY_COLOR, fontSize: 'x-large', paddingLeft: 20}}>
                <h1>精选产品</h1>
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <ShowcaseCard content={'样品1的很多描述.........'} onClick={'adads'} title={'样品1'}/>
                <ShowcaseCard content={'样品2的很多描述.........'} onClick={'adads'} title={'样品2'}/>
                <ShowcaseCard content={'样品3的很多描述.........'} onClick={'adads'} title={'样品3'}/>
            </div>
        </div>
    );
}
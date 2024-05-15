import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main>
            <div>
                <Link style={{color: "white"}} href={'/home'}>
                    主页面
                </Link>
            </div>
            <div>
                <Link style={{color: "white"}} href={'/showcase'}>
                    展示界面
                </Link>
            </div>

        </main>
    );
}

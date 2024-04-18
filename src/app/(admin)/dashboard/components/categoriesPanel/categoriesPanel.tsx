'use client'
import Image from "next/image";
import "../../styles/components/_cover.scss";
import Search from "../search/search";
import PlusFolder from "@/public/admin/svg/folder-plus-svgrepo-com.svg";
import "../../styles/components/categoriesPanel.scss"
import Folder from "@/public/admin/svg/folder.svg";
interface Props {
    dataPanel: {
        text: string;
        categories: []
    };
}
export default function CategoriesPanel(props: Props) {
    return (
        <div className="categories-panel">
            <div className="cover">
                <div className="title">
                    {props.dataPanel.text}
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Search />
                </div>
                <div className="portlet">
                    <div className="portlet-top">
                        <div className="title" style={{fontSize: "1em"}}>
                            {props.dataPanel.text} categories
                        </div>
                        <div className="right">
                            <Image src={PlusFolder} alt="folder-icon"/>
                        </div>
                    </div>
                    <div className="portlet-bottom">
                        <div className="portlet-contain">
                            <div className="portlet-item">
                                <Image src={Folder} alt="folder"/>
                                <div className="text">Test 1</div>
                            </div>
                            <div className="portlet-item">
                                <Image src={Folder} alt="folder"/>
                                <div className="text">Test 1</div>
                            </div>
                            <div className="portlet-item">
                                <Image src={Folder} alt="folder"/>
                                <div className="text">Test 1</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
import Image from "next/image";
import SearchIcon from "@/public/admin/svg/search.svg";
import "../../styles/components/_search.scss";
export default function Search() {
    return (
        <div className="search">
            <input type="text" className="form-control rewrite-input-search" id="categories-search" placeholder="Search cateogry"></input>
            <Image src={SearchIcon} alt="search-icon"/>
        </div>
    )
}
import Image from "next/image";
import SearchIcon from "@/public/admin/svg/search.svg";
import "@admin/styles/components/_search.scss";
import { useDispatch, useSelector } from "react-redux";
import { PaginationInterface } from "../../../lib/type/pagination";
import { useEffect, useState } from "react";
import { targets } from '../../../../(client)/account/_components/sideBar';
import _ from "lodash";
import { setPartPagination } from "../../../lib/redux/reducer/partReducer";
export default function Search() {
    const [searchContent, setSearchContent] = useState('')
    const dispatch = useDispatch()
    const pagination: PaginationInterface = useSelector((state: any) => state.part.pagination)
    const handleInput = (event: any) => {
        if (event.key === 'Enter') {
            const newPagination = _.cloneDeep(pagination)
            newPagination.search = searchContent
            dispatch(setPartPagination(newPagination))
        }
      };
      useEffect(() => {
        setSearchContent(pagination.search)
      }, [])
    return (
        <div className="search">
            <input
            value={searchContent}
            onKeyDown={handleInput}
            onChange={(event: any) => {
                setSearchContent(event.target.value)
            }} type="text" className="form-control rewrite-input-search" id="categories-search" placeholder="Search category"></input>
            <Image style={{cursor: 'pointer'}} onClick={() => {
                 const newPagination = _.cloneDeep(pagination)
                        newPagination.search = searchContent
                        dispatch(setPartPagination(newPagination))
            }}  src={SearchIcon} alt="search-icon"/>
        </div>
    )
}
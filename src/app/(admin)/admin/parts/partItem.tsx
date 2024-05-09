import '@admin/styles/globals.css'
import '@admin/styles/components/_button.scss'
import Link from 'next/link'
import { Part } from './type/Part.class'
import { useDispatch } from 'react-redux'
import { DeletePart } from '../../lib/redux/action/Part/delete'
import { useRouter } from 'next/navigation'
import routes from '../../lib/routes/routes'
interface Props {
    item: Part
}
export default function PartItem({item} : Props) {
    const {push, refresh} = useRouter()
    const dispatch = useDispatch();
    return (
        <div className="part-item">
            <div className="flex items-start">
                <div className="mt-6 radio-btn">
                    <input id="examTimes" name="examTimes" type="checkbox" />
                    <span className="checkmark"></span>
                </div>
                <div className="right-bottom-btns">
                    <Link href="#addition" type="button" className="btn  operation-btn">
                        Additional{' '}
                    </Link>
                    <Link href={`/admin/parts/edit/${item.id}`} data-action="edit-question" type="button" className="btn operation-btn">
                        Edit{' '}
                    </Link>
                    <Link onClick={() => {
                        const isBrowser = typeof window !== 'undefined'
                        if (isBrowser && window.confirm('If you delete this part, all data in the part will be deleted too. Are you sure?')) {
                        dispatch(DeletePart(item.id))
                        }
                    }} href="#" type="button" className="btn operation-btn">
                        Delete{' '}
                    </Link>
                </div>

                <div className="row question ml-10" style={{ marginTop: 0 }}>
                    <div className="col-xs-12  col-sm-12 col-md-12">
                        <div className="row" style={{ marginTop: 0 }}>
                            <div className="col-xs-12">
                                <div className="row-box row-ques-detail">
                                    <p className="ques-title need-max-height">
                                        <span className="ques-id">{item.partNumber}</span>
                                        <span className="ques-type ques-single type_4">
                                            {item.skill}
                                        </span>
                                        <span className="ml-5">{item.title}</span>
                                    </p>
                                    <div className="ques-answers detail-dom">
                                        <div className="detailLabel">
                                            <p />
                                            <div>
                                                {' '}
                                                <span className="labels other" title="Category">
                                                    Category: Default category
                                                </span>
                                                <span className="labels other">
                                                    Update: 2024-04-09 14:29
                                                </span>{' '}
                                            </div>
                                            <p />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

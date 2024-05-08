import '@admin/styles/globals.css'
import '@admin/styles/components/_button.scss'
import Link from 'next/link'
import { Part } from './type/Part.class'
interface Props {
    item: Part
}
export default function PartItem({item} : Props) {

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
                    <Link href={`/admin/questions/edit/${item.id}`} data-action="edit-question" type="button" className="btn operation-btn">
                        Edit{' '}
                    </Link>
                    <Link href="#" type="button" className="btn operation-btn">
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

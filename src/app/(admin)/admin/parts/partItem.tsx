import '@admin/styles/globals.css'
import '@admin/styles/components/_button.scss'
import Link from 'next/link'
import { Part } from './type/Part.class'
import { DeletePart } from '../../lib/redux/action/Part/delete'

import formatter from '../../util/timeFormat'
import { useAppDispatch } from '../../lib/redux/hooks'
import { truncateParagraph } from '../../util/truncate'

interface Props {
    item: Part
}
export default function PartItem({ item }: Props) {
    const dispatch = useAppDispatch()
    return (
        <div className="part-item">
            <div className="flex items-center">
                <div className="">#{item.publicId}</div>
                <div className="right-bottom-btns">
                    <Link href="#addition" type="button" className="btn  operation-btn">
                        Preview
                    </Link>
                    <Link
                        href={`/admin/parts/edit/${item.id}`}
                        data-action="edit-question"
                        type="button"
                        className="btn operation-btn"
                    >
                        Edit
                    </Link>
                    <Link
                        onClick={() => {
                            const isBrowser = typeof window !== 'undefined'
                            if (
                                isBrowser &&
                                window.confirm(
                                    'If you delete this part, all data in the part will be deleted too. Are you sure?',
                                )
                            ) {
                                dispatch(DeletePart(item.id))
                            }
                        }}
                        href="#"
                        type="button"
                        className="btn operation-btn"
                    >
                        Delete{' '}
                    </Link>
                </div>
                <div className="row question ml-10" style={{ marginTop: 0 }}>
                    <div className="col-xs-12  col-sm-12 col-md-12">
                        <div className="row" style={{ marginTop: 0 }}>
                            <div className="col-xs-12">
                                <div className="row-box row-ques-detail">
                                    <div className="ques-title need-max-height flex">
                                        <div className='w-2/5' style={{maxWidth: '180px'}}>
                                            <span style={{fontSize: 14}} className="ques-id">{item.partNumber}</span>
                                            <span style={{fontSize: 14}} className="ques-type ques-single type_4">
                                                {item.skill}
                                            </span>
                                        </div>

                                        <div className="w-3/5"
                                        dangerouslySetInnerHTML={{
                                            __html: truncateParagraph(item.title, 100),
                                        }}
                                        >
                                        </div>
                                    </div>
                                    <div className="ques-answers detail-dom">
                                        <div className="detailLabel">
                                            <p />
                                            <div>
                                                {' '}
                                                <span className="labels other" title="Category">
                                                    Create:{' '}
                                                    {formatter.format(new Date(item.createdAt))}
                                                </span>
                                                <span className="labels other">
                                                    Update:{' '}
                                                    {formatter.format(new Date(item.updatedAt))}
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

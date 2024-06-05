import { Fragment, useEffect, useState } from 'react'
import '@admin/styles/components/_resource.scss'
import Image from 'next/image'

export default function ImageUpload() {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="resource">
            <div className="preview">
                <button
                    type="button"
                    onClick={() => document.getElementById('upload-button')?.click()}
                >
                    Upload Image
                </button>
                <input
                    type="file"
                    id="upload-button"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />

                {typeof image === 'string' ? (
                    // <img/>
                    <Image
                        src={image}
                        alt="Preview"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                        }}
                    />
                ) : (
                    <Fragment></Fragment>
                )}
            </div>
        </div>
    )
}

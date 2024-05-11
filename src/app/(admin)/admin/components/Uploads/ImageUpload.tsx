'use client'
import { useState } from 'react'

export default function ImageUpload() {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            setImage(reader?.result)
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleButtonClick = () => {
        const uploadButton = document.getElementById('upload-button');
        uploadButton?.click();
    }
    return (
        <div>
            <style jsx>{`
                .preview {
                    width: 250px;
                    height: 200px;
                    background: gray;
                    border-radius: 10px;
                    position: relative;
                }
                .preview button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: none;
                    background-color: #0077FF;
                    color: #fff;
                    padding: 10px 14px;
                    border-radius: 5px;
                    cursor: pointer;
                    opacity: 0;
                    transition: all .2s;
                    z-index: 9;
                    font-size: 14px;
                }

                .preview:hover button {
                    opacity: 1;
                }
                .preview:hover img {
                    filter: opacity(.8);
                }

            `}</style>
            <div className="preview">
                <button type="button" onClick={handleButtonClick}>
                    Upload Image
                </button>
                <input
                    type="file"
                    id="upload-button"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />

                {image && <img src={image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "10px"}} />}
            </div>
        </div>
    )
}

import { CloudUploadOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

const CreatePage = () => {
    const [pageName, setPageName] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    const [pageSubtitle, setPageSubtitle] = useState('');
    const [pageImage, setPageImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

    useEffect(() => {
        if (pageImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(pageImage as Blob);
        } else {
            setImagePreview(null);
        }
    }, [pageImage]);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setPageImage(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0] && files[0].type.startsWith('image/')) {
            setPageImage(files[0]);
        }
    };

    return (
        <div>
            <div className='mb-10'>
                <label className='mb-2'>Name</label>
                <input
                    type='text'
                    placeholder='Define page name'
                    className='w-full border-custom_gray_2 border rounded-lg ps-5 p-2'
                    value={pageName}
                    onChange={(e) => setPageName(e.target.value)}
                />
            </div>

            <div className='grid grid-cols-5 gap-10 mb-10'>
                <div className='col-span-3'>
                    <div className='mb-5'>
                        <label className='mb-2'>Title</label>
                        <input
                            type='text'
                            placeholder='Define the title of your page'
                            className='w-full border-custom_gray_2 border rounded-lg ps-5 p-2'
                            value={pageTitle}
                            onChange={(e) => setPageTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='mb-2'>Subtitle</label>
                        <input
                            type='text'
                            placeholder='Define the subtitle of your page'
                            className='w-full border-custom_gray_2 border rounded-lg ps-5 p-2'
                            value={pageSubtitle}
                            onChange={(e) => setPageSubtitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='mb-2'>Explore more link</label>
                        <input type="text" placeholder='Define the explore more link'
                            className='w-full border-custom_gray_2 border rounded-lg ps-5 p-2'
                        />
                    </div>
                </div>

                <div className='col-span-2'>
                    <div>
                        <label className='mb-2'>Image</label>
                        <div
                            className='w-full h-64 bg-custom_gray_3 rounded-lg flex items-center justify-center relative'
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <input
                                type='file'
                                accept='image/*'
                                className='opacity-0 absolute w-full h-full cursor-pointer'
                                onChange={handleFileChange}
                            />
                            {imagePreview ? (
                                <img src={typeof imagePreview === 'string' ? imagePreview : undefined} alt='Preview' className='w-full h-full border border-gray-300 object-cover rounded-lg' />
                            ) : (
                                <div className='flex flex-col items-center'>
                                    <CloudUploadOutlined className='text-4xl mb-4' />
                                    <div className='text-custom_gray_2 text-sm'>Drop your file or <text className='text-tertiary_brand'>Choose File</text> to upload</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full bg-tertiary_brand text-white rounded-md p-2'>
                Save
            </button>
        </div>
    );
};

export default CreatePage;

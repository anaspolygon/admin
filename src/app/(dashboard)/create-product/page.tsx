"use client";
import { Input, Select,Divider  } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { categoryOptions, productTypeOptions } from './data';
const { TextArea } = Input;


const page = () => {
    const [value, setValue] = useState('');

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const editorRef = useRef(null);

    return (
        <div>
            <h1 className="font-lexend-deca text-2xl font-bold">
                Create Product
            </h1>
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Summary</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Edit your product description and necessary information from here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Title</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="Product title" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>SKU</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="Product sku" />
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Product Type</h2>
                            <Select
                                defaultValue="Select"
                                onChange={handleChange}
                                className="w-full"
                                style={{ height: 40 }}
                                options={productTypeOptions}
                            />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Categories</h2>
                            <Select
                                defaultValue="Select"
                                onChange={handleChange}
                                className="w-full"
                                style={{ height: 40 }}
                                options={categoryOptions}
                            />
                        </div>
                    </div>
                    <div>
                    <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Description</h2>
                    <TextArea rows={4} placeholder="" maxLength={6} />
                    </div>
                </div>
            </div>
            <Divider style={{borderColor:"#e3e3e3"}} dashed />
        </div>
    );
};
 
export default page;
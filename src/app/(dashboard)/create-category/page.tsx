"use client";
import { Input, Select, Divider, Radio, Switch, Button } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import FileUpload from '../create-product/components/FileUpload';
import { categoryOptions, productTypeOptions } from '../create-product/data';

const { TextArea } = Input;


const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
};


const page = () => {
    const [value, setValue] = useState('');

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const editorRef = useRef(null);


    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const onChangeSwitch = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };


    return (
        <div>
            <h1 className="font-lexend-deca text-2xl font-bold">
                Create A Category
            </h1>
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Add new category:</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Edit your category information from here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Category Name</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="category name" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Slug</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="slug" />
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Parent Category</h2>
                            <Select
                                defaultValue="Select"
                                onChange={handleChange}
                                className="w-full"
                                style={{ height: 40 }}
                                options={productTypeOptions}
                            />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Display Type</h2>
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
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Upload new thumbnail image</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Upload your product image gallery here</p>
                </div>
                <div className='flex-1'>
                    <FileUpload />
                </div>
            </div>
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className='flex gap-4 items-center justify-end'>
                <Button style={{ height: 48 }}>Save as Draft</Button>
                <Button style={{ height: 48 }} type="primary">Create Category</Button>
            </div>
        </div>
    );
};

export default page;
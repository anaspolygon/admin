"use client";
import { Input, Select, Divider, Radio, Switch, Button } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { categoryOptions, productTypeOptions } from './data';
import FileUpload from './components/FileUpload';
const { TextArea } = Input;
import { useSearchParams } from 'next/navigation'

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
};


const page = () => {
    const [value, setValue] = useState('');

    const searchParams = useSearchParams()

    const edit = searchParams.get('edit')



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
                {
                    edit ? 'Edit Product' : 'Create Product'
                }

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
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Upload new product images</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Upload your product image gallery here</p>
                </div>
                <div className='flex-1'>
                    <FileUpload />
                </div>
            </div>
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Pricing</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Add your product pricing here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Price</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="10" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Cost Price</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="20" />
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Retail Price</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="10" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Sale Price</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="20" />
                        </div>
                    </div>
                </div>
            </div>

            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Inventory Tracking</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Add your product inventory info here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <Radio.Group
                            style={style}
                            onChange={onChange}
                            value={value}
                            options={[
                                { value: 1, label: 'Track inventory for this product' },
                                { value: 2, label: 'Do not track inventory for this product' },
                                { value: 3, label: 'Track inventory by options' },

                            ]}
                        />
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Current Stock Level</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="150" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Low Stock Level</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="50" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Inventory Tracking</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Add your product inventory info here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <Switch defaultChecked onChange={onChangeSwitch} /> <span className='font-inter text-sm text-[#484848]  font-medium'>Fee Shipping</span>
                            <div className='flex-1 mt-5'>
                                <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Current Stock Level</h2>
                                <Input style={{ width: 500, height: 40 }} size="large" placeholder="150" />
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <Switch defaultChecked onChange={onChangeSwitch} /> <span className='font-inter text-sm text-[#484848]  font-medium'>Location Based Shipping</span>
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Location Name</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="location name" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Low Stock Level</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="50" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className="flex  gap-7">
                <div className='w-[500px]'>
                    <h2 className='text-base font-medium font-lexend-deca text-[#111]'>Search Engine Optimization</h2>
                    <p className='mt-2 font-inter text-[#484848]'>Add your product's seo info here</p>
                </div>
                <div className='flex-1'>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Page Title</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="page title" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Meta Keywords</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="meta keywords" />
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mb-7">
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Meta Description</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="meta description" />
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-inter text-sm text-[#484848] mb-1.5 font-medium'>Product URL</h2>
                            <Input style={{ height: 40 }} size="large" placeholder="https://" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider style={{ borderColor: "#e3e3e3" }} dashed />
            <div className='flex gap-4 items-center justify-end'>
                <Button style={{ height: 48 }}>Save as Draft</Button>
                <Button style={{ height: 48 }} type="primary"> {
                    edit ? 'Edit Product' : 'Create Product'
                }
                </Button>
            </div>
        </div>
    );
};

export default page;
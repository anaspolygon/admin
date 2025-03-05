"use client"
import React from "react";
import { Form, Input, InputNumber, Select, DatePicker, Switch, Checkbox, Radio, Slider, Rate, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AntDesignAllForms: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ gender: "male", remember: true }}
      requiredMark={true}
    >
      {/* Text Input */}
      <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Name is required" }]}>
        <Input size="large" placeholder="Enter your name" />
      </Form.Item>

      {/* Email Input */}
      <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
        <Input size="large" placeholder="Enter your email" />
      </Form.Item>

      {/* Password Input */}
      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Password is required" }]}>
        <Input.Password size="large" placeholder="Enter your password" />
      </Form.Item>

      {/* Number Input */}
      <Form.Item label="Age" name="age" rules={[{ required: true, message: "Age is required" }]}>
        <InputNumber size="large" min={18} max={100} style={{ width: "100%" }} />
      </Form.Item>

      {/* Select Dropdown */}
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select size="large" placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      {/* Date Picker */}
      <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: "Select your birth date" }]}>
        <DatePicker size="large" style={{ width: "100%" }} />
      </Form.Item>

      {/* Switch */}
      <Form.Item label="Enable Notifications" name="notifications" valuePropName="checked">
        <Switch />
      </Form.Item>

      {/* Checkbox */}
      <Form.Item name="agree" valuePropName="checked" rules={[{ required: true, message: "You must agree to the terms" }]}>
        <Checkbox >I agree to the terms and conditions</Checkbox>
      </Form.Item>

      {/* Radio Group */}
      <Form.Item label="Membership" name="membership" rules={[{ required: true, message: "Select a membership type" }]}>
        <Radio.Group>
          <Radio value="basic">Basic</Radio>
          <Radio value="premium">Premium</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Slider */}
      <Form.Item label="Satisfaction Level" name="satisfaction">
        <Slider marks={{ 0: "0%", 50: "50%", 100: "100%" }} />
      </Form.Item>

      {/* Rate */}
      <Form.Item label="Rating" name="rating">
        <Rate  />
      </Form.Item>

      {/* File Upload */}
      <Form.Item label="Upload Profile Picture" name="upload">
        <Upload>
          <Button  size="large" icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button  size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntDesignAllForms;

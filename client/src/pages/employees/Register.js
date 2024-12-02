import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees/register",
        values
      );
      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="primary flex flex-col justify-center items-center h-screen">
      <Form layout="vertical w-400 white p-5" onFinish={onFinish}>
        <h1 className="text-2xl">Employee Register</h1>
        <hr />
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Employee Name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Employee ID"
          name="employeeId"
          rules={[
            { required: true, message: "Please input your Employee ID!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: "Please input your Confirm Password!" },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <button className="primary text-white px-5 mt-7 my-2 w-full ">
          Register
        </button>
        <Link to="/login" className="text-black">
          Alreay account ? Login
        </Link>
      </Form>
    </div>
  );
}

export default Register;

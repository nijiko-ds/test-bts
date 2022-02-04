import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

// styling
import "antd/dist/antd.css";

const InputComponent = (props) => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form
        layout='vertical'
        form={form}
        requiredMark={props.required}
        initialValues={{ layout: "vertical" }}
        onValuesChange={(e) => console.log("e", e)}
      >
        <Form.Item
          label={props.label}
          required={props.required}
          tooltip='Input harus diisi'
        >
          <Input
            placeholder='input placeholder'
            onChange={(e) => props.setState(e.target.value)}
            value={props.value}
            type={props.type}
            onKeyDown={(e) =>
              props.type === "number" && e.key === "e" && e.preventDefault()
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputComponent;

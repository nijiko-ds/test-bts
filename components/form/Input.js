import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

// styling
import "antd/dist/antd.css";

const InputComponent = (props) => {
  const [form] = Form.useForm();

  return (
    <div>
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
    </div>
  );
};

export default InputComponent;

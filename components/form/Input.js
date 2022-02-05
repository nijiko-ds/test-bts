import React, { useState } from "react";
import { Form, Input } from "antd";

// styling
import "antd/dist/antd.css";

const InputComponent = (props) => {
  const { label, required, setState, value, type, satuan } = props;

  return (
    <div>
      <Form.Item label={label} required={required} tooltip='Input harus diisi'>
        <Input
          placeholder='input placeholder'
          onChange={(e) => setState(e.target.value)}
          value={value}
          type={type}
          onKeyDown={(e) =>
            type === "number" && e.key === "e" && e.preventDefault()
          }
          size='large'
          addonAfter={satuan}
        />
      </Form.Item>
    </div>
  );
};

export default InputComponent;

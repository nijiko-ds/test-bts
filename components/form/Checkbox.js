import React from "react";
import { Checkbox, Form } from "antd";

const CheckboxComponent = (props) => {
  const [form] = Form.useForm();
  const { label, options, savedValue } = props;
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    localStorage.setItem(`${savedValue}`, checkedValues);
  }

  return (
    <Form form={form} layout="vertical">
      <Form.Item label={label}>
        <Checkbox.Group
          options={options}
          disabled={options.disabled}
          defaultValue={["Apple"]}
          onChange={onChange}
        />
      </Form.Item>
    </Form>
  );
};

export default CheckboxComponent;

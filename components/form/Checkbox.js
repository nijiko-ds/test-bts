import React, { useEffect, useState } from "react";
import { Checkbox, Form } from "antd";

const CheckboxComponent = (props) => {
  const [form] = Form.useForm();
  const { label, options, savedValue } = props;
  const [valyu, setValyu] = useState("");
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    window.localStorage.setItem(`${savedValue}`, checkedValues);
    setValyu(checkedValues);
  }

  useEffect(() => {
    onChange(defaultValyu);
  }, []);

  let defaultValyu = ["Apple"];

  return (
    <Form form={form} layout='vertical'>
      <Form.Item label={label}>
        <Checkbox.Group
          options={options}
          disabled={options.disabled}
          defaultValue={defaultValyu}
          onChange={(e) => onChange(e)}
        />
      </Form.Item>
    </Form>
  );
};

export default CheckboxComponent;

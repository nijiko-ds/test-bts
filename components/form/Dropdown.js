import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

const Dropdown = (props) => {
  const { Option } = Select;
  const { options, savedValue, label, placeholder } = props;

  const [changeValue, setChangeValue] = useState("");
  const [changeSearch, setChangeSearch] = useState("");

  const [form] = Form.useForm();

  function onChange(value) {
    console.log(`selected ${value}`);
    setChangeValue(value);
  }

  function onSearch(val) {
    console.log("search:", val);
    setChangeSearch(val);
  }

  useEffect(() => {
    localStorage.setItem(`${savedValue}`, changeValue);
  }, [changeValue, changeSearch]);

  return (
    <Form form={form} layout="vertical">
      <Form.Item label={label} name="layout">
        <Select
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {options.map((e) => (
            <Option value={e?.value}>{e?.label}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default Dropdown;

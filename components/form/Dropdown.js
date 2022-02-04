import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

const Dropdown = (props) => {
  const { Option } = Select;
  const { options, savedValue, label, placeholder, required, value, setState } =
    props;

  const [changeValue, setChangeValue] = useState("");
  const [changeSearch, setChangeSearch] = useState("");
  const [defaultValyu, setDefaultValyu] = useState("female");

  const [form] = Form.useForm();

  function onChange(value) {
    console.log(`selected ${value}`);
    setChangeValue(value);
    setState(value);
  }

  function onSearch(val) {
    console.log("search:", val);
    setChangeSearch(val);
  }

  useEffect(() => {
    window.localStorage.setItem(`${savedValue}`, changeValue);
  }, [changeValue, changeSearch]);
  console.log("defaultvalue", props.value);
  return (
    <Form.Item
      label={label}
      name='layout'
      required={required}
      tooltip='Input harus diisi'
    >
      <Select
        showSearch
        placeholder={placeholder}
        optionFilterProp='children'
        defaultValue={props.value}
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
  );
};

export default Dropdown;

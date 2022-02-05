import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

const Dropdown = (props) => {
  const { Option } = Select;
  const {
    options,
    savedValue,
    label,
    placeholder,
    required,
    setter,
    defaultValue,
    defaultOpen,
    value,
    className,
    size,
  } = props;

  const [changeValue, setChangeValue] = useState("");
  const [changeSearch, setChangeSearch] = useState("");

  const [form] = Form.useForm();

  function onChange(e) {
    console.log(`selected ${e}`);
    // setChangeValue(value);
    // setState(value);
    setter(e);
  }

  function onSearch(val) {
    console.log("search:", val);
    setChangeSearch(val);
  }

  useEffect(() => {
    window.localStorage.setItem(`${savedValue}`, changeValue);
  }, [changeValue, changeSearch]);
  console.log("options", options);
  return (
    <Form.Item
      //   label={label}
      name='layout'
      required={required}
      tooltip='Input harus diisi'
    >
      <Select
        showSearch
        className={className}
        placeholder={placeholder}
        optionFilterProp='children'
        defaultValue={defaultValue}
        defaultOpen={defaultOpen}
        onChange={(e) => onChange(e)}
        size={size}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {value !== null || label !== null
          ? options?.map((e, id) => (
              <Option key={id} value={e[`${value}`]}>
                {e[`${label}`]}
              </Option>
            ))
          : options?.map((e, id) => (
              <Option key={id} value={e}>
                {e}
              </Option>
            ))}
      </Select>
    </Form.Item>
  );
};

export default Dropdown;

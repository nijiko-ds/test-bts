import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select, Form } from "antd";
import { setBtsMain } from "../../slices/formbts";

const Dropdown = (props) => {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);
  const { Option } = Select;
  const {
    options,
    savedValue,
    withLabel,
    placeholder,
    required,
    setter,
    defaultValue,
    defaultOpen,
    withValue,
    className,
    size,
    section,
    valueToBeSet,
  } = props;

  const [changeValue, setChangeValue] = useState("");
  const [changeSearch, setChangeSearch] = useState("");

  const [form] = Form.useForm();
  let valueRedux = btsMain?.[`section${section}`]?.[`${valueToBeSet}`] ?? null;

  function onChange(e) {
    console.log(`selected ${e}`);
    // setState(value);
    setter !== undefined ? setter(e) : setChangeValue(e);
  }

  function onSearch(val) {
    console.log("search:", val);
    setChangeSearch(val);
  }

  // console.log("redux yang lg terpanggil ", valueRedux ?? null);
  // set ke redux kl changeValue berubah
  useEffect(() => {
    dispatch(
      setBtsMain({
        ...btsMain,
        ["section" + `${section}`]: {
          ...btsMain["section" + `${section}`],
          [`${valueToBeSet}`]: `${changeValue}`,
        },
      })
    );
    // setChangeValue(btsMain?.[`section${section}`]?.[`${valueToBeSet}`]);
  }, [changeValue, changeSearch]);

  // console.log("changeValue", changeValue);
  return (
    // <Form.Item
    //   //   label={label}
    //   name="layout"
    //   required={required}
    //   tooltip="Input harus diisi"
    // >
    <Select
      showSearch
      className={className}
      placeholder={placeholder}
      optionFilterProp='children'
      defaultValue={
        defaultValue ?? btsMain?.[`section${section}`]?.[`${valueToBeSet}`]
      }
      value={
        defaultValue ?? btsMain?.[`section${section}`]?.[`${valueToBeSet}`]
      }
      defaultOpen={defaultOpen}
      onChange={(e) => {
        onChange(e);
        console.log(e);
      }}
      size={size}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {withValue !== null || withLabel !== null
        ? options?.map((e, id) => {
            return (
              <Option
                key={id}
                value={e[`${withValue}`]}
                selected={valueRedux === withValue ? true : false}
              >
                {e[`${withLabel}`]}
              </Option>
            );
          })
        : options?.map((e, id) => (
            <Option
              key={id}
              value={e}
              selected={valueRedux === withValue ? true : false}
            >
              {e}
            </Option>
          ))}
    </Select>
    // </Form.Item>
  );
};

export default Dropdown;

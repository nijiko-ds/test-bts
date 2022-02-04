import React from "react";
import { DatePicker, Form } from "antd";

const Date = (props) => {
  const [form] = Form.useForm();
  const { savedValue, label } = props;

  function onChange(date, dateString) {
    console.log(date, dateString);
    localStorage.setItem(`${savedValue}`, date);
  }

  return (
    <Form form={form} layout="vertical">
      <Form.Item label={label} name="layout">
        <DatePicker onChange={onChange} />
      </Form.Item>
    </Form>
  );
};

export default Date;

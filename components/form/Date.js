import React from "react";
import { DatePicker, Form } from "antd";

const Date = (props) => {
  const moment = require("moment");
  const [form] = Form.useForm();
  const { savedValue, value, setState, label } = props;

  const dateFormat = "YYYY/MM/DD";
  // function onChange(date, dateString) {
  //   console.log(date, dateString);
  //   setState(moment(date).format("DD/MM/YYYY"));
  //   // localStorage.setItem(`${savedValue}`, date);
  // }
  console.log("tanggaldalamdate.js", typeof value, value);
  const valueString = moment(`${value}`, "YYYY/MM/DD");
  return (
    <Form.Item label={label} name='layout'>
      <DatePicker
        onChange={(date, dateString) => setState(dateString)}
        defaultValue={valueString}
        format={dateFormat}
      />
    </Form.Item>
  );
};

export default Date;

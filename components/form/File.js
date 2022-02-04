import React, { useState } from "react";
import { Upload, Button, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const File = (props) => {
  const [form] = Form.useForm();
  const { label } = props;
  const [fileList, setfileList] = useState([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ]);
  const handleChange = (info) => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setfileList({ fileList });
  };
  const uploadProperties = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Form form={form} layout="vertical">
      <Form.Item label={label}>
        <Upload {...uploadProperties} fileList={fileList}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default File;

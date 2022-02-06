import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const UploadComponent = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    console.log("info handle change ", info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const uploadButton = () => {
    return (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
  };

  console.log("what is this image ", imageUrl);

  return (
    <div>
      <Upload
        name='avatar'
        listType='text'
        className='avatar-uploader'
        showUploadList={false}
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={beforeUpload}
        onChange={(e) => handleChange(e)}
      >
        {/* {imageUrl !== "" ? (
          <img src={imageUrl} alt='avatar' style={{ width: "100%" }} />
        ) : (
          uploadButton()
        )} */}
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
};

export default UploadComponent;

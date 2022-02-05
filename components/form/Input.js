import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtsMain } from "../../slices/formbts";
import { Form, Input } from "antd";

// styling
import "antd/dist/antd.css";

const InputComponent = (props) => {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);

  const {
    showLabel,
    label,
    fakelabel,
    section,
    required,
    value,
    type,
    prefix,
    satuan,
    isExtraInput,
    disabled,
    placeholder,
    segment,
    alttype,
    message,
    warning,
    asterisk,
    asterisk2,
    link,
  } = props;

  // variables
  var _lable = showLabel !== false ? fakelabel ?? label : false;

  return (
    <div className={isExtraInput ? "w-6/12" : "w-full"}>
      <Form layout='vertical'>
        <Form.Item
          label={_lable}
          required={required}
          tooltip='Input harus diisi'
          validateStatus={message ? "warning" : warning ? "error" : false}
          help={message ?? warning ?? false}
        >
          <Input
            placeholder={placeholder ?? label}
            onChange={(e) => {
              console.log(
                "label input ",
                label
                  .replace(/[^a-zA-Z0-9 ]/g, "")
                  .replace(/\s+/g, "")
                  .toLowerCase()
              );
              if (segment) {
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + section]: {
                      ...eval("btsMain.section" + section),
                      [label
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .replace(/\s+/g, "")
                        .toLowerCase() +
                        segment
                          .replace(/[^a-zA-Z0-9 ]/g, "")
                          .replace(/\s+/g, "")
                          .toLowerCase() ?? ""]:
                        alttype === "number"
                          ? e.target.value.replace(/[^0-9/]/g, "")
                          : e.target.value,
                    },
                  })
                );
              } else {
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + section]: {
                      ...eval("btsMain.section" + section),
                      [label
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .replace(/\s+/g, "")
                        .toLowerCase()]:
                        alttype === "number"
                          ? e.target.value.replace(/[^0-9/]/g, "")
                          : e.target.value,
                    },
                  })
                );
              }
            }}
            value={value}
            type={type}
            onKeyDown={(e) =>
              type === "number" && e.key === "e" && e.preventDefault()
            }
            size='large'
            addonBefore={prefix}
            addonAfter={satuan}
            disabled={disabled}
          />
          {asterisk && <p className={`cBi2 pt-2`}>* {asterisk}</p>}

          {asterisk2 && <p className={`cBi2 pt-2`}>* {asterisk2}</p>}
          {link && (
            <a className={``} href={link} target='_blank'>
              {link}
            </a>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputComponent;

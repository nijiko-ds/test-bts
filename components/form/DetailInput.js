import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtsMain } from "../../slices/formbts";

function DetailInput(props) {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);

  return (
    <div className='flex flex-col grow'>
      <div>
        {props.showLabel !== false && (
          <label className='px-0'>
            {props.fakelabel ?? props.label}
            {props.required && props.required === true ? (
              <span style={{ color: "red", fontWeight: "bold" }}> *</span>
            ) : (
              <></>
            )}
          </label>
        )}
        <div
          className={`flex flex-row justify-between align-center p-2 border border-black-800 rounded mb-4 ${
            props.isExtraInput ? "w-6/12" : "w-full"
          }`}
        >
          {props.prefix && (
            <span className='mr-2 font-weight-bold  mb-0'>{props.prefix}</span>
          )}
          <input
            style={{
              width: props.inputWidth ?? "90%",
              border: "none",
              outline: "none",
            }}
            disabled={props.disabled ?? false}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder ?? props.label}
            onKeyDown={(e) =>
              props.type === "number" && e.key === "e" && e.preventDefault()
            }
            onChange={(e) => {
              console.log(
                "label input ",
                props.label
                  .replace(/[^a-zA-Z0-9 ]/g, "")
                  .replace(/\s+/g, "")
                  .toLowerCase()
              );
              if (props.segment) {
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + props.section]: {
                      ...eval("btsMain.section" + props.section),
                      [props.label
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .replace(/\s+/g, "")
                        .toLowerCase() +
                        props.segment
                          .replace(/[^a-zA-Z0-9 ]/g, "")
                          .replace(/\s+/g, "")
                          .toLowerCase() ?? ""]:
                        props.alttype === "number"
                          ? e.target.value.replace(/[^0-9/]/g, "")
                          : e.target.value,
                    },
                  })
                );
              } else {
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + props.section]: {
                      ...eval("btsMain.section" + props.section),
                      [props.label
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .replace(/\s+/g, "")
                        .toLowerCase()]:
                        props.alttype === "number"
                          ? e.target.value.replace(/[^0-9/]/g, "")
                          : e.target.value,
                    },
                  })
                );
              }
            }}
          />
          <div className='flex flex-row grow align-items-center'>
            {props.satuan !== "" && (
              <span className='ml-auto font-weight-bold  mb-0'>
                {props.satuan}
              </span>
            )}
          </div>
          {props.message ? (
            props.message !== "" ? (
              <span className='ml-3' style={{ color: "red" }}>
                {props.message}
              </span>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>

      {props.warning ? (
        <p className={`font-weight-normal text-danger`}> {props.warning}</p>
      ) : (
        <></>
      )}
      {props.asterisk ? (
        <p className={`font-weight-normal text-info`}>* {props.asterisk}</p>
      ) : (
        <></>
      )}
      {props.asterisk2 ? (
        <p className={`font-weight-normal text-info`}>* {props.asterisk2}</p>
      ) : (
        <></>
      )}
      {props.link ? (
        <a
          className={`font-weight-normal text-info`}
          href={props.link}
          target='_blank'
        >
          {props.link}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DetailInput;

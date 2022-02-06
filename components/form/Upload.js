import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBtsMain } from "../../slices/formbts";
import Resizer from "react-image-file-resizer";
import { Image } from "antd";

const UploadComponent = (props) => {
  const { label, name, section, message, asterisk, asterisk2 } = props;

  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);

  // Key Label
  let keyLabel = label
    ?.replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  const [errorDocFormat, setErrorDocFormat] = useState("");
  const [encodedFilePDF, setEncodedFilePDF] = useState("");
  const [encodedFileKMLKMZ, setEncodedFileKMLKMZ] = useState("");
  const [tipeFile, setTipeFile] = useState("");

  // upload file function
  const handleChange = async (e) => {
    // console.log('handlechange', e.target.files[0].name.split('.')[1]);

    switch (e.target.name) {
      case "doc":
        let fileExtension = e.target.files[0].name
          .split(".")
          .pop()
          .toLowerCase();
        if (
          fileExtension === "jpg" ||
          fileExtension === "png" ||
          fileExtension === "jpeg"
        ) {
          setTipeFile("image");
          setErrorDocFormat("");
          // setDocUpload(e.target.files[0]);
        } else {
          setErrorDocFormat("Format Dokumen harus .jpg / .png");
          // setDocUpload("");
        }

        const resizeFile = (file) =>
          new Promise((resolve) => {
            Resizer.imageFileResizer(
              file,
              800,
              800,
              "JPEG",
              100,
              0,
              (uri) => {
                resolve(uri);
              },
              "base64"
            );
          });

        const targetFile = e.target.files[0];
        const image = await resizeFile(targetFile);
        const base64 = image.split(",")[1];
        console.log("base64", base64);
        // ========= dispatch to redux ========
        dispatch(
          setBtsMain({
            ...btsMain,
            ["section" + section]: {
              ...eval(`btsMain?.section${section}`),
              [keyLabel]: {
                foto: base64,
                extension_file: fileExtension,
              },
            },
          })
        );

        break;
      case "jpgpdf":
        let fileExtension2 = e.target.files[0].name
          .split(".")
          .pop()
          .toLowerCase();
        if (
          fileExtension2 === "jpg" ||
          fileExtension2 === "png" ||
          fileExtension2 === "jpeg"
        ) {
          setTipeFile("image");
          setErrorDocFormat("");
          console.log("detect image");
          const resizeFile = (file) =>
            new Promise((resolve) => {
              Resizer.imageFileResizer(
                file,
                600,
                600,
                "JPEG",
                100,
                0,
                (uri) => {
                  resolve(uri);
                },
                "base64"
              );
            });

          const targetFile = e.target.files[0];
          const image = await resizeFile(targetFile);
          const base64 = image.split(",")[1];
          console.log("base64", base64);
          // ========= dispatch to redux ========
          dispatch(
            setBtsMain({
              ...btsMain,
              ["section" + section]: {
                ...eval(`btsMain?.section${section}`),
                [keyLabel]: {
                  foto: base64,
                  extension_file: fileExtension2,
                },
              },
            })
          );
        } else if (fileExtension2 === "pdf") {
          setTipeFile("pdf");
          setErrorDocFormat("");
          console.log("detect pdf file");

          const encodeFileBase64 = (file) => {
            let reader = new FileReader();
            if (file) {
              reader.readAsDataURL(file);
              reader.onload = () => {
                let encodedbase64 = reader.result;
                const base64 = encodedbase64.split(",")[1];
                console.log("base64 clean", base64);

                // ========= dispatch to redux ========
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + section]: {
                      ...eval(`btsMain?.section${section}`),
                      [keyLabel]: {
                        foto: base64,
                        extension_file: fileExtension2,
                      },
                    },
                  })
                );
              };
              reader.onerror = (err) => {
                console.log("pdf convert to base 64 error", err);
              };
            }
          };

          encodeFileBase64(e.target.files[0]);
        } else {
          setErrorDocFormat("Format Dokumen harus .jpg / .pdf");
          console.log("file not detected");
        }

        break;
      case "kmlkmz":
        let fileExtension3 = e.target.files[0].name
          .split(".")
          .pop()
          .toLowerCase();
        if (fileExtension3 === "kml" || fileExtension3 === "kmz") {
          setTipeFile("kml");
          setErrorDocFormat("");
          console.log("bener ini kml");

          const encodeFileBase64 = (file) => {
            let reader = new FileReader();
            if (file) {
              reader.readAsDataURL(file);
              reader.onload = () => {
                let encodedbase64 = reader.result;
                const base64 = encodedbase64.split(",")[1];
                console.log("base64 full", encodedbase64);
                console.log("base64 clean", base64);

                // ========= dispatch to redux ========
                dispatch(
                  setBtsMain({
                    ...btsMain,
                    ["section" + section]: {
                      ...eval(`btsMain?.section${section}`),
                      [keyLabel]: {
                        foto: base64,
                        extension_file: fileExtension3,
                      },
                    },
                  })
                );
              };
              reader.onerror = (err) => {
                console.log("pdf convert to base 64 error", err);
              };
            }
          };

          encodeFileBase64(e.target.files[0]);
        } else {
          setErrorDocFormat("File Harus .kml / .kmz");
          console.log("bukan kml");
        }

        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 my-5'>
        <label className='text-light  mb-3'>{label}</label>
        <div className='flex items-center justify-center w-full'>
          <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
            <div className='flex flex-col items-center justify-center pt-7'>
              <svg
                className='w-10 h-10 text-sky-400 group-hover:text-sky-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                ></path>
              </svg>
              <p className='uppercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>
                Upload
              </p>
            </div>
            {/* <input type='file' className='hidden' /> */}
            <input
              className='hidden'
              type='file'
              name={name ?? "doc"}
              // onChange={(e) => handleChange(e)}
              onChange={(e) => {
                if (e.target.value) {
                  handleChange(e);
                } else {
                  console.log("tidak ada file");
                  dispatch(
                    setBtsMain({
                      ...btsMain,
                      ["section" + section]: {
                        ...eval(`btsMain?.section${section}`),
                        [keyLabel]: {
                          base64: "",
                          extension_file: "",
                        },
                      },
                    })
                  );
                }
              }}
              accept={
                name === "jpgpdf"
                  ? "image/*, .pdf"
                  : name === "kmlkmz"
                  ? ".kml, .kmz"
                  : "image/*"
              }
            />
          </label>
        </div>
        {/* ========================== IMAGE PREVIEW  */}

        {props.name !== "kmlkmz" &&
        props.section !== "10" &&
        eval(
          `btsMain?.section${props.section}?.${keyLabel}?.extension_file`
        ) !== "pdf" &&
        eval(`btsMain?.section${props.section}?.${keyLabel}?.foto`) !==
          undefined &&
        eval(`btsMain?.section${props.section}?.${keyLabel}?.foto`) !== "" ? (
          <div className='mx-auto my-6'>
            <Image
              width={300}
              src={
                "data:image/jpeg;base64," +
                eval(`btsMain?.section${section}?.${keyLabel}?.foto`)
              }
            />
          </div>
        ) : (
          <></>
        )}

        {eval(
          `btsMain?.section${props.section}?.${keyLabel}?.extension_file`
        ) === "pdf" ||
        eval(
          `btsMain?.section${props.section}?.${keyLabel}?.extension_file`
        ) === "kml" ||
        eval(
          `btsMain?.section${props.section}?.${keyLabel}?.extension_file`
        ) === "kmz" ? (
          <p className='cInfo mt-2 mx-auto'>File Terupload</p>
        ) : (
          <></>
        )}

        {/* ========================== TEXTS BELOW IMAGES  */}
        {message ? <p className={`cInfo`}>* {message}</p> : <></>}
        <div className='mb-2'>
          {asterisk ? <p className={`cInfo`}>* {asterisk}</p> : <></>}
          {asterisk2 ? <p className={`cInfo`}>* {asterisk2}</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;

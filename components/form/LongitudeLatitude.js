import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Input.js";

// import redux
import { setBtsMain } from "../../slices/formbts";

function LatitudeLongitude(props) {
  // redux
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);

  const {
    section,
    latLabel,
    lonLabel,
    latFakeLabel,
    lonFakeLabel,
    latRequired,
    lonRequired,
  } = props;

  let koordinatlat = eval(
    "btsMain?.section" +
      section +
      "?." +
      latLabel
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
  );

  let koordinatlon = eval(
    "btsMain?.section" +
      section +
      "?." +
      lonLabel
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
  );

  // // lat long states
  const [geoLat, setGeoLat] = useState("");
  const [geoLong, setGeoLong] = useState("");

  const toggleLatValue = () => {
    // dispatch(setSection3({ ...section3, koordinatgpswgs84_lat: geoLat }));
    dispatch(
      setBtsMain({
        ...btsMain,
        ["section" + section]: {
          ...eval("btsMain.section" + section),
          [latLabel
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "")
            .toLowerCase()]: geoLat,
        },
      })
    );
  };

  const toggleLongValue = () => {
    // dispatch(setSection3({ ...section3, koordinatgpswgs84_long: geoLong }));
    dispatch(
      setBtsMain({
        ...btsMain,
        ["section" + section]: {
          ...eval("btsMain.section" + section),
          [lonLabel
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "")
            .toLowerCase()]: geoLong,
        },
      })
    );
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeoLat(position.coords.latitude.toFixed(5));
      setGeoLong(position.coords.longitude.toFixed(5));
    });
  }, []);

  return (
    <div>
      {/* ============== LATITUDE */}
      <Input
        required={latRequired ?? false}
        label={latFakeLabel ? latFakeLabel : latLabel}
        section={section}
        type='number'
        value={koordinatlat?.replace(/(\.\d{5})\d+/g, "$1") ?? ""}
        message={
          koordinatlat < -90 || koordinatlat > 90
            ? "Must be between -90 and 90!"
            : ""
        }
      />
      {/* ============== LONGITUDE */}
      <Input
        required={lonRequired ?? false}
        label={lonFakeLabel ? lonFakeLabel : lonLabel}
        section={section}
        type='number'
        value={koordinatlon?.replace(/(\.\d{5})\d+/g, "$1") ?? ""}
        message={
          koordinatlon < -180 || koordinatlon > 180
            ? "Must be between -180 and 180!"
            : ""
        }
      />
      <div className='flexboxRowCenter gap-4 mb-4'>
        <button
          className={`bgBaktiBlueLight rounded w-6/12 px-2 py-1`}
          onClick={() => {
            toggleLatValue();
          }}
        >
          Get Latitude
        </button>
        <button
          className={`bgBaktiBlueLight rounded w-6/12 px-2 py-1`}
          onClick={() => {
            toggleLongValue();
          }}
        >
          Get Longitude
        </button>
      </div>
    </div>
  );
}

export default LatitudeLongitude;

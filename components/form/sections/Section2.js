import React from "react";
import { useSelector } from "react-redux";
import SectionLayout from "../../Layout/SectionLayout";

import Input from "../Input";
import _ from "lodash";
const Section2 = ({ t, idSurvey, kodeSurvey }) => {
  const btsMain = useSelector((state) => state.formbts.btsMain);
  return (
    <SectionLayout
      title={t}
      idSurvey={idSurvey}
      kodeSurvey={kodeSurvey}
    ></SectionLayout>
  );
};

export default Section2;

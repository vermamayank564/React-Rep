import { memo } from "react";

const CompA = ({ func }) => {
  console.log("render");
  return <div>CompA</div>;
};

export default memo(CompA);

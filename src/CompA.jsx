import { memo } from "react";

const CompA = ({ data }) => {
  console.log("CompA", data.value);
  return <div>CompA</div>;
};

export default memo(CompA);

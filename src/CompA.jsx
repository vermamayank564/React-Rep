import { memo } from "react";

const CompA = ({ data }) => {
  console.log("CompA", data.value);
  return <div>CompA</div>;
};

export default memo(CompA, (prevProps, nextProps) => {
  console.log({ prevProps }, { nextProps });
  return prevProps.data.value === nextProps.data.value;
});
// check only props
// byDefault => it will re-render only when props changed

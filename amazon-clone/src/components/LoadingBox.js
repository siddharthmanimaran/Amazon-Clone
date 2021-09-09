import React from "react";

export default function LoadingBox() {
  return (
    <div style={{ color: "red", backgroundColor: "orange" }}>
      <i className="fa fa-spinner fa-spin"></i>
      Loading.....
    </div>
  );
}

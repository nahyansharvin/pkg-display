import React from "react";
import "./Display.css";
import { useSelector } from "react-redux";


const Display = () => {
  const value: number = useSelector((state: any) => state.package.counter.value);

  return <div className="display">{value}</div>;
};

export default Display;

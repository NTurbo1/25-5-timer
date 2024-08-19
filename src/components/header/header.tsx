import React from "react";
import { ReactElement } from "react"

import "./header.css"


export const Header = ():ReactElement => {

  const title:string = "25 + 5 Clock";

  return (
    <div>{ title }</div>
  );
}
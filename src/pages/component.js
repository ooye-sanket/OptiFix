// pages/component.js
import React from "react";
import { Button } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="greenToBlue">
        Try OpitFix
      </Button>
    </div>
  );
}

export default Component;

import React from "react";
import { Button } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="greenToBlue" href="https://optifixai.netlify.app/">
        Try OptiFix
      </Button>
    </div>
  );
}

export default Component;

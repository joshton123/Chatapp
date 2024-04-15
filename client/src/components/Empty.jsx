import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center ">
        {/* <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center "> */}
      
      <Image src="/Maingif.gif" alt="NextChat" height={300} width={300} className="rounded-full" />
    </div>
  );
}

export default Empty;


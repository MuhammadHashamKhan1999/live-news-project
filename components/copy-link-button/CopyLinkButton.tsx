"use client";
import React, { useState } from "react";
import copy from "clipboard-copy";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";

const CopyLinkButton = ({ textToCopy }: { textToCopy: string }) => {
    const toast = useToast();

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      toast({
        title: 'Article link copied',
        status: 'success',
        duration: 3000,
        position: 'top-right'
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="
            flex
            items-center
            gap-2
            w-full
            p-1
            hover:bg-slate-200
        "
        onClick={handleCopyClick}
    >
      <div
        className="
                text-xl
            "
      >
        <AiOutlinePaperClip />
      </div>
      <div>Copy Link</div>
    </div>
  );
};

export default CopyLinkButton;

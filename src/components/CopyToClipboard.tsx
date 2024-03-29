"use client";
import React from "react";

const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      title="Copy"
      className="cursor-pointer hover:bg-grey-700 duration-500 p-2 rounded-lg relative"
    >
      <svg
        onClick={copy}
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 "
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7V4.2C7 3.08 7 2.52 7.218 2.092C7.41 1.715 7.715 1.41 8.092 1.218C8.52 1 9.08 1 10.2 1H15.8C16.92 1 17.48 1 17.908 1.218C18.2843 1.40974 18.5903 1.71569 18.782 2.092C19 2.52 19 3.08 19 4.2V9.8C19 10.92 19 11.48 18.782 11.908C18.5901 12.2842 18.2842 12.5901 17.908 12.782C17.48 13 16.92 13 15.803 13H13M7 7H4.2C3.08 7 2.52 7 2.092 7.218C1.71565 7.40969 1.40969 7.71565 1.218 8.092C1 8.52 1 9.08 1 10.2V15.8C1 16.92 1 17.48 1.218 17.908C1.40974 18.2843 1.71569 18.5903 2.092 18.782C2.519 19 3.079 19 4.197 19H9.804C10.921 19 11.48 19 11.908 18.782C12.2843 18.5903 12.5903 18.2843 12.782 17.908C13 17.48 13 16.921 13 15.803V13M7 7H9.8C10.92 7 11.48 7 11.908 7.218C12.2843 7.40974 12.5903 7.71569 12.782 8.092C13 8.519 13 9.079 13 10.197V13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!!copied && (
        <p className="text-sm absolute -top-8 -left-4 rounded-lg bg-grey-700 px-4 py-1">
          {copied ? "Copied!" : "Copy"}
        </p>
      )}
    </div>
  );
};

export default CopyToClipboard;

"use client";

import { useState } from 'react';

const CodeBlock = ({ children }: {children: string}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div style={{ position: 'relative' }} className='mt-5 border p-5 flex items-center justify-between'>
      <pre className='text-wrap'>{children}</pre>
      <button onClick={copyToClipboard} className='bg-blue-800 text-white p-2 font-bold'>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;

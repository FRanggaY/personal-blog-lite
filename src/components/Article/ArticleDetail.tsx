"use client"
import React, { useEffect } from 'react';

function ArticleDetail({ lang, markup }: any) {
  let alertTitleSuccess = 'Text copied to clipboard';
  let alertTitleFailed = 'Failed to copy text:';
  if(lang !== 'en'){
    alertTitleSuccess = 'Teks berhasil disalin ke clipboard'
    alertTitleFailed = 'Teks gagal disalin dengan error:'
  }
  const copyToClipboard = (text:any) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(alertTitleSuccess);
    }).catch((error) => {
      console.error(alertTitleFailed, error);
    });
  };

  useEffect(() => {
    // Find all <pre> elements
    const preElements:any = document.querySelectorAll('pre');
    if(preElements.length > 0){
      preElements.forEach((preElement:any, index:any) => {
        // Check if a button is already added to this <pre> element
        const hasButton = preElement.classList.contains('copy-button-added');

        if (!hasButton) {
          const textToCopy = preElement.textContent.trim();

          const copyButton = document.createElement('button');
          copyButton.textContent = 'Copy';
          copyButton.classList.add('copy-button', 'px-2', 'border', 'float-right');
          copyButton.onclick = () => copyToClipboard(textToCopy);

          // Add a class to mark this <pre> element as having a button
          preElement.classList.add('copy-button-added');

          preElement.parentNode.insertBefore(copyButton, preElement);
        }
      });
    }
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={markup} className="dark:text-white text-black dark:prose-strong:text-white prose lg:prose-xl" />
    </div>
  )
}

export default ArticleDetail

import React from "react";

/**
 * Splits text into English and Tamil segments, wrapping Tamil characters
 * in a dedicated span (<span className="gallery-tamil-text" lang="ta">)
 * so that font-family and optical font-weight match English characters seamlessly.
 */
export function renderBilingualText(text) {
  if (typeof text !== "string" || !text) return text;
  if (!/[\u0B80-\u0BFF]/.test(text)) return text;

  // Group continuous Tamil words together while keeping spaces
  const parts = text.split(/([\u0B80-\u0BFF]+(?:\s+[\u0B80-\u0BFF]+)*)/g);

  return parts.map((part, index) => {
    if (!part) return null;
    if (/[\u0B80-\u0BFF]/.test(part)) {
      return (
        <span key={index} className="gallery-tamil-text" lang="ta">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default renderBilingualText;


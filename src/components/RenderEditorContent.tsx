"use client"
import React from "react";
import "../app/globals.css"


export type DeltaOp  = {
  insert: string | {
    image : string
  };
  attributes?: {
    header?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    color?: string;
    background?: string;
    list?: "ordered" | "bullet";
    code?: boolean;
    inline : boolean;
    blockquote?: boolean;
  };
}

interface DeltaData {
  ops: DeltaOp[];
}

type ClassAttribute = Array<DeltaOp["attributes"] | null>;

export default function RenderQuillContent({ data }: { data: DeltaData }) {
  if (!data || !data.ops || data.ops.length === 0) {
    return <p className="text-gray-400">No content available.</p>;
  }

  const getClassNameAttributes = () => {
  const attributes:ClassAttribute  = [];

  // Step 1: Build the initial attributes array
  data.ops?.forEach((item) => {
    if (!item.insert) return;
    if (item.insert !== "\n") return attributes.push(null);
    attributes.push(item?.attributes || null);
  });


  // Step 2: Replace nulls with the next non-null value
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i] === null) {
      for (let j = i + 1; j < attributes.length; j++) {
        if (attributes[j] !== null) {
          attributes[i] = attributes[j];
          break;
        }
      }
    }
  }
  attributes.pop()

  return attributes;
};

  const headers = getClassNameAttributes()

  // Helper to build inline styles from attributes
  const getInlineStyles = (attributes?: DeltaOp["attributes"]) => {
    if (!attributes) return {};
    const styles: React.CSSProperties = {};
    if (attributes.bold) styles.fontWeight = "bold";
    if (attributes.italic) styles.fontStyle = "italic";
    // if (attributes.header == 1) styles.fontSize = "60px"; // Bigger H1, tighter line-height for headers
    // else if (attributes.header === 2) styles.fontSize = "50px"; // Bigger H2
    // else if (attributes.header === 3)styles.fontSize = "45px"; // Bigger H3
    if (attributes.underline) styles.textDecoration = "underline";
    if (attributes.color) styles.color = attributes.color;
    if (attributes.background) styles.backgroundColor = attributes.background;
    if (attributes.code) {
      styles.fontFamily = "monospace";
      styles.backgroundColor = "#1f2937"; // Dark bg for code
      styles.padding = "0.25rem 0.5rem";
      styles.borderRadius = "0.25rem";
    }
    return styles;
  };

  // Helper to get className from attributes
  const getClassName = (key: number) => {
   const  attributes = headers[key]
 // Default text: bigger (text-base), better spacing (leading-loose)
    let classes = "";
    if (attributes?.header == 1) classes += "text-pink-800 font-bold mt-8 mb-4 leading-tight tracking-wide text-5xl"; // Bigger H1, tighter line-height for headers
    else if (attributes?.header === 2) classes += "text-gray-100 font-bold mt-6 mb-3 text-3xl leading-tight"; // Bigger H2
    else if (attributes?.header === 3) classes += "text-white font-bold mt-4 mb-2 text-2xl leading-tight"; // Bigger H3
    if (attributes?.blockquote) classes += "uppercase pl-4 italic text-gray-300 my-6 leading-loose"; // Better spacing for quotes
    if (attributes?.list === "ordered") classes += " ml-6 list-disc list-inside text-gray-200  leading-loose"; // Better spacing for lists
    else if (attributes?.list === "bullet") classes += " list-outside list-disc ml-16 -translate-y-8 text-gray-200  leading-loose";
    if (attributes?.code && !attributes?.inline) classes += " bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-base overflow-x-auto my-6 leading-loose"; // Bigger code, better spacing
    else classes += " text-gray-200 leading-loose text-base"; // Fallback for inline text: bigger, spaced
    if (classes === "") classes += "text-gray-200 leading-loose text-base";
    return classes;
  };



  // Render function for each op
  const renderOp = (op: DeltaOp, key: number) => {

    const { insert,attributes} = op;
 

  
    
 

    // Handle embeds (e.g., images)
    if (typeof insert !== "string") {
      if (insert.image) {
        return (
          <div key={key} className="my-6 flex flex-col items-center">
            <img
              src={insert.image}
              alt="Quill image"
              className="rounded-md shadow-lg max-w-full"
            />
          </div>
        );
      }
      return null; // Ignore other embeds for now
    }

    // Handle text-based inserts



let element = "span";

if (attributes?.list === "ordered") {
  element = "ol";
} else if (attributes?.list === "bullet") {
  element = "ul";
} else if (
  attributes?.header != null ||
  attributes?.blockquote ||
  (attributes?.code && insert.includes("\n"))
) {
  element = "div";
}

const content = element === "ol" || element === "ul"
  ? `<li>${insert.replace(/\n/g, "<br>")}</li>`
  : insert.replace(/\n/g, "<br>");


return React.createElement(
  element,
  {
    key,
    className: getClassName(key),
    style: getInlineStyles(attributes),
    dangerouslySetInnerHTML: { __html: content },
  }
);

  };

  return (
    <div className="prose prose-invert max-w-none">
      {data.ops.map((op, index) => renderOp(op, index))}
    </div>
  );
}
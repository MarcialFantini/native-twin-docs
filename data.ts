// types.ts

// Enum for content types
export enum ContentType {
  Text = "text",
  Paragraph = "paragraph",
  Button = "button",
  Title = "title",
  Subtitle = "subtitle",
  Image = "image",
}

// Interface for compatibility properties
export interface Compatibility {
  name: string;
  web: boolean;
  native: boolean;
}

// Interface for the content items
export interface ContentItem {
  type: ContentType;
  content?: string; // For text, paragraph, title, and subtitle
  buttonText?: string; // For button
  onClick?: () => void; // For button
  src?: string; // For image
  alt?: string; // For image
}

// Main interface for data
export interface Data {
  name: string;
  properties: Compatibility[];
  content: ContentItem[];
}

export const config: Data[] = [
  {
    name: "Alignment and Positioning",
    properties: [
      { name: "align-", web: true, native: true },
      { name: "align-baseline", web: true, native: true },
      { name: "align-top", web: true, native: true },
      { name: "align-middle", web: true, native: true },
      { name: "align-bottom", web: true, native: true },
      { name: "align-text-top", web: true, native: true },
      { name: "align-text-bottom", web: true, native: true },
      { name: "top-", web: true, native: true },
      { name: "left-", web: true, native: true },
      { name: "bottom-", web: true, native: true },
      { name: "right-", web: true, native: true },
      { name: "absolute", web: true, native: true },
      { name: "relative", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- align-\n- align-baseline\n- align-top\n- align-middle\n- align-bottom\n- align-text-top\n- align-text-bottom\n- top-\n- left-\n- bottom-\n- right-\n- absolute\n- relative`,
      },
    ],
  },
  {
    name: "Text and Typography",
    properties: [
      { name: "text-", web: true, native: true },
      { name: "text-left", web: true, native: true },
      { name: "text-center", web: true, native: true },
      { name: "text-right", web: true, native: true },
      { name: "text-justify", web: true, native: true },
      { name: "font-", web: true, native: true },
      { name: "capitalize", web: true, native: true },
      { name: "uppercase", web: true, native: true },
      { name: "lowercase", web: true, native: true },
      { name: "italic", web: true, native: true },
      { name: "normal", web: true, native: true },
      { name: "leading-", web: true, native: true },
      { name: "decoration-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- text-\n- text-left\n- text-center\n- text-right\n- text-justify\n- font-\n- capitalize\n- uppercase\n- lowercase\n- italic\n- normal\n- leading-\n- decoration-`,
      },
    ],
  },
  {
    name: "Colors and Background",
    properties: [
      { name: "bg-", web: true, native: true },
      { name: "bg-color", web: true, native: true },
      { name: "border-", web: true, native: true },
      { name: "border-color", web: true, native: true },
      { name: "text-", web: true, native: true },
      { name: "decoration-", web: true, native: true },
      { name: "shadow-", web: true, native: true },
      { name: "z-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- bg-\n- bg-color\n- border-\n- border-color\n- text-\n- decoration-\n- shadow-\n- z-`,
      },
    ],
  },
  {
    name: "Spacing",
    properties: [
      { name: "p", web: true, native: true },
      { name: "m", web: true, native: true },
      { name: "gap-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- p\n- m\n- gap-`,
      },
    ],
  },
  {
    name: "Flexbox",
    properties: [
      { name: "flex", web: true, native: true },
      { name: "flex-", web: true, native: true },
      { name: "flex-direction", web: true, native: true },
      { name: "flex-wrap", web: true, native: true },
      { name: "basis-", web: true, native: true },
      { name: "grow-", web: true, native: true },
      { name: "justify-", web: true, native: true },
      { name: "items-", web: true, native: true },
      { name: "self-", web: true, native: true },
      { name: "content-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- flex\n- flex-\n- flex-direction\n- flex-wrap\n- basis-\n- grow-\n- justify-\n- items-\n- self-\n- content-`,
      },
    ],
  },
  {
    name: "Size and Dimensions",
    properties: [
      { name: "w-", web: true, native: true },
      { name: "h-", web: true, native: true },
      { name: "max-w-", web: true, native: true },
      { name: "max-h-", web: true, native: true },
      { name: "min-w-", web: true, native: true },
      { name: "min-h-", web: true, native: true },
      { name: "resize-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- w-\n- h-\n- max-w-\n- max-h-\n- min-w-\n- min-h-\n- resize-`,
      },
    ],
  },
  {
    name: "Transformations",
    properties: [
      { name: "translate-", web: true, native: true },
      { name: "rotate-", web: true, native: true },
      { name: "skew-", web: true, native: true },
      { name: "scale-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- translate-\n- rotate-\n- skew-\n- scale-`,
      },
    ],
  },
  {
    name: "Other",
    properties: [
      { name: "hidden", web: true, native: true },
      { name: "overflow-", web: true, native: true },
      { name: "object-", web: true, native: true },
      { name: "opacity-", web: true, native: true },
      { name: "aspect-", web: true, native: true },
    ],
    content: [
      {
        type: ContentType.Paragraph,
        content: `- hidden\n- overflow-\n- object-\n- opacity-\n- aspect-`,
      },
    ],
  },
];

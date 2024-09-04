const tailwindClasses = {
  alignmentPositioning: {
    align: [
      { class: "align-baseline", web: true, native: true },
      { class: "align-top", web: true, native: true },
      { class: "align-middle", web: true, native: true },
      { class: "align-bottom", web: true, native: true },
      { class: "align-text-top", web: true, native: true },
      { class: "align-text-bottom", web: true, native: true },
    ],
    position: [
      { class: "top-{size}", web: true, native: true },
      { class: "left-{size}", web: true, native: true },
      { class: "bottom-{size}", web: true, native: true },
      { class: "right-{size}", web: true, native: true },
    ],
    positioning: [
      { class: "absolute", web: true, native: true },
      { class: "relative", web: true, native: true },
    ],
  },
  textTypography: {
    text: [
      { class: "text-{size}", web: true, native: true },
      { class: "text-left", web: true, native: true },
      { class: "text-center", web: true, native: true },
      { class: "text-right", web: true, native: true },
      { class: "text-justify", web: true, native: true },
    ],
    font: [
      { class: "font-{weight}", web: true, native: true },
      { class: "capitalize", web: true, native: true },
      { class: "uppercase", web: true, native: true },
      { class: "lowercase", web: true, native: true },
      { class: "italic", web: true, native: true },
      { class: "not-italic", web: true, native: true },
      { class: "leading-{size}", web: true, native: true },
      { class: "decoration-{style}", web: true, native: true },
    ],
  },
  colorsBackground: {
    background: [{ class: "bg-{color}", web: true, native: true }],
    border: [
      { class: "border-{size}", web: true, native: true },
      { class: "border-{color}", web: true, native: true },
    ],
    textColor: [
      { class: "text-{color}", web: true, native: true },
      { class: "decoration-{color}", web: true, native: true },
    ],
    shadow: [{ class: "shadow-{size}", web: true, native: true }],
    zIndex: [{ class: "z-{index}", web: true, native: true }],
  },
  spacing: {
    padding: [{ class: "p-{size}", web: true, native: true }],
    margin: [{ class: "m-{size}", web: true, native: true }],
    gap: [{ class: "gap-{size}", web: true, native: true }],
  },
  flexbox: {
    flex: [
      { class: "flex", web: true, native: true },
      { class: "flex-{direction}", web: true, native: true },
      { class: "flex-wrap", web: true, native: true },
      { class: "flex-nowrap", web: true, native: true },
      { class: "basis-{size}", web: true, native: true },
      { class: "grow-{factor}", web: true, native: true },
      { class: "justify-{alignment}", web: true, native: true },
      { class: "items-{alignment}", web: true, native: true },
      { class: "self-{alignment}", web: true, native: true },
      { class: "content-{alignment}", web: true, native: true },
    ],
  },
  sizeDimensions: {
    width: [
      { class: "w-{size}", web: true, native: true },
      { class: "max-w-{size}", web: true, native: true },
      { class: "min-w-{size}", web: true, native: true },
    ],
    height: [
      { class: "h-{size}", web: true, native: true },
      { class: "max-h-{size}", web: true, native: true },
      { class: "min-h-{size}", web: true, native: true },
    ],
    resize: [
      { class: "resize", web: true, native: true },
      { class: "resize-x", web: true, native: true },
      { class: "resize-y", web: true, native: true },
      { class: "resize-none", web: true, native: true },
    ],
  },
  transformations: {
    translate: [{ class: "translate-{axis}-{value}", web: true, native: true }],
    rotate: [{ class: "rotate-{degrees}", web: true, native: true }],
    skew: [{ class: "skew-{axis}-{value}", web: true, native: true }],
    scale: [{ class: "scale-{value}", web: true, native: true }],
  },
  others: {
    hidden: [{ class: "hidden", web: true, native: true }],
    overflow: [{ class: "overflow-{behavior}", web: true, native: true }],
    objectFit: [{ class: "object-{fit}", web: true, native: true }],
    opacity: [{ class: "opacity-{value}", web: true, native: true }],
    aspectRatio: [{ class: "aspect-{ratio}", web: true, native: true }],
  },
};

export default tailwindClasses;

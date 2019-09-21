const BtnColorStyle = {
  Bronze: "#dd7c4b",
  Silver: "#c0c0c0",
  Gold: "#dda431",
};

const backgroundColorGenerator = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export { BtnColorStyle, backgroundColorGenerator };

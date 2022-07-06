const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1170px",
};

const devices = {
  sm: `screen and (max-width: ${sizes.md})`,
  md: `screen and (min-width: ${sizes.md}) and (max-width: ${sizes.xl})`,
  lg: `screen and (min-width: ${sizes.lg}) and (max-width: ${sizes.xl})`,
  xl: `screen and (min-width: ${sizes.xl})`,
  xlMax: `screen and (max-width:${sizes.xl})`,
};

export { devices };

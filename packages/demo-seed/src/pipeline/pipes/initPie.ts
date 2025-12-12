export const initBar = (vseed: IVSeed) => {
  return {
    type: "bar",
    data: {
      values: vseed.dataset,
    },
    xField: vseed.xField,
    yField: vseed.yField,
  };
};

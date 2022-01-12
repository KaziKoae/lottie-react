/**
 * Extract a number from a number or percentage
 * @param value
 */
const getNumberFromNumberOrPercentage = (value: string | number) => {
  const matches = /^(([0-9]*[.])?[0-9]+)(%?)$/.exec(String(value));

  if (matches?.[1]) {
    return {
      number: Number(matches[1]),
      isPercentage: matches[3] === "%",
    };
  }

  return null;
};

export default getNumberFromNumberOrPercentage;

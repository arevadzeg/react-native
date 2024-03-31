const styleRules = (...rules: any[]) => {
  return rules.filter(Boolean).reduce((result, rule) => {
    return { ...result, ...rule };
  }, {});
};

export default styleRules;

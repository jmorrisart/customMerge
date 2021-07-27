// the customMerge function should take two objects as arguments
const customMerge = function(base, override) {

  // create a new object to be returned
  const finalObj = new Object(base);

  // loop through the override object to compare with the base
  Object.keys(override).forEach((key) => {

    // if they are both objects, they need to be compared
    if(typeof override[key] === 'object' && typeof base[key] === 'object') {
      customMerge(base[key], override[key]);

    // if the override value is an object, that takes precedence over the base value
    } else if (typeof override[key] === 'object') {
      finalObj[key] = override[key];

    // if the base value is an object, that takes precedence over the override object
    } else if (typeof finalObj[key] === 'object') {
      // do nothing, the value does not need to be replaced

    // if the keys match then the override value will override
    // if the keys don't have a match they will be added to the new object
    } else {
      finalObj[key] = override[key];
    }

  });

  return finalObj;
}

module.exports = { customMerge };

const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName("john", "doe");
const expectedFullName = "john doe"; //if we change it we get err
if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}

//write and node jsFilename to test



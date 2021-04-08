
const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {
      A: calculations.A(inputs),
      Ixx: calculations.Ixx(inputs)
    }
  },
  // CALCULATION FUNCTIONS
  A: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h;
  },

  Ixx: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h ** 3 / 12;
  }
}

export default calculations;
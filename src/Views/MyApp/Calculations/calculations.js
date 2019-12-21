const calculationFunctions = {
  surfaceRectangle: (inputs) => {
    const h = inputs.h.value;
    const b = inputs.b.value;

    const surface = b * h;

    return surface;
  },

  inertiaXX: (inputs) => {
    const h = inputs.h.value;
    const b = inputs.b.value;

    const Ixx = b * h**3 /12;
    
    return Ixx;
  }
}

export default calculationFunctions;
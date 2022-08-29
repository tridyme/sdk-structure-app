const initialState = {
  values: {
    b: 2,         // Inputs: Largeur du rectangle
    h: 3,         // Inputs: Hauteur du rectangle
    A: 6,         // Outputs: Surface du rectangle
    Ixx: 4.5      // Outputs: Inertie du rectangle suivant X
  },
  documentation: {
    b: {
      name: "b",
      description: "largeur de la section",
      value: 2,
      unit: 'm'
    },
    h: {
      name: "h",
      description: "hauteur de la section",
      value: 3,
      unit: 'm'
    },
    A: {
      name: "A",
      description: "surface de la section",
      value: 6,
      unit: 'm2'
    },
    Ixx: {
      name: "Ixx",
      description: "inertie de la section autour de l'axe x",
      value: 4.5,
      unit: 'm4'
    }
  }
};

export default initialState;
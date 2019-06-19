const initialData = {
  inputs: {
    h: {
      name: 'h',
      text: 'h',
      value: 3,
      description: 'Hauteur du rectangle',
      unit: 'm'
    },
    b: {
      name: 'b',
      text: 'b',
      value: 5,
      description: 'Largeur du rectangle',
      unit: 'm'
    }
  },
  outputs: {
    A: {
      name: 'A',
      text: 'A',
      value: 6,
      description: 'Surface Rectangle',
      unit: 'm2'
    },
    Ixx: {
      name: 'Ixx',
      text: 'Ixx',
      value: 12,
      description: 'Inertie Rectangle suivant x',
      unit: 'm4'
    }
  }  
}

export default initialData;

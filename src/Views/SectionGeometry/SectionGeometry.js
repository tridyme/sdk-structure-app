import React, { useState } from 'react';
import {
  Grid
} from '@material-ui/core';
import CardElem from '../../Components/CardElem';
import InputElem from '../../Components/InputElem';
import ChartElem from '../../Components/ChartElem';

import calculations from './calculations';


function SectionGeometry() {
  const [values, setValues] = useState({
    b: 2,
    h: 3,
    A: 6,
    Ixx: 4.5
  });

  const handleChangeValues = (prop) => (event) => {
    const newValues = { ...values, [prop]: Number(event.target.value) };

    const calculatedValues = calculations.outputs(newValues);
    const updatedValues = {
      ...newValues,
      ...calculatedValues
    }
    setValues(updatedValues);
  };



  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <CardElem
          title="Données d'entrée"
          subtitle="Section: dimensions"
        >
          <InputElem
            value={values.b}
            text={'b'}
            description={'Largeur:'}
            unit={'m'}
            onChange={handleChangeValues('b')}
          />
          <InputElem
            value={values.h}
            text={'h'}
            description={'Hauteur:'}
            unit={'m'}
            onChange={handleChangeValues('h')}
          />
        </CardElem>
      </Grid>
      <Grid item md={4}>
        <CardElem
          title="Résultats"
          subtitle="Section: caractéristiques"
        >
          <InputElem
            value={values.A}
            text={'A'}
            description={'Surface:'}
            unit={'m2'}
            onChange={handleChangeValues('A')}
          />
          <InputElem
            value={values.Ixx}
            text={'Ixx'}
            description={'Interie suivant x:'}
            unit={'m4'}
            onChange={handleChangeValues('Ixx')}
          />
        </CardElem>
      </Grid>
      <Grid item md={4}>
        <CardElem
          title="Graphique"
          subtitle="Section"
        >
          <ChartElem
            dataForChart={{
              chartTitle: 'Section Rectangulaire',
              value: [
                { x: 0, y: 0 },
                { x: values.b, y: 0 },
                { x: values.b, y: values.h },
                { x: 0, y: values.h },
                { x: 0, y: 0 }
              ],
              axisName: { x: 'Largeur de la Section ', y: 'Hauteur de la section ' },
              unit: { x: 'm', y: 'm' }
            }}
          />
        </CardElem>
      </Grid>
    </Grid >
  );
}

export default SectionGeometry;


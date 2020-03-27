import React, { Fragment, useState } from "react";
import {
  AppBar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardElem from '../../Components/CardElem';
import ThreeDElem from '../../Components/ThreeDElem';
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { CameraElem } from "../../Components/CameraElem";
import { Root, Preview, Footer, GlobalStyle } from "./styles";
import {
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Camera() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <CameraElem
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <Button variant="contained" color="primary" onClick={() => setIsCameraOpen(true)}>Open Camera</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </Button>
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

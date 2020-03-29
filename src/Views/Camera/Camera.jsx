import React, { Fragment, useState } from "react";
import {
  AppBar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardElem from '../../Components/CardElem';
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { CameraElem } from "../../Components/CameraElem";
import { Root, Preview, Footer, GlobalStyle } from "./styles";


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
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [facingMode, setFacingMode] = React.useState("user");
  const [cardImage, setCardImage] = useState();
  const [isCameraLoading, setIsCameraLoading] = useState(true);

  const captureOptions = {
    audio: false,
    video: { facingMode: facingMode }
  };

  // React.useEffect(() => {
  //   setIsCameraLoading(false);
  // }, []);

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <CameraElem
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
            facingMode={facingMode}
            setFacingMode={setFacingMode}
            captureOptions={captureOptions}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        {/* <Footer>
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
        </Footer> */}
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

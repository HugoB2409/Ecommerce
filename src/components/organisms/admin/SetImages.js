import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "20px",
  },
  fileInput: {
    width: "70%",
    textAlign: "center",
    margin: "auto",
    marginBottom: "20px",
  },
  icon: {
    marginLeft: "10px",
  },
}));

const SetImages = (props) => {
  const classes = useStyles();

  const thumbnailChange = (file) => {
    props.thumbnailHandler(file);
  };

  const imageChange = (files) => {
    props.imageHandler(files);
  };

  return (
    <React.Fragment>
      <h2>
        Thumbnail*
        <Tooltip
          className={classes.icon}
          title="Image principale qui présente le produit"
        >
          <HelpIcon />
        </Tooltip>
      </h2>

      <div className={classes.fileInput}>
        <h4 style={{ color: "red" }}>
          {1 //props.value.errors.thumbnail
            ? "Vous devez avoir une image pour le thumbnail"
            : ""}
        </h4>
        <DropzoneArea
          onChange={thumbnailChange.bind(this)}
          dropzoneText={"Dropzone(1 image max)"}
          filesLimit={1}
          acceptedFiles={["image/*"]}
        />
      </div>
      <Divider variant="middle" />
      <h2>
        Images descriptives*
        <Tooltip
          className={classes.icon}
          title="Image secondaire qui présente le produit sous différents angles"
        >
          <HelpIcon />
        </Tooltip>
      </h2>

      <div className={classes.fileInput}>
        <h4 style={{ color: "red" }}>
          {1 //props.value.errors.images
            ? "Vous devez avoir AU MOINS UNE image pour les images descriptives"
            : ""}
        </h4>
        <DropzoneArea
          onChange={imageChange.bind(this)}
          dropzoneText={"Dropzone(5 images max)"}
          filesLimit={5}
          acceptedFiles={["image/*"]}
        />
      </div>
    </React.Fragment>
  );
};

export default SetImages;

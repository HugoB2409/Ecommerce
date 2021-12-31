import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import CategoryIcon from "@material-ui/icons/Category";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SetImage from "../../../components/organisms/admin/SetImages";
import SetDescription from "../../../components/organisms/admin/SetDescription";
import SetTags from "../../../components/organisms/admin/SetTags";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {
  useForm,
  FormContext,
} from "react-hook-form/dist/react-hook-form.ie11";
import { makeStyles } from "@material-ui/core/styles";

//TODO: IMPLEMENTER REACT HOOK FORM (https://codesandbox.io/s/8n937m64o9?file=/src/index.js)
//TODO: Faire un boutton retour
//TODO: Clean le code

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 20,
    width: "90%",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const AddProductNav = () => {
  //const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [produit, setProduit] = useState({});
  const methods = useForm();

  // DEGEULASSE
  const onSubmit = (data) => {
    const object = data;
    const imagesURL = produit.images.map((image) => uploadImage(image));
    uploadImage(produit.thumbnail).then((thumbnailURL) => {
      object.thumbnail = thumbnailURL;
      Promise.all(imagesURL).then((test) => {
        object.images = test;
        postProduct(object);
      });
    });
  };

  const postProduct = (product) => {
    axios({
      url: "http://localhost:8080/newItem",
      method: "POST",
      data: product,
    }).then((res) => {
      console.log(res);
    });
  };

  const thumbnailChange = (file) => {
    setProduit({ ...produit, thumbnail: file[0] });
  };

  const imageChange = (file) => {
    setProduit({ ...produit, images: file });
  };

  const uploadImage = (image) => {
    const file = new FormData();
    file.append("file", image);
    return axios.post("http://localhost:8080/upload", file).then((res) => {
      return res.data;
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tab} position="static" color="default">
        <Tabs
          onChange={handleChange}
          value={value}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          position="static"
        >
          <Tab label="Description" icon={<DescriptionIcon />} />
          <Tab label="Images" icon={<ImageIcon />} />
          <Tab label="Tags" icon={<CategoryIcon />} />
        </Tabs>
      </AppBar>
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TabPanel value={value} index={0}>
            <SetDescription value={value} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SetImage
              value={value}
              thumbnailHandler={thumbnailChange}
              imageHandler={imageChange}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SetTags />
          </TabPanel>
          <Button
            className={classes.button}
            color="secondary"
            type="submit"
            variant="contained"
          >
            upload
          </Button>
        </form>
      </FormContext>
    </div>
  );
};

export default AddProductNav;

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import CategoryIcon from "@material-ui/icons/Category";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EditImages from "../../../components/organisms/admin/EditImages";
import EditDescription from "../../../components/organisms/admin/EditDescription";
import EditTags from "../../../components/organisms/admin/EditTags";
import Button from "@material-ui/core/Button";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  FormContext,
} from "react-hook-form/dist/react-hook-form.ie11";
import { useFetch } from "../../../utils/hook";

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

const EditProductNav = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [produit, setProduit] = useState({});
  const methods = useForm();
  const [apiResponse, loading] = useFetch(
    `http://localhost:8080/product/${props.match.params.id}`,
    true
  );

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
    console.log(product);
    axios({
      url: `http://localhost:8080/updateItem/${props.match.params.id}`,
      method: "POST",
      data: product,
    }).then((res) => {
      console.log(res);
    });
  };

  const thumbnailChange = (file) => {
    setProduit({
      ...produit,
      thumbnail: file[0],
    });
  };

  const imageChange = (file) => {
    setProduit({ ...produit, images: file });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const uploadImage = (image) => {
    const file = new FormData();
    file.append("file", image);
    return axios.post("http://localhost:8080/upload", file).then((res) => {
      return res.data;
    });
  };

  return (
    <React.Fragment>
      {!loading ? (
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
                <EditDescription value={value} body={apiResponse} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <EditImages
                  value={value}
                  thumbnailHandler={thumbnailChange}
                  imageHandler={imageChange}
                  body={apiResponse}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <EditTags body={apiResponse} />
              </TabPanel>
              <Button
                className={classes.button}
                color="secondary"
                type="submit"
                variant="contained"
              >
                Update
              </Button>
            </form>
          </FormContext>
        </div>
      ) : (
        <LinearProgress />
      )}
    </React.Fragment>
  );
};

export default EditProductNav;

/*
<TabPanel
  value={this.state.value}
  index={0}
>
  <EditDescription
    input={this.onChangeHandler}
    body={this.state}
  />
</TabPanel>
<TabPanel
  value={this.state.value}
  index={1}
>
  <EditImages
    input={this.onChangeHandler}
    body={this.state}
  />
</TabPanel>
<TabPanel
  value={this.state.value}
  index={2}
>
  <EditTags
    input={this.onChangeHandler}
    body={this.state}
  />
</TabPanel>
*/

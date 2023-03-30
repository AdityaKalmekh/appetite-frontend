import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";
import SupplierDetails from "../components/supplier/SupplierDetails";

const UploadImage = ({ encodedImage, name, error, imageLink }) => {
  const [loadUpload, setLoadUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState();
  
  // console.log({imageProp});
  const convertToBase64 = (file) => {
    return new Promise((resolve,reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  } 
  
  const onSelectFile = async (e) => {
    e.preventDefault();
    // setLoadUpload(true);
    const files = e.target.files[0];
    const base64 = await convertToBase64(files)
    console.log({base64});
    console.log({files});
    // setImageUrl(response.data);
    setImageName(files);
    encodedImage(base64)
    // <SupplierDetails encodedimg={"hello"}/>
    // imageProp(response.data, name);
    // setLoadUpload(false);
  };

  const styles = {
    grid: {
      display: "flex",
      alignItems: "center",
      border: "1px solid grey",
      borderRadius: "4px",
      padding: "2rem",
    },
    typography: {
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
    },
  };

  
  return (
    <form>
      <Grid container spacing={1} sx={styles.grid} ml=".1rem">
        <Grid item md={6} xs={6}>
          <Button
            component="label"
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
          >
            <Box>
              Choose File
              <input type="file" multiple hidden onChange={onSelectFile} />
            </Box>
          </Button>
          {loadUpload && <CircularProgress size={20} />}
        </Grid>
        <Grid item md={6} xs={6}>
          <Typography variant="body2" sx={styles.typography}>
            {imageName ? (
              <Link href={imageUrl} target="_blank">
                {imageName?.name}
              </Link>
            ) : (
              "-"
            )}
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default UploadImage;
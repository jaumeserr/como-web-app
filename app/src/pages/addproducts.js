import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import CartLayout from "../components/layouts/CartLayout";
import PageHeading from "../components/PageHeading";
import Input from "../components/form/Input";
import { Spacer, Flex, Button } from "../components/UI";
import { createObject } from "../services/db";

const SelectStyled = styled.select`
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.primary};
  outline: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
`;

const InputFile = styled.input`
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.primary};
  outline: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
`;

const FormStyled = styled.form`
  display: flex;
  div:first-child {
    flex: 1;
  }
  div:last-child {
    width: 40%;
    margin-left: 30px;
  }
  img {
    border-radius: 5px;
    width: 100%;
  }
  .preview {
    padding-bottom: 5px;
  }
  .label-inputfile {
    padding-bottom: 8px;
    display: block;
  }
`;

const AddProduct = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [uploadValue, setUploadValue] = useState(-1);
  const [file, setFile] = useState("");
  const [formDataProduct, setFormDataProduct] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    price: 0,
    shortDescription: "",
    units: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await createObject("products", formDataProduct);
    console.log(
      "🚀 ~ file: addproducts.js ~ line 37 ~ handleFormSubmit ~ result",
      result
    );
    if (result) {
      history.push("/");
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const storageRef = firebase
      .storage()
      .ref(`/images/products/${formDataProduct.name}`);
    const task = storageRef.put(file);
    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + percentage + "% done");
        setUploadValue(percentage);
        // eslint-disable-next-line default-case
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error.message);
      },
      async () => {
        setUploadValue(100);
        const fileURL = await task.snapshot.ref.getDownloadURL();
        setFile(fileURL);
        console.log(fileURL);
        setUploadValue(-1);
        setFormDataProduct({ ...formDataProduct, image: fileURL });
      }
    );
  };

  return (
    <CartLayout>
      <PageHeading title="Add Product" />
      <FormStyled onSubmit={handleFormSubmit}>
        <div>
          <Input
            label="Product name"
            name="productname"
            placeholder="Enter a product name"
            value={formDataProduct.name}
            onChange={(value) =>
              setFormDataProduct({ ...formDataProduct, name: value })
            }
          />
          <Spacer />
          <Input
            label="Short Description"
            name="shortdescription"
            placeholder="Enter a short description"
            value={formDataProduct.shortDescription}
            onChange={(value) =>
              setFormDataProduct({
                ...formDataProduct,
                shortDescription: value,
              })
            }
          />
          <Spacer />
          <Input
            label="Description"
            name="description"
            placeholder="Enter a description"
            value={formDataProduct.description}
            onChange={(value) =>
              setFormDataProduct({ ...formDataProduct, description: value })
            }
          />
          <Spacer />
          <Flex>
            <Input
              label="Units"
              name="units"
              placeholder="Enter units"
              value={formDataProduct.units}
              onChange={(value) =>
                setFormDataProduct({ ...formDataProduct, units: value })
              }
            />
            <Input
              type="number"
              label="Price"
              name="price"
              placeholder="Enter price"
              value={formDataProduct.price}
              onChange={(value) =>
                setFormDataProduct({ ...formDataProduct, price: Number(value) })
              }
            />
          </Flex>
          <Spacer />
          <label className="label-inputfile">Upload file</label>
          <InputFile
            type="file"
            label="Upload file"
            name="image"
            onChange={(file) => handleUpload(file)}
          />
          <Spacer />
          <SelectStyled
            onChange={(event) =>
              setFormDataProduct({ ...formDataProduct, category: event.target.value })
            }
          >
            <option>Choose a category</option>
            <option value="buttons">Buttons</option>
            <option value="zippers">Zippers</option>
            <option value="types">Types</option>
            <option value="shoulder-pads">Shoulder Pads</option>
          </SelectStyled>
          <Spacer />
          <Button style={{ width: '100%'}} type="submit">CREATE PRODUCT</Button>
        </div>
        <Flex direction="column">
          <p className="preview">Image preview:</p>
          <img src={file} alt={file} />
        </Flex>
      </FormStyled>
    </CartLayout>
  );
};

export default AddProduct;

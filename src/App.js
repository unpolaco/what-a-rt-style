import { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import { Results } from "./components/Results";
import {
  Header,
  ImageWrapper,
  InputWrapper,
  MainContent,
  MainWrapper,
  SubmitButton,
  TextInput,
  UploadImageButton,
  UploadInputFile,
  UploadInputText,
  DaliIcon
} from "./App.styles";
import { metadataURL, modelURL } from "./consts/urls";

export const App = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await tmImage.load(modelURL, metadataURL);
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const sortResults = (results) =>
    results.sort((a, b) => {
      return b.probability - a.probability;
    });

  const checkImage = async () => {
    setIsChecking(true)
    textInputRef.current.value = "";
    const prediction = await model
      .predict(imageRef.current)
      .then((predict) => sortResults(predict));
    setResults(prediction);
    setIsChecking(false)
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  if (isModelLoading) {
    return <h2>Model Loading...</h2>;
  }

  return (
    <div className="App">
      <Header>What a(rt) style!</Header>
      <InputWrapper>
        <UploadInputFile
          type="file"
          accept="image/*"
          onChange={uploadImage}
          ref={fileInputRef}
        />
        <UploadImageButton onClick={triggerUpload}>
          Upload Image
        </UploadImageButton>
        <TextInput>OR</TextInput>
        <UploadInputText
          type="text"
          placeholder="Paste image URL"
          ref={textInputRef}
          onChange={handleOnChange}
        />
      </InputWrapper>
      <MainWrapper>
        <MainContent>
          <ImageWrapper>
            {imageURL && <img src={imageURL} alt="painting" ref={imageRef} />}
          </ImageWrapper>

          <Results results={results} />
        </MainContent>
        {imageURL && (
          <SubmitButton onClick={checkImage} disabled={isChecking}>Check a style!</SubmitButton>
        )}

        <DaliIcon/>
      </MainWrapper>
    </div>
  );
};

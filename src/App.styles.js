import styled from "@emotion/styled";
import { ReactComponent as Dali } from "./assets/dali.svg";

export const Header = styled.div`
  text-align: center;
  font-weight: 400;
  color: #fff;
  background: #333;
  font-size: 27px;
  padding: 5px 0;
`;

export const InputWrapper = styled.div`
  margin: 15px 0;
  padding: 0 10px;
  display: flex;
`;

export const UploadInputFile = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  opacity: 0;
`;
export const UploadInputText = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 0;
  display: inline-block;
  border: 1px solid #222;
  outline: none;
`;

export const UploadImageButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: #333;
  color: #fff;
  display: inline-block;
  border: 0;
  border-radius: 0;
  outline: none;
  cursor: pointer;
`;

export const TextInput = styled.span`
  align-items: center;
  display: inline-flex;
  padding: 0 20px;
`;

export const MainWrapper = styled.div`
  padding: 0 10px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ImageWrapper = styled.div`
  width: 60%;
  display: block;
  flex: 0 0 60%;
  max-width: 900px;
  height: 70vmin;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  &:empty {
    display: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SubmitButton = styled.button`
  padding: 12px 17px;
  font-size: 18px;
  background: #333;
  color: #fff;
  display: inline-block;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;
`;

export const DaliIcon = styled(Dali)`
  z-index: -10;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50px;
  right: 0;
  transform: scaleX(-1);
`;

export const Result = styled.div((props) => ({
  border: "1px solid #333",
  margin: " 0 0 10px",
  padding: "10px",
  backgroundColor: `rgba(130, 200, 20, ${props.value})`,
}));

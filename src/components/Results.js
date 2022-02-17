import React from "react";
import {
  ResultsHolder,
  Result,
  ResultScore,
  ResultName,
} from "./Result.styles";

export const Results = ({ results }) => {
  const convertToDisplay = (value) => `${(value * 100).toFixed(2)}%`;
  const convertToStyle = value => value < 0.2 ? 0.3 : value.toFixed(2)

  if (results.length > 0) {
    return (
      <ResultsHolder>
        {results.map((result) => {
          return <Result value={convertToStyle(result.probability)} key={result.className}>
            <ResultName >{result.className}</ResultName>
            <ResultScore>
              Score: {convertToDisplay(result.probability)}
            </ResultScore>
          </Result>;
        })}
      </ResultsHolder>
    );
  } else {
    return null;
  }
};

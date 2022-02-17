import styled from '@emotion/styled'

export const ResultsHolder = styled.div`
  padding: 30px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;
export const Result = styled.div(props => ({
  border: '1px solid #333',
  margin:' 0 0 10px',
  padding: '10px',
  backgroundColor: `rgba(130, 200, 20, ${props.value})`,
}))

export const ResultName = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
`;
export const ResultScore = styled.span`
    display: block;
    font-weight: 300;
}
`;


import { DotSpinner } from "@uiball/loaders";
import styled from "styled-components";

const ContainerLoading = styled.div`
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
`;

export const Spinner = () => {
  return (
    <ContainerLoading>
      <DotSpinner size={80} speed={0.9} color={"#56E39F"} />
    </ContainerLoading>
  );
};
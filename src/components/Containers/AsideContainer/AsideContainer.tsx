import React from "react";
import { CatalogProps, Children } from "@/types/types";
import Aside from "@/components/Containers/AsideContainer/Aside/Aside";
import { styled } from "@mui/material";
import { useAsideContainer } from "@/components/Containers/AsideContainer/useAsideContainer";

type AsideContainerProps = CatalogProps & Children;

const AsideContainer = ({ children, catalog = [] }: AsideContainerProps) => {
  const { leftAside, rightAside } = useAsideContainer(catalog);

  console.log(leftAside, rightAside);

  return (
    <ContainerSC>
      <Aside />
      {children}
      <Aside />
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
`;

export default React.memo(AsideContainer);

import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";

type KontaktiProps = CatalogProps;

const Index = ({ catalog }: KontaktiProps) => {
  const customBread = {
    title: RoutesNamespaceRU.CONTACTS,
    href: RoutesNamespace.CONTACTS,
  };

  return (
    <TitleLayout title={RoutesNamespaceRU.CONTACTS}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.CONTACTS}>
            <h1>ok</h1>
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<KontaktiProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);

  return { props: { catalog: catalog.data } };
};

export default React.memo(Index);
import Container from "@/components/Container";
import ProductInsideBottom from "@/blocks/ProductInside/ProductInsideBottom";
import ProductInsideTop from "@/blocks/ProductInside/ProductInsideTop";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import SimiliarProducts from "@/blocks/ProductInside/SimiliarProducts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPremiumProducts } from "@/pages/api/getPremiumProducts";
import { getProductSingle } from "@/pages/api/getProductSingle";

export default function ProductInside({ data, filteredData, similiarData }) {
  const dataBreadCrumb = [
    {
      link: "/",
      text: "Gamenote",
    },
    {
      link: data?.menu_slug,
      text: data?.menu_name,
    },
    {
      link: "#",
      text: data?.name,
    },
  ];

  console.log("data", data);
  return (
    <>
      <Container>
        <BreadCrumb data={dataBreadCrumb} />
        <ProductInsideTop data={data} />
        <ProductInsideBottom data={data} filteredData={filteredData} />
        <SimiliarProducts similiarData={similiarData} />
      </Container>
    </>
  );
}

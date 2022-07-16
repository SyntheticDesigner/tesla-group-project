import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import CardsGrid from "../CardsGrid";
import items from "../../Data";
import {
  Element as ScrollElement,
  scroller,
  animateScroll as scroll,
} from "react-scroll";

const ProductPage = () => {
  const params = useParams();

  useEffect(() => {
    if (params.subCategory && !params.option) {
      scroller.scrollTo(params.subCategory, {
        duration: 300,
        delay: 0,
        smooth: "ease",
        offset: -100,
      });
    } else if (!params.option) {
      scroll.scrollTo(0, {
        duration: 0,
        smooth: false,
      });
    }
  }, [params]);

  return (
    <div style={{ paddingTop: "100px" }} className='productsPage'>
      {/* search items for category that matches parameters using filter */}
      {items
        .filter(
          (category, index) => category.category === params.productCategory
        ) // map through the filtered array to get the categories data
        .map((category, i) => (
          <div key={i} className='chargingWrapper'>
            {category.category === "vehicle-accessories" ? (
              <h2>Vehicle Accessories</h2>
            ) : (
              <h2>{category.category}</h2>
            )}
            {/* map through the subCategories and send each list of products to the Cards Grid */}
            {category.subCategories.map((sub, index) => (
              <ScrollElement
                name={sub.subCategory}
                key={index}
                className='atHome'
              >
                <h3>{sub.subCategory.replace(/-/g, " ")}</h3>
                <CardsGrid
                  products={sub.products}
                  subCategory={sub.subCategory}
                />
              </ScrollElement>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ProductPage;

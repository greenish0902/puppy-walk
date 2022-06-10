import React, { memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import dog from "./assets/img/dog.png";

const Meta = memo((props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />
        <link rel="shortcut icon" href={props.image} type="image/png" />
        <link rel="icon" href={props.image} type="image/png" />
      </Helmet>
    </HelmetProvider>
  );
});

Meta.defaultProps = {
  title: "산책하개",
  description: "반려동물 산책메이트 SNS",
  keyword: "puppy, walk",
  author: "team hello-puppy",
  image: dog,
  url: window.location.href,
};

export default Meta;

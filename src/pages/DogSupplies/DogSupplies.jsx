/**
 * @filename DogSupplies.js
 * @description 애견용품 홈 화면 / best, category 누를시 넘어감
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo, useEffect } from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

import MenuLink from '../../components/DogSupplies/MenuLink';
import JMFooter from "../../components/JMFooter";
import JMHeader from "../../components/JMHeader";
import JSGoods from '../../components/DogSupplies/JSGoods';
import img from '../../assets/img/dog.png';

import Slider from 'react-slick';

const DogSuppliesBox = styled.div`
  height: 530px;
  width: 360px;
  padding: 10px;
  margin: 40px auto 55px auto;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  nav {
    text-align: center;
  }

  hr {
    margin: 10px 0;
  }
  
  .categoryItem {
    a {
      float: left;
      box-sizing: border-box;
      width: 140px;
      margin: 0 40px 20px 0;
      &:nth-child(2n) {
        margin-right: 0px;
      }
    }
    &:after {
      display: block;
      content: "";
      float: none;
      clear: both;
    }
  }

  h4 {
    margin-bottom: 20px;
  }

  .swiper {
    height: 160px;
    padding-bottom: 20px;
  }

  .sliderbox {
    display: inline-block;
    width: 140px;
  }
`
const DogSupplies = memo(() => {
  const {where} = useParams();
  const setting = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToScroll: 2,
    slidesToShow: 2,
  }
  const [state, setState] = React.useState(false);
  useEffect(() => {
    if (where) {
      setState(true)
    } else {
      setState(false)
    }
  }, [where, state])
  
  return (
    <>
      <JMHeader>애견용품</JMHeader>
      <DogSuppliesBox>
        <nav>
          <MenuLink to={"/dogsupplies/best"}>BEST</MenuLink>
          <MenuLink to={"/dogsupplies/category1"}>카테고리1</MenuLink>
          <MenuLink to={"/dogsupplies/category2"}>카테고리2</MenuLink>
          <MenuLink to={"/dogsupplies/category3"}>카테고리3</MenuLink>
        </nav>
        <hr/>
        {
          state ? (
            <div className='categoryItem'>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
              <JSGoods data-title={where} data-price={"100"} src={img} title={where} price="10,000"/>
            </div>
          ) : (
            <div>
              <h4>BEST</h4>
              <Slider {...setting}>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
              </Slider>
              <h4>카테고리1</h4>
              <Slider {...setting}>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
              </Slider>
              <h4>카테고리2</h4>
              <Slider {...setting}>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
              </Slider>
              <h4>카테고리3</h4>
              <Slider {...setting}>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
                <JSGoods src={img} title="title" price="10,000"/>
              </Slider>
            </div>
          )
        }
      </DogSuppliesBox>
      <JMFooter/>
    </>
  );
});

export default DogSupplies;
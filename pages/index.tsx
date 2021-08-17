/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../i18n"
import database from "../common/database";
import { GetStaticProps } from "next";
const Home = ({ data }:any) => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Head>
          <title>shopEcho</title>
          <meta name="description" />
        </Head>
        <Flip left>
          <img
            src="./img\Landing.jpg"
            alt="Organic chemistry lab is waiting"
            className="object-cover w-full h-screen m-auto lg:object-fill"
          ></img>
        </Flip>
        <Fade bottom>
          <div className="">
            <h1 className="w-full my-6 text-3xl font-bold text-center border-b-2 border-black md:w-11/12 md:mx-20">
              About Us
            </h1>
            <p className="my-10 text-xl font-medium text-justify mx-14 md:mx-28 ">
              {data}
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps:GetStaticProps = async() => {
  const data = (await (await database()).collection('aboutus').findOne({}))!.aboutus;
  return{
     props:{
    data:data
  }
  }
}

export default Home;
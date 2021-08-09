/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
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
            <h1 className="w-9/12 pl-10 mx-20 my-6 text-3xl font-bold border-b-2 border-black md:w-10/12">
              About us
            </h1>
            <p className="my-10 text-xl font-medium mx-14 md:mx-28 ">
              The current pandemic has affected the education system all over
              the world. Everyone is learning remotely. It is still all right
              for the senior students but the junior students are the ones who
              need regular interaction and our current education system is not
              able to provide this to them.
              <br />
              <br />
              We created an AR-based website EduAR where students from any
              background can learn different reactions of organic chemistry and
              learn from it.Students can learn various concepts with the help of
              3D Models, which makes learning fun and effortless. EduAR can help
              students achieve better results through visualization and full
              immersion in the subject matter. Interactive AR learning can have
              a significant positive impact on students. It keeps them engaged
              throughout the lesson We also created a chatbot and multi-language
              support in our website which makes it even more convenient for
              students to learn.
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

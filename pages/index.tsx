/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import database from "../common/database";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import en from '../locales/en.json'
import hi from '../locales/hi.json';
const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en: hi;
  const fadeBottom = {
    hidden:{
    opacity:0,
    y:-60
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        delay:1,
      }
    }
  }
  const fadeTop = {
    hidden:{
      opacity:0,
      y:60,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        delay:1,
      }
    }
  }
  const fadeRight ={
hidden:{
  opacity:0,
  x:-50,
},
visible:{
  opacity:1,
  x:0,
  transition:{
    delay:0.5,
  }
},
  }
  return (
    <div>
      <Navbar />
      <div className="">
        <Head>
          <title>{t.shopEcho}</title>
          <meta name="description" />
        </Head>
          <motion.img
            src="./img\Landing.jpg"
            alt="Organic chemistry lab is waiting"
            className="object-cover w-full h-screen m-auto lg:object-fill"
            variants={fadeRight}
            initial='hidden'
            animate='visible'
          ></motion.img>
          <div className="">
            <motion.h1 className="w-full my-6 text-3xl font-bold text-center border-b-2 border-black md:w-11/12 md:mx-20 " variants={fadeBottom} initial='hidden'animate='visible'>
             {t.title}
            </motion.h1>
            <motion.p className="my-10 text-xl font-medium text-justify mx-14 md:mx-28 " variants={fadeTop} initial='hidden'animate='visible'>
              {t.description}
            </motion.p>
    
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
import { GetStaticProps } from "next";
import React from "react";
import database from "../../common/database";
import Card from "../../components/card";
import en from '../../locales/en.json'
import hi from '../../locales/hi.json'
import { useRouter } from "next/dist/client/router";
const ChemistryClassroom = ({data}:any) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en: hi;
    return (
      <div className='w-full bg-green-300 h-full pt-10'>
         <p className=' mx-auto md:text-4xl font-semibold text-3xl text-center text-blue-700 '>{t.Experiment}</p> 
      <div className='flex hover:-translate-y-1 py-20   flex-wrap cursor-pointer'>
          {data.map((e:{topic:string,_id:string}) =>{
        return(
            <Card fetchData = {e}
            key={data.indexOf(e)}/>
        )})}
        </div>
        </div>
    )}
export default ChemistryClassroom;
 export const getStaticProps:GetStaticProps = async() =>{
  const data = await(await database()).collection('echoAr').find({}).toArray();
  data.map((item)=>{
    item._id = item._id.toString();
  })
  return{
  props:{
      data:data,
  }
}
}
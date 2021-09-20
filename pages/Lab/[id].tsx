import { ObjectId } from "bson";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head"
import database from "../../common/database";
import Chemistrylab from "../../components/lab";
export interface Info{data:{title:string;echoAr:string;QrCode:string;link:string}}
 const Lab = ({data}:Info) => {
    return (
        <div>
          <Head>
              <title>Lab</title>
              </Head> 
              <Chemistrylab  data = {data}/>
        </div>
    )
}
export default Lab;
 export const getStaticPaths:GetStaticPaths = async() =>{
    const data = await(await database()).collection('echoAr').find().toArray();
    const paths = data.map(item =>{
        return{
            params:{id:item._id.toString()}
        }
    })
    
     return{
         paths,
         fallback:false,
     };
 }
 export const getStaticProps:GetStaticProps = async({params:{id}}:any) =>{
     const data = await(await database()).collection('echoAr').findOne({_id:new ObjectId(id)},{projection:{_id:0}})
     return{
         props:{
          data:data,
         }
     }
 }

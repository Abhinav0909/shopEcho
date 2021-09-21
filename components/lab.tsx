/* eslint-disable @next/next/no-img-element */

const Chemistrylab = ({data}:{data:{title:string,echoAr:string,QrCode:string,link:string}}) => {
  return (
    <div className=''>
      <p className='text-center text-3xl font-semibold mt-6 font-mono'>Welcome to Lab</p>
      <div className="sketchfab-embed-wrapper">
        {" "}
        <iframe
          title={data?.title}
          frameBorder="0"
          allowFullScreen
          allow="fullscreen; autoplay; vr"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src={data?.echoAr}
          className='w-full h-screen md:px-16 md:pb-16 md:pt-10  p-4 px-auto'
        ></iframe>
        <p className='flex justify-center text-justify md:px-10 px-14 md:text-2xl text-xl md:pt-4 pt-10 font-serif font-medium'>To view in AR, Scan the QR code or click on the button below</p>
        <div className='flex  md:flex-row flex-col justify-center md:space-x-10 my-10 items-center'>
          <img  src={data?.QrCode} alt='QR Code' className='border-2 md:m-2 m-10 border-black'/>
          <button type="button" className='flex justify-center md:h-12 md:w-1/6 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl uppercase font-bold shadow-md  py-2 my-auto w-1/2  '>    
            <a href={data?.link} >
              View in AR
              </a>
                </button>
        </div>
        
        </div>
    </div>
  );
};
export default Chemistrylab;

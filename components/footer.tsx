export interface footerProps {}
const Footer: React.FC<footerProps> = () => {
  return (
    <div className='p-4 text-center text-white bg-black'>
      <h1>Made a little experiment with echoAr
        <span className='text-blue-700'> by Abhinav Karforma</span>
      </h1>
    </div>
  )
}

export default Footer;

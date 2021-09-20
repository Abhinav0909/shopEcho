import { useRouter } from "next/dist/client/router";
import en from "../locales/en.json"
import hi from "../locales/hi.json"
const Footer: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en: hi;
  return (
    <div className='p-4 text-center text-white bg-blue-400 font-mono'>
      <h1>{t.footer}
        <span className='text-purple-900'> {t.span}</span>
      </h1>
    </div>
  )
}

export default Footer;

import { NodeMailgun } from "ts-mailgun";

const mailGun = new NodeMailgun();
mailGun.apiKey = process.env.API_KEY as string;
mailGun.domain = process.env.DOMAIN as string;
mailGun.fromEmail = `hi@${process.env.DOMAIN as string}`
mailGun.fromTitle = 'You have successfully signed up',
mailGun.init();

const mail = async (receiver: string, subject: string, content: string) => {
  try {
    const data = mailGun.send(receiver, subject, content);
  } catch (err) {
    console.log(err);
  }
}

export default mail;
import doT from 'dot';
import path from 'path';
import fs from 'fs';


// eslint-disable-next-line import/no-anonymous-default-export
export default (email:string):string => {
 const data = fs.readFileSync(path.join(process.cwd(), 'template','body.html'), 'utf-8');
  const template = doT.template(data);
  return template({email: email})
}
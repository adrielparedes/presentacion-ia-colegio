import {chromium} from 'playwright';
import {existsSync} from 'node:fs';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
export const root=fileURLToPath(new URL('../',import.meta.url));
export async function browser(){
 const path=process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
 return chromium.launch({headless:true,...(existsSync(path)?{executablePath:path}:{})});
}
export async function serve(){
 const server=spawn('python3',['-m','http.server','0','--bind','127.0.0.1'],{cwd:root,env:{...process.env,PYTHONUNBUFFERED:'1'},stdio:['ignore','pipe','pipe']});
 const url=await new Promise((resolve,reject)=>{
 let output=''; const timer=setTimeout(()=>{server.kill();reject(new Error('No se inició el servidor'))},10000);
 server.on('error',e=>{clearTimeout(timer);reject(e)});
 server.on('exit',code=>{clearTimeout(timer);reject(new Error('Servidor terminó: '+code))});
 server.stdout.on('data',d=>{output+=d;const m=output.match(/port (\d+)/);if(m){clearTimeout(timer);resolve('http://127.0.0.1:'+m[1])}});
 });
 return {url,close:()=>server.kill()};
}

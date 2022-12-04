import path from 'path'
import fs, {promises as fspromise} from 'fs'
const matter = require('gray-matter')
export const getPosts = async ()=>{
const markdowndir=path.join(process.cwd(), 'markdown')
const files= fs.readdirSync(markdowndir)
console.log("files",files)
const x=files.map(filename => {
    const fullPath=path.join(markdowndir,filename)
    const id=filename.replace(fullPath,'')
    const text=fs.readFileSync(fullPath,'utf8')
    const {data:{title,date},content}=matter(text)
    return {id,title,date}
})
return x

}
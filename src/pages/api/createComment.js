import { createJSDocComment } from "typescript"

export default async function createComment( req, res){
    const {name, text, _id } = JSON.PARSE(req.body);
    console.log(name, text, _id)

}
import jwt_decode from "jwt-decode";
 

const decode=(token)=>{

    let decoded = jwt_decode(token);
    return decoded;
    
    // let decodedHeader = jwt_decode(token, { header: true });
    // console.log(decodedHeader);
}
 

export default decode;

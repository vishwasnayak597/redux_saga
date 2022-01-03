import axios from "axios"

export const fetchData=async()=>{
    try{
        const response = await fetch("https://randomuser.me/api/?results=15");
        console.log("service data",response)
        const users = await response.json();
        console.log("data",users)
        return users;
        // const response= axios.get('https://randomuser.me/api/?results=15')
        // const users=response.data
        // console.log("service data",users)
        // return users
    }
    catch(error){
        console.log(error)
      }

}
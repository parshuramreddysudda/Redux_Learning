import axios from 'axios'

const MainServices ={

getAllUsers,
deleteUser,
getUser,
putUser,
getImage
}

function getAllUsers(){
 
   return axios.get(`http://0.0.0.0:4010/api/users`)
}
function deleteUser(id){
    return axios.delete(`http://0.0.0.0:4010/api/users${id}`)
}
function getUser(id){
    return axios.get(`http://0.0.0.0:4010/api/users/${id}`).catch(function (error) {
        console.log(error);
      })
}
function getImage(){
    return axios.get(`https://loremflickr.com/320/240`);
}
function putUser(id,name,state,created,updated,type){
 return axios.put(`http://0.0.0.0:4010/api/users/${id}?id=${id}&name=${name}&state=${state}&created=${created}&updated=${updated}&type=${type}`).catch(function (error) {
    console.log(error);
  })
}

export default MainServices;


const MainHelper = {
    deleteUserFromState,
    getUserDataFromid
    }
  
  
    
    function deleteUserFromState(id,users) {
        return users.filter(user => user.id !== id)
        
    }
    function getUserDataFromid(id,user){
        return user.filter(user =>user.id===id)
        
    }
    
    export default MainHelper;
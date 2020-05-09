
const Actions={
    setTypeDeposit,
    setTypeWithDrawl
}

function setTypeDeposit(text,action){
    return {
        type:"DEPOSIT_MONEY",
        option:text,
        action:action
    }
}
function setTypeWithDrawl(text,action){
    return {
        type:"WITHDRAW_MONEY",
        option:text,
        action:action
    }
}



export default Actions;
const AccountHelpers={
    deduceAmount,
    increaseAmount
}

function deduceAmount(action,state){

   
    return state.money-action.option
}

function increaseAmount(action,state) {
    return parseInt(state.money)+parseInt(action.option)
}

export default AccountHelpers;
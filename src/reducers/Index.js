import AccountHelper from '../Helpers/AccountHelpers'

export default  (state , action) => {



     switch (action.type) {
         case "DEPOSIT_MONEY":
             return {
                 option: action.option,
                 money:AccountHelper.increaseAmount(action,state),
                 action:action.action
                 
                }
            case "WITHDRAW_MONEY":
                return {
                    option:action.option,
                    money:AccountHelper.deduceAmount(action,state),
                    action:action.action
                }
         default:
             return state;

        
     }
}

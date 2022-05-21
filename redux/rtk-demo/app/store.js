const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')

const  cakeReducer= require('../features/cake/cakeSlice')
const  icecreamReducer= require('../features/ice-cream/icecreamSlice')
const  userReducer= require('../features/users/userSlice')
// const logger = reduxLogger.createLogger()


const store=configureStore({
    reducer:{
        cakes:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)

})

module.exports=store;


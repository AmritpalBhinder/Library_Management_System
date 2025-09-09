// import {configureStore} from "@reduxjs/toolkit"
// import bookReducer from "../features/bookSlice"
// import memberSlice from "../features/membersSlice"
// import finseSlice from "../features/finesSlice"
// import issueSlice from "../features/issueSlice"
// import reservationSlice from "../features/reservations"
// import authReducer from "../features/authSlice";



// export const store = configureStore({
//     reducer:{
//      books:bookReducer,
//      members:memberSlice,
//      fines:finseSlice,
//      issue:issueSlice,
//      reservation:reservationSlice,
//          auth: authReducer,  
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import memberReducer from "../features/membersSlice";
import fineReducer from "../features/finesSlice";
import issueReducer from "../features/issueSlice";
import reservationReducer from "../features/reservations";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    members: memberReducer,
    fines: fineReducer,
    issue: issueReducer,
    reservation: reservationReducer,
    auth: authReducer,
  },
});

import { call,put, takeEvery } from "@redux-saga/core/effects";
import {fetchData} from '../services/index'
import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure} from '../actions/index';


export default function* fetchUsers(action){
    try
    {
        const data=yield call(fetchData)
        console.log("saga data",data);
        yield put(fetchUsersSuccess(data));
} catch(e){
    yield put(fetchUsersFailure(e));
}
}

// function* userSaga(){
//     yield takeEvery(fetchUsersRequest,fetchUsers);
// }



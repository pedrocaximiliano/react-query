import { createDomain } from "effector";
import getService from "../service";


const TodoAdd = createDomain("TodoAdd");

export const getTodos = TodoAdd.effect(() => {
    return getService()
});

const initialState = {
    data: [],
}

const storeDefault = TodoAdd.store(initialState)
    .on(getTodos.doneData, (state, data) => (
        {
            ...state,
            data,
        }))
    .on(getTodos.failData, () => (initialState))

export default storeDefault;
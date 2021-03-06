import * as React from "react";
import { useStore } from "effector-react";
import $store, { getTodos } from "./store";
import Home from "../page/home";

const Effector = () => {
    const store = useStore($store);
    const { data } = store;

    const loading = useStore(getTodos.pending)

    if (loading) {
        return <div> Loading...</div>
    }

    if (data.length === 0) {
        return <div>ERROR</div>
    }
    return (
        <Home data={data} />
    );
}

export default Effector;
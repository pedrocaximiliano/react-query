import {
    useQuery,
} from 'react-query'
import Home from '../page/home';
import getService from '../service';

const ReactQuery = () => {
    const { isLoading, error, data } = useQuery('getTodo', getService);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    return (
        <>
        <Home data={data} />
        </>
     
    );
}

export default ReactQuery;

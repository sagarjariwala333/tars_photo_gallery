import { API_END_POINT } from "./env";
import axiosobj from "./http";

const url = API_END_POINT;

export async function getImages(q, pageno)
{
    try
    {
        console.log("api call", q)
        if(q)
        {
            return await axiosobj.get(url + "/search/photos?per_page=12&query="+q + "&page=" + pageno)
        }
        else
        {
            return await axiosobj.get(url + "/photos?per_page=12&page=" + pageno)
        }
    }
    catch(err)
    {
        throw err;
    }
}
'use server'

import axios from "axios"

export async function deleteTalkCard(id) {
    const baseurl = new URL(process.env.MOCK_API_TALKCARDS_URL)
    baseurl.pathname += `/${id}`;

    try {
        const response = await axios.delete(baseurl);

        if (response.status == 200) {
            console.log("from server side : delete success")
        }

        return { message: "sending to client side : delete success" }

    } catch (error) {

        console.log("server side : deleteTalkCard : error caught")
        console.log(`server side : deleteTalkCard : ${error.message}`)
        throw new Error({ message: "sending to client side : delete failure" })
    }

}
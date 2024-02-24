'use server'

import axios from "axios"

export async function postTalkCard(talkcard) {
    const baseurl = process.env.MOCK_API_TALKCARDS_URL

    try {
        const response = await axios.post(baseurl, talkcard);

        if (response.status == 200) {
            console.log("from server side : post success")
        }

        return { message: "sending to client side : post success" }

    } catch (error) {

        console.log("server side : postTalkCard : error caught")
        return { message: "sending to client side : post failure" }
    }

}
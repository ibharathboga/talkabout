'use server'

import axios from "axios"

export async function getTalkCardAtPage(page) {
    if (page == null) { page = 1 }

    const baseurl = new URL(process.env.MOCK_API_TALKCARDS_URL)
    baseurl.searchParams.append("page", page)
    baseurl.searchParams.append("limit", 1)

    try {
        const response = await axios.get(baseurl)

        console.log(`Server Side : getTalkCardAtPage(${page}) invoked`)

        return response.data[0]
    }
    catch (error) {

        console.log(`Server Side : getTalkCardAtPage(${page}) : error caught`)
        return []

    }
}
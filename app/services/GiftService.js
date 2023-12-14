import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";


// @ts-ignore
// const giftApi = axios.create({
//     baseURL: 'https://sandbox.codeworksacademy.com/api/gifts'
// })

class GiftService {
    async getApiGifts() {
        const response = await api.get('api/gifts')
        console.log('🎁 Getting Api gifts:', response.data)
        AppState.theGifts = response.data
        console.log('✨🎁', AppState.theGifts)
    }
}

export const giftService = new GiftService()
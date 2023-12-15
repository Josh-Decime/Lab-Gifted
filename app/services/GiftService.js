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
        // AppState.theGifts = response.data
        const newGifts = response.data.map(giftData => new Gift(giftData))
        console.log('✨🎁', newGifts)
        AppState.theGifts = newGifts
    }

    async openPresent(id) {
        let foundGift = AppState.theGifts.find(gift => gift.id == id)
        foundGift.opened = !foundGift.opened
        console.log('🎁 LET OPEN OUR PRESENT! 🎁', foundGift)
        const response = await api.put(`api/gifts/${id}`, foundGift)
        console.log('🙏Please work', response.data)
        foundGift.url = response.data.url
        AppState.emit('theGifts')
    }

}

export const giftService = new GiftService()
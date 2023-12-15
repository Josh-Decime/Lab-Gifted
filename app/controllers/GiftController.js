import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawApiGifts() {
    let gifts = AppState.theGifts
    let content = ''
    gifts.forEach(gift => content += gift.GiftCard)
    setHTML('gifts-draw', content)
}

// function _drawGifts(){
//     const gifts = AppState.theGifts
//     let content = ''

// }



export class GiftController {
    constructor() {
        console.log('🎁🎮')
        AppState.on('account', this.getGifts)
        AppState.on('theGifts', _drawApiGifts)

    }

    async getGifts() {
        try {
            await giftService.getApiGifts()

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async openGift(id) {
        try {
            await giftService.openPresent(id)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }




}
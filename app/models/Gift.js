import { generateId } from "../utils/GenerateId.js"



export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.opened = data.opened
        this.profileIdsOpened = data.profileIdsOpened
        this.url = data.url
        this.creatorId = data.creatorId

    }

    get GiftCard() {
        return `
<div class="col-3 m-3 card">
    <p class="text-center">${this.tag}</p>
    <img src="${this.url}" alt="Gift Image">
    <button onclick="app.GiftController.openGift('${this.id}')">OPEN!</button>
</div>
        `
    }





}



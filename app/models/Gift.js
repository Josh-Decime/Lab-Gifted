


export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.opened = data.opened
        this.profileIdsOpened = data.profileIdsOpened
        this.url = data.url
        this.creatorId = data.creatorId

    }

    get GiftCard() {
        return `
        <div class="col-4 card">
            <p>${this.tag}</p>
            <p>${this.url}</p>
        </div>
        `
    }





}



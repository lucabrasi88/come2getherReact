import PouchDB from "pouchdb"

export default class DB{
    constructor(name){
        this.db = new PouchDB(name);
    }

    async getAllEvents(){
        let allEvents = await this.db.allDocs({ include_docs: true});
        let eventsData = {};

        allEvents.rows.forEach(e => eventsData[e.id] = e.doc);

        return eventsData;
    }

    async createEvent(eventData){
        eventData.createdAt = new Date();
        eventData.updatedAt = new Date();

        const result = await this.db.post({ ...eventData });
        return result;
    }
}
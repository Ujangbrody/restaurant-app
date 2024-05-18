import { openDB } from 'idb';
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {keypath: 'id' });
    },
});

const FavoriteRestaurantIdb = {
    async getRestaurant(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllRestaurant() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putRestaurant() {
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },
    async deleteRestaurant() {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteRestaurantIdb;
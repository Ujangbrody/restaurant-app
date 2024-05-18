import { async } from "regenerator-runtime";
import RestaurantSource from "../data/restaurant-source";
import { createLikeButtonTemplate, createLikedButtonTemplate } from "../views/templates/template-creator";

const likeButtonContainer = {
    async init ({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
    
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    // async _isRestaurantExist() {
    //     const restaurant = await 
    // },
}
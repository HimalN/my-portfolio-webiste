export default class ItemsModel {

    constructor(id,itemName,category,weight,price,qty) {
        this._id = id;
        this._itemName = itemName;
        this._category = category;
        this._weight = weight;
        this._price = price;
        this._qty = qty;
    }


    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(itemName) {
        this._itemName = itemName;
    }

    get category() {
        return this._category;
    }

    set category(category) {
        this._category = category;
    }

    get weight() {
        return this._weight;
    }

    set weight(weight) {
        this._weight = weight;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get qty() {
        return this._qty;
    }

    set qty(qty) {
        this._qty = qty;
    }
}
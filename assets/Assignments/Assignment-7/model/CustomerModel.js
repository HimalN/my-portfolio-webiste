export default class CustomerModel {

    constructor(id,name,address,telephone) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._telephone = telephone;
    }


    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get telephone() {
        return this._telephone;
    }

    set telephone(telephone) {
        this._telephone = telephone;
    }
}
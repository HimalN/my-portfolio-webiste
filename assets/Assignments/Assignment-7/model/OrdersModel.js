export default class OrdersModel {

    constructor(orderId,date,customerId,cName,address,tp,itemId,iName,orderQty,price,total) {
        this._orderId = orderId;
        this._date = date;
        this._customerId = customerId;
        this._cName = cName;
        this._address = address;
        this._tp = tp;
        this._itemId = itemId;
        this._iName = iName;
        this._qty = orderQty;
        this._price = price;
        this._total = total;
    }


    get orderId() {
        return this._orderId;
    }

    set orderId(orderId) {
        this._orderId = orderId;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(customerId) {
        this._customerId = customerId;
    }

    get cName() {
        return this._cName;
    }

    set cName(cName) {
        this._cName = cName;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get tp() {
        return this._tp;
    }

    set tp(tp) {
        this._tp = tp;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(itemId) {
        this._itemId = itemId;
    }

    get iName() {
        return this._iName;
    }

    set iName(iName) {
        this._iName = iName;
    }

    get qty() {
        return this._qty;
    }

    set qty(qty) {
        this._qty = qty;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get total() {
        return this._total;
    }

    set total(total) {
        this._total = total;
    }
}
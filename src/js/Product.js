class Product {
    constructor(title,
        price,
        parcelNumber,
        parcelValue,
        highTop,
        category,
        image
    ) {
        this._title = title;
        this._price = price;
        this._parcelNumber = parcelNumber;
        this._parcelValue = parcelValue;
        this._highTop = highTop;
        this._category = category;
        this._image = image;
    }

    get title() {
        return this._title;
    }
    get price() {
        return this._price;
    }
    get parcelNumber() {
        return this._parcelNumber;
    }
    get parcelValue() {
        return convertToBRL(this._parcelValue);
    }
    get title() {
        return this._title;
    }
}
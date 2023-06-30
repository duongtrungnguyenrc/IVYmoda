import { Schema } from 'mongoose';

export const productSchema = new Schema({
    productId: String,
    type: String,
    productGroup: String,
    productName: String,
    description: String,
    colorOptions: Array,
    sizeOptions: Array,
    basePrice: Number,
    salePrice: Number,
    inStock: Number,
    preserveDetail: String,
});
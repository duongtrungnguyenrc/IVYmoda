export interface ProductModel {
    productId: string;
    type: string;
    productGroup: string;
    productName: string;
    images: {
        id : string;
        imgLink: string;
    }[];
    description: string;
    colorOptions: {
        id: number;
        colorName: string;
        colorLink: string;
    }[];
    sizeOptions: {
        id: number;
        size: string;
    }[];
    basePrice: number;
    salePrice: number;
    inStock: number;
    preserveDetail: string;
    tag: string
}

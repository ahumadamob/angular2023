export interface Producto {
    id: string;
    site_id: string;
    title: string;
    seller_id: number | string | undefined;
    category_id?: string;
    official_store_id: number;
    price: number;
    base_price: number;
    thumbnail: string;
    catalog_listing: boolean;
    pictures:Picture[];
    seller_address:{
        id: string
    }
    permalink:string;
}
export interface Picture {
    id: string,
    url: string,
    secure_url: string,
}

export interface Description{
    plain_text: string
}

export interface ProductoDescription{
    producto: Producto,
    description: Description,
}
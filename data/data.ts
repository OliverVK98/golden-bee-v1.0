export interface IDataItem {
    name: string,
    rating: number,
    price: number,
    discountedPrice: number,
    imageUrl: string,
    extraAssets: string[],
    banners: string[],
    bulks?: string[]
}

export const data: IDataItem[] = [
    {
        name: `"You Are My Sunshine" Necklace`,
        rating: 149,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-green-finger-gesture-866_150x150_crop_center.jpg?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_150x150_crop_center.png?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace1_150x150_crop_center.png?v=1647710965",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace2_150x150_crop_center.png?v=1647710965"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-10-44_ls209983_jpeg_WEBP_Image_1030_x_1029_pixels_Scaled_90_1024x1024.png?v=1634569949",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-e52cbf9622_1024x1024.gif?v=1646276892",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-11-15_ls209991_jpeg_WEBP_Image_908_x_907_pixels_1024x1024.png?v=1634570015"
        ],
        bulks: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/sunflower2.png",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_4_1024x.png?v=1641870315",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/3x-sunflower-necklace-bee-kind-shop-white-jewelry-amber-471_1024x.png?v=1647456204"
        ]
    },
    {
        name: "Spinning Sunflower Necklace",
        rating: 31,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_18_370x.png?v=1647672166",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-927_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-finger-653_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-skin-jewelry-purple-374_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-purple-fashion-291_150x150_crop_center.jpg?v=1647672166"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-02_lsp06267_jpg_WEBP_Image_1030_x_1030_pixels.png?v=1634574899",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Necklace_new_1.png?v=1657115245",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-12_lsp06201_jpeg_WEBP_Image_1030_x_1029_pixels.png?v=1634574919"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-flower-plant-petal-499_370x.png?v=1647456269",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-insect-finger-gesture-133_150x150_crop_center.jpg?v=1647456271",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-jewelry-finger-gesture-905_150x150_crop_center.jpg?v=1647456274",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-skin-jewelry-nail-873_150x150_crop_center.jpg?v=1647456277"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-52-03_img_9387_facetune_04-10-2021-10-47-54_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933195",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-49_ls200004_jpeg_WEBP_Image_1080_x_1079_pixels_1024x1024.png?v=1635933216",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-57_img_5334_facetune_11-09-2021-13-30-31_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933241"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/16_370x.png?v=1658873470",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/17_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing1_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing2_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing3_150x150_crop_center.png?v=1658873470"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-03b977e6b1.gif?v=1658450877",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_1.png?v=1657111809",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_2.png?v=1657111834"
        ]
    }
]

export const dataTwo: IDataItem[] = [
    {
        name: `"You Are My Sunshine" Necklace`,
        rating: 149,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_150x150_crop_center.png?v=1641870844",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-green-finger-gesture-866_150x150_crop_center.jpg?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_150x150_crop_center.png?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace1_150x150_crop_center.png?v=1647710965",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace2_150x150_crop_center.png?v=1647710965"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-10-44_ls209983_jpeg_WEBP_Image_1030_x_1029_pixels_Scaled_90_1024x1024.png?v=1634569949",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-e52cbf9622_1024x1024.gif?v=1646276892",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-11-15_ls209991_jpeg_WEBP_Image_908_x_907_pixels_1024x1024.png?v=1634570015"
        ],
        bulks: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/sunflower2.png",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_4_1024x.png?v=1641870315",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/3x-sunflower-necklace-bee-kind-shop-white-jewelry-amber-471_1024x.png?v=1647456204"
        ]
    },
    {
        name: "Spinning Sunflower Necklace",
        rating: 31,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-927_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-finger-653_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-skin-jewelry-purple-374_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-purple-fashion-291_150x150_crop_center.jpg?v=1647672166"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-02_lsp06267_jpg_WEBP_Image_1030_x_1030_pixels.png?v=1634574899",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Necklace_new_1.png?v=1657115245",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-12_lsp06201_jpeg_WEBP_Image_1030_x_1029_pixels.png?v=1634574919"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-insect-finger-gesture-133_150x150_crop_center.jpg?v=1647456271",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-jewelry-finger-gesture-905_150x150_crop_center.jpg?v=1647456274",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-skin-jewelry-nail-873_150x150_crop_center.jpg?v=1647456277"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-52-03_img_9387_facetune_04-10-2021-10-47-54_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933195",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-49_ls200004_jpeg_WEBP_Image_1080_x_1079_pixels_1024x1024.png?v=1635933216",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-57_img_5334_facetune_11-09-2021-13-30-31_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933241"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/17_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing1_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing2_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing3_150x150_crop_center.png?v=1658873470"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-03b977e6b1.gif?v=1658450877",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_1.png?v=1657111809",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_2.png?v=1657111834"
        ]
    }
]

export const dataThree: IDataItem[] = [
    {
        name: `"You Are My Sunshine" Necklace`,
        rating: 149,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-green-finger-gesture-866_150x150_crop_center.jpg?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_150x150_crop_center.png?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace1_150x150_crop_center.png?v=1647710965",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace2_150x150_crop_center.png?v=1647710965"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-10-44_ls209983_jpeg_WEBP_Image_1030_x_1029_pixels_Scaled_90_1024x1024.png?v=1634569949",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-e52cbf9622_1024x1024.gif?v=1646276892",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-11-15_ls209991_jpeg_WEBP_Image_908_x_907_pixels_1024x1024.png?v=1634570015"
        ],
        bulks: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/sunflower2.png",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_4_1024x.png?v=1641870315",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/3x-sunflower-necklace-bee-kind-shop-white-jewelry-amber-471_1024x.png?v=1647456204"
        ]
    },
    {
        name: "Spinning Sunflower Necklace",
        rating: 31,
        price: 99.99,
        discountedPrice: 49.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-927_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-finger-653_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-skin-jewelry-purple-374_150x150_crop_center.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-purple-fashion-291_150x150_crop_center.jpg?v=1647672166"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-02_lsp06267_jpg_WEBP_Image_1030_x_1030_pixels.png?v=1634574899",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Necklace_new_1.png?v=1657115245",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-12_lsp06201_jpeg_WEBP_Image_1030_x_1029_pixels.png?v=1634574919"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-insect-finger-gesture-133_150x150_crop_center.jpg?v=1647456271",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-jewelry-finger-gesture-905_150x150_crop_center.jpg?v=1647456274",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-skin-jewelry-nail-873_150x150_crop_center.jpg?v=1647456277"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-52-03_img_9387_facetune_04-10-2021-10-47-54_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933195",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-49_ls200004_jpeg_WEBP_Image_1080_x_1079_pixels_1024x1024.png?v=1635933216",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-57_img_5334_facetune_11-09-2021-13-30-31_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933241"
        ]
    },
    {
        name: "Sunflower Ring",
        rating: 11,
        price: 69.99,
        discountedPrice: 39.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
        extraAssets: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/17_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing1_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing2_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing3_150x150_crop_center.png?v=1658873470"
        ],
        banners: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-03b977e6b1.gif?v=1658450877",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_1.png?v=1657111809",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_2.png?v=1657111834"
        ]
    }
]
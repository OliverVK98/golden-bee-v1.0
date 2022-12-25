export interface IDataItem {
    productId?: number,
    itemName: string,
    rating: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    extraImageUrls: string[],
    bannerImageUrls: string[],
    isAvailable: boolean
}

export const data: IDataItem[] = [
    {
        itemName: `"You Are My Sunshine" Necklace`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 150,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_590x.png?v=1647456186",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_590x.png?v=1647456186",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-green-finger-gesture-866_540x.jpg?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_540x.png?v=1641870844",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindMySunshineSunshineNecklace1_540x.png?v=1647710965"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-10-44_ls209983_jpeg_WEBP_Image_1030_x_1029_pixels_Scaled_90_1024x1024.png?v=1634569949",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-e52cbf9622_1024x1024.gif?v=1646276892",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-11-15_ls209991_jpeg_WEBP_Image_908_x_907_pixels_1024x1024.png?v=1634570015"
        ],
        isAvailable: true
    },
    {
        itemName: `Spinning Sunflower Necklace`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 31,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_18_590x.png?v=1647672166",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_18_590x.png?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-02_lsp06267_jpg_WEBP_Image_1030_x_1030_pixels.png?v=1634574899",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-gesture-finger-653_540x.jpg?v=1647672166",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/crystal-sunflower-necklace-bee-kind-shop-jewelry-purple-fashion-291_150x150_crop_center.jpg?v=1647672166"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-02_lsp06267_jpg_WEBP_Image_1030_x_1030_pixels.png?v=1634574899",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Necklace_new_1.png?v=1657115245",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-34-12_lsp06201_jpeg_WEBP_Image_1030_x_1029_pixels.png?v=1634574919"
        ],
        isAvailable: true
    },
    {
        itemName: `Spinning Sunflower Ring`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 8,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/16_590x.png?v=1658873470",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-flower-plant-petal-499_370x.png?v=1647456269",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing3_150x150_crop_center.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing2_540x.png?v=1658873470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningSunflowerRing1_540x.png?v=1658873470"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-03b977e6b1.gif?v=1658450877",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_1.png?v=1657111809",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Sunflower_Ring_Funnel_2.png?v=1657111834"
        ],
        isAvailable: true
    },
    {
        itemName: `Sunflower Ring`,
        price: 69.99,
        discountedPrice: 39.99,
        rating: 11,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-flower-plant-petal-499_590x.png?v=1647456269",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-flower-plant-petal-499_590x.png?v=1647456269",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-insect-finger-gesture-133_540x.jpg?v=1647456271",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-jewelry-finger-gesture-905_540x.jpg?v=1647456274",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-ring-bee-kind-shop-skin-jewelry-nail-873_540x.jpg?v=1647456277"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-52-03_img_9387_facetune_04-10-2021-10-47-54_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933195",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-49_ls200004_jpeg_WEBP_Image_1080_x_1079_pixels_1024x1024.png?v=1635933216",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-11-03_at_10-51-57_img_5334_facetune_11-09-2021-13-30-31_jpeg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1635933241"
        ],
        isAvailable: true
    },
    {
        itemName: `Baby Bee Necklace`,
        price: 39.99,
        discountedPrice: 24.99,
        rating: 9,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-necklace-kind-shop-insect-pollinator-arthropod-915_590x.png?v=1636301802",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-necklace-kind-shop-insect-pollinator-arthropod-915_590x.png?v=1636301802",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-necklace-kind-shop-jewelry-amber-gold-162_150x150_crop_center.jpg?v=1636301807",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-necklace-kind-shop-jewelry-tableware-recipe-384_150x150_crop_center.jpg?v=1636301811",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-56-08_snapseed-copy-3_jpeg_WEBP_Image_800_x_800_pixels_1024x1024.png?v=1634572666",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-59-57_snapseed-copy-4_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634572871",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-02-37_snapseed-2_jpeg_WEBP_Image_449_x_449_pixels_1024x1024.png?v=1634572980"
        ],
        isAvailable: true
    },
    {
        itemName: `Baby Bee Earrings`,
        price: 39.99,
        discountedPrice: 24.99,
        rating: 2,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-earrings-kind-shop-pollinator-insect-plant-102_590x.png?v=1636301818",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-necklace-kind-shop-insect-pollinator-arthropod-915_590x.png?v=1636301802",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-earrings-kind-shop-skin-eye-insect-849_540x.jpg?v=1636301821",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-earrings-kind-shop-jewelry-yellow-sports-146_540x.jpg?v=1636301823",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-earrings-kind-shop-jewelry-amber-jewellery-625_540x.jpg?v=1636301826"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-05-55_baby-bee-1_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634573263",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-06-22_baby-bee-2_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634573286",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-06-34_baby-bee-3_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634573297"
        ],
        isAvailable: true
    },
    {
        itemName: `Golden Bee Bracelet`,
        price: 29.99,
        discountedPrice: 24.99,
        rating: 7,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/golden-bee-bracelet-kind-shop-white-jewelry-green-729_590x.jpg?v=1636301692",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/golden-bee-bracelet-kind-shop-white-jewelry-green-729_590x.jpg?v=1636301692",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/golden-bee-bracelet-kind-shop-flower-plant-pollinator-693_540x.png?v=16182601511",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/golden-bee-bracelet-kind-shop-skin-photograph-people-846_540x.jpg?v=1614993509",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-58-26_lsp06237-1_jpeg_WEBP_Image_1200_x_800_pixels_2048x2048.png?v=1634580000",
        ],
        isAvailable: true
    },
    {
        itemName: `Bee Kind Bracelet Set`,
        price: 39.99,
        discountedPrice: 19.99,
        rating: 141,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-kind-bracelet-set-shop-flower-green-botany-363_590x.jpg?v=1614993472",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-kind-bracelet-set-shop-flower-green-botany-363_590x.jpg?v=1614993472",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-kind-bracelet-set-shop-plant-orange-gesture-271_540x.jpg?v=1647456168",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-kind-bracelet-set-shop-jewelry-necklace-amber-120_540x.jpg?v=1614993479",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-kind-bracelet-set-shop-jewelry-natural-amber-643_540x.jpg?v=1614993482"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-28-11_lsp06129_jpg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634570931",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-27-26_ls209981-3-2-copy_jpeg_WEBP_Image_873_x_872_pixels_1024x1024.png?v=1634570950",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-28-23_lsp06218_jpg_WEBP_Image_1030_x_1029_pixels_1024x1024.png?v=1634570963"
        ],
        isAvailable: true
    },
    {
        itemName: `Blooming Sunflower Necklace`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 6,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-necklace-bee-kind-shop-flower-plant-jewelry-678_590x.png?v=1647456284",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-necklace-bee-kind-shop-flower-plant-jewelry-678_590x.png?v=1647456284",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-necklace-bee-kind-shop-skin-lip-chin-393_540x.jpg?v=1647456292",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-necklace-bee-kind-shop-arm-jewelry-finger-730_540x.jpg?v=1647456289",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-necklace-bee-kind-shop-skin-chin-jewelry-122_540x.jpg?v=1647456294"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-47-30_blooming-sunflower_png_WEBP_Image_1200_x_800_pixels_2048x2048.png?v=1634575674",
        ],
        isAvailable: true
    },
    {
        itemName: `Sunflower Heart Necklace`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 14,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-necklace-bee-kind-shop-flower-jewelry-plant-604_590x.png?v=1647456239",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-necklace-bee-kind-shop-flower-jewelry-plant-604_590x.png?v=1647456239",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-necklace-bee-kind-shop-jewelry-finger-creative-226_540x.jpg?v=1647456242",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-necklace-bee-kind-shop-jewelry-finger-creative-226_540x.jpg?v=1647456242",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunshine_Necklace_1.png?v=1647708064",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunshine_Necklace_2.png?v=1647708083",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunshine_Necklace_3.png?v=1647708105"
        ],
        isAvailable: true
    },
    {
        itemName: `"I Love You Baby" Necklace`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 8,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-wing-jewellery-427_590x.png?v=1647456568",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-wing-jewellery-427_590x.png?v=1647456568",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-green-plant-yellow-303_540x.jpg?v=1647456571",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-street-fashion-jewelry-173_540x.jpg?v=1647456577",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-flower-plant-petal-827_540x.jpg?v=1647456580"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/i-love-you-baby-necklace-bee-kind-shop-street-fashion-jewelry-173_540x.jpg?v=1647456577",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-6-7782b806d5f1_480x480.gif?v=1638399056",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/IMG_1839_Facetune_29-11-2021-12-17-03_480x480.jpg?v=1638311074"
        ],
        isAvailable: true
    },
    {
        itemName: `"You Are My Sunshine" Bangle`,
        price: 199.99,
        discountedPrice: 69.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-jewelry-plant-gesture-402_590x.png?v=1647456399",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-jewelry-plant-gesture-402_590x.png?v=1647456399",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-clothing-arm-jewelry-625_540x.jpg?v=1647456404",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-arm-jewelry-gesture-476_540x.jpg?v=1647456408",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-arm-jewelry-gesture-186_540x.jpg?v=1647456401"
        ],
        bannerImageUrls: [],
        isAvailable: false
    }
]


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

export const newData: IDataItem[] = [
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
        price: 159.99,
        discountedPrice: 79.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-jewelry-plant-gesture-402_590x.png?v=1647456399",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-jewelry-plant-gesture-402_590x.png?v=1647456399",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-clothing-arm-jewelry-625_540x.jpg?v=1647456404",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-arm-jewelry-gesture-476_540x.jpg?v=1647456408",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bangle-bee-kind-shop-arm-jewelry-gesture-186_540x.jpg?v=1647456401"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `5x Bracelet Bundle`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/5x-bracelet-bundle-bee-kind-shop-arm-jewelry-gesture-352_590x.jpg?v=1614993643",
        extraImageUrls: [],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Bee Happy Pin`,
        price: 19.99,
        discountedPrice: 9.99,
        rating: 32,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-pin-kind-shop-eye-gesture-finger-262_150x150_crop_center.jpg?v=1614993496",
        extraImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-pin-kind-shop-eye-gesture-finger-262_150x150_crop_center.jpg?v=1614993496",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-pin-kind-shop-plant-dishware-sleeve-861_150x150_crop_center.jpg?v=1636301683",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-pin-kind-shop-gesture-finger-plant-620_150x150_crop_center.jpg?v=1636301686",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-pin-kind-shop-sleeve-gesture-shirt-943_150x150_crop_center.jpg?v=1636301688"
                        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Bee Happy Keychain`,
        price: 19.99,
        discountedPrice: 9.99,
        rating: 5,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-keychain-kind-shop-badge-mirror-gas-450_590x.png?v=1618260256",
        extraImageUrls: [],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Blooming Sunflower Earrings`,
        price: 59.99,
        discountedPrice: 29.99,
        rating: 2,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-earrings-bee-kind-shop-flower-petal-plant-677_150x150_crop_center.png?v=1647456365",
        extraImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-earrings-bee-kind-shop-flower-petal-plant-677_150x150_crop_center.png?v=1647456365",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-earrings-bee-kind-shop-hair-eyebrow-shoulder-535_150x150_crop_center.jpg?v=1647456367"
                        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Sunflower Gift Bag`,
        price: 5.99,
        discountedPrice: 0,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-gift-bag-bee-kind-shop-brown-flower-wood-253_590x.jpg?v=1636301766",
        extraImageUrls: [],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Honey Drop Necklace`,
        price: 149.99,
        discountedPrice: 69.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-jewelry-gold-402_150x150_crop_center.png?v=1647456438",
        extraImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-jewelry-gold-402_150x150_crop_center.png?v=1647456438",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-arm-jewelry-yellow-735_150x150_crop_center.png?v=1647456444",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-nose-skin-lip-387_150x150_crop_center.png?v=1647456451",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-amber-jewelry-orange-906_150x150_crop_center.png?v=1647456458"
                        ],
        bannerImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-necklace-bee-kind-shop-amber-jewelry-orange-906_150x150_crop_center.png?v=1647456458",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Bundle_3.png?v=1638661385",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Necklace_close_65d5b1d2-45cc-4535-8e71-986700018420.png?v=1638747442"
                         ],
        isAvailable: true
    },
    {
        itemName: `Honey Drop Earrings`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-gesture-art-metal-452_150x150_crop_center.png?v=1647456470",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-gesture-art-metal-452_150x150_crop_center.png?v=1647456470",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-nose-face-cheek-402_150x150_crop_center.png?v=1647456477",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-forehead-hair-nose-445_150x150_crop_center.png?v=1647456483",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-nose-skin-lip-346_150x150_crop_center.png?v=1647456489"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Earring_Small_3cfb5f63-3880-4947-9ee3-aa77d1fff776.png?v=1638661347",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Bundle_3.png?v=1638661385",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-earrings-bee-kind-shop-nose-face-cheek-402_150x150_crop_center.png?v=1647456477"
        ],
        isAvailable: true
    },
    {
        itemName: `Honey Drop Ring`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-ring-bee-kind-shop-jewelry-gold-earrings-752_150x150_crop_center.png?v=1647456503",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-ring-bee-kind-shop-jewelry-gold-earrings-752_150x150_crop_center.png?v=1647456503",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-ring-bee-kind-shop-skin-arm-jewelry-104_150x150_crop_center.png?v=1647456509",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-ring-bee-kind-shop-skin-lip-smile-280_150x150_crop_center.png?v=1647456514",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-ring-bee-kind-shop-amber-jewelry-orange-561_150x150_crop_center.png?v=1647456521"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Ring_1.png?v=1638661843",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Bundle_3.png?v=1638661385",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Ring_and_Necklace_close_2.png?v=1638662005"
        ],
        isAvailable: true
    },
    {
        itemName: `Honey Drop Bundle`,
        price: 299.99,
        discountedPrice: 129.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-bundle-bee-kind-shop-jewelry-amber-gold-308_150x150_crop_center.png?v=1647456536",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-bundle-bee-kind-shop-jewelry-amber-gold-308_150x150_crop_center.png?v=1647456536",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-bundle-bee-kind-shop-skin-lip-eyebrow-158_150x150_crop_center.png?v=1647456542",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-bundle-bee-kind-shop-skin-arm-jewelry-125_150x150_crop_center.png?v=1647456550",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honey-drop-bundle-bee-kind-shop-nose-skin-lip-851_150x150_crop_center.png?v=1647456556"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Earring_Big.png?v=1638661403",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Necklace_and_Ring_1.png?v=1638660760",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Honey_Drop_Bundle_3.png?v=1638661385"
        ],
        isAvailable: true
    },
    {
        itemName: `Honeycomb Necklace`,
        price: 59.99,
        discountedPrice: 34.99,
        rating: 6,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-necklace-bee-kind-shop-jewelry-gold-amber-854_150x150_crop_center.png?v=1636301833",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-necklace-bee-kind-shop-jewelry-gold-amber-854_150x150_crop_center.png?v=1636301833",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-necklace-bee-kind-shop-jewelry-gold-amber-502_150x150_crop_center.jpg?v=1636301836",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-necklace-bee-kind-shop-outerwear-arm-jewelry-485_150x150_crop_center.jpg?v=1636301839",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-necklace-bee-kind-shop-skin-lip-jewelry-352_150x150_crop_center.jpg?v=1636301842"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-10-06_2e9a7142-1-copy_jpeg_WEBP_Image_736_x_737_pixels_1024x1024.png?v=1634573494",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-10-25_2e9a5957-1-copy-2_jpeg_WEBP_Image_733_x_732_pixels_1024x1024.png?v=1634573503",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-10-40_2e9a0159-copy_jpeg_WEBP_Image_1000_x_1000_pixels_1024x1024.png?v=1634573511"
        ],
        isAvailable: true
    },
    {
        itemName: `Honeycomb Ring`,
        price: 54.99,
        discountedPrice: 29.99,
        rating: 3,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-ring-bee-kind-shop-jewelry-plant-gold-603_150x150_crop_center.png?v=1636301848",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-ring-bee-kind-shop-jewelry-plant-gold-603_150x150_crop_center.png?v=1636301848",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-ring-bee-kind-shop-skin-people-in-320_150x150_crop_center.jpg?v=1636301850",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-ring-bee-kind-shop-skin-nail-polish-310_150x150_crop_center.jpg?v=1636301854",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-13-56_honey-ring-2_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634573735",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-14-15_honeycomb-ring-1_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574200",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-14-29_honey-ring-3_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574210"
        ],
        isAvailable: true
    },
    {
        itemName: `Honeycomb Earrings`,
        price: 49.99,
        discountedPrice: 24.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-earrings-bee-kind-shop-art-symbol-fashion-813_150x150_crop_center.png?v=1636301860",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-earrings-bee-kind-shop-art-symbol-fashion-813_150x150_crop_center.png?v=1636301860",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-earrings-bee-kind-shop-nose-face-skin-746_150x150_crop_center.jpg?v=1636301862",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-earrings-bee-kind-shop-flower-plant-eyelash-600_150x150_crop_center.jpg?v=1636301865",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-25-08_earrings-funnel-2_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574374",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-25-13_earrings-funnel_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574402",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-25-18_earrings-funnel-3_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574412"
        ],
        isAvailable: true
    },
    {
        itemName: `Honeycomb Bundle`,
        price: 129.99,
        discountedPrice: 79.99,
        rating: 3,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-bundle-bee-kind-shop-jewelry-gold-art-601_150x150_crop_center.png?v=1636301871",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-bundle-bee-kind-shop-jewelry-gold-art-601_150x150_crop_center.png?v=1636301871",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-bundle-bee-kind-shop-brown-jewelry-amber-531_150x150_crop_center.jpg?v=1636301873",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/honeycomb-bundle-bee-kind-shop-nose-skin-lip-889_150x150_crop_center.jpg?v=1636301875",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-29-26_honeycomb-necklace-2_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574684",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-29-30_honeycomb-bundle-3_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574697",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_18-25-18_earrings-funnel-3_jpeg_WEBP_Image_1030_x_1030_pixels_1024x1024.png?v=1634574412"
        ],
        isAvailable: true
    },
    {
        itemName: `Blooming Sunflower Bracelet`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bracelet-bee-kind-shop-jewelry-plant-ornament-192_150x150_crop_center.png?v=1647456373",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bracelet-bee-kind-shop-jewelry-plant-ornament-192_150x150_crop_center.png?v=1647456373",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bracelet-bee-kind-shop-jewelry-gesture-engagement-526_150x150_crop_center.jpg?v=1647456376",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bracelet-bee-kind-shop-jewelry-gesture-finger-371_150x150_crop_center.png?v=1647456380",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bracelet-bee-kind-shop-skin-arm-leaf-357_150x150_crop_center.jpg?v=1647456384"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Blooming Sunflower Bundle`,
        price: 149.99,
        discountedPrice: 89.99,
        rating: 2,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bundle-bee-kind-shop-flower-white-leaf-129_150x150_crop_center.png?v=1636301933",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bundle-bee-kind-shop-flower-white-leaf-129_150x150_crop_center.png?v=1636301933",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bundle-bee-kind-shop-brown-jewelry-gold-150_150x150_crop_center.jpg?v=1636301935",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bundle-bee-kind-shop-skin-arm-shoulder-485_150x150_crop_center.jpg?v=1636301938",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/blooming-sunflower-bundle-bee-kind-shop-hair-eyebrow-shoulder-311_150x150_crop_center.jpg?v=1636301941"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Bee Happy Bundle`,
        price: 39.99,
        discountedPrice: 29.99,
        rating: 4,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-bundle-kind-shop-badge-oval-magenta-260_150x150_crop_center.jpg?v=1647456303",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-bundle-kind-shop-badge-oval-magenta-260_150x150_crop_center.jpg?v=1647456303",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-bundle-kind-shop-finger-gesture-art-486_150x150_crop_center.jpg?v=1647456306",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-bundle-kind-shop-plant-finger-gesture-422_150x150_crop_center.jpg?v=1647456308",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-bundle-kind-shop-blue-sleeve-shirt-814_150x150_crop_center.jpg?v=1647456312"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Matching Daisies Bracelet Set`,
        price: 29.99,
        discountedPrice: 19.99,
        rating: 4,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-gold-twig-ornament-950_150x150_crop_center.png?v=1647456587",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-gold-twig-ornament-950_150x150_crop_center.png?v=1647456587",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-shoe-arm-jewelry-845_150x150_crop_center.png?v=1647456592",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-white-light-gold-243_150x150_crop_center.png?v=1647456596",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-flower-cloud-arm-701_150x150_crop_center.png?v=1647456601"
                        ],
        bannerImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Daisy_Bracelets_3.png?v=1639936407",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Daisy_Bracelets_2.png?v=1639936424",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Daisy_Bracelets_5.png?v=1639936492"
                        ],
        isAvailable: true
    },
    {
        itemName: `Sunflower Choker`,
        price: 39.99,
        discountedPrice: 24.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-choker-bee-kind-shop-sky-natural-jewellery-577_590x.png?v=1647456617",
        extraImageUrls: [],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunflower_Choker_1.png?v=1640911374",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunflower_Choker_3.png?v=1640911392",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sunflower_Choker_1.png?v=1640911374"
        ],
        isAvailable: true
    },
    {
        itemName: `Sunflower Anklet`,
        price: 39.99,
        discountedPrice: 24.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-anklet-bee-kind-shop-sky-natural-jewellery-459_590x.png?v=1647456627",
        extraImageUrls: [
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-anklet-bee-kind-shop-sky-natural-jewellery-459_590x.png?v=1647456627",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-anklet-bee-kind-shop-jewelry-natural-earrings-380_150x150_crop_center.png?v=1647456631",
                        "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-anklet-bee-kind-shop-jewelry-natural-creative-104_150x150_crop_center.png?v=1647456634"
                        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Forever Together Bracelet Set`,
        price: 39.99,
        discountedPrice: 19.99,
        rating: 7,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/forever-together-bracelet-set-bee-kind-shop-green-botany-petal-497_150x150_crop_center.png?v=1618260200",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/forever-together-bracelet-set-bee-kind-shop-green-botany-petal-497_150x150_crop_center.png?v=1618260200",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/forever-together-bracelet-set-bee-kind-shop-christmas-ornament-leaf-165_150x150_crop_center.jpg?v=1618260203",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/forever-together-bracelet-set-bee-kind-shop-wood-christmas-ornament-390_150x150_crop_center.jpg?v=16182602064",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/forever-together-bracelet-set-bee-kind-shop-jewelry-necklace-amber-810_150x150_crop_center.jpg?v=1614993577"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-44-48_lsp06129_jpg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1634579116",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-44-52_lsp06107_jpeg_WEBP_Image_837_x_836_pixels_1024x1024.png?v=1634579135",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-44-58_lsp06218_jpg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1634579146"
        ],
        isAvailable: true
    },
    {
        itemName: `Bee Bright Bracelet`,
        price: 29.99,
        discountedPrice: 14.99,
        rating: 12,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bright-bracelet-kind-shop-flower-green-leaf-569_150x150_crop_center.png?v=1636301723",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bright-bracelet-kind-shop-flower-green-leaf-569_150x150_crop_center.png?v=1636301723",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bright-bracelet-kind-shop-party-supply-nail-953_150x150_crop_center.jpg?v=1636301725",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bright-bracelet-kind-shop-arm-shoulder-jewelry-291_150x150_crop_center.jpg?v=1636301728",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-26-18_2e9a3172-copy_jpeg_WEBP_Image_1001_x_999_pixels_1024x1024.png?v=1634578006",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-26-23_ls209650_jpeg_WEBP_Image_1000_x_1000_pixels_1024x1024.png?v=1634578014"
        ],
        isAvailable: true
    },
    {
        itemName: `Bee You Bracelet`,
        price: 19.99,
        discountedPrice: 14.99,
        rating: 4,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-you-bracelet-kind-shop-green-leaf-plant-427_150x150_crop_center.jpg?v=1614993544",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-you-bracelet-kind-shop-green-leaf-plant-427_150x150_crop_center.jpg?v=1614993544",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-you-bracelet-kind-shop-plant-table-ingredient-978_150x150_crop_center.jpg?v=1614993546",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-you-bracelet-kind-shop-food-plant-fruit-423_150x150_crop_center.jpg?v=1614993548",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-49-44_lsp05325_jpg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1634579414",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-49-53_lsp05327_jpg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1634579425"
        ],
        isAvailable: true
    },
    {
        itemName: `Bee Bold Bracelet`,
        price: 19.99,
        discountedPrice: 14.99,
        rating: 8,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bold-bracelet-kind-shop-plant-leaf-pollinator-627_150x150_crop_center.jpg?v=1614993535",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bold-bracelet-kind-shop-plant-leaf-pollinator-627_150x150_crop_center.jpg?v=1614993535",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bold-bracelet-kind-shop-christmas-decoration-ornament-924_150x150_crop_center.jpg?v=1614993538",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-bold-bracelet-kind-shop-wood-natural-foods-979_150x150_crop_center.jpg?v=1614993540",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-52-11_lsp05349_jpg_WEBP_Image_1080_x_1080_pixels_1024x1024.png?v=1634579552",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_19-52-16_il_794xn-1869232513_5uz7_jpg_WEBP_Image_794_x_824_pixels_1024x1024.png?v=1634579561"
        ],
        isAvailable: true
    },
    {
        itemName: `You Are My Sunshine Bracelet - Tie Wish Believe`,
        price: 19.99,
        discountedPrice: 9.99,
        rating: 5,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-tie-wish-believe-bee-kind-shop-flower-greeting-botany-176_150x150_crop_center.jpg?v=1618260219",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-tie-wish-believe-bee-kind-shop-flower-greeting-botany-176_150x150_crop_center.jpg?v=1618260219",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-tie-wish-believe-bee-kind-shop-jewelry-wood-natural-476_150x150_crop_center.jpg?v=1614993629",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-tie-wish-believe-bee-kind-shop-flower-green-petal-506_150x150_crop_center.jpg?v=1614993631",
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `You Are My Sunshine Bracelet - Ask Believe Receive`,
        price: 19.99,
        discountedPrice: 9.99,
        rating: 4,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-ask-believe-receive-bee-kind-shop-brown-petal-flower-649_150x150_crop_center.jpg?v=1614993623",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-ask-believe-receive-bee-kind-shop-brown-petal-flower-649_150x150_crop_center.jpg?v=1614993623",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-bracelet-ask-believe-receive-bee-kind-shop-natural-wood-finger-745_150x150_crop_center.jpg?v=1614993619",
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Sunflower Bracelet - Ask Believe Receive`,
        price: 19.99,
        discountedPrice: 9.99,
        rating: 6,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-bracelet-ask-believe-receive-bee-kind-shop-plant-botany-flower-707_150x150_crop_center.jpg?v=1614993635",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-bracelet-ask-believe-receive-bee-kind-shop-plant-botany-flower-707_150x150_crop_center.jpg?v=1614993635",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-bracelet-ask-believe-receive-bee-kind-shop-insect-plant-jewelry-945_150x150_crop_center.jpg?v=1614993637",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sunflower-bracelet-ask-believe-receive-bee-kind-shop-flower-plant-petal-841_150x150_crop_center.jpg?v=1614993639"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Baby Bee Bundle`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-bundle-kind-shop-pollinator-insect-arthropod-381_150x150_crop_center.png?v=1636301882",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-bundle-kind-shop-pollinator-insect-arthropod-381_150x150_crop_center.png?v=1636301882",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-bundle-kind-shop-jewelry-tableware-recipe-745_150x150_crop_center.jpg?v=1636301885",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/baby-bee-bundle-kind-shop-jewelry-amber-jewellery-472_150x150_crop_center.jpg?v=1636301887"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `"You Are My Sunshine" Silver Bundle`,
        price: 199.99,
        discountedPrice: 99.99,
        rating: 2,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-silver-bundle-bee-kind-shop-plant-white-jewelry-999_150x150_crop_center.png?v=1636301974",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-silver-bundle-bee-kind-shop-plant-white-jewelry-999_150x150_crop_center.png?v=1636301974",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-silver-bundle-bee-kind-shop-arm-jewelry-gesture-386_150x150_crop_center.jpg?v=1636301976",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-silver-bundle-bee-kind-shop-jewelry-finger-creative-250_150x150_crop_center.jpg?v=1636301979",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/you-are-my-sunshine-silver-bundle-bee-kind-shop-skin-lip-chin-864_150x150_crop_center.png?v=1636301987"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Bee Happy Phone Socket`,
        price: 19.99,
        discountedPrice: 14.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-phone-socket-kind-shop-eye-plant-data-666_150x150_crop_center.jpg?v=1647456421",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-phone-socket-kind-shop-eye-plant-data-666_150x150_crop_center.jpg?v=1647456421",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-phone-socket-kind-shop-badge-oval-emblem-238_150x150_crop_center.jpg?v=1647456424",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-phone-socket-kind-shop-finger-camera-lens-137_150x150_crop_center.jpg?v=1647456427",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/bee-happy-phone-socket-kind-shop-plant-finger-gesture-545_150x150_crop_center.jpg?v=1647456430"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Sticker Mega Pack`,
        price: 29.99,
        discountedPrice: 19.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sticker-mega-pack-bee-kind-shop-hair-happy-symbol-834_150x150_crop_center.png?v=1647456640",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sticker-mega-pack-bee-kind-shop-hair-happy-symbol-834_150x150_crop_center.png?v=1647456640",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/sticker-mega-pack-bee-kind-shop-pollinator-insect-arthropod-993_150x150_crop_center.png?v=1647456645",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sticker_Pack_5.png?v=1640909940",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sticker_Pack_2.png?v=1640909367",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Sticker_Pack_4_480x480.png?v=1640909968"
        ],
        isAvailable: true
    },
    {
        itemName: `Lovely Flower Necklace`,
        price: 59.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-necklace-bee-kind-shop-jewelry-liquid-757_150x150_crop_center.png?v=1647456653",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-necklace-bee-kind-shop-jewelry-liquid-757_150x150_crop_center.png?v=1647456653",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-necklace-bee-kind-shop-jewelry-natural-812_150x150_crop_center.png?v=1647456659",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-necklace-bee-kind-shop-azure-jewelry-jewellery-445_150x150_crop_center.png?v=1647456665",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-necklace-bee-kind-shop-white-azure-bag-310_150x150_crop_center.png?v=1647456671"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Necklace_1.png?v=1643247521",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Necklace_2.png?v=1643247546",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_4_8735be6a-5148-4a68-83cf-63535435ebce.png?v=1643246746"
        ],
        isAvailable: true
    },
    {
        itemName: `Lovely Flower Bracelet`,
        price: 49.99,
        discountedPrice: 29.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bracelet-bee-kind-shop-ball-sports-equipment-405_150x150_crop_center.png?v=1647456683",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bracelet-bee-kind-shop-ball-sports-equipment-405_150x150_crop_center.png?v=1647456683",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bracelet-bee-kind-shop-jewelry-azure-eyewear-761_150x150_crop_center.png?v=1647456696",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bracelet-bee-kind-shop-luggage-bags-shoulder-791_150x150_crop_center.png?v=1647456703",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bracelet-bee-kind-shop-azure-jewelry-jewellery-377_150x150_crop_center.png?v=1647456708"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Bracelet_5.png?v=1643245283",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Bracelet_4.png?v=1643245308",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Bracelet_6.png?v=1643245364"
        ],
        isAvailable: true
    },
    {
        itemName: `Lovely Flower Earrings`,
        price: 49.99,
        discountedPrice: 29.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-earrings-bee-kind-shop-jewelry-amber-gold-171_150x150_crop_center.png?v=1647456718",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-earrings-bee-kind-shop-jewelry-amber-gold-171_150x150_crop_center.png?v=1647456718",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-earrings-bee-kind-shop-azure-hood-gesture-377_150x150_crop_center.png?v=1647456730",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-earrings-bee-kind-shop-jewelry-gold-jewellery-261_150x150_crop_center.png?v=1647456736",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-earrings-bee-kind-shop-forehead-nose-cheek-660_150x150_crop_center.png?v=1647456742"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_6.png?v=1643246226",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_3.png?v=1643246248",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_4.png?v=1643246273"
        ],
        isAvailable: true
    },
    {
        itemName: `Lovely Flower Hair Clip Set`,
        price: 29.99,
        discountedPrice: 19.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-hair-clip-set-bee-kind-shop-art-wood-metal-864_150x150_crop_center.png?v=1647456751",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-hair-clip-set-bee-kind-shop-art-wood-metal-864_150x150_crop_center.png?v=1647456751",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-hair-clip-set-bee-kind-shop-guitar-accessory-musical-251_150x150_crop_center.png?v=1647456762",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-hair-clip-set-bee-kind-shop-azure-gesture-aqua-186_150x150_crop_center.png?v=1647456768",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-hair-clip-set-bee-kind-shop-forehead-nose-skin-961_150x150_crop_center.png?v=1647456774"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_5.png?v=1643246699",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Hair_Clip_1.png?v=1643246719",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_4_8735be6a-5148-4a68-83cf-63535435ebce.png?v=1643246746"
        ],
        isAvailable: true
    },
    {
        itemName: `Lovely Flower Bundle`,
        price: 129.99,
        discountedPrice: 79.99,
        rating: 1,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bundle-bee-kind-shop-jewelry-amber-necklace-991_150x150_crop_center.png?v=1647456780",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bundle-bee-kind-shop-jewelry-amber-necklace-991_150x150_crop_center.png?v=1647456780",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bundle-bee-kind-shop-forehead-nose-cheek-591_150x150_crop_center.png?v=1647456785",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bundle-bee-kind-shop-jewelry-natural-necklace-673_150x150_crop_center.png?v=1647456795",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/lovely-flower-bundle-bee-kind-shop-forehead-nose-skin-235_150x150_crop_center.png?v=1647456800"
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Earrings_5.png?v=1643246699",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Lovely_Flower_Necklace_2.png?v=1643247546",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Bundle_2.png?v=1643247990"
        ],
        isAvailable: true
    },
    {
        itemName: `Spinning Bee & Sunflower Ring`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 7,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Sc44cbd1e6b3f465bb8956b4d17a8a66dS_150x150_crop_center.jpg?v=1658681179",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Sc44cbd1e6b3f465bb8956b4d17a8a66dS_150x150_crop_center.jpg?v=1658681179",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningBeeandSunflowerRing1_150x150_crop_center.png?v=1658681179",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindSpinningBeeandSunflowerRing2_150x150_crop_center.png?v=1658681179",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-148a41136f.gif?v=1659049993",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Bee_and_Sunflower_Ring_3.png?v=1658615034",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Spinning_Bee_and_Sunflower_Ring_4.png?v=1658615253"
        ],
        isAvailable: true
    },
    {
        itemName: `"You Are My Sunshine" Daisy Necklace`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_9c59af99-0432-4885-ab45-0224afc9a660_150x150_crop_center.png?v=1670277205",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_9c59af99-0432-4885-ab45-0224afc9a660_150x150_crop_center.png?v=1670277205",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindDaisyYouaremysunshineNecklace1_150x150_crop_center.png?v=1670554850",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKindDaisyYouaremysunshineNecklace2_150x150_crop_center.png?v=1670554850",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/BeeKindDaisyYouaremysunshineNecklace4.png?v=1670554882",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/BeeKindDaisyYouaremysunshineNecklace1.png?v=1670554897",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/BeeKindDaisyYouaremysunshineNecklace3.png?v=1670554913"
        ],
        isAvailable: true
    },
    {
        itemName: `Rainbow Daisy Pearl Necklace`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_150x150_crop_center.png?v=1670276133",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_150x150_crop_center.png?v=1670276133",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKIndDaisyPearlNecklace1_150x150_crop_center.png?v=1670555497",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_150x150_crop_center.png?v=1670555497",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_2_150x150_crop_center.png?v=1670555497"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
    {
        itemName: `Fresh Daisy Ring`,
        price: 39.99,
        discountedPrice: 29.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_8d07f699-7831-48d8-91db-53611d68ad06_150x150_crop_center.png?v=1670643101",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_8d07f699-7831-48d8-91db-53611d68ad06_150x150_crop_center.png?v=1670643101",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_f9aeb7c0-2866-4065-8fe1-e1e7c53a8286_150x150_crop_center.png?v=1670643916",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_7b752f56-96bc-4f1d-9aeb-3a7c76ab7584_150x150_crop_center.png?v=1670643916",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_2.png?v=1670643787",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_3.png?v=1670643810",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign.png?v=1670643825"
        ],
        isAvailable: true
    },
    {
        itemName: `Fresh Daisy Necklace`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_18bb5093-d1f6-4ed7-9136-6675b4ebafd3_150x150_crop_center.png?v=1670643094",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_18bb5093-d1f6-4ed7-9136-6675b4ebafd3_150x150_crop_center.png?v=1670643094",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_17d244d1-5eb4-460d-8345-34d179f14839_150x150_crop_center.png?v=1670644400",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_5473e255-c6f5-4ca3-9849-485b5ed45c15_150x150_crop_center.png?v=1670644400",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_2_e0d7c8f4-4620-494d-849a-9a18d5d90467.png?v=1670644388",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_3.png?v=1670643810",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_21d9a236-15fb-45bd-bf39-9ba0adff873a.png?v=1670644369"
        ],
        isAvailable: true
    },
    {
        itemName: `"You Are My Sunshine" Necklace - Silver`,
        price: 99.99,
        discountedPrice: 49.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_7decc4e9-2626-4f12-84b6-d383fafc7c47_150x150_crop_center.png?v=1671069452",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_7decc4e9-2626-4f12-84b6-d383fafc7c47_150x150_crop_center.png?v=1671069452",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_09b60c38-abf4-445d-9472-09c1ae50e20d_150x150_crop_center.png?v=1671069452",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/12_150x150_crop_center.png?v=1671069452",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_3_e936c2b0-2635-413a-abe5-50e0f57dd025.png?v=1671069500",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_2_c781b706-f6a3-42ae-aae1-595c356cb8d7.png?v=1671069517",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_4.png?v=1671069533"
        ],
        isAvailable: true
    },
    {
        itemName: `"You Are My Sunshine" Keychain`,
        price: 59.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_dd58ca9c-d0ee-40bb-a777-aeac53a5e3f4_150x150_crop_center.png?v=1671070151",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_dd58ca9c-d0ee-40bb-a777-aeac53a5e3f4_150x150_crop_center.png?v=1671070151",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_2_c4c42358-cd1a-489e-86fa-975b9f997e7c_150x150_crop_center.png?v=1671070151",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_7c911b87-02ba-4031-ae43-c252cf584e39_150x150_crop_center.png?v=1671070151",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_4_2056382e-948b-49bb-9e61-c139579e78d0.png?v=1671070172",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_3_feddc17a-17ab-4347-bd46-f395a92bf5e6.png?v=1671070189",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/777.png?v=1671070205"
        ],
        isAvailable: true
    },
    {
        itemName: `Spinning Sunflower Bracelet`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_2228e5f4-d766-42ce-b18d-2bdd7f93d116_150x150_crop_center.png?v=1671071301",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_2228e5f4-d766-42ce-b18d-2bdd7f93d116_150x150_crop_center.png?v=1671071301",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_3_150x150_crop_center.png?v=1671071301",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_2_c02faaa1-4d7b-47f5-a20a-92ee4b3dd169.png?v=1671071441",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_4_7c3be70b-2a80-492f-b4d5-80ac54937d71.png?v=1671071495",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_1_3ff4cd5e-82ce-4237-941b-b64be319aed4.png?v=1671071511"
        ],
        isAvailable: true
    },
    {
        itemName: `Spinning Sunflower Earrings`,
        price: 79.99,
        discountedPrice: 39.99,
        rating: 0,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1fc490dc-2f19-46c5-a8ba-23ec5d36669e_150x150_crop_center.png?v=1671071845",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1fc490dc-2f19-46c5-a8ba-23ec5d36669e_150x150_crop_center.png?v=1671071845",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_2_17b9f2c6-538e-4f44-aef2-57feb812fb21_150x150_crop_center.png?v=1671073580",
        ],
        bannerImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_1_dd034292-8a84-4ce2-b871-34cd9e10bc97.png?v=1671073598",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_a32928a1-70a5-46c7-bbc8-6ccbe9748699.png?v=1671073612",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Untitleddesign_3_3876d8ce-78eb-44bc-add6-6ca74645dd39.png?v=1671073628"
        ],
        isAvailable: true
    },
    {
        itemName: `Daisy Bundle`,
        price: 199.99,
        discountedPrice: 99.99,
        rating: 11,
        frontImageUrl: "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_e455e55a-599d-4e6b-b234-4d0c265d8287_150x150_crop_center.png?v=1671238455",
        extraImageUrls: [
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_e455e55a-599d-4e6b-b234-4d0c265d8287_150x150_crop_center.png?v=1671238455",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/matching-daisies-bracelet-set-bee-kind-shop-shoe-arm-jewelry-845_3bb8c7e4-e122-463a-81e0-316105fb4f80_150x150_crop_center.png?v=1671238950",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/BeeKIndDaisyPearlNecklace1_4e9b7f89-3442-40e9-92ce-a07bf8014898_150x150_crop_center.png?v=1671238950",
            "https://cdn.shopify.com/s/files/1/0457/5648/1703/products/Untitleddesign_1_6aacffdc-ce72-4695-bff6-168b2558b322_150x150_crop_center.png?v=1671238949"
        ],
        bannerImageUrls: [],
        isAvailable: true
    },
]

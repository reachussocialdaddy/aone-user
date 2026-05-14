// ========================================
// A-ONE BAKERY - MENU PAGE JAVASCRIPT
// Independent | No Global Dependencies
// ========================================

// Product Data
products = [];

// ========================================
// DRIVE PRODUCTS DATA (Inlined for reliability)
// ========================================
const driveData = [
    {
        "id": 1000,
        "name": "Bread Pakora",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=16yPatZpmVqi6At2b6_aEloU6_pKSiGKG&sz=w1000"
        ],
        "description": "Fresh Bread Pakora from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1002,
        "name": "Mix Pakora",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1aSY0xtxtYYEZrxXdSFngvvnSzf69KUNh&sz=w1000"
        ],
        "description": "Fresh Mix Pakora from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1004,
        "name": "Onion Rings",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=19GPEvlp1agKQW34MDEuVku7dZ9LRN7sA&sz=w1000"
        ],
        "description": "Fresh Onion Rings from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1006,
        "name": "Paneer Pakora",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1fNhdQd65J69_aNKN0OV1MT9tPmFOZyo2&sz=w1000"
        ],
        "description": "Fresh Paneer Pakora from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1008,
        "name": "Samosa",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=13bI2QBquW9O7gOZAnL6OA-RI4a4OrrCd&sz=w1000"
        ],
        "description": "Fresh Samosa from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1010,
        "name": "Spring Roll",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1mec0OFYsoLi-mW2xHVU_RKPE6oRRCt46&sz=w1000"
        ],
        "description": "Fresh Spring Roll from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1012,
        "name": "Tikki",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=17mVtAyB9-1TJlJIHOLLe_3Rg9XpoMl80&sz=w1000"
        ],
        "description": "Fresh Tikki from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1014,
        "name": "Veg Pakora",
        "category": "snacks",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1mcRpZbcOxQVqWndpKT1In6Vy2WN1AY8w&sz=w1000"
        ],
        "description": "Fresh Veg Pakora from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1016,
        "name": "Jungle Theme 1",
        "category": "2_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1SOhEKr8k5tlJARtmWXycM1_udvMWTtH1&sz=w1000"
        ],
        "description": "Fresh Jungle Theme 1 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1017,
        "name": "Jungle Theme",
        "category": "2_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1aXVZ1iS_c8BtYIrmpu1FynsLhe9BXJwc&sz=w1000"
        ],
        "description": "Fresh Jungle Theme from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1018,
        "name": "3 Tier red rose",
        "category": "3_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=19qxYxQE09JhiJJDQbqjw3udvAP_e9tYy&sz=w1000"
        ],
        "description": "Fresh 3 Tier red rose from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1019,
        "name": "Baby Boss",
        "category": "3_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=15tIqEeEhd0ORljFhb2RfpRQBqoz1oMdz&sz=w1000"
        ],
        "description": "Fresh Baby Boss from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1020,
        "name": "Mr&Mrs",
        "category": "3_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1pqSOKhaOeSyozsNWotUCoTOEs4aJWn3L&sz=w1000"
        ],
        "description": "Fresh Mr&Mrs from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1021,
        "name": "Super Heros",
        "category": "3_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1wH-htQGxXxH50SIOllOK5lEdTkr5po6q&sz=w1000"
        ],
        "description": "Fresh Super Heros from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1022,
        "name": "Cream gold",
        "category": "4_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1E-jxkw9jhC9Z4MunzUBOPS6Y2WdUrLZW&sz=w1000"
        ],
        "description": "Fresh Cream gold from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1023,
        "name": "Cream Ornamental",
        "category": "4_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1jKyB5qz_bk4aHnorgtlUYUZhubCI5C5f&sz=w1000"
        ],
        "description": "Fresh Cream Ornamental from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1024,
        "name": "Green Gold",
        "category": "4_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=12MxtCOgYkuN7FfHdmHkh-nhRopTqfZWb&sz=w1000"
        ],
        "description": "Fresh Green Gold from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1025,
        "name": "Cake",
        "category": "5_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1sJUZ_HUAqXmD0-geyGs0li23kQ-EOsfN&sz=w1000"
        ],
        "description": "Fresh Cake from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1026,
        "name": "AC5A9308",
        "category": "cake_slice",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=15r_O3Yux447lhJJS-0AQTo2U37wSAi8Q&sz=w1000"
        ],
        "description": "Fresh AC5A9308 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1027,
        "name": "AC5A9314",
        "category": "cake_slice",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1V_8FmNakqGtEzXRxhlcwP5QQ1MjmOGlg&sz=w1000"
        ],
        "description": "Fresh AC5A9314 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1028,
        "name": "AC5A9317",
        "category": "cake_slice",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=13z634I5YobNsHK-Yo1dGVNpx-ff1I6XI&sz=w1000"
        ],
        "description": "Fresh AC5A9317 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1029,
        "name": "AC5A9345 2",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1oxFg0x3cA7F1r5IiDMvYQDw7mmvJI5Wp&sz=w1000"
        ],
        "description": "Fresh AC5A9345 2 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1030,
        "name": "AC5A9345 copy",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1mzjUa6SUelph3y-gOjMV8xAjGEcXzFJZ&sz=w1000"
        ],
        "description": "Fresh AC5A9345 copy from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1031,
        "name": "AC5A9345",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=114rtgBeLPMW19oK1E_8Lcm3Pp-L8QnGL&sz=w1000"
        ],
        "description": "Fresh AC5A9345 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1032,
        "name": "AC5A9346",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ZL2RICA5P2fDs9fOk7kIM4KcSE7cDlCg&sz=w1000"
        ],
        "description": "Fresh AC5A9346 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1033,
        "name": "AC5A9347",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=16MnND-iW52UiEtP9p_-lj278LKYJMkPG&sz=w1000"
        ],
        "description": "Fresh AC5A9347 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1034,
        "name": "AC5A9348",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1KNWHkFw9fKeYJzE8ImHRk4iNgdaH4jy5&sz=w1000"
        ],
        "description": "Fresh AC5A9348 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1035,
        "name": "AC5A9349",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1LPwtXuI3BS8CWgXogeVZRFDj4Y5CGTg4&sz=w1000"
        ],
        "description": "Fresh AC5A9349 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1036,
        "name": "IMG_0187",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=18ZkRPSwfHu40Tmfvu-j_o8LnXiJF7rhm&sz=w1000"
        ],
        "description": "Fresh IMG_0187 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1037,
        "name": "IMG_0188",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Jy6l4ZKKkWqfIhoLoAY_uf8oIUTQDitY&sz=w1000"
        ],
        "description": "Fresh IMG_0188 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1038,
        "name": "IMG_0189",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1oHol8qt248WbF7yut_MOPU2NMYO5-136&sz=w1000"
        ],
        "description": "Fresh IMG_0189 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1039,
        "name": "IMG_0190",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=15B0JjKovJTfRD7tiD3_5ln3B43TfOsT8&sz=w1000"
        ],
        "description": "Fresh IMG_0190 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1040,
        "name": "IMG_0191",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1LfqPWTyeKqE1RtPoYdF0WeiePHMfTruX&sz=w1000"
        ],
        "description": "Fresh IMG_0191 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1041,
        "name": "IMG_0193",
        "category": "cream_rolls",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ZSvpFeT29KyN568xZS1vfwFQB7rdmrYX&sz=w1000",
            "https://drive.google.com/thumbnail?id=1DY90_rPprTfQj57kLIHKYFeYCE0HD8VJ&sz=w1000"
        ],
        "description": "Fresh IMG_0193 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1042,
        "name": "AC5A9351",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1yG-VBzddWaHGKWu8yXIZXAX8-7rmikNN&sz=w1000"
        ],
        "description": "Fresh AC5A9351 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1043,
        "name": "AC5A9352",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1uR_n--J3-FHsJDZF1Yxm88TIe1kyfQfI&sz=w1000"
        ],
        "description": "Fresh AC5A9352 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1044,
        "name": "AC5A9353",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=10CL3mLK2VJmmD7bpDpCmro4h7VwMowU-&sz=w1000"
        ],
        "description": "Fresh AC5A9353 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1045,
        "name": "AC5A9354",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=16qBkFoV5wbR5p54oLDW7LuMYdnfBtL_O&sz=w1000"
        ],
        "description": "Fresh AC5A9354 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1046,
        "name": "AC5A9366",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1DBJUTa0ENhqIk3dTUOZrjqSWv45P7fe0&sz=w1000"
        ],
        "description": "Fresh AC5A9366 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1047,
        "name": "IMG_0192",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Zyq49-Upgqz9FWp8fnU9jYLT4WU0Ojwm&sz=w1000"
        ],
        "description": "Fresh IMG_0192 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1049,
        "name": "IMG_0194",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1hosOw-kaFcmlUHPGbWJ0PqagF9R_uHUa&sz=w1000"
        ],
        "description": "Fresh IMG_0194 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1050,
        "name": "IMG_0195",
        "category": "cup_cake_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1yUjS0c3IemovX-0r9qXuqjt0iil77wov&sz=w1000"
        ],
        "description": "Fresh IMG_0195 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1051,
        "name": "AC5A9302",
        "category": "cup_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1B1CxGR-UpfgCnoEwvoJu2JhMAd3_sM7q&sz=w1000"
        ],
        "description": "Fresh AC5A9302 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1052,
        "name": "AC5A9303",
        "category": "cup_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1diZtpP8FVGCFgoERzRDUkciPQ-O2YNfn&sz=w1000"
        ],
        "description": "Fresh AC5A9303 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1053,
        "name": "AC5A9304",
        "category": "cup_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1AP9Kra0jkbi63dcp5oaZ2okuxbnlP0qY&sz=w1000"
        ],
        "description": "Fresh AC5A9304 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1054,
        "name": "AC5A9305",
        "category": "cup_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1oF4bSqwQhyn-yaa6UeHkyy4SmwzDfxN2&sz=w1000"
        ],
        "description": "Fresh AC5A9305 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1055,
        "name": "Spiderman",
        "category": "kids",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1pFHK0V-DEKjeZh0phGofyLpo2pMjwK_N&sz=w1000"
        ],
        "description": "Fresh Spiderman from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1056,
        "name": "AC5A9373",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1zaDx5iwhnBXS-zjsph-FmysF70C7cj4Z&sz=w1000"
        ],
        "description": "Fresh AC5A9373 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1057,
        "name": "Black Forest",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Q80gIbe2PvYtU14Lh0MmrO8jPK38N_Xt&sz=w1000",
            "https://drive.google.com/thumbnail?id=17NzzJ5lLuWKvBNtZ5MYj2kdayi8FyIeI&sz=w1000"
        ],
        "description": "Fresh Black Forest from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1058,
        "name": "Mango",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1tMmVfoEo9v3q2h8y_QiD46tEiBHxz75v&sz=w1000",
            "https://drive.google.com/thumbnail?id=1d1S0XO0piFilHxqnG68WDS7YzT_oIrtJ&sz=w1000"
        ],
        "description": "Fresh Mango from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1059,
        "name": "Marble",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1yIoCls4ACkqBFIioQ-gu2tdc4T2WdDEM&sz=w1000",
            "https://drive.google.com/thumbnail?id=1PXuuXNaiVWt4J6x7LWlS83dm98j3PAFE&sz=w1000"
        ],
        "description": "Fresh Marble from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1060,
        "name": "Pineapple",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1eCoy-drRYXT6dZl_jeAFqwl_kCv4MM_0&sz=w1000",
            "https://drive.google.com/thumbnail?id=1xyfyC16RQ3B0M1mMciQSTt0GYxr1T1IK&sz=w1000"
        ],
        "description": "Fresh Pineapple from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1061,
        "name": "Vanilla",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1EhzSI_TKjW-sXAJnPY0sGuTZV3_EP3x8&sz=w1000",
            "https://drive.google.com/thumbnail?id=1LtfEgoZASKm3eTxzNTTYdMOpQXlqrW2H&sz=w1000"
        ],
        "description": "Fresh Vanilla from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1062,
        "name": "AC5A9367",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1rQFV3NIIjb0lSYY586YStjfcyuHu9kw2&sz=w1000"
        ],
        "description": "Fresh AC5A9367 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1063,
        "name": "Black forest",
        "category": "pastries_in_clamshell",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1dS0YbmMJ8nMOfxMxGIPLjpxxAdPEO38V&sz=w1000"
        ],
        "description": "Fresh Black forest from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1068,
        "name": "AC5A9319",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1AXFeuDAyow8WKfwKBhf7i1KEJKz-Z45N&sz=w1000"
        ],
        "description": "Fresh AC5A9319 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1069,
        "name": "AC5A9320",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1-dgsNQRIGXNxv5PPaYZGqYz6W1OLPdC5&sz=w1000"
        ],
        "description": "Fresh AC5A9320 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1070,
        "name": "AC5A9321",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1v7Q-d8xyJ0bHhRyKhbR7yhRrYGRzYkTp&sz=w1000"
        ],
        "description": "Fresh AC5A9321 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1071,
        "name": "AC5A9323",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1o5UKdjaFw08-29pVueoeSU09-8jKMGDq&sz=w1000"
        ],
        "description": "Fresh AC5A9323 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1072,
        "name": "AC5A9324",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1xAgsHVJJMwgtwzWZRNZeEhgLNbr5MvG7&sz=w1000"
        ],
        "description": "Fresh AC5A9324 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1073,
        "name": "AC5A9325",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1I0u3LerRKD7lskZqOeGyaLtszH6VkUHJ&sz=w1000"
        ],
        "description": "Fresh AC5A9325 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1074,
        "name": "AC5A9326",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1U8KVXN-SAMTVA--MvmZhdf9fKx8Gd89l&sz=w1000"
        ],
        "description": "Fresh AC5A9326 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1075,
        "name": "AC5A9327",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ZB11h1uFlEo9TMAvyaMqZppKos9NPicG&sz=w1000"
        ],
        "description": "Fresh AC5A9327 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1076,
        "name": "AC5A9328",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1EJCKHL476MFvj0waYk40c1l0nCssZ0Av&sz=w1000"
        ],
        "description": "Fresh AC5A9328 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1077,
        "name": "AC5A9329",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1rB5fZRrarU1pFxYVL0SvtUqVkjuvpZHP&sz=w1000"
        ],
        "description": "Fresh AC5A9329 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1078,
        "name": "AC5A9341",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1r-Qt8i0q1SVZHW7qNtAlZNn9jyUDOpAL&sz=w1000"
        ],
        "description": "Fresh AC5A9341 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1079,
        "name": "AC5A9342",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1YpwfUMcIcisYFxihCJwwo5M9Bq2X2rHm&sz=w1000"
        ],
        "description": "Fresh AC5A9342 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1080,
        "name": "AC5A9343",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1vLU0EjCtmG3OFiZSC1dBnitbV5CGcE96&sz=w1000"
        ],
        "description": "Fresh AC5A9343 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1081,
        "name": "AC5A9344",
        "category": "pudding_cups",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=13GZGSfO-8T9zwxmj_GWTrFg7BdDEpL0n&sz=w1000"
        ],
        "description": "Fresh AC5A9344 from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1082,
        "name": "Emrald Green",
        "category": "regular_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1t9GNCj_7KiXUKz-HKA1Xn9Sihn2UjAdv&sz=w1000"
        ],
        "description": "Fresh Emrald Green from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1084,
        "name": "Ribbon",
        "category": "regular_cakes",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ypefvxdDVMrp44Rc6Xb7y1w8Y92BbNgH&sz=w1000"
        ],
        "description": "Fresh Ribbon from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1085,
        "name": "Barbei",
        "category": "single_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1MV7DhtwezyRFqH284nUELJxRvozJgd34&sz=w1000"
        ],
        "description": "Fresh Barbei from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1086,
        "name": "Cars",
        "category": "single_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1VbkoQlggg16KreWf2m2QUdv0X7x277Ck&sz=w1000"
        ],
        "description": "Fresh Cars from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1087,
        "name": "Casino",
        "category": "single_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1SESKLXYg09TkBzLSGNG0W4sK3n-z5XoC&sz=w1000"
        ],
        "description": "Fresh Casino from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1088,
        "name": "Retierment",
        "category": "single_tier",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1dRbfwkhKEq2qNfKJme9woDpHETDpP2Lm&sz=w1000"
        ],
        "description": "Fresh Retierment from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1089,
        "name": "Pani Puri full",
        "category": "pani_puri",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1KlcoSNqke0sub_ReOneL4EqD_D6Tr60Y&sz=w1000",
            "https://drive.google.com/thumbnail?id=1hVLGto9qzWDDc0R2FaRMja_RuhAZ0oZ7&sz=w1000",
            "https://drive.google.com/thumbnail?id=1KSAyUW1QBzwAYX5EGWJCD9YNZNMlDUce&sz=w1000",
            "https://drive.google.com/thumbnail?id=14baCAMrjhNdQyodn8gfvNuY5cdAZNhUe&sz=w1000"
        ],
        "description": "Fresh Pani Puri full from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1093,
        "name": "Rectangular Biscuits",
        "category": "rectangular_biscuits",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1BqfpUZadeX41qdxLc7zoOJL6MFM6xhuH&sz=w1000"
        ],
        "description": "Fresh Rectangular Biscuits from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1095,
        "name": "Biscuits",
        "category": "round_biscuits",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1f-6zCNjrOGUUBHGThYS439sclqidYYJA&sz=w1000"
        ],
        "description": "Fresh Biscuits from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1098,
        "name": "Chocolate",
        "category": "chocolate",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ueM3JmN60AjYpctisRrdeXYXCcJpvHAF&sz=w1000"
        ],
        "description": "Fresh Chocolate from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1100,
        "name": "Coconut",
        "category": "coconut",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1SVC3VF4kOBsMt21S6luqeL8QOpN55r6O&sz=w1000"
        ],
        "description": "Fresh Coconut from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1102,
        "name": "Fruit Nuts &Amp; Jaggery",
        "category": "fruit_nuts_&amp;_jaggery",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1fBK0y8ovZUdecz1yAUAU7BeHvH3kYmn6&sz=w1000"
        ],
        "description": "Fresh Fruit Nuts &Amp; Jaggery from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1104,
        "name": "Gulab Jamun",
        "category": "gulab_jamun",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1pGb6qViLw5MpIXGO8kSAG2t8tDUpDOLq&sz=w1000"
        ],
        "description": "Fresh Gulab Jamun from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1106,
        "name": "Lotus Biscoff",
        "category": "lotus_biscoff",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1fxZGnFzrX2j50GvUu46d7TVOE0tBF2EX&sz=w1000"
        ],
        "description": "Fresh Lotus Biscoff from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1120,
        "name": "Oreo",
        "category": "oreo",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1xUBXuINVZ1AYigZ2zeZR4poGiAp7dO5T&sz=w1000"
        ],
        "description": "Fresh Oreo from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1126,
        "name": "Pistachio",
        "category": "pistachio",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1bRZ4BoLZ6M5SdmGMhesQ3S4_bGJrBdKB&sz=w1000"
        ],
        "description": "Fresh Pistachio from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1128,
        "name": "Ras Malai",
        "category": "ras_malai",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1xiIx-3mXoidEyF1tD7zbaIzcBEgBA99t&sz=w1000"
        ],
        "description": "Fresh Ras Malai from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1130,
        "name": "Red Velvet",
        "category": "red_velvet",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ruKv4x4tNj7NuL_c3ywtuw8Z1M1tm10H&sz=w1000"
        ],
        "description": "Fresh Red Velvet from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1134,
        "name": "Strawberry",
        "category": "strawberry",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1PYsRB1pOdceDib8aQZr-RaUe5uZTwCHh&sz=w1000"
        ],
        "description": "Fresh Strawberry from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1136,
        "name": "Strawberry Short Cake",
        "category": "strawberry_short_cake",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1kfGa8lfRqE27WjFqVUyP8VHndAyfRR3t&sz=w1000"
        ],
        "description": "Fresh Strawberry Short Cake from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1140,
        "name": "Ajwain",
        "category": "ajwain",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1UFk2xModZdrCjSxmgbulruu0PJ3N0QUJ&sz=w1000"
        ],
        "description": "Fresh Ajwain from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1147,
        "name": "Almond",
        "category": "almond",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1-0tcGDY5gJnuxdaUOwjq6nulfy2cNcER&sz=w1000"
        ],
        "description": "Fresh Almond from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1161,
        "name": "Flax Seed Gur",
        "category": "flax_seed_gur",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1gnqTd2Ft3fO3PABE08k-EB6asXJUDiWu&sz=w1000"
        ],
        "description": "Fresh Flax Seed Gur from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1167,
        "name": "Ginger Gur",
        "category": "ginger_gur",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1RB9284iwn0YuQNhKdBPh-LFX_OR1oD-C&sz=w1000"
        ],
        "description": "Fresh Ginger Gur from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1173,
        "name": "Gur Cookies",
        "category": "gur_cookies",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1tzRfVqyyQYHiye7K3hlJiGuJLO8179FL&sz=w1000"
        ],
        "description": "Fresh Gur Cookies from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1179,
        "name": "Gur Saunf",
        "category": "gur_saunf",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1vKPvANmq9KZWj_-GgfQQ1NJgCNOQOdZQ&sz=w1000"
        ],
        "description": "Fresh Gur Saunf from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1185,
        "name": "Kalounji",
        "category": "kalounji",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1vJNWLCkMelRNkk_focUPMeAdAmS8ft2A&sz=w1000",
            "https://drive.google.com/thumbnail?id=1ASQlnWCMs7ZwxnFQxE1Naxq9GtkHWNz9&sz=w1000"
        ],
        "description": "Fresh Kalounji from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1199,
        "name": "No Sugar Added",
        "category": "no_sugar_added",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Hoxu38pliKBAxA5LwI6tLnczoF-gpjux&sz=w1000"
        ],
        "description": "Fresh No Sugar Added from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1206,
        "name": "Sesame &Amp; Gur",
        "category": "sesame_&amp;_gur",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1QOj3wUn3o-YB7_qvfbo3OaZd_dZ2O_z1&sz=w1000"
        ],
        "description": "Fresh Sesame &Amp; Gur from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1213,
        "name": "Sooji",
        "category": "sooji",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=12rlD3cuYIAqaIbP0PVatIkdLcWxDUNGC&sz=w1000"
        ],
        "description": "Fresh Sooji from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1220,
        "name": "Vegetarian Punjabi",
        "category": "vegetarian_punjabi",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1fwnYRsrGe9L7cU5eirDimuVsI5QWkDYY&sz=w1000",
            "https://drive.google.com/thumbnail?id=10_Ror1c9RkMuySIamiKOPAvafCtvqB2r&sz=w1000",
            "https://drive.google.com/thumbnail?id=1ynxy81AHGBPtFynW-AzQHEnERGYjDTSF&sz=w1000",
            "https://drive.google.com/thumbnail?id=1lXifrRtOGHNsvHjsUbvm57x25W2HrZLM&sz=w1000",
            "https://drive.google.com/thumbnail?id=1tpgcNdRT1OvXjukuOgSS0Nq2YPrfMEK3&sz=w1000"
        ],
        "description": "Fresh Vegetarian Punjabi from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1227,
        "name": "Whole Wheat",
        "category": "whole_wheat",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ylCpwddn2NoDkdFv0VHZFK4HaRzWe1V7&sz=w1000"
        ],
        "description": "Fresh Whole Wheat from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1233,
        "name": "Zeera",
        "category": "zeera",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1tm09E3rDtNWrFBr_n12s97bWLnoH-yKB&sz=w1000"
        ],
        "description": "Fresh Zeera from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1249,
        "name": "Cashew",
        "category": "cashew",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Rl-gyx2pTpl9fOW0HpIYszu9FJJEcPzX&sz=w1000"
        ],
        "description": "Fresh Cashew from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1265,
        "name": "Nan Khatai",
        "category": "nan_khatai",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1BX2xKEF_cFdDb_Y0ij5wzCf0snQcpnBa&sz=w1000"
        ],
        "description": "Fresh Nan Khatai from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1285,
        "name": "Tutti Fruity",
        "category": "tutti_fruity",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1JWd691XAYrshyWd4ZKfvuAnb5xqK9k_A&sz=w1000"
        ],
        "description": "Fresh Tutti Fruity from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1292,
        "name": "Veg Punjabi",
        "category": "veg_punjabi",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1bS3VloS3whXEHy1ROJHQ86TVRvK5hy7r&sz=w1000"
        ],
        "description": "Fresh Veg Punjabi from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1309,
        "name": "Sooji Biscuits",
        "category": "sooji_biscuits",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=17fiXO02isw47ahE4t2MJ-6yPn7qt0I4M&sz=w1000",
            "https://drive.google.com/thumbnail?id=1D01faXnEU7ykaxxMPvScOrm6kh_Omt8R&sz=w1000"
        ],
        "description": "Fresh Sooji Biscuits from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1316,
        "name": "Vegetarian Punjabi Biscuits",
        "category": "vegetarian_punjabi_biscuits",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1Yki3zRn9aGtUKW6p4nGVlYKq6PNhpqRK&sz=w1000"
        ],
        "description": "Fresh Vegetarian Punjabi Biscuits from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1325,
        "name": "Whole Wheat Biscuits",
        "category": "whole_wheat",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1jr3oeKjv7nqHPIBWIEIDPj4s7OGWQmz6&sz=w1000"
        ],
        "description": "Fresh Whole Wheat Biscuits from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1343,
        "name": "Fennel",
        "category": "fennel",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=16rf0uuzYQGYqu8jvCClkXZSgtJ-dN9mS&sz=w1000"
        ],
        "description": "Fresh Fennel from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1349,
        "name": "Flax Seed And Gur",
        "category": "flax_seed_and_gur",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1nLNEO0Y-JIVpdVGF9mjbmy-vZuNPCl1x&sz=w1000"
        ],
        "description": "Fresh Flax Seed And Gur from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1362,
        "name": "Gur",
        "category": "gur",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1ci5JuoJ9TXT_0X1vxsdw6qNznLq4JrWd&sz=w1000"
        ],
        "description": "Fresh Gur from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1369,
        "name": "Gur &Amp; Saunf",
        "category": "gur_&amp;_saunf",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1-SKty6lZ0WeDUZqs1Zw4eNhPdt4NtqPs&sz=w1000"
        ],
        "description": "Fresh Gur &Amp; Saunf from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1438,
        "name": "Kalounji Namak Para",
        "category": "kalounji_namak_para",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1gnT-gHS5R0VtzC1p0KrAWtRsrsxK7L7f&sz=w1000"
        ],
        "description": "Fresh Kalounji Namak Para from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1442,
        "name": "Methi Namak Para",
        "category": "methi_namak_para",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1SZCpm1MKj4QFLW9nWRQty9PNmAe7G9SS&sz=w1000"
        ],
        "description": "Fresh Methi Namak Para from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1446,
        "name": "Namak Para",
        "category": "namak_para",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1LBNrjC-D8MZhrFr9LGZwl0hilLuyuI01&sz=w1000"
        ],
        "description": "Fresh Namak Para from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1450,
        "name": "Namak Para 1.5Lbs",
        "category": "namak_para_1.5lbs",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1LLB_XnT58S4mwuScLiMWYn9fregASqS_&sz=w1000"
        ],
        "description": "Fresh Namak Para 1.5Lbs from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1455,
        "name": "Spicy Para",
        "category": "spicy_para",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1IdLF4at_h-YKNEGSFsd7ePW5MpYepkF4&sz=w1000"
        ],
        "description": "Fresh Spicy Para from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1459,
        "name": "Sooji Milk Tea Rusk",
        "category": "sooji_milk\uf022tea_rusk",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=150AZnejEYk5uN7Xl2HjapFGpXJNtqo4s&sz=w1000",
            "https://drive.google.com/thumbnail?id=19jLzziSja9ontKT01rTm13BpRYUSKWa8&sz=w1000",
            "https://drive.google.com/thumbnail?id=1t28DCK-3sp2PORgNDLTHgcUE9MZn6oPp&sz=w1000"
        ],
        "description": "Fresh Sooji Milk Tea Rusk from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1461,
        "name": "Sooji Milk\uf022Tea Rusk",
        "category": "sooji_milk\uf022tea_rusk",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1bJ5-XUBLtKTVmYD5j5kwjmBaFRHpWijH&sz=w1000",
            "https://drive.google.com/thumbnail?id=1tSVjzJqdsixkKrMQmIJ2C2A3gBgejnjb&sz=w1000",
            "https://drive.google.com/thumbnail?id=10UoRVwGsHSaZx0K27hK0royviCt-qm9v&sz=w1000",
            "https://drive.google.com/thumbnail?id=1FxLX4BetN9QdTxH48RLJH_PN7E-uSXly&sz=w1000",
            "https://drive.google.com/thumbnail?id=1WnOVkIzg3xniCkq5PWnWVPqkUy_bw83x&sz=w1000",
            "https://drive.google.com/thumbnail?id=1pVqwhT1cq2A2arNCyHdM-pp8AI3F98Hl&sz=w1000",
            "https://drive.google.com/thumbnail?id=1CZ_i3ss50Oa7K3kcvixaN1jgF7DG2xvr&sz=w1000",
            "https://drive.google.com/thumbnail?id=18tKdZPxyyKo4ONxYHZahHsGoE6FfnAuQ&sz=w1000"
        ],
        "description": "Fresh Sooji Milk\uf022Tea Rusk from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1466,
        "name": "Tasty Tea Rusk",
        "category": "tasty_tea_rusk",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1aK1kXXJ_VjTnfwTGvAa1mpkbSAyiu-xZ&sz=w1000"
        ],
        "description": "Fresh Tasty Tea Rusk from our bakery.",
        "rating": 4.5,
        "reviews": 10
    },
    {
        "id": 1488,
        "name": "Whole Wheat Tea Rusk",
        "category": "whole_wheat_tea_rusk",
        "price": 0,
        "images": [
            "https://drive.google.com/thumbnail?id=1CfgINxdhv1TsIrQsWthC9o9QynW1QqP2&sz=w1000"
        ],
        "description": "Fresh Whole Wheat Tea Rusk from our bakery.",
        "rating": 4.5,
        "reviews": 10
    }
];;;;

// Mapping and Injecting
const categoryMap = {
    'single_tier': 'cake', '2_tier': 'cake', '3_tier': 'cake', '4_tier': 'cake', '5_tier': 'cake',
    'kids': 'cake', 'regular_cakes': 'cake', 'cup_cakes': 'cup_cakes', 'cup_cake_clamshell': 'cup_cakes',
    'round_biscuits': 'biscuits', 'rectangular_biscuits': 'biscuits', "biscuits_2.5lbs": 'biscuits',
    'biscuits_340gms': 'biscuits', 'biscuits_5lbs': 'biscuits', 'biscuits_700g': 'biscuits',
    'sooji_milk_rusk': 'biscuits', 'tasty_tea_rusk': 'biscuits', 'whole_wheat_tea_rusk': 'biscuits',
    'rusk_400gm': 'biscuits', 'rusk_700gms': 'biscuits',
    'pani_puri': 'snacks', 'para': 'snacks', 'snacks': 'snacks', 'pastries_in_clamshell': 'pastry',
    'cake_slice': 'pastry', 'cream_rolls': 'pastry', 'pudding_cups': 'pudding_cups'
};

driveData.forEach(p => {
    const mappedCategory = categoryMap[p.category] || p.category;
    products.push({
        ...p,
        subCategory: p.category !== mappedCategory ? p.category : null,
        category: mappedCategory
    });
});

// Update the Varieties counter dynamically
const varietyStat = document.querySelector('.stat-num[data-target="493"]');
if (varietyStat) {
    varietyStat.setAttribute('data-target', products.length);
    varietyStat.textContent = products.length + '+';
}

// Cart State
    cart = JSON.parse(localStorage.getItem('a1_cart')) || [];

// DOM Elements
    navbar = document.getElementById('navbar');
    cartBtn = document.getElementById('cartBtn');
    cartSidebar = document.getElementById('cartSidebar');
    cartOverlay = document.getElementById('cartOverlay');
    closeCart = document.getElementById('closeCart');
    cartItemsContainer = document.getElementById('cartItems');
    cartCount = document.getElementById('cartCount');
    cartTotal = document.getElementById('cartTotal');
    searchBtn = document.getElementById('searchBtn');
    searchOverlay = document.getElementById('searchOverlay');
    closeSearch = document.getElementById('closeSearch');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenu = document.getElementById('mobileMenu');
    closeMobile = document.getElementById('closeMobile');
    toast = document.getElementById('toast');
    toastMessage = document.getElementById('toastMessage');
    productModal = document.getElementById('productModal');
    modalClose = document.getElementById('modalClose');
    modalBody = document.getElementById('modalBody');
    checkoutBtn = document.getElementById('checkoutBtn');

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initEventListeners();
    updateCart();

    // Check URL params for filter
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    if (filterParam) {
        document.querySelectorAll('.cat-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filterParam);
        });
        renderProducts(filterParam);
    } else {
        renderProducts('all');
    }
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// ========================================
// PRODUCT RENDERING
// ========================================
function createProductCard(product, index) {
    const badgeClass = product.badgeType === 'new' ? 'badge-new' : 
                       product.badgeType === 'popular' ? 'badge-popular' : '';
    
    const categoryEmojis = {
        bread: '🥖', pastry: '🥐', cake: '🍰', cookie: '🍪', donut: '🍩', pie: '🥧',
        snacks: '🥟', biscuits: '🍪', pani_puri: '🥙', cakes: '🎂',
        single_tier: '🎂', "2_tier": '🎂', "3_tier": '🎂', "4_tier": '🎂', "5_tier": '🎂',
        cup_cakes: '🧁', round_biscuits: '🍪', rectangular_biscuits: '🍪',
        cake_slice: '🍰', cream_rolls: '🥐', cup_cake_clamshell: '🧁',
        kids: '🎈', pastries_in_clamshell: '🍰', pudding_cups: '🍮',
        "biscuits_2.5lbs": '🍪', biscuits_340gms: '🍪', biscuits_5lbs: '🍪', biscuits_700g: '🍪',
        regular_cakes: '🎂', sooji_milk_rusk: '🥖', tasty_tea_rusk: '🥖', whole_wheat_tea_rusk: '🥖'
    };

    return `
        <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
            ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                ${product.images.length > 1 ? `<span class="img-count"><i class="fas fa-images"></i> ${product.images.length}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}${product.subCategory ? ` <span class="sub-category">(${product.subCategory.replace(/_/g, ' ')})</span>` : ''}
                </span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description.substring(0, 70)}...</p>
                <div class="product-footer">
                    <span class="product-price">
                        <span class="price-currency">$</span>${product.price.toFixed(2)}
                    </span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(filter = 'all', maxPrice = 50, sort = 'popular') {
    const container = document.getElementById('menuProducts');
    const emptyState = document.getElementById('emptyProducts');
    const countBadge = document.getElementById('menuCountBadge');

    if (!container) return;

    let filtered = products.filter(p => {
        const matchCategory = filter === 'all' || p.category === filter;
        const matchPrice = p.price <= maxPrice;
        return matchCategory && matchPrice;
    });

    // Sort
    switch(sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
        default:
            filtered.sort((a, b) => b.reviews - a.reviews);
    }

    // Update count
    const menuCountEl = document.getElementById('menuCount');
    if (menuCountEl) {
        menuCountEl.textContent = filter === 'all' ? 'Showing all items' : `Showing ${filtered.length} ${filter}(s)`;
    }
    if (countBadge) countBadge.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        container.innerHTML = filtered.map((p, i) => createProductCard(p, i)).join('');
    }
}

function filterByCategory(category) {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });
    const maxPrice = document.getElementById('priceRange')?.value || 50;
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    renderProducts(category, maxPrice, sort);
    
    // Scroll to products
    document.querySelector('.menu-content-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetFilters() {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === 'all');
    });
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sortSelect');
    
    if (priceRange) priceRange.value = 50;
    if (priceValue) priceValue.textContent = '$50';
    if (sortSelect) sortSelect.value = 'popular';
    
    renderProducts('all');
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const categoryEmojis = {
        bread: '🥖', pastry: '🥐', cake: '🍰', cookie: '🍪', donut: '🍩', pie: '🥧',
        snacks: '🥟', biscuits: '🍪', pani_puri: '🥙', cakes: '🎂',
        single_tier: '🎂', "2_tier": '🎂', "3_tier": '🎂', "4_tier": '🎂', "5_tier": '🎂',
        cup_cakes: '🧁', round_biscuits: '🍪', rectangular_biscuits: '🍪',
        cake_slice: '🍰', cream_rolls: '🥐', cup_cake_clamshell: '🧁',
        kids: '🎈', pastries_in_clamshell: '🍰', pudding_cups: '🍮',
        "biscuits_2.5lbs": '🍪', biscuits_340gms: '🍪', biscuits_5lbs: '🍪', biscuits_700g: '🍪',
        regular_cakes: '🎂', sooji_milk_rusk: '🥖', tasty_tea_rusk: '🥖', whole_wheat_tea_rusk: '🥖'
    };

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="modal-img">
                <img id="mainModalImg" src="${product.images[0]}" alt="${product.name}">
                ${product.images.length > 1 ? `
                <div class="modal-thumbnails">
                    ${product.images.map((img, i) => `
                        <img src="${img}" alt="${product.name} ${i+1}" onclick="document.getElementById('mainModalImg').src='${img}'" class="${i === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
                ` : ''}
            </div>
            <div class="modal-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}
                </span>
                <h2>${product.name}</h2>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                <p>${product.description}</p>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="fas fa-star"></i>
                        <span>Rating: ${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-truck"></i>
                        <span>Local Pickup & Delivery Available</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    productModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal?.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// CART LOGIC
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('a1_cart', JSON.stringify(cart));
}

function updateCart() {
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-emoji">🧺</div>
                <p>Your cart is empty</p>
                <span>Add some delicious items!</span>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.images[0]}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = count;
}

// ========================================
// UTILS
// ========================================
function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function initEventListeners() {
    // Tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            filterByCategory(tab.dataset.filter);
        });
    });

    // Price Range
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `$${e.target.value}`;
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const sort = document.getElementById('sortSelect')?.value || 'popular';
            renderProducts(activeFilter, e.target.value, sort);
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const maxPrice = document.getElementById('priceRange')?.value || 50;
            renderProducts(activeFilter, maxPrice, e.target.value);
        });
    }

    // Search
    searchBtn?.addEventListener('click', () => searchOverlay?.classList.add('active'));
    closeSearch?.addEventListener('click', () => searchOverlay?.classList.remove('active'));
    
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }

        const matches = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );

        if (searchResults) {
            searchResults.innerHTML = matches.map(p => `
                <div class="search-result-item" onclick="quickView(${p.id}); document.getElementById('searchOverlay').classList.remove('active');">
                    <img src="${p.images[0]}" alt="${p.name}">
                    <div>
                        <h4>${p.name}</h4>
                        <p>$${p.price.toFixed(2)}</p>
                    </div>
                </div>
            `).join('');
        }
    });

    // Cart
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    const closeCartElements = [closeCart, cartOverlay];
    closeCartElements.forEach(el => {
        el?.addEventListener('click', () => {
            cartSidebar?.classList.remove('active');
            cartOverlay?.classList.remove('active');
        });
    });

    // Modal
    modalClose?.addEventListener('click', closeModal);
    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Mobile Menu
    mobileMenuBtn?.addEventListener('click', () => mobileMenu?.classList.add('active'));
    closeMobile?.addEventListener('click', () => mobileMenu?.classList.remove('active'));

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🧁 Welcome to the family! Check your inbox soon.');
        e.target.reset();
    });

    // Checkout
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        window.location.href = 'checkout.html';
    });
}

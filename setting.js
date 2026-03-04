const SETTINGS = {
    BRANCH_NAME: "MBS WORLD", // Cawangan default (fallback jika tiada dalam BRANCHES)
    // NOTE: Pastikan ini sama dengan URL Web App GAS yang bekerja (rujuk `test.html`).
    GAS_URL: "https://script.google.com/macros/s/AKfycbxe6l1PA8kTTm3rCAAKazNQRyCvAnLeuFopYjGbfkEAbwfRlyAHwfXu8C11ZhACr_8p0g/exec",
    CONSIGNMENT_VENDORS: ["VENDOR A", "VENDOR B", "GARDENIA"], // Jika pilih ini, auto jadi Consignment
    ALL_VENDORS: ["VENDOR A", "VENDOR B", "GARDENIA", "NESTLE", "MAMEE", "OTHER"],
    TRANSIT_METHODS: ["WAREHOUSE TRANSIT POINT", "VENDOR SELF PICKUP"],

    // Senarai semua cawangan yang boleh dipilih di UI
    BRANCHES: ["MBS WORLD", "MBS METRO", "MBS HYPER", "MBS TEST"],

    // Parameter untuk kualiti gambar yang diupload (0.0 - 1.0)
    // Contoh: 0.6 = lebih kecil saiz fail (seperti WhatsApp), 0.9 = lebih jelas tapi fail lebih besar
    IMAGE_QUALITY: 0.8,

    // (Opsyenal) maksimum width semasa resize sebelum upload
    IMAGE_MAX_WIDTH: 800
};
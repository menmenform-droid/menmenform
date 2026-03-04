// Konfigurasi asas. Branch & Vendor dibaca dari localStorage (sumber: GAS sheets branch / vendor / consignment).
const SETTINGS = {
    BRANCH_NAME: "pilih", // Nilai fallback jika tiada branch dalam senarai
    GAS_URL: "https://script.google.com/macros/s/AKfycbxe6l1PA8kTTm3rCAAKazNQRyCvAnLeuFopYjGbfkEAbwfRlyAHwfXu8C11ZhACr_8p0g/exec",
    TRANSIT_METHODS: ["WAREHOUSE TRANSIT POINT", "VENDOR SELF PICKUP"],

    // Parameter gambar
    IMAGE_QUALITY: 0.8,
    IMAGE_MAX_WIDTH: 800
};

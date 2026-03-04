const SETTINGS = {
    BRANCH_NAME: "pilih", // Cawangan default (fallback jika tiada dalam BRANCHES)
    // NOTE: Pastikan ini sama dengan URL Web App GAS yang bekerja (rujuk `test.html`).
    GAS_URL: "https://script.google.com/macros/s/AKfycbxe6l1PA8kTTm3rCAAKazNQRyCvAnLeuFopYjGbfkEAbwfRlyAHwfXu8C11ZhACr_8p0g/exec",
    CONSIGNMENT_VENDORS: ["Ana Muslim", "APT Inventions", "Aras MegaT", "Choco Albab", "CP INTEGRATED", "Exploria skillseed", "Gaintech", "Iman Publication", "Kaize Trading", "Kemves", "Prestasi", "Rabak Literature", "Sinchor Marketing ", "Soon Lee Seng", "SSH Toys", "Toad Publication", "Vinnpower", "Wiroes", "HR DISTRIBUTORS"], // Jika pilih ini, auto jadi Consignment
    ALL_VENDORS: ["Ana Muslim", "APT Inventions", "Aras MegaT", "Choco Albab", "CP INTEGRATED", "Exploria skillseed", "Gaintech", "Iman Publication", "Kaize Trading", "Kemves", "Prestasi", "Rabak Literature", "Sinchor Marketing ", "Soon Lee Seng", "SSH Toys", "Toad Publication", "Vinnpower", "Wiroes", "HR DISTRIBUTORS"],
    TRANSIT_METHODS: ["WAREHOUSE TRANSIT POINT", "VENDOR SELF PICKUP"],

    // Senarai semua cawangan yang boleh dipilih di UI
    BRANCHES: ["MBW-MBS WORLD", "WAH-MBS WAREHOUSE", "JRT-MBS JERANTUT", "LMB-MBS LIMBONG", "BER-MBS BERA", "JK1-MBS JENGKA", "JK2-MBS JENGKA2", "PKN-MBS PEKAN", "MTK-MBS MENTAKAB", "DUN-MBS DUNGUN", "SGT-MBS SEGAMAT", "LPS-MBS LIPIS", "CHK-MBS CHUKAI", "BET-MBS BENTONG", "MDZ-MBS MUADZAM", "RAU-MBS RAUB", "ROM-MBS ROMPIN", "TML-MBS TEMERLOH", "MRN-MBS MARAN", "SMB-MBS SEMAMBU"],

    // Parameter untuk kualiti gambar yang diupload (0.0 - 1.0)
    // Contoh: 0.6 = lebih kecil saiz fail (seperti WhatsApp), 0.9 = lebih jelas tapi fail lebih besar
    IMAGE_QUALITY: 0.8,

    // (Opsyenal) maksimum width semasa resize sebelum upload
    IMAGE_MAX_WIDTH: 800

};

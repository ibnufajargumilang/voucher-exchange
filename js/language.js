var languageData = {
    en: {
        // Mode Desktop And Phone
        voucherExchange: "Voucher Exchange",
        features: "Features",
        howItWorks: "How It Works",
        paymentMethods: "Payment Methods",
        contact: "Contact",
        heroTitle: "Exchange Your Vouchers Easily",
        heroDescription: "Get the best offers and exchange your vouchers with just a few clicks.",
        heroLogin: "Login Now",
        heroExchangeNow: "Exchange Now",
        send: "Send",
        heroUsers: "Users",
        heroExchanges: "Exchanges",
        heroCoins: "Coins",
        heroWithdrawals: "Withdrawals",
        easyToUse: "Easy to Use",
        easyToUseDescription: "Using our platform is very easy and intuitive.",
        bestOffers: "Best Offers",
        bestOffersDescription: "Get the best offers for your vouchers.",
        safeAndTrusted: "Safe and Trusted",
        safeAndTrustedDescription: "Your security and privacy are our priorities.",
        chooseVoucher: "Choose Voucher",
        chooseVoucherDesc: "Select the voucher you want to exchange from various available options.",
        enterCode: "Enter Code",
        enterCodeDesc: "Enter your voucher code to start the exchange process.",
        exchangeAndEnjoy: "Exchange and Enjoy",
        exchangeAndEnjoyDesc: "Exchange your voucher and enjoy the exciting offers we provide.",
        ourFeatures: "Our Features",
        contactUs: "Contact US",
        btnSend: "Send",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        copyRight: "All Rights Reserved.",
        thankYouMessage: "Thank you, {name}! Your message has been sent.",
        // Tambahkan lebih banyak kunci dan nilai sesuai kebutuhan
    },
    id: {
        // Mode Desktop And Phone
        voucherExchange: "Penukaran Voucher",
        features: "Fitur",
        howItWorks: "Cara Kerja",
        paymentMethods: "Metode Pembayaran",
        contact: "Kontak",
        heroTitle: "Tukar Voucher Anda Dengan Mudah",
        heroDescription: "Dapatkan penawaran terbaik dan tukarkan voucher Anda dengan beberapa klik saja.",
        heroLogin: "Masuk Sekarang",
        heroExchangeNow: "Tukar Sekarang",
        send: "Kirim",
        heroUsers: "Pengguna",
        heroExchanges: "Penukaran",
        heroCoins: "Koin",
        heroWithdrawals: "Penarikan",
        easyToUse: "Mudah Digunakan",
        easyToUseDescription: "Menggunakan platform kami sangat mudah dan intuitif.",
        bestOffers: "Penawaran Terbaik",
        bestOffersDescription: "Dapatkan penawaran terbaik untuk voucher Anda.",
        safeAndTrusted: "Aman dan Terpercaya",
        safeAndTrustedDescription: "Keamanan dan privasi Anda adalah prioritas kami.",
        chooseVoucher: "Pilih Voucher",
        chooseVoucherDesc: "Pilih voucher yang ingin Anda tukarkan dari berbagai pilihan yang tersedia.",
        enterCode: "Masukkan Kode",
        enterCodeDesc: "Masukkan kode voucher Anda untuk memulai proses penukaran.",
        exchangeAndEnjoy: "Tukar dan Nikmati",
        exchangeAndEnjoyDesc: "Tukar voucher Anda dan nikmati penawaran menarik yang kami berikan.",
        ourFeatures: "Fitur Kami",
        contactUs: "Hubungi Kami",
        btnSend: "Kirim",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "Email Anda",
        messagePlaceholder: "Pesan Anda",
        copyRight: "Hak Cipta Dilindungi.",
        thankYouMessage: "Terima kasih, {name}! Pesan Anda telah dikirim.",
        // Tambahkan lebih banyak kunci dan nilai sesuai kebutuhan
    },
};

// Function untuk memperbarui UI berdasarkan bahasa yang dipilih
function updateUI(lang) {
    // Memperbarui placeholder pada input dan textarea berdasarkan bahasa yang dipilih
    document.getElementById('txtName').setAttribute('placeholder', languageData[lang].namePlaceholder);
    document.getElementById('txtEmail').setAttribute('placeholder', languageData[lang].emailPlaceholder);
    document.getElementById('txtMessage').setAttribute('placeholder', languageData[lang].messagePlaceholder);

    // Mode Desktop
    $("#featuresDesktop").text(languageData[lang].features);
    $("#howItWorksDesktop").text(languageData[lang].howItWorks);
    $("#paymentMethodsDesktop").text(languageData[lang].paymentMethods);
    $("#contactDesktop").text(languageData[lang].contact);
    // Mode Desktop And Phone
    $("#voucherExchange").text(languageData[lang].voucherExchange);
    $("#features").text(languageData[lang].features);
    $("#howItWorks").text(languageData[lang].howItWorks);
    $("#howItWorksSection").text(languageData[lang].howItWorks);
    $("#paymentMethods").text(languageData[lang].paymentMethods);
    $("#contact").text(languageData[lang].contact);
    $("#heroTitle").text(languageData[lang].heroTitle);
    $("#heroDescription").text(languageData[lang].heroDescription);
    $("#heroLogin").text(languageData[lang].heroLogin);
    $("#heroExchangeNow").text(languageData[lang].heroExchangeNow);
    $("#send").text(languageData[lang].send);
    $("#heroUsers").text(languageData[lang].heroUsers);
    $("#heroExchanges").text(languageData[lang].heroExchanges);
    $("#heroCoins").text(languageData[lang].heroCoins);
    $("#heroWithdrawals").text(languageData[lang].heroWithdrawals);
    $("#easyToUse").text(languageData[lang].easyToUse);
    $("#easyToUseDescription").text(languageData[lang].easyToUseDescription);
    $("#bestOffers").text(languageData[lang].bestOffers);
    $("#bestOffersDescription").text(languageData[lang].bestOffersDescription);
    $("#safeAndTrusted").text(languageData[lang].safeAndTrusted);
    $("#chooseVoucher").text(languageData[lang].chooseVoucher);
    $("#chooseVoucherDesc").text(languageData[lang].chooseVoucherDesc);
    $("#enterCode").text(languageData[lang].enterCode);
    $("#enterCodeDesc").text(languageData[lang].enterCodeDesc);
    $("#exchangeAndEnjoy").text(languageData[lang].exchangeAndEnjoy);
    $("#exchangeAndEnjoyDesc").text(languageData[lang].exchangeAndEnjoyDesc);
    $("#paymentMethodsSection").text(languageData[lang].paymentMethods);
    $("#ourFeatures").text(languageData[lang].ourFeatures);
    $("#btnSend").text(languageData[lang].btnSend);
    $("#contactUs").text(languageData[lang].contactUs);
    $("#footerVoucherExchange").text(languageData[lang].voucherExchange);
    $("#copyRight").text(languageData[lang].copyRight);
    $("#thankYouMessage").text(languageData[lang].thankYouMessage.replace("{name}", "John"));
    $("#menu-dropdown a").each(function () {
        var key = $(this).text().toLowerCase().replace(" ", "");
        $(this).text(languageData[lang][key]);
    });

    // Update tombol toggle bahasa
    $("#lang-toggle").text(lang === "en" ? "ID" : "EN");
    $("#lang-toggle").data("lang", lang);
}

// Mengambil preferensi bahasa yang tersimpan dari localStorage, defaulting ke "en"
var savedLang = localStorage.getItem("lang") || "en";
updateUI(savedLang); // Memperbarui UI sesuai bahasa yang disimpan

// Tombol toggle bahasa
$("#lang-toggle").on("click", function () {
    var currentLang = $(this).data("lang");
    var newLang = currentLang === "en" ? "id" : "en";
    localStorage.setItem("lang", newLang); // Simpan preferensi bahasa di localStorage
    updateUI(newLang); // Memperbarui UI setelah bahasa diubah
});

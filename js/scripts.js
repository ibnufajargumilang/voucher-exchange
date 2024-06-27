$(document).ready(function () {
    // Check for saved dark mode preference in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        $("body").addClass("dark");
        $("#dark-mode-icon").text("☀️");
    }

    // Toggle dark mode
    $("#dark-mode-toggle").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("darkMode", "enabled");
            $("#dark-mode-icon").text("☀️");
        } else {
            localStorage.setItem("darkMode", "disabled");
            $("#dark-mode-icon").text("🌙");
        }
    });

    // Contact form submission
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        var name = $("#txtName").val();
        var email = $("#txtEmail").val();
        var message = $("#txtMessage").val();

        if (name && email && message) {
            alert("Terima kasih, " + name + "! Pesan Anda telah dikirim.");
            $("#contact-form")[0].reset();
        } else {
            alert("Mohon lengkapi semua kolom.");
        }
    });

    // Toggle menu dropdown
    $("#menu-toggle").on("click", function () {
        $("#menu-dropdown").toggleClass("hidden");
    });
});

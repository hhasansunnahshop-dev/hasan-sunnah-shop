document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("msg").innerHTML =
        "ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে।";

    this.reset();
});

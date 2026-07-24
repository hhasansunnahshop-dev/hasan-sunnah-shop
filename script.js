const API_URL =
  "https://script.google.com/macros/s/AKfycbw0_atbFKXZ2rVCoJe2dGic2HjATvvcyjXRj8OdO2lcD6jAk3AMnLnmhAS9jGm6ojaY/exec";

// Order Form Submit
document.getElementById("orderForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = this.querySelector("button");

    btn.disabled = true;
    btn.innerText = "অর্ডার পাঠানো হচ্ছে...";

    const data = {
        name: document.getElementById("name").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim()
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {

            alert("🎉 ধন্যবাদ! আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।");

            document.getElementById("orderForm").reset();

        } else {

            alert("❌ অর্ডার গ্রহণ করা যায়নি। আবার চেষ্টা করুন।");

        }

    } catch (error) {

        console.error(error);

        alert("❌ সার্ভারে সংযোগ করা যায়নি।");

    }

    btn.disabled = false;
    btn.innerText = "অর্ডার কনফার্ম করুন";

});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

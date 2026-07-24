document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে। খুব শীঘ্রই আমরা আপনার সাথে যোগাযোগ করবো।");

    this.reset();
});

// Smooth Scroll
document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector("#order").scrollIntoView({
        behavior:"smooth"
    });
});

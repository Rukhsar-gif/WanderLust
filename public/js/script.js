(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


let taxSwitch = document.getElementById("switchCheckDefault");
    taxSwitch.addEventListener("click", () => {
        let taxInfo = document.getElementsByClassName("tax-info");
        for(info of taxInfo) {
            if(info.style.display != "inline") {
                info.style.display = "inline";
            }else {
                info.style.display = "none";
            }
        }
    });

const filters = document.querySelectorAll(".filters");

filters.forEach(filter => {
    filter.addEventListener("click", () => {

        const category = filter.dataset.category;

        const params = new URLSearchParams(window.location.search);

        params.set("category", category);

        window.location.href = `/listings?${params.toString()}`;
    });
});


const filterButton = document.getElementById("filterButton");
const filterPanel = document.getElementById("filterPanel");

filterButton.addEventListener("click", () => {
    filterPanel.classList.toggle("show");
});


const applyFilters = document.getElementById("applyFilters");

applyFilters.addEventListener("click", () => {

    const maxPrice = document.getElementById("maxPrice").value;
    const guests = document.getElementById("guests").value;
    const propertyType = document.getElementById("propertyType").value;
    const bedrooms = document.getElementById("bedrooms").value;

    const params = new URLSearchParams(window.location.search);

    // Update filters
    if (maxPrice) {
        params.set("maxPrice", maxPrice);
    } else {
        params.delete("maxPrice");
    }

    if (guests) {
        params.set("guests", guests);
    } else {
        params.delete("guests");
    }

    if (propertyType) {
        params.set("propertyType", propertyType);
    } else {
        params.delete("propertyType");
    }

    if (bedrooms) {
        params.set("bedrooms", bedrooms);
    } else {
        params.delete("bedrooms");
    }

    window.location.href = `/listings?${params.toString()}`;
});

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", async (event) => {

        event.preventDefault();
        event.stopPropagation();

        const listingId = button.dataset.listingId;

        try {

            const response = await fetch(`/wishlist/${listingId}`, {
                method: "POST"
            });

            const data = await response.json();

            if (data.success) {

                if (data.added) {
                    button.innerHTML = "❤️";
                    button.classList.add("active");
                } else {
                    button.innerHTML = "♡";
                    button.classList.remove("active");
                }

            }

        } catch (error) {
            console.log("Wishlist error:", error);
        }

    });

});
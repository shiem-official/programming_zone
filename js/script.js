   const toggleBtn = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        // Toggle Menu
        toggleBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            mobileMenu.classList.toggle("show");

        });

        // Click Outside Hide Menu
        document.addEventListener("click", function (e) {

            if (
                !mobileMenu.contains(e.target) &&
                !toggleBtn.contains(e.target)
            ) {
                mobileMenu.classList.remove("show");
            }

        });

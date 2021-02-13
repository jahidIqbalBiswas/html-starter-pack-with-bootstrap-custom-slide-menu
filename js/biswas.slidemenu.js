var mySlideBar = $(".slideMyNav");
        var overLay = $(".myOverLay");
        var menuButton = $(".menuBtn");
        var menuText = $(".menuText");
		var togglerContainer = $(".animate-toggler-container");

        menuButton.click(function() {
            slideNav();
        });
        overLay.click(function() {
            slideNav();
			togglerContainer.removeClass("animate-toggler-active");
        });

        function slideNav() {
            if (mySlideBar.hasClass("sideNavClose")) {
                mySlideBar.removeClass("sideNavClose");
                mySlideBar.addClass("sideNav");
                overLay.addClass("blackOverLay");
                overLay.removeClass("blackOverLayRemove");
                menuButton.addClass("myBtn");
                menuText.removeClass("d-none");
				togglerContainer.removeClass("animate-toggler-active");
            } else {
                mySlideBar.removeClass("sideNav");
                mySlideBar.addClass("sideNavClose");
                overLay.removeClass("blackOverLay");
                overLay.addClass("blackOverLayRemove");
                menuButton.removeClass("myBtn");
                menuText.addClass("d-none");

            };
        };
		var togglerWrapper = document.querySelector(".animate-toggler-container");
togglerWrapper.addEventListener("click", function() {
    this.classList.toggle("animate-toggler-active");
});
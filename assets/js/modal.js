(function() {
    "use strict";

    var closeBtn = document.querySelector(".close");
    var modal = document.querySelector(".modal");
    var contactButtons = document.querySelectorAll(".btn-contact");
    var send = document.querySelector("#sendEmail");
    var cancel = document.querySelector("#cancel");

    for (let i = 0; i < contactButtons.length; i++) {
        contactButtons[i].addEventListener("click", function(e) {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    cancel.addEventListener("click", function() {
        modal.style.display = "none";
    });

    send.addEventListener("click", function(e) {
        var formEl = document.forms.emailForm;
        var subject = formEl[2].value;
        var message = formEl[3].value;

        var email = document.createElement("a");
        email.href = "mailto:marc.baldevey@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
        email.click();
        modal.style.display = "none";
    });
})();
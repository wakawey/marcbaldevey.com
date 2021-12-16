(function() {
    "use strict";

    var closeBtn = document.querySelector(".close");
    var modal = document.querySelector(".modal");
    var submit = document.querySelector(".btn-contact");
    var send = document.querySelector("#sendEmail");
    var cancel = document.querySelector("#cancel");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    cancel.addEventListener("click", function() {
        modal.style.display = "none";
    });
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "flex";
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
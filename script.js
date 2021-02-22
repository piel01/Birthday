window.addEventListener("DOMContentLoaded", function () {
    console.log("contentloadedSuccess")
    let dateForm = document.querySelector("#date-form")
    console.log("formAccepted")

    dateForm.addEventListener("submit", function (submitClick) {
        submitClick.preventDefault()
        console.log("submitted");

        let gender = document.querySelector("#gender").value;
        let date = new Date;
        let birthday = date.getDay();
        console.log(birthday);

        let male = ["Kwasi", "Kwadwo", "Kwabena", "Kaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        if (gender = "1") {
            alert(male[birthday]);
        }
        else if (gender = "2") {
            alert(female[birthday]);
        } else {
            alert("invalid input");
        }

    })
})  
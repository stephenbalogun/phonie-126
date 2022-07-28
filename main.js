let logo = document.getElementById("t-image");

let phone = document.getElementById("phone");

phone.addEventListener("input", function () {
    if (phone.value.length < 4) {
        logo.src = "https://i.onthe.io/smngoz1oh0k8ls6p68.64b73224.jpg";
    }

    if (phone.value.length === 4) {
        return mobileNumberValidation(phone.value)
    }

})

function mobileNumberValidation(mobile) {
    //manipulate value so that you can access the first four numbers

    let firstFour = mobile.substring(0, 4);

    switch (firstFour) {
        case "0703":
        case "0706":
        case "0803":
        case "0806":
        case "0906":
        case "0903":
        case "0810":
        case "0813":
        case "0816":
        case "0814":
            // console.log('MTN');
            logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/200px-MTN_Logo.svg.png?20190223171412";
            break;

        case "0809":
        case "0817":
        case "0818":
        case "0909":
            // console.log('9-mobile');
            logo.src = "https://dailypost.ng/wp-content/uploads/2017/07/9Mobile-Telecom-Logo.jpg.webp"
            break;

        case "0802":
        case "0808":
        case "0812":
        case "0708":
        case "0701":
        case "0902":
        case "0901":
        case "0907":
            // console.log("Airtel");
            logo.src = "data:image/png;base64,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"
            break;

        case "0805":
        case "0807":
        case "0811":
        case "0815":
        case "0705":
        case "0905":
            // console.log("Globacome");
            logo.src = "https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png?20160217191127"
            break;
    }
}
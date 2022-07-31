

let carrier_logo = document.querySelector("img");


let phone_no = document.querySelector('input[type="tel"]')

let submit = document.querySelector('form')

     
submit.addEventListener('submit', () => {

    if (/^\+234/.test(phone_no.value.substring(0, 7)) == true) {

        switch (phone_no.value.substring(0, 7)) {
            case "+234703":
            case "+234706":
            case "+234803":
            case "+234806":
            case "+234906":
            case "+234903":
            case "+234810":
            case "+234813":
            case "+234816":
            case "+234814":
    
                carrier_logo.setAttribute('src', "images/mtn-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";

                break;
    
            case "+234809":
            case "+234817":
            case "+234909":
            case "+234818":
    
                carrier_logo.setAttribute('src', "images/etisalat-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
            case "+234802":
            case "+234808":
            case "+234812":
            case "+234708":
            case "+234701":
            case "+234902":
            case "+234901":
            case "+234907":
    
                carrier_logo.setAttribute('src', "images/airtel.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
            case "+234805":
            case "+234807":
            case "+234811":
            case "+234815":
            case "+234705":
            case "+234905":
    
                carrier_logo.setAttribute('src', "images/glo-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
        }
        
    } else if (/^0[780]/.test(phone_no.value.substring(0, 2)) == true) {

        switch (phone_no.value.substring(0, 4)) {
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
    
                carrier_logo.setAttribute('src', "images/mtn-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
            case "0809":
            case "0817":
            case "0909":
            case "0818":
    
                carrier_logo.setAttribute('src', "images/etisalat-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
            case "0802":
            case "0808":
            case "0812":
            case "0708":
            case "0701":
            case "0902":
            case "0901":
            case "0907":
    
                carrier_logo.setAttribute('src', "images/airtel.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
                break;
    
            case "0805":
            case "0807":
            case "0811":
            case "0815":
            case "0705":
            case "0905":
    
                carrier_logo.setAttribute('src', "images/glo-300.png");
                document.querySelector('.logo').style.display = "inherit";
                document.querySelector('input[type="submit"]').type = "reset";
                document.querySelector('input[type="reset"]').value = "reset";
    
                break;
    
        }

    } else {
        alert("error: The phone number supplied does not appear to be valid! Check that the phone number either begins with +234 or 0[789]")
    }
})


submit.addEventListener("reset", () => {
    document.querySelector('input[type="reset"]').type = "submit";
    document.querySelector('input[type="submit"]').value = "submit";
    document.querySelector('.logo').style.display = "none";
})



function whatsappSend(){
    var customerName = document.getElementById("customer-name").value;
    var customerNumber = document.getElementById("customer-number").value;
    var customerMail = document.getElementById("customer-mail").value;
    var customerMessage = document.getElementById("message-text").value;

    // var yourNumber = "233203441028";
    // var yourMessage = ""

    if (customerName == ""){
        swal("Kindly provide your name!!");
    }
    else if(customerNumber == ""){
        swal("Kindly provide your phone number!!");
    }
    else if(customerMail == ""){
        swal("Kindly provide correct email!!");
    }
    else{
        swal("Thank you!!!", "A volunteer will get in touch soon!!");
        var url = 'https://api.whatsapp.com/send?phone=233203441028'+'&text='+'Name:'+customerName+'Number:'+customerNumber+'email:'+customerMail+'message:'+customerMessage;
        return url
    }

}
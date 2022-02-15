
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
        swal("Thank you!!!", "A volunteer will get in touch soon!!","success");
        var url = 'https://api.whatsapp.com/send?phone=233203441028'+'&text=%20'+'Name:%20'+customerName+'%20Number:%20'+customerNumber+'%20email:%20'+customerMail+'%20message:%20'+customerMessage;        return url
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-number").value = "";
        document.getElementById("customer-mail").value = "";
        document.getElementById("message-text").value = "";
        
        return url
    }

}

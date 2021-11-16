function compute()
{
    p = document.getElementById("principal").value;
    alert
}
        
console.log("Guy dans la place");


addEventListener()
function getDataAndVerifie(){
    let priceInitial = document.getElementById("principal").value;
    let rate = document.getElementById('rate').value
    let years = document.getElementById('years').value

    if (priceInitial == ''){
        alert('The Account field is required')
        priceInitial.focus();
        return false;
    }else if (rate == 0){
        alert('Please increase the progress bar to at least 0.1')
        rate.focus();
        return false;
    }else if(years == '' || years == 0){
        alert('Enter at least one year')
        years.focus();
        return false;
    }

    let gain = priceInitial * rate * years

    if (priceInitial != '' && rate != 0 && years != '' || years != 0){
        console.log("hi");
        var p_ = document.createElement("p");
        var p_1 = document.createElement("p");
        var p_2 = document.createElement("p");
        var p_3 = document.createElement("p");
        var br_ = document.createElement("br");
        var text_p = document.createTextNode("If you deposit" + " " + priceInitial);
        var text_p1 = document.createTextNode("at an interest rate of" + " " + rate);
        var text_p2 = document.createTextNode("you will receive an amount of" + " " + gain);
        var text_p3 = document.createTextNode("in the year" + " " + "202" + years);
        p_.appendChild(text_p);
        p_1.appendChild(text_p1);
        p_2.appendChild(text_p2);
        p_3.appendChild(text_p3);
        document.getElementById("interest").appendChild(p_);
        document.getElementById("interest").appendChild(p_1);
        document.getElementById("interest").appendChild(p_2);
        document.getElementById("interest").appendChild(p_3);
    }else{
        console.log("il y a une erreur");
    }

}
    
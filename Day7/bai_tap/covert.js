function Convert() {
    let from = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let amount = document.getElementById("amount").value;
    let result;
    if (from === "VN" && to === "USD") {
        result = amount / 23000;
        document.getElementById("result").innerHTML =
            "Result: " + " " + result + "$";
    } else if (from === "USD" && to == "VN") {
        result = amount * 23000;
        document.getElementById("result").innerHTML =
            "Result: " + " " + result + "VND";
    } else if (from === "VN" && to === "VN"){
        document.getElementById('result').innerHTML ="Result: " + " " + amount + "VND";
    }else {
        document.getElementById('result').innerHTML ="Result: " + " " + amount + "$";

    }
}
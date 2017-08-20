function ageToDaysLived() {
    var x = document.getElementById("userAge").value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let daysOld = x * 365;
    document.getElementById("days").innerHTML = `You are ${x} years old, and have lived for ${daysOld} days!`;
}

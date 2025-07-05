const input_ip = document.getElementById('input_ip');

function submitButtonClicked() {
    const ip_strng = input_ip.value; // trim entfernt Leerzeichen
    let ip;

    if (ip_strng === "") {
        alert('Enter a valid IP');
        return;
    }

    if (ip_strng === "localhost") {
        alert('localhost detected');
    } else {
        ip = parseInt(ip_strng);
        if (isNaN(ip)) {
            alert('Invalid number');
            return;
        } else {
            alert('Normal number input');
        }
    }

    alert('Parsed ip (number): ' + ip);
    alert('Original input: ' + ip_strng);
}

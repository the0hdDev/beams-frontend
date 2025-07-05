const input_ip = document.getElementById('input_ip');

function submitButtonClicked() {
     const ip_strng = document.getElementById('input_ip').value; // KEINE Klammern
     if (ip_strng != "localhost" && ip_strng != "") {
         const ip = parseInt(ip_strng);
         alert('normal')
     } else if (ip_strng == "") {
        alert('Enter a Valid Ip')
     }
     alert(ip);
     alert(ip_strng);


     if(ip == 'NaN' ) {
        alert('Please Input a Valid Ip Address!')
     } 
}

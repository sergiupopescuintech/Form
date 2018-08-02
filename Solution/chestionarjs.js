function borderchange(id1)
{
  document.getElementById(id1.id).style.border = "1px solid grey";
}
function validatenames()
{
  var n=document.getElementById("lname").value;
  var re=/^[A-Za-z-]+$/;
  return re.test(n);
}
function validatenumber()
{
  var tel=document.getElementById("tel").value;
  var re=/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
  return re.test(tel);
}
function validatemail()
{
  var email=document.getElementById("email").value;
  var re=/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}
function validateimage1()
{
  var image=document.getElementById("poza").value;
  var re=/\.(gif|jpg|jpeg|tiff|png)$/i;
  return re.test(image);

}
function validateimage2()
{
  ok=0;
  var ab = document.getElementById("poza").files[0];
  if (ab.size > 2000000)
  {
     alertStr+="Fotografia depaseste dimensiunile permise(2MB)";
  }
}
function validateForm()
{
    var ok = 1;
    var alertStr="";
    var x = document.forms["myForm"]["lname"].value;
    if (x == ""||validatenames()==false) {
        alertStr+="Nume de familie invalid<br>";
        document.getElementById("lname").style.border = "1px solid red";
        ok = 0;
    }
    var x = document.forms["myForm"]["fname"].value;
    if (x == ""||validatenames()==false) {
        alertStr+="Prenume invalid<br>";
        document.getElementById("fname").style.border = "1px solid red";
        ok = 0;
    }
    var x = document.forms["myForm"]["email"].value;
    if (x == ""||validatemail()==false) {
        alertStr+="E-mail invalid<br>";
        document.getElementById("email").style.border = "1px solid red";
        ok = 0;
    }
    var x = document.forms["myForm"]["tel"].value;
    if (x == ""||validatenumber()==false) {
        alertStr+="Telefon invalid<br>";
        document.getElementById("tel").style.border = "1px solid red";
        ok = 0;
    }
    var x = document.forms["myForm"]["poza"].value;
    if (x == "") {
        alertStr+="Fotografie invalida<br>";
        document.getElementById("poza").style.border = "1px solid red";
        ok = 0;
    }
    else if (validateimage1()==false){
      alertStr+="Fisierul nu este o imagine<br>";
        document.getElementById("poza").style.border = "1px solid red";
        ok=0;
    }
    else{
      validateimage2();

    }



    if(alertStr!="")
          document.getElementById("problems").innerHTML=alertStr;

    if(ok==1)
        {

          document.getElementById("id01").style.display = "none";
          document.getElementById("id02").style.display = "block";
        }
}

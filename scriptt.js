function calcAtt()
     {
        la=parseInt(document.getElementById("LecAtt").value);
        // alert(la);
        tl=parseInt(document.getElementById("TotLec").value);

        result = (la/tl)*100;

        //alert("percentage=" + result+"%");

        document.getElementById("lblresult").innerHTML="Total Percentage="+result+"%";

    }
function calcCGPA()
{
    semo=parseFloat(document.getElementById("sem1").value);
    semt=parseFloat(document.getElementById("sem2").value);
    cgpa=(semo+semt)/2;
    document.getElementById("cgparesult").innerHTML="CGPA="+cgpa;
}
function calcEcc()
{
    ecc=parseInt(document.getElementById("eccps").value);
    left=20-ecc;
    document.getElementById("eccsleft").innerHTML="ECCs left="+left;
}
function resetAll() {
    // Reset attendance section
    document.getElementById("LecAtt").value = "";
    document.getElementById("TotLec").value = "";
    document.getElementById("lblresult").textContent = "Total Percentage";

    // Reset CGPA section
    document.getElementById("sem1").value = "";
    document.getElementById("sem2").value = "";
    document.getElementById("cgparesult").textContent = "CGPA";

    // Reset ECC points section
    document.getElementById("eccps").value = "";
    document.getElementById("eccsleft").textContent = "ECCs left";
}
function myFunction(){
    let x=document.getElementById("string").value;
    x=x.replaceAll(" ","");
    document.getElementById("demo").innerHTML = "Total Letter Count : "+x.length;
}

const d = new Date();
document.getElementById("demo1").innerHTML = d;
var f = false;
function Filter() {
    if(!f)
    {
        document.getElementById('filters').style.display='inline-block';
        f = true;
    }
    else{
        document.getElementById('filters').style.display='none';
        f = false;
    }
}
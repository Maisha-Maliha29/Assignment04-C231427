let display = document.getElementById("display");
function appendtodisplay(value)
{
    display.value += value;
}
function cleardisplay()
{
    display.value = "";
}
function calculateresult()
{
    try 
    {
        if (display.value.trim() === "") 
        {
            return;
        }  
        display.value = eval(display.value);
    } 
    catch (error) 
    {
        display.value = "Error";
    }
}

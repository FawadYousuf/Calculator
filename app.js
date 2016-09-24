var a = prompt ("Enter First Digit:");
var b = prompt ("Enter Operation Code:");
var c = prompt ("Enter Second Digit");

a = parseInt(a)
c = parseInt(c)

if(b==='/')
{
    var ans = a / c;
    document.write(ans);
}
if(b==='*')
{
    var ans = a * c;
    document.write(ans);
}
if(b==='-')
{
    var ans = a - c;
    document.write(ans);
}
if(b==='+')
{
    var ans = a + c;
    document.write(ans);
}

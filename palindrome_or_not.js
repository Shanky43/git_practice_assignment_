let str=madam;
let rev="";
for(i=str.length;i>=0;i++){
rev=str[i];
}
if(str==rev){
console.log(str,"string is a palindrome")
}else{
console.log(str,"string is not a palindrome")
}
// initialize variables
var count = 99;
var word = "bottles";

// loop over all the bottles and display the lyrics
while (count > 1) {
    
    
    document.write(count + " " + word + " of nail polish on the wall<br>");
    document.write(count + " " + word + " of nail polish,<br>");
    document.write("Take one down, pass it around,<br>");
    
    count = count - 1;
    
    if (count > 1) {
       document.write(count + " " + word  + " of nail polish on the wall.<br>");
    }
    
    
    else {
       document.write("1 more bottle of nail polish on the wall.<br>");
       document.write("1 more bottle of nail polish.<br>");
       document.write("Take it down, pass it around,<br>");
       document.write("Get back on your bike and go back to the mall.<br>");
    }
    
    
    
}

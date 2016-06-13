# Coloraiz.css
This framework is ready to use without learning sass/scss, it's compiled in a single .css file with a class for every color shade. In this guide you'll learn how to implement in your projects, so.. let's start coding!

<h2>Available colors:</h2> 
- Blue
- Purple
- Light Red
- Orange
- Green
- Marine
- Azure
- Light Gray
- Gray (includes White & Black)

<h2>Why Colorize?</h2>
What Coloraiz wants to do is semplify the color selection, so we added 13 shades for every colors. Shades are structured with numbers, ranging from 1 to 13 (from lighter to darker) 

Here the list with sample classes: 
So as you can see there is a prefix before every $colorname and next there is the number of the shade.
<h4>Subclasses</h4>
All right, we have seen that you have 13 shades but.. How can i add a background color?
Simple! There are 2 There is the class <code>.cz-bg</code> it turns the color in a background color

<h5>Backgrounds</h5>
To add the background color you only need to add the <code>.cz-bg</code> class next at the
abbr title=".cz-$colorname-$shade">class of the color</abbr>
else if you want to color only the text you need to add only the class color.

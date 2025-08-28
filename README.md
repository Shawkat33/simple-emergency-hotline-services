1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById: Provides a single element based on id, works like an Array

getElementsByClassName: Provides an HTMLCollection(still not clear on what this is vs a nodelist is), inaccessible like an array, but accessible with for...of

querySelector: Provides the first element by matching selectors in DOM sequence i.e. document.querySelector(".what #is this"), works like an Array

querySelectorAll: Provides a nodelist(seriously, no one is being clear about this) of all queried elements if matched in a list, works like an Array

2. How do you **create and insert a new element into the DOM**?

Sprinkle some magic salt on top of the keyboard and chant:

const newEl = document.createElement("div");
newEl.innerHTML = `<tag>You're It!</tag>`;
document.getElementById("noShit").appendChild(newEl);
document.querySelector(".sherlock #holmes").appendChild(newEl);

3. What is **Event Bubbling** and how does it work?

Your clicks/key Presses/Events are the water and nutrient that travels the DOM tree from the root and goes to where it is called for and then goes down the root again, unless you stop it offCourse(get it? of course and Off Course, quite poetic don't you think).

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a methodology by which one can add events to one element, and change other element states elsewhere, i.e. from parent to children, or add cart behaviour or something similar maybe. Without event delegation, attaching event listeners to all elemts, creates memory issues for large web apps, slows down functionalities, needs hardcoded rebinding if targets are missing at load time

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() prevents buttons, key down, touch, stretch or similar events from deploying some default behaviour such as form submission, auto scrolling to webpage sections, video playback start/stop, focusing-defocusing, opening/closing toggling etc.

stopPropagation() prevents a click event to trigger other handlers attached above it's nested elements/parents along the DOM tree.

Using both can help isolating a single event and it's execution, preventDefault() gives us control over default behaviour from executing while stopPropagation() helps to stop triggering parent handlers from triggering that might cause unwanted behaviour and disrupts the modularity of components.

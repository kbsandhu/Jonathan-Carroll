/*JAVASCRIPT FILE FOR BEYOND CLASSROOM PAGE BY KINDERBEER SINGH SANDHU*/
/*********JS FILE FOR THE TEXT SLIDER USING THE BUTTONS *********/
var facts = ['We Have More Than 150 Student Organisations', 'Nearly 300 Students each year participates in faculity-mentored\n\
undergraduate research opportunities across all discipllines', 'About 80% of senior participate in community service or volunteer \n\
work', 'Get Involved in our student run radio station,newspaper and literary publications ', 'Nearly 300 Students each year participate in \n\
faculity-mentored undergraduate research oppportunity across all disciplines '];
var i = facts.length;
//function for next slide
function nextfact() {
    if (i < facts.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    var string = facts[i - 1];
    document.getElementById('arrayFacts').innerHTML = string;
    setInterval(function () {}, 3000);
}
function prevfact()
{
    if (i < facts.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = facts.length;
    }
    var string = facts[i - 1];
    document.getElementById('arrayFacts').innerHTML = string;
}
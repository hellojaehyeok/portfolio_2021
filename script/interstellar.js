

const slider = $("ul.slider");
let is_down = false;
let startX;
let scrollLeft = slider.offset().left;
let scrollLeft_init = slider.offset().left;

console.log(slider.offset().left);
slider.mousedown(slider_down);
slider.mouseleave(slider_leave);
slider.mouseup(slider_up);
slider.mousemove(slider_move);

function slider_down(e){
    is_down = true;
    startX = e.pageX - slider.offset().left;
    scrollLeft = slider.offset().left;
}
function slider_leave(){
    is_down = false;
}
function slider_up(){
    is_down = false;
}
function slider_move(e){
    if(!is_down)return;
    e.preventDefault();
    const x = e.pageX - slider.offset().left;
    const walk = x - startX;
    slider.css("left", scrollLeft + walk + "px");
    if(scrollLeft_init <= slider.offset().left){
        slider.css("left", scrollLeft_init + "px");
    }
}


const next_btn = $("a.next_btn");
const next_arrow = $("span.next_arrow");

next_btn.mouseover(hover_next_btn);
next_btn.mouseout(out_next_btn);
function hover_next_btn(){
    next_arrow.addClass("active_next");
}
function out_next_btn(){
    next_arrow.removeClass("active_next");
}






// Header Btn
function click_header_btn(){
    const header_btn = $("a.header_link");
    const body = $("body");
    header_btn.click(header_btn_click);

    function header_btn_click(e){
        e.preventDefault();
        const el = e.currentTarget;
        body.addClass("is_change");
        setTimeout(()=>{
            location.href = el.getAttribute("href");
        }, 800)
    }
};




// Project Next Btn
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


function init(){
    click_header_btn();
}
init();
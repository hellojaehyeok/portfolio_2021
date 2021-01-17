


const title_list = $("li.title_list");
const title_link = $("li.title_list > a");
const title_txt = $("img.title_txt");
const title_img = $("div.title_img");
const title_tool = $("span.title_tool");
const order_wrap = $("div.order_wrap");
const order_count = $("span.order_txt > span");
let cur_title = 0;
let is_scroll = false;

function btn_up(){
    cur_title--;
    btn_click();
}
function btn_down(){
    cur_title++;
    btn_click();
}
function btn_click(){
    if(cur_title > 3){
        cur_title = 0;
    }
    if(cur_title < 0){
        cur_title = 3;
    }
    title_list.removeClass("active_project");
    title_list.eq(cur_title).addClass("active_project");
    order_count.html(cur_title + 1);
}

title_link.click(active_fullscreen);

function active_fullscreen (e){
    e.preventDefault();
    const el = e.currentTarget;
    title_list.eq(cur_title).addClass("click_project");
    order_wrap.addClass("click_project");
    setTimeout(()=>{
        location.href = el.getAttribute("href");
    }, 1000)
}

$("body").on('mousewheel', scroll_event);
function scroll_event(e){
    if(is_scroll) return;
    let cur_wheel = e.originalEvent.wheelDelta;
    is_scroll = true;
    setTimeout(()=>{
        is_scroll = false;
    }, 800)

    if(cur_wheel > 0){
        cur_title--;
        btn_click();
    }else{
        cur_title++;
        btn_click();
    }
}
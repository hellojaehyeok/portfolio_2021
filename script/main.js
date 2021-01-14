


const title_list = $("li.title_list");
const title_txt = $("img.title_txt");
const title_img = $("div.title_img");
const title_tool = $("span.title_tool");
const order_count = $("span.order_txt > span");
let cur_title = 0;

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
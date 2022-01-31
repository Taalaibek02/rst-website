var promotions = ["LUNCH TIME SPECIAL OFFER - $188 SUSHI SET 12 PIECES",
"DESSERT TIME SPECIAL OFFER - $100 8 DESSERTS",
"BREAKFAST SPECIAL OFFER - $50 SUSHI SET 6 PIECES + 3 DRINKS"]

var vid = document.getElementById("promo_video");

promoting = function(){document.getElementById("promotion_info_txt").innerHTML = promotions[Math.floor(Math.random()*3)];}
function run_promo(){setInterval('promoting()', 3000)}
var video_id = "http://courses.cs.cityu.edu.hk/cs2204/video/barbecue.mp4";
//var x = vid.addEventListener("ended",change_video)
function change_video1(){
    document.getElementById("video_promo").innerHTML = 
                '<video id = "promo_video" controls="controls" autoplay onended="change_video2()">'+
                    '<source src="http://courses.cs.cityu.edu.hk/cs2204/video/chocolate.mp4" type="video/mp4">' + 
                    '<h2>Your browser does not support this video format</h2>' + 
                '</video>';
    // vid.src = "http://courses.cs.cityu.edu.hk/cs2204/video/chocolate.mp4";
    // if (video_id == "http://courses.cs.cityu.edu.hk/cs2204/video/barbecue.mp4"){
    //     video_id = "http://courses.cs.cityu.edu.hk/cs2204/video/chocolate.mp4";
    // }
    // else {
    //     video_id = "http://courses.cs.cityu.edu.hk/cs2204/video/barbecue.mp4";
    // }
}

function change_video2(){
    document.getElementById("video_promo").innerHTML = 
                    '<video id = "promo_video" controls="controls" autoplay onended="change_video1()">'+
                        '<source src="http://courses.cs.cityu.edu.hk/cs2204/video/barbecue.mp4" type="video/mp4">' + 
                        '<h2>Your browser does not support this video format</h2>' + 
                    '</video>';
}


function reserve(date, time, no) {
    if (arguments.length !=3) {
        alert("incorrect arguments detected");
        return;
    }
    if (Math.floor(Math.random()*2) == 0) return false
    else return true;
}

function check_input(){
    let x = document.forms["myForm"]["guest_number"].value;
    let y = document.forms["myForm"]["date"].value;
    let z = document.forms["myForm"]["booking_time"].value;
    if(y==""){
        document.getElementById("error_text").innerHTML = "Data  not  completed,  please  re-enter";
        return false;
    }
    else if(x=="" || is_empty(x)){
        document.getElementById("error_text").innerHTML = "Data  not  completed,  please  re-enter";
        return false;
    }
    else if(z==""){
        document.getElementById("error_text").innerHTML = "Data  not  completed,  please  re-enter";
        return false;
    }
    else{
        reserve(y,z,x);
        if (reserve(y,z,x) == false){
            alert("No table is available for the date and time.")
        }
        else{
            alert("Reservation done. Thank you.")
        }
    }
}

function is_empty(str){
    return !str.trim().length;
}

function check_reset(){
    if(confirm("Are you sure to clear all data?")){
        return true;
    }
    return false;
}

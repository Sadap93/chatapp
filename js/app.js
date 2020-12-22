let membersArray=document.querySelectorAll(".sidebar__members")
  

var currentTime = new Date(); 
var timeStamp = currentTime.getHours() + ":"  //current time//
+ currentTime.getMinutes()



let member1 = {
    name: 'Amy Adams',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_01.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat. </p>' + ' </div>'
}

let member2 ={
    name: 'Marc',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_02.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member3 ={
    name: 'Jacob',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_03.png" alt="amy">',
    message:
    '<div class="clearfix">' 
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member4 = {
    name: 'Chris Simth',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_04.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member5 = {
    name: 'Mia Wong',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_05.png" alt="amy">',
    message: 
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member6= {
    name: 'Jaine',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_06.png" alt="amy">',
    message: 
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>'
    
}




let objectArray=[member1,member2,member3,member4,member5,member6]
let j=0
$(".content__header__amy").append(objectArray[0].name);
$(".content__chat__wrapper").append(objectArray[0].name,objectArray[0].picture,objectArray[0].message);
$(membersArray[0]).css({"border-left": "5px solid #6200EA", "padding-left": "10px"});
function main(){
    
    
 
    
    
    for(let i=0; i<membersArray.length;i++){  
        console.log(i)
    
    $(membersArray[i]).click(function(){
        
        
        $(".content__chat__wrapper").empty();
        $(".content__chat__wrapper").append(objectArray[i].name,objectArray[i].picture,objectArray[i].message);
        j=i
        
        
    });
    
}



let myDiv = $(".content__chat__wrapper");
myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);








$(".sidebar__members").click(function(){
    $(".sidebar__members").addClass("selected")
    $(".sidebar__members").css({"border-left":"0","padding-left": "15px","background":"none"})
    $(this).closest(".selected").css({"border-left": "5px solid #6200EA", "padding-left": "10px","background":"rgba(213, 184, 255, 1)"})
    
    $(".content__header__amy").empty();
    $(".content__header__amy").append(objectArray[j].name);
    
    
});







$(".send-button").click(function () {
    let sendMessage = $("#message").val();
    if(sendMessage==""){}
    else{
        
       
        let typingIndicator="<h6 class="+"typing-indicator"+">"+objectArray[j].name+" is typing...</h6>"
        $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--student">'+timeStamp+'</h6>'
        +'<div class="clearfix message"> <p class="content__chat__message--student short-message layout__item--floated--right">'
        + sendMessage + '</p>' 
        +'<img class="content__chat__image--student"' + 'src="assets/user_avatar_07.png" alt="amy">'+'</div>')
        myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        
        setTimeout(function(){
            $(".content__chat__wrapper").append(typingIndicator)
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        },800);
        
        
        setTimeout(function(){
            $(".typing-indicator").css("display","none")
            $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--amy">'+objectArray[j].name+', '+timeStamp+'</h6>'
            +objectArray[j].picture
            +objectArray[j].message   )
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        },2000);
        
        $("#message").val("");
    }
});
}
main();

$(".button").click(function(){
    
    $(".sidebar__members_wrapper").append('<div class="sidebar__members clearfix">'+
                                                '<div class="sidebar__members__images__wrapper layout__item--floated--left">'+
                                                    '<img class="sidebar__members__images" src="assets/new_user_avatar.png" alt="member">'+
                                                '</div>'+
                                                '<h6 class="sidebar__memebers__names">'+'<input class="input-name" placeholder="Your friends name"></input>'+
                                                '<button class="add-new-name">Add</button></h6>'+
                                                '<p class="sidebar__members__text"></p>'+
                                          '</div>');

    $(".add-new-name").click(function(){
        let newName = $(".input-name").val();
        $(this).closest(".sidebar__memebers__names").append(newName);
        $(".input-name").remove();
        $(".add-new-name").remove();
        
        
        let newmember= {
            name: newName,
            picture: '<img class="content__chat__image--amy" src="assets/new_user_avatar.png" alt="amy">',
            message: 
            '<div class="clearfix">'
            + '<p class="content__chat__message--amy"> Szia '+newName+' vagyok!</p>' + ' </div>'
            
        }
        
        
      
        
        objectArray.push(newmember);
        console.log(objectArray);
    });
    membersArray=document.querySelectorAll(".sidebar__members");
  
    
    if(membersArray.length >= 6){
        main();
    }
    
});





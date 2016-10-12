var room_hallway = {
    "id" : "room_1",
    "description" : "hallway",
    "objects" : {}
}
var room_livingroom = {
    "id" : "room_2",
    "description" : "livingroom",
    "objects" : {}
}
var room_kitchen = {
    "id" : "room_3",
    "description" : "kitchen",
    "objects" : {}
}
var room_badroom = {
    "id" : "room_4",
    "description" : "badroom",
    "objects" : {}
}
var room_bathroom = {
    "id" : "room_5",
    "description" : "bathroom",
    "objects" : {}
}
var room_office = {
    "id" : "room_6",
    "description" : "office",
    "objects" : {}
}


$(document).ready(function(){
    
    function CreateRoom(_room){
        var rooms_box = $(".rooms_box");
        
        var room_item = document.createElement("div");
        room_item.setAttribute("class", "room_item");
        room_item.setAttribute("name", _room.description);
        room_item.setAttribute("id", _room.id);
        
        var room_image = document.createElement("div");
        var room_info = document.createElement("div");
        var room_control = document.createElement("div");
        room_image.setAttribute("class", "room_image");
        room_info.setAttribute("class", "room_info");
        room_control.setAttribute("class", "room_control");
        
        var info_text = document.createElement("div");
        var open_control = document.createElement("div");
        var control_title = document.createElement("div");
        var close_control = document.createElement("div");
        var control_body = document.createElement("div");
        info_text.setAttribute("class", "info_text");
        open_control.setAttribute("class", "open_control");
        close_control.setAttribute("class", "close_control");
        
        rooms_box.append(room_item);
        
        room_item.appendChild(room_image);
        room_item.appendChild(room_info);
        room_item.appendChild(room_control);
        
        room_info.appendChild(info_text);
        room_info.appendChild(open_control);
        room_control.appendChild(control_title);
        room_control.appendChild(close_control);
        room_control.appendChild(control_body);
    }
    
    CreateRoom(room_hallway);
    CreateRoom(room_livingroom);
    CreateRoom(room_kitchen);
    CreateRoom(room_badroom);
    CreateRoom(room_bathroom);
    CreateRoom(room_office);
    
});












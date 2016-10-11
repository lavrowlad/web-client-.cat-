$(document).ready(function(){
    // Добавление фоновых изображений к блокам комнат.
    // После будет использовано в построении DOM одели.
    var images = $(".room_item .room_image");
    for (var i = 0; i < images.length; i++){
        var URL = "url(images/rooms/bg_" + $(images[i]).parent().attr("name") + ".jpg)";
        $(images[i]).css({
            "background-image": URL,
            "background-size": "cover"
        });
        console.log($(images[i]).parent().attr("name") + ": " + URL);
    }
    
    // Состояния панелей управления комнатами
    //  open - паналь открыта
    //  close - панель скрыта
    var rooms_control_status = {
        "kitchen": "close",
        "bathroom": "close",
        "badroom": "close",
        "livingroom": "close",
        "office": "close",
        "corridor": "close"
    };
    
    // Метод переключения состояния отображения панели 
    // управления комнатами
    // @param _room - название комнаты, статус панели управления
    //                которой стоит переключить
    // @param new_status - новок состояние отображения панели
    // @param cur_status - текущее состояние отображения панели.
    function toggle_control (_room){
        var new_status;
        var cur_status = rooms_control_status[_room];
        var panel = $($(".room_item[name='" + _room + "']").children()[2]);
        
        if (cur_status == "close")
            new_status = "open";
        else if (cur_status == "open")
            new_status = "close";
        rooms_control_status[_room] = new_status;
        panel.removeClass(cur_status);
        panel.addClass(new_status);
    }
    
    // Слушатели событий.
    // Открытие панели управления комнотой.
    $(".open_control").on("click", function(){
        var room_name = $($(this).parent()).parent().attr("name");
        toggle_control(room_name);
        
        console.log(room_name + " is " + rooms_control_status[room_name]);
    });
    // Закрытие панели управления комнотой.
    $(".close_control").on("click", function(){
        var room_name = $($(this).parent()).parent().attr("name");
        toggle_control(room_name);
        
        console.log(room_name + " is " + rooms_control_status[room_name]);
    });
    
});
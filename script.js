
$(document).ready(function () {
    
    $("#btn").click(function(){
        $.getJSON("list.json", function (data) {
            var lists = '';

    // ITERATING THROUGH OBJECTS
            $.each(data, function (key,value) {

        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
                    lists += '<tr>';
                    lists += '<td>' + 
                    value.SlNo + '</td>';

                    lists += '<td>' + 
                    value.Name + '</td>';

                    lists += '<td>' + 
                    value. Quantity + '</td>';

                    lists += '<td>' + 
                    value.Unit + '</td>';

                    lists += '<td>' + 
                    value.Department + '</td>';

                    lists += '<td>' + 
                    value. Notes  + '</td>';

                    lists += '</tr>';
                });
      
    //INSERTING ROWS INTO TABLE 
            $('#table').append(lists);
            var tdata= document.getElementsByTagName("tr");
            tdata[0].style.color="yellow";
        });
    document.getElementById("btn").disabled=true;
    }); 
});
      
   
   
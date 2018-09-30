
var category;
$('#categories').on('change', function () {
        category = $("option:selected", this).val();
        console.log(category);
        // $('#result-button').attr('href', '/result/' + price + '/' + category);
    })

$(document).on('click', '#result-button', function(){
    price = window.location.href.split('result/')[1];
    console.log(price);
    $('#result-button').attr('href', '/result/' + price + '/' + category);
})
$(document).on('click','#create-button', function(){
    $('#create-button').attr('href', '/date-form')
});
// $(document).on('click', '#submit-input', function(){
//     $('#submit-input').attr('href', '/');
// })
     //
    // var category = window.location.href.split('/$/')[1]; 
    // // category = $('#categories').val(); 
    
    // $.ajax({
    //     url: '/result/' + price + '/' + category,
    //     method: 'GET'
    // }).then(function(data){
    //     var ob;
    //     for (var i=0; i<data.length; i++){
    //         ob = data[i];
    //         p = $('<p>');
    //         p.text(ob.activity);
    //         console.log(ob.activiy)
    //     }
    //     $('body').append(p);
    //     //put the results of their category here
    //     //add the go back to the home page here as well

    // })
//activity, category, desciption

//this is important
// var category = window.location.href.split('/$/')[1];

// $.ajax({
//     url: '/questions/' + category,
//     method: 'GET'
// }).then(function(data){

//     $('input').val(data.question);

//     $('form').attr('action', '/update/' + id + '?_method=PUT');

//     console.log(data);
// });

//FOR REFERENCE ONLY
// $.ajax({
// 	url: '/results',
// 	method: 'GET'
// }).then(function(data){
//     var p, ob;
//     for(var i=0; i<data.length; i++){
//         ob = data[i];  
//         p = $('<p>');
//         p.text(ob.activty)
        
//         $('body').append(p);
//     }
// });
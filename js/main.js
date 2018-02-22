let erreurCritique = function() {
    alert('Paul Chalas est tellement fort qu\'il a fait bugger ta page');
};
(function(){
    "use strict";
    $(document).ready(function(){
        $.ajax({
            'url':'/json/est_connecte.php'
        })
            .done(function(data){
                if (!data.estConnecte){
                    $('#formConnexion').show();
                }else{
                    $('#formDeconnexion').show();
                }
            })
            .fail(erreurCritique);
        
        $('#formConnexion').submit(function() {
            let theForm = $(this)
             $.ajax({
                 type: theForm.attr('method'),
                 url: theForm.attr('action'),
                 data: theForm.serialize()
             }).done(function(callback){
                 if (callback.success){
                     location.reload();
                 } else {
                     // Mauvais logins
                 }
                 
             }).fail(erreurCritique);
            
            
             return false;
        })
        
        $('#formDeconnexion').submit(function() {
            let theForm = $(this)
             $.ajax({
                 type: theForm.attr('method'),
                 url: theForm.attr('action'),
                 data: theForm.serialize()
             }).done(function(callback){
                 if (callback.success){
                     location.reload();
                 } else {
                    // Erreur
                 }
                 
             }).fail(erreurCritique);           
            
             return false;
        })
    })
})();
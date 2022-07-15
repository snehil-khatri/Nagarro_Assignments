$(document).ready(function()
{
    var check=false;
    $('.clicks').on('click',function(){
        if(check==false)
        {
            check=true;
            $('#box').addClass('show');
        }
        else{
            check=false;
            $('#box').removeClass('show');
        }
        
    })
    $('.submission').on('click',function(){
        $('#box').removeClass('show');
        check=false;
    });
    $('.close').on('click',function(){
        $('#box').removeClass('show');
        check=false;
    });
});


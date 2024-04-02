(function($) {


    
    // 비밀번호 보이기,숨기기 기능 구현
    $(document).ready(function(){

        // 비밀번호 부분이 클릭됐을 때
        $('#eye').on('click',function(){

            $('#password').toggleClass('active');

            if($('#password').hasClass('active')){

                $(this).attr('class',"fa fa-eye-slash fa-lg")
                .prev('#password').attr('type',"text");

            }else{

                $(this).attr('class',"fa fa-eye fa-lg")
                .prev('#password').attr('type','password');

            }
        });
    });


})(jQuery);
// $(function(){ //제이쿼리 선언문 =>$사인이 제이퀴러 라이브러리와 충돌성 있음.
//     console.log($);
// });


// (function($){ //내부변수
//     console.log($);
// })(jQuery); //즉시실행함수 IIFE->실행되는지 확인


(function($){ //내부변수

    //객체 생성: 변수의 중복성을 피한다.
    const wedding ={
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        }, 
        header(){
            //로딩시 바로가기 메뉴의 포지션 탑값을 가져오기
            
            //console.log($('#section6').offset().top );
            //console.log($('#section6').offset().left );->슬라이드 사용할때
    
            //메인 버튼(네비게이션)스무스 스크롤링 이벤트
            $('.main-btn').on({
                click(){
                    //attribute 속성 property
                    console.log($(this).attr('href'));
                    let pos= $(this).attr('href');
                   
                    $('html,body').animate({ scrollTop: $(pos).offset().top }, 500);
                }
            });






            //모바일버트이벤트
            //모바일 햄버거메뉴 클릭 이벤트
            //클릭하면
            //이 버튼 안의 자식요소에서 line이라는 클래스를 찾아서 find('.line')
            //on 클래스 추가(addClass('on'))
             $('.mobile-btn').on({
             click(e){
                e.preventDefault();
                  $(this).find('.line').toggleClass('on');
                 //$(this).find('.line').addClass('on');
                 //$(this).find('.line').removeClass('on');
                 //$(this).children('.line').toggleClass('on');
                 //$(this).parent('.line').toggleClass('on');
               }
             });

            // '7' == 7 true 등호 2개는 같다고 출력
            // '7' === 7 false 등호 3개는 다르다고 출력


            //토글 구현 :스위칭 교환
            //let t = false;


            // $('.mobile-btn').on({
            //     click(){
            //         if(t===false){ //t가 false이면 true로 변환
            //             t=true;
            //             $(this).find('.line').addClass('on');
            //         }
            //         else{ //t가 true이면 false로 변환
            //             t=false;
            //             $(this).find('.line').removeClass('on');
            //         }
            //     }
            // });
        },
        section1(){
            //메인슬라이드 웹개발
            //우측에서 좌측으로 0.6초간 이동하고 
            //3초간 대기(보여줌)한다.

            //자동타이머를 이용 슬라이드 구현

            //let cnt= 3; 일때 리턴0으로
            let cnt= 0;//전역변수->전달되는 변수
            //1.메인슬라이드함수()
            function mainSlide(){//애니메이션 버블링 발생
                $('.slide-wrap').stop().animate({left:`${-100 * cnt}%`}, 1000,'easeInOutExpo', function(){
                    if(cnt===3 ) {cnt=0}; //마지막(처음)에서 리턴 처음으로 
                    $('.slide-wrap').stop().animate({left:`${-100 * cnt}%`},0 );//리턴할때 타임 0 ->이동시간 없은 순간이동
                });
            }

            //2.다음카운트함수()
            function nextCount(){
                cnt++;//1 2 3 4 5 6 7 ...
                mainSlide();//메인슬라이드함수 호출
                // ->$('.slide-wrap').animate({left: `${-100*cnt}%`}, 1000); 얘가 실행
            }
            
            
            //3.자동타이머함수()
            // setInterval(function(){
            //     nextCount();
            // },3000);
            
            function autoTimer(){
                setInterval(function(){
                    nextCount();
                },3000);//3초간격으로 무한하게 반복 수행
            }
            autoTimer(); //로딩시 1회 실행
        },
        section2(){
        
        },
        section3(){
        
        }
    
 
    }


        wedding.init();

})(jQuery); //즉시실행함수 IIFE


// (function(){
    // alert('즉시실행함수');
// })();

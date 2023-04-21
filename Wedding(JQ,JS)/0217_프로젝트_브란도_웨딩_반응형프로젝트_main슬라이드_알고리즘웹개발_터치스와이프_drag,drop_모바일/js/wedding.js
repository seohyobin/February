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
            let cnt=0;
            let setId=0;//메모리에 할당된 인덱스 번호를 저장한다.
            //1.메인슬라이드
            
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 1000,'easeInOutCirc',function(){
                    if(cnt===3) cnt=0;//처음이면 처음으로
                    if(cnt<0) cnt=2; //첫번째 왼쪽으로 이동하면 마지막슬라이드로 이동
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);//처음으로 리턴
                });

            }

            //2-1.다음카운트함수

            function nextCount(){
                cnt++;
                mainSlide();
            }
            //2-2.이전카운트함수       
            function prevCount(){
                cnt--;
                mainSlide();
            }


        
            //3.자동타이머함수

            function autoTimer(){
                //nextCount()//즉시실행
                setId=setInterval(nextCount, 3000);//다음카운트함수 3초간격으로 호출하기
                console.log(setId);//메모리에 할당된 인덱스 번호 보기setId
                //할당번호가 있음->setInterval
            }

            autoTimer();//로딩시 실행

            //4.타이머 일시정지
            //좌우화살버튼
            //이벤트는 대문자 없음
            //슬라이드 컨테이너 slide-container 박스에 마우스 올리면 (마우스오버mouseover === mouseenter->얘 써)
            //슬라이드 컨테이너 slide-container 박스에 마우스 떠나면 (마우스아웃mouseout === mouseleave) 
            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);

                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    //애니메이션 슬라이드 wrap박스 애니메이션 진행중이 아니면 다음 슬라이드 호출
                    if(!$('.slide-wrap').is(':animated')){
                    nextCount(); //다음슬라이드
                    }
                }
            });
            $('.arrow-prev-btn').on({
                mouseenter(){
                    clearInterval(setId);

                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                     //애니메이션 슬라이드 wrap박스 애니메이션 진행중이 아니면 다음 슬라이드 호출
                     if(!$('.slide-wrap').is(':animated')){
                    prevCount();//이전슬라이드
                     }
                }

            });
            //5.터치스와이프
            //6.drag & drop
            //터치는 section1 
            //마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
            //마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
            let touchStart=0;
            let touchEnd=0;
            let mouseDown=false;//off상태 마우스 down 하면 true아니면 false
            let dragStart = 0;//왼쪽좌표
            let dragEnd = 0;//오른쪽좌표
            let winWidth=$(window).innerWidth();
            //데스크탑
            $('#section1').on({
                mousedown(e){
                    winWidth=$(window).innerWidth();
                    clearInterval(setId);
                    // console.log('마우스다운');
                    // console.log(event);
                    // console.log(event.clientX);
                    mouseDown=true;//마우스 다운 알림
                    touchStart=e.clientX;
                    dragStart=e.clientX - $('.slide-wrap').offset().left-winWidth;//-100% 빼준다=>마진으로 잡은것
                },
                mouseup(e){
                    // console.log('마우스업');
                    // console.log(event);
                    // console.log(event.clientX);
                    touchEnd=e.clientX;
                    //console.log(touchStart-touchEnd); //터치시작좌표-터치끝좌표
                    if(touchStart-touchEnd>0){     
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount(); //다음슬라이드
                            }

                    }
                    if(touchStart-touchEnd<0){      
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();//이전슬라이드
                             }
                    }
                    mouseDown=false;//마우스 다운 끝 드래그 끝났음!!->up끝
                },
                //마우스 drag  & drop
                mousemove(e){//마우스 방향에 따라다닌다.//마우스 클릭하고 난 후 따라다니게 변수지정 =>mousedown

                    if(mouseDown===false) return;//마우스 다운상태가 아니면 나가~ ->밑에는 다 실행 안함
                    //if(mouseDown!===true) return;//마우스 다운상태가 아니면 나가~ ->밑에는 다 실행 안함
                    //마우스가 다운이 되면 그때부터 따라다녀
                    //마우스 다운할때 변수에 다운상태를 저장한다.
                    //만약 마우스다운 상태가 아니면 마우스 무브는 취소해라

                    //console.log(e.clientX);
                   // console.log($('.slide-wrap').offset().left);

                    dragEnd=e.clientX;
                
                    $('.slide-wrap').css({left:dragEnd-dragStart});


                }
            });


            //모바일->손가락으로 터치
            //반응형
            //데스크탑 복사해서 event,clientX 값 변경
            $('#section1').on({
                touchstart(e){//mousedown
                    winWidth=$(window).innerWidth();
                    clearInterval(setId);
                    // console.log('마우스다운');
                    // console.log(event);
                    // console.log(event.clientX);
                    mouseDown=true;//마우스 다운 알림
                    console.log(e); 
                    touchStart=e.originalEvent.changedTouches[0].clientX;
                    dragStart=e.originalEvent.changedTouches[0].clientX; - $('.slide-wrap').offset().left-winWidth;//-100% 빼준다=>마진으로 잡은것
                    console.log('손가락터치시작',e.originalEvent.changedTouches[0].clientX);
                    //f12개발자모드에서 event확인하고->originalEvent,changedTouches가지고옴[배열이라서 이거 사용] 
                },
                touchend(e){//mouseup
                    // console.log('마우스업');
                    // console.log(event);
                    // console.log(event.clientX);
                    touchEnd=e.originalEvent.changedTouches[0].clientX;
                    //console.log(touchStart-touchEnd); //터치시작좌표-터치끝좌표
                    if(touchStart-touchEnd>0){     
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount(); //다음슬라이드
                            }

                    }
                    if(touchStart-touchEnd<0){      
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();//이전슬라이드
                             }
                    }
                    mouseDown=false;//마우스 다운 끝 드래그 끝났음!!->up끝
                    console.log('손가락터치끝');
                },
                //마우스 drag  & drop
                touchmove(e){//mousemove//마우스 방향에 따라다닌다.//마우스 클릭하고 난 후 따라다니게 변수지정 =>mousedown

                    if(mouseDown===false) return;//마우스 다운상태가 아니면 나가~ ->밑에는 다 실행 안함
                    //if(mouseDown!===true) return;//마우스 다운상태가 아니면 나가~ ->밑에는 다 실행 안함
                    //마우스가 다운이 되면 그때부터 따라다녀
                    //마우스 다운할때 변수에 다운상태를 저장한다.
                    //만약 마우스다운 상태가 아니면 마우스 무브는 취소해라

                    //console.log(e.clientX);
                   // console.log($('.slide-wrap').offset().left);

                    dragEnd=e.originalEvent.changedTouches[0].clientX;
                
                    $('.slide-wrap').css({left:dragEnd-dragStart});


                }
            });
            
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

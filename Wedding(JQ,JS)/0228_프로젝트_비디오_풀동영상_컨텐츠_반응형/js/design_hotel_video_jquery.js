(($, window, document, undefined)=>{

    //객체는 첫글자 소문자 중간글자만 대분자!! =>카멜케이스 기법 

    // const designHotelArray = new Array[]; //생성자 방식 배열도 가능
    // designHotelArray = [a,b,c,d,e]

    // const designHotelObject = new Object(); //생성자 방식
    // designHotelObject = {}

    const designHotelObject={ //리터럴 방식
        init(){
            this.mainMethod();

        },
        mainMethod(){
            //console.log('designHotelObject mainMethod 메소드 실행');
        }
    }
    designHotelObject.init(); //객체이름.init();

    //클래스는 첫글자 대문자!!! 중간단어도 대문자!!! 콤마없음=>파스칼케이스 기법

    class DesignHotelClass { //클래스 선언
        init(){
            this.mainMethod();
        }
        mainMethod(){
            //console.log('class DesignHotelClass mainMethod 메소드 실행');
            //창너비
            //창높이
            //비디오너비
            //비디오높이
            //마진 left
            //마진 top
       
            let winW = $(window).innerWidth();
            let winH = $(window).innerHeight();
            let vidW = $('#videoHotel video').innerWidth();
            let vidH = $('#videoHotel video').innerHeight();
            let marT = (winH-vidH)/2;
            let marL = (winW-vidW)/2;
            let setId = 0;
            //로딩시 실행
            setId= setInterval(resizeVideo,100); //로딩시강제실행

            //반응형함수
            function resizeVideo(){
                const $video = $('#videoHotel video');
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                vidW = $('#videoHotel video').innerWidth();
                vidH = $('#videoHotel video').innerHeight();
                marT = (winH-vidH)/2;
                marL = (winW-vidW)/2;
                console.log(`marL ${marL}`)
                console.log(`marT ${marT}`)

                console.log(`winH ${winH}`)
                console.log(`winW ${winW}`)

                console.log(`vidW ${vidW}`)
                console.log(`vidH ${vidH}`)

                //창너비가 비디오 너비보다 크면 
                //비디오 너비를 창너비로하고
                //비디오 높이는 자동 auto
                if(winW > vidW){
                    $video.css({width: winW, height:'auto'})
                }
               if(winH > vidH){
                    $video.css({width: 'auto', height:winH})
                }
                $video.css({maginTop:marT, marginLeft:marL})
                
            
            }

            //반응형

            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();

            });

          
        }
    }
;

     //클래스도 함수이다.
     //클래스는 반드시 생성자()를 생성하여 그리고 호출 실행한다.
     const newDesignHotelClass = new DesignHotelClass();
     newDesignHotelClass.init();//생성자를 생성하여 매소드 호출실행

})(jQuery, window, document);

;
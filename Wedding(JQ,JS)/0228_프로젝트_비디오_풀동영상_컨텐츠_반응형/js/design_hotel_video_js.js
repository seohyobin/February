((window, document, undefined)=>{


    class DesignHotelClass { //클래스 선언
        init(){
            this.mainMethod();
        }
        mainMethod(){
            const $video = document.querySelector('#videoHotel video');
            let winW = window.innerWidth;
            let winH = window.innerHeight;
            let vidW = $video.clientWidth;
            let vidH = $video.clientHeight;
            let marT = (winH-vidH)/2;
            let marL = (winW-vidW)/2;
            let setId = 0;

            //로딩시 실행
            setId= setInterval(resizeVideo,100); 

            //반응형함수
            function resizeVideo(){
                const $video = $('#videoHotel video');
                winW = window.innerWidth;
                winH = window.innerHeight;
                vidW = $video.clientWidth;
                vidH = $video.clientHeight;
                marT = (winH-vidH)/2;
                marL = (winW-vidW)/2;
                // console.log(`marL ${marL}`)
                // console.log(`marT ${marT}`)

                // console.log(`winH ${winH}`)
                // console.log(`winW ${winW}`)

                // console.log(`vidW ${vidW}`)
                // console.log(`vidH ${vidH}`)

                //창너비가 비디오 너비보다 크면 
                //비디오 너비를 창너비로하고
                //비디오 높이는 자동 auto
                if(winW > vidW){
                    $video.style.width = `${winW}px`;
                    $video.style.height = 'auto';
                }
               if(winH > vidH){
                    // $video.css({width: 'auto', height:winH})
                    $video.style.width = 'auto';
                    $video.style.height = `${winW}px`;
                }
                // $video.css({maginTop:marT, marginLeft:marL})
                 $video.style.marginTop = `${marT}px`;
                 $video.style.marginLeft = `${marL}px`;
            
            }

            //반응형

            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();

            });

          
        }
    }
;


     const newDesignHotelClass = new DesignHotelClass();
     newDesignHotelClass.init();

})( window, document);

;
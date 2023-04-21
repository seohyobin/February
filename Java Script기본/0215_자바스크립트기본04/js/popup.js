
popup(); //함수 부르는거 
function popup(){ 

    const windowName = 'popup_20230215';
    const windowName2 = 'popup_20230216';
    const popupWidth = 570;
    const popupHeight = 560;
    const popupLeft = 0;
    const popupTop = 0;
    const popupLeft2 = 200;
    const popupTop2 = 200;

    window.open('./popup.html',windowName,`width=${popupWidth}, height=${popupHeight}, left=${popupLeft}, top=${popupTop}`);
    window.open('./popup2.html',windowName2,`width=${popupWidth}, height=${popupHeight}, left=${popupLeft2}, top=${popupTop2}`);
};


//즉시실행 함수 사용->함수(popup();)안써도 됨
(function popup(){ //함수 안에서 사용되는 변수 ->지역(local)변수
    //window.open('popup.html','창이름','너비=500, 높이=600, X축좌표=0, Y축좌표=0');

    const windowName = 'popup_20230215';
    const windowName2 = 'popup_20230216';
    const popupWidth = 570; //변수에 값을 대입하면서 선언시는 콘스트 지정 가능!!!!!
    const popupHeight = 560;
    const popupLeft = 0;
    const popupTop = 0;
    const popupLeft2 = 200;
    const popupTop2 = 200;

    window.open('./popup.html',windowName,`width=${popupWidth}, height=${popupHeight}, left=${popupLeft}, top=${popupTop}`);
    window.open('./popup2.html',windowName2,`width=${popupWidth}, height=${popupHeight}, left=${popupLeft2}, top=${popupTop2}`);
})();
//즉시 실행함수 곧바로 호출




const goalDate = new Date("2025-01-24")
function calcDate(){
    const now = new Date().getTime();
        const distance = goalDate - now;

        var days = Math.floor(distance / (1000*60*60*24));
        var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        var seconds = Math.floor((distance % (1000*60)) / 1000);

        if (distance <= 0) {
            return '(축******전역******하)';
        } else {
            return `총 549일 중 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 더 뺑이치시면 끝`;
        }
    }
    
    document.getElementById("count").style.font = "italic 30px serif";

    setInterval(() => {
        document.getElementById("count").innerText = calcDate();
    }, 1000);



    $(document).ready(function(){
        let cn = 0;
  
        let rolling;
       
        function autoSlide(){
          rolling = setInterval(function(){
            cn++
  
            if(cn == 12){
            cn = 0
          }
  
            $(".slide_wrapper").animate({left:(-100*cn)+"%"})
          }, 2500)
  
        }
  
        autoSlide()

        $(".box1").click(function () {
            $(this).siblings("div").hide()
          $(".target1").show(2000, function(){})
            })

        $(".box2").click(function () {
                $(this).siblings("div").hide()
              $(".target2").show(2000, function(){})
            })

        $(".box3").click(function () {
                $(this).siblings("div").hide()
              $(".target3").show(2000, function(){})
            })
        $(".box4").click(function () {
                $(this).siblings("div").hide()
              $(".target4").show(2000, function(){})
            })
})


         
           
            
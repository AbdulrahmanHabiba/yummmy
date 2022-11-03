
export function slider() {
    $("ul li").click(() => {
        console.log("fxcbvsfbv")
        $(".fixed-slide").css({ left: "0px" });
        $(".slider-menu").css({ width: "0px", opacity: "0" });
        if ($(".fixed-slide").css("left") === "250px") {
            $(".fa-align-justify").removeClass("fa-times")
        }
        else if ($(".fixed-slide").css("left") !== "250") {
            $(".fa-align-justify").addClass("fa-times")
        }
    })
   
    
    //$("ul li").click(() => 
    $(".x-ico").click(() => {
        if ($(".fixed-slide").css("left") === "250px") {
            $(".fixed-slide").css({ left: "0px" });
            $(".fa-align-justify").removeClass("fa-times")
            $(".slider-menu").css({ width: "0px", opacity: "1" });
            $("ul .li_1").animate({
                opacity: "0",
                paddingBottom: "0px",
            });
            $("ul .li_2").animate({
                opacity: "0",
                paddingBottom: "0px",
            });
            $("ul .li_3").animate({
                opacity: "0",
                paddingBottom: "0px",
            });
            $("ul .li_4").animate({
                opacity: "0",
                paddingBottom: "0px",
            });
            $("ul .li_5").animate({
                opacity: "0",
                paddingBottom: "0px",
            });
            $(".copyright").animate({
                opacity: "0",
                marginLeft: "-200px",
            });


        } else if ($(".fixed-slide").css("left") !== "250") {
            $(".slider-menu").css({ width: "250px", opacity: "1" });
            $(".fixed-slide").css({ left: "250px" });
            $(".fa-align-justify").addClass("fa-times")
            $("ul .li_1").animate(
                {
                    opacity: "1",
                    paddingBottom: "25px",
                },
                1000
            );
            $("ul .li_2").animate(
                {
                    opacity: "1",
                    paddingBottom: "25px",
                },
                1100
            );
            $("ul .li_3").animate(
                {
                    opacity: "1",
                    paddingBottom: "25px",
                },
                1200
            );
            $("ul .li_4").animate(
                {
                    opacity: "1",
                    paddingBottom: "25px",
                },
                1300
            );

            $("ul .li_5").animate(
                {
                    opacity: "1",
                    paddingBottom: "25px",
                },
                1400
            );
            $(".copyright").animate({
                opacity: "1",
                marginLeft: "0px",
            });

        }
    });
}
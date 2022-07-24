$(document).ready(function(){

    // Start Bact to Top 
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if (getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);

        }
    })
    // End Back to Top 
    // Start Header 
    // Start nav

    // for burger
        $(".navbuttons").click(function(){
        $(".navbuttons").toggleClass("crossxs")
    });

    // for navbar 

    $(window).scroll(function(){
        let getscrolltop = $(window).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 200){
            $(".navbar").addClass("navmenus")
        
        }else{
            $(".navbar").removeClass("navmenus")

        }
    })
  
    // End nav
    // End Header 

    // Start Properties
    // for active items 
    $(".propertylists").click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");
        // $(this).siblings().removeClass("activeitems");

        // for data filter 
    let getattvalue = $(this).attr("data-filter");
    console.log(getattvalue);

    if(getattvalue === "all"){
        $(".filters").show("slide",500);     
    }else{
        $(".filters").hide();
        $(".filters").not("."+ getattvalue).hide("slide",500);
        $(".filters").filter("."+ getattvalue).show("slide",500);
    }   

    });
    //for image overlay or lightbox2
    lightbox.option({
      showImageNumberLabel:false
    })

 
    // End Properties

    // Start Adv 

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    })
    // End Adv 

    // Start Footer 

    const getfullyear = new Date().getUTCFullYear()
    $("#getyear").text(getfullyear);

    // End Footer 





});
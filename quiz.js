var userScore =100;
var counter = 0;
var weightlbs=0;
var genderValue = "male";

function toggle_visibility(id) {
  // var someVar = $('#'+id);
 // someVar.hide();
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
      if(id=="page5"){
        $('#userScore').html(userScore);
        $('#userScore1').html(userScore);
        $('#userScore2').html(userScore);
        $('#userScore3').html(userScore);

      }
    return false;
}

function showMe (box) {
        
        var chboxs = document.getElementsByName("c1");
        var vis = "none";
        for(var i=0;i<chboxs.length;i++) { 
            if(chboxs[i].checked){
             vis = "block";
                break;
            }
            else{
              vis = "none";
            }
        }
        document.getElementById(box).style.display = vis;
    
    
    }


//<------------- Page 1 Personal Info ----------------------->

$(document).ready(function () {
    
var select=function(dateStr) {

      var d1 = $('#date1').datepicker('getDate');
      var d2 = $('#date2').datepicker('getDate');

      var diff = 0;
      if (d1 && d2) {
            diff = Math.floor((d2.getTime() - d1.getTime()) / 86400000); // ms per day
      }

      var weightlbs = $("#lbsweight").val();

      var UserWeightValue = $("#UWT").val();
      var weightType ="lbs";

      $('#w_in_lbs').html(weightlbs);

      var weeks = (diff/7);
      var perWeek = 0;


      perWeek = weightlbs/weeks;
      var formattedD2= moment(d2).format("dddd, MMMM Do YYYY");


      if(UserWeightValue == "lbs"){

        weightType = " lbs";

        if(perWeek<=3){
        userScore -=0;
        }
        else if(perWeek>3 && perWeek<3.5){
          userScore-=4;
        }      
        else if(perWeek>3.5 && perWeek<4){
          userScore-=5;
        }
        else if(perWeek>4.1 && perWeek<4.5){
          userScore-=6;
        }
        else{
          userScore -=7;
        }

        if(perWeek < 3){
        $("#userWeight").html("<p> Losing "+ weightlbs + weightType +" lbs by "+ formattedD2 +" is a realistic goal. Nice job! You got a perfect score on this question. </p>");
      }
      else{
        $("#userWeight").html("<p> I love that you’re super aggressive with your goals! This kind of passion will help keep you on track. Please consider though that for you to keep the weight off,"+
          "your timeline of "+weightlbs + weightType +" by " + formattedD2 +" will likely result in you being frustrated and discouraged if you don’t reach this really ambitious goal. "+
          "Losing weight that fast will also result in a much greater likelihood that you’ll gain it all back. </p>");
      }

      }
      else if(UserWeightValue == "kgs"){

        weightType = " kgs";

        if(perWeek<=1.36){
          userScore -=0;
        }
        else if(perWeek>1.36 && perWeek<1.6){
          userScore-=4;
        }      
        else if(perWeek>1.6 && perWeek<1.8){
          userScore-=5;
        }
        else if(perWeek>1.81 && perWeek<2){
          userScore-=6;
        }
        else{
          userScore -=7;
        }

        if(perWeek < 1.36){
        $("#userWeight").html("<p> Losing "+ weightlbs + weightType +" lbs by "+ formattedD2 +" is a realistic goal. Nice job! You got a perfect score on this question. </p>");
      }
      else{
        $("#userWeight").html("<p> I love that you’re super aggressive with your goals! This kind of passion will help keep you on track. Please consider though that for you to keep the weight off,"+
          "your timeline of "+weightlbs + weightType +" by " + formattedD2 +" will likely result in you being frustrated and discouraged if you don’t reach this really ambitious goal. "+
          "Losing weight that fast will also result in a much greater likelihood that you’ll gain it all back. </p>");
      }
       
      }
                 
      
    
}

$("#date1").datepicker({ 
    minDate: -20, 
    maxDate: "+100M + 31D",
    onSelect: select
    
});
$('#date2').datepicker({onSelect: select});
});



$(document).ready(function() {

      $('#button1').click(function(){

        YourGender();
        YourAge();
        YourChildren();
        YourRelationship();
      });


      $('#button2').click(function(){

        whylose();
        whyQuit();
        whatTried();

      });


      $('#button3').click(function(){

        OpenToChange();
        areYouCoachable();
        counterScore();
        doYouSplurge();
        beliveInYourself();
        YourName();



      });
});


  function YourName() {

    nameValue = $('#first_name').val();
    nameValue = nameValue.slice(0,1).toUpperCase() + nameValue.slice(1);

    if(nameValue != ""){
      $("#name").html("" + nameValue + ",");

    }

    //$("#selectedGender").html("<p><b> You are a " + genderValue + ".</b></p>");
  };

  function YourGender() {

    genderValue = $('input[name="gender"]:checked').val();

    $("#userGender").html(genderValue);
  };


  function YourAge() {

    var ageValue = $('#age').val();
      

    $("#selectedAge").html("<p><b> You are a " + ageValue + ".</b></p>");

    if(ageValue == 18){

      if($('input[name="gender"]:checked').val()=="men"){
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br> Good news! You’re in the perfect age range for getting rapid results and you’ll have a "+
          " much easier time keeping your body lean, muscular, and fit. Your testosterone is working"+
          " with you now – take advantage of that! For example, at 29, Eric lost 29 lbs of fat, gained muscle, and got ripped, six-pack abs! </td>"+"<td><img height='200px' width='250px' src='Images/eric.png' /></td></tr></table>");
      }
      else{
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Good news! You’re in the perfect age range for getting rapid results and you’ll have a "+
          "much easier time keeping your body lean, fit, and sexy. Your hormones are working with you now – take advantage of that! For example, at 28,"+
          "Katie lost 23 inches, 11 inches of them from her waist alone – and it has totally changed her life!</td>"+"<td><img height='220px' width='250px' src='Images/katie.png' /></td></tr></table>");
      }
    }
    else if(ageValue == 30){

      if($('input[name="gender"]:checked').val()=="men"){
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Great news! You’re in a good age range for getting rapid results and you’ll have a  "+
          "much easier time keeping your body lean, fit, and muscular. Your testosterone is still"+
          " working with you now, so this is a great time to take advantage of that! For example, at 39, Randy lost 35 lbs and got ripped, six-pack abs!</td>"+"<td><img height='200px' width='250px' src='Images/randy.png' /></td></tr></table>");
      }
      else{
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Great news! You’re in a good age range for getting rapid results and you’ll have a"+
          " much easier time keeping your body lean, fit, and sexy. Your hormones are still working"+
          " with you now, so this is a great time to take advantage of that. For example, at 39, Shannon lost 28 lbs and looks amazing!</td>"+"<td><img height='200' width='250px' src='Images/shannon.png' /></td></tr></table>");
      }

    }
    else if(ageValue == 40){

      if($('input[name="gender"]:checked').val()=="men"){
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Surprisingly, most of our male success stories are in the 40-49 age range. Although you "+
          "currently might not look and feel like you did when in your 20’s, your age won’t stop "+
          " you from losing fat, getting fit, and looking and feeling great! For example, at 44, Jason lost 40 lbs and it has totally changed his life! </td>"+"<td><img height='200px' width='250px' src='Images/jason.png' /></td></tr></table>");
      }
      else{
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Surprisingly, most of our female success stories are in the 40-49 age range. Although you"+
          " currently might not look and feel like you did when in your 20’s, your age won’t stop "+
          " you from losing fat, getting fit, and looking and feeling great! For example, at 45, Melody lost 85 lbs and it totally changed her life!</td>"+"<td><img height='200px' width='250px' src='Images/melody.png' /></td></tr></table>");
      }

    }
    else if(ageValue == 50){

      if($('input[name="gender"]:checked').val()=="men"){
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br> Although returning to the body of your youth may not happen, your age won’t keep you"+
          " from losing fat, getting healthy and fit, and looking and feeling great! For example, at 58, "+
          " Mark lost 55 lbs and has more energy than ever!</td>"+"<td><img height='200px' width='250px' src='Images/mark.png' /></td></tr></table>");
      }
      else{
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br> Although returning to the body of your youth may not happen, your age won’t keep you"+
          " from losing fat, getting healthy and fit, and looking and feeling great! For example, at 54, "+
          "Jonnie lost 36 lbs and feels better than ever!!</td>"+"<td><img height='250px' width='250px' src='Images/jonnie.png' /></td></tr></table>");
      }

    }
    else{

      if($('input[name="gender"]:checked').val()=="men"){
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br> Although returning to the body of your youth may not happen, your age won’t keep you"+
          " from losing fat, getting healthy and fit, and looking and feeling great! For example, at 68, "+
          "Lee-Pierre lost 45 lbs and has more energy than ever!</td>"+"<td><img height='200px' width='250px' src='Images/lee.png' /></td></tr></table>");
      }
      else{
        $("#selectedAge").html("<table BORDER=0 CELLSPACING=0 CELLPADDING=15><tr><td valign='top'><br><br>  Although returning to the body of your youth may not happen, your age won’t keep you"+
          " from losing fat, getting healthy and fit, and looking and feeling great! For example, at 63,"+
          " Wendi 82 lbs and feels better than ever!</td>"+"<td><img height='200px' width='250px' src='Images/wendy.png' /></td></tr></table>");
      }
    }
  };


  function YourChildren() {

      var numChild = $('#children').val();

      $("#selectedChild").html("<p>"+ numChild + "</p>");

 
      if(numChild == 1){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedChild").html("<p>We love working with busy moms because we recognize one thing… when you change the "+
            " life of the primary “influencer” in the home (YOU), you see healthy changes in your "+
            " child as well."+

            " Is being a busy mom more difficult? Yes, definitely. But with the right program and "+
            " support, you can be the change that takes your family into a new world of healthy living "+
            " and true happiness."+

            " Losing weight and keeping it off doesn’t have to take a lot of time, it takes the right plan"+
            " that meets the needs of a busy, no-nonsense mother."+

            "</p>");
        }
        else{
          $("#selectedChild").html("<p> We enjoy working with busy dads because when you change the life of one of the primary" +
            " “influencers” in the home (YOU), you see healthy changes in your child as well."+

            " Is being a busy dad more difficult? Usually, yes. But with the right program and support,"+
            " you can be the change that takes your family into a new world of healthy living and true happiness."+

            " Losing weight and keeping it off doesn’t have to take a lot of time, it takes the right plan"+
            " that meets the needs of a busy, no-nonsense father. "+

            "</p>");
        }

      }

     else if(numChild == 2){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedChild").html("<p>We love working with busy moms of 2 or more kids because we recognize one thing… "+
            " when you change the life of the primary “influencer” in the home (YOU), you see huge "+
            " changes at a “global” level across the entire family. "+

            " While everyone else makes excuses as to why they are not taking action, mothers have no "+
            " room for excuses. Is it more difficult for her (you)? YES, definitely! But with the right "+
            " program and support, you can be the change that takes an entire family into a new world of"+
            " healthy living and true happiness. "+

            " Losing weight and keeping it off for the entire family doesn’t have to take a lot of time,"+
            " it takes the right plan that meets the needs of a busy, no-nonsense mother.</p>");
        }
        else{
          $("#selectedChild").html("<p> We enjoy working with busy dads because when you change the life of one of the primary" +
            " “influencers” in the home (YOU), you see healthy changes in your children as well."+

            " Is being a busy dad of 2 more difficult? Usually, yes. But with the right program and"+
            " support, you can be the change that takes your entire family into a new world of healthy"+
            " living and true happiness. "+

            " Losing weight and keeping it off doesn’t have to take a lot of time, it takes the right plan"+            
            " that meets the needs of a busy, no-nonsense father. "+

            "</p>");
        }

      }

     else if(numChild == 3){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedChild").html("<p>Busy mothers of 3 are the kind of clients we love working with because we recognize one"+
            " thing… when you change the life of the primary “influencer” in the home (YOU), you"+
            " see huge changes at a “global” level across the entire family. "+

            " While everyone else makes excuses as to why they are not taking action, mothers of three "+
            " have no room for excuses. Is it more difficult for her (you)? YES, definitely! But with the "+
            " right program and support, you can be the change that takes an entire family into a new"+
            " world of healthy living and true happiness. "+

            " Losing weight and keeping it off for the entire family doesn’t have to take a lot of time, "+
            " it takes the right plan that meets the needs of a busy, no-nonsense mother. </p>");
        }
        else{
          $("#selectedChild").html("<p> We enjoy working with busy dads because when you change the life of one of the primary" +
            " “influencers” in the home (YOU), you see healthy changes in your child as well."+

            " Is being a busy dad of 3 more difficult? Usually, yes. But with the right program and"+
            " support, you can be the change that takes your entire family into a new world of healthy"+
            " living and true happiness. "+

            " Losing weight and keeping it off doesn’t have to take a lot of time, it takes the right plan"+
            " that meets the needs of a busy, no-nonsense father.</p>");
        }

    }


    else if (numChild == 4){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedChild").html("<p>Is your Super Woman cape feeling a little tattered? Of all of our clients, the mother of 4"+
            " (or more) is truly the epitome of “little to no time”. But busy mothers are the kind of"+
            " clients we love to work with the most. We recognize one thing… when you change the life "+
            " of the primary “influencer” in the home (YOU), you see huge changes at a “global”"+
            " level across the entire family. "+


            " While everyone else makes excuses as to why they are not taking action, the mother of four"+
            " has no room for excuses. Is it more difficult for her (you)? YES, definitely! But with the"+
            " right program and support, you can be the change that takes an entire family into a new"+
            " world of healthy living and true happiness. "+
            
            " We’ve seen this many times, and it’s all about the right plan and support. Losing weight "+
            " and keeping it off for the entire family doesn’t have to take a lot of time, it takes the "+
            " right plan that meets the needs of a busy, no-nonsense mother."+

            "</p>");
        }
        else{
          $("#selectedChild").html("<p> We enjoy working with busy dads because when you change the life of one of the primary" +
            " “influencers” in the home (YOU), you see healthy changes in your child as well."+

            " Is being a busy dad of 4 more difficult? Usually, yes. But with the right program and"+
            " support, you can be the change that takes your entire family into a new world of healthy"+
            " living and true happiness. "+

            " Losing weight and keeping it off doesn’t have to take a lot of time, it takes the right plan"+
            " that meets the needs of a busy, no-nonsense father. "+

            "</p>");
        }
      }

        else {

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedChild").html("<p> You certainly have an advantage by not having kids living at home with you. Caring for kids can take a lot of time and effort and therefore often makes it more difficult to plan and prepare healthy meals and fit in physical activities that you enjoy. So, the fact that you don’t have kids at home should make achieving the results you want much easier!</p>");
        }
        else{
          $("#selectedChild").html("<p> You certainly have an advantage by not having kids living at home with you. Caring for kids can take a lot of time and effort and therefore often makes it more difficult to plan and prepare healthy meals and fit in physical activities that you enjoy. So, the fact that you don’t have kids at home should make achieving the results you want much easier!</p>");
        }
      } 

      if(numChild == 1){
        userScore -= 2;
      }
      else if (numChild == 2){
        userScore -=3;
      }
      else if (numChild == 3){
        userScore -=4;
      }
      else if(numChild == 4){
        userScore -=5;
      }
      else{
        userScore -=0;
      }
  };

function YourRelationship() {

      var relation = $('#relationship').val();

      if(relation == "Single"){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedRelation").html("<p>Studies show that single women have an easier time sticking with "+
            "their healthy eating plan because they don’t have to accommodate "+
            "someone else’s food preferences and aren’t challenged by the "+
            "pressure their husband or boyfriend might put on them to splurge on "+
            "fattening foods or high-calories drinks. However, a husband/boyfriend "+
            "can make staying active much easier because of the accountability"+
            "and sharing the experience with someone. </p>");
        }

        else{
          $("#selectedRelation").html("<p> Studies show that single men have an easier time sticking with their" +
            " healthy eating plan because they don’t have to accommodate"+
            " someone else’s food preferences and aren’t challenged by the "+
            " pressure their wife or girlfriend might put on them to splurge on"+
            " fattening foods or high-calorie drinks. However, a wife/girlfriend can"+
            " make staying active much easier because of the accountability and "+
            " sharing the experience with someone. "+

            "</p>");
        }
      }
      else if(relation == "relationship"){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedRelation").html("<p>Studies show what you probably already know to be true… women in "+
            " a serious relationship have a more difficult time sticking with their "+
            " healthy eating program. This, of course, is not every woman, but"+
            " many do find themselves compromising their decisions to either keep "+
            " up with their boyfriend, or to just “go with the flow”. Some find that the "+
            " social pressures are higher, or that they just simply don’t have the"+
            " time to prepare and cook like they used to.<br><br>"+

            " However, this is usually due to the fact that they have not been"+
            " prepared with the right tools to get the support, encouragement, and "+
            "backing of their partner! This is a HUGE mistake made by millions of"+
            " women daily. When you look to start a new program, ask… “what"+
            " support do you provide me so that I can ensure I have the proper "+
            "support needed on a daily basis?”<br><br>"+

            " Many of our clients say they can’t believe the amount of support they"+
            " get from home, and from the last place they expected it, their "+
            "boyfriend who had been completely unsupportive in the past. </p>");
        }
        else{
          $("#selectedRelation").html("<p> Many men find themselves compromising their decisions to either" +
            " keep up with their girlfriend, or to just “go with the flow”. However, this"+
            " is usually due to the fact that they have not been prepared with the"+
            " right tools to get the support, encouragement, and backing of their"+
            " girlfriend! </p>");
        }

      }

      else if(relation == "married"){

        if($('input[name="gender"]:checked').val()=="women"){
          $("#selectedRelation").html("<p>Studies show what you probably already know to be true… married "+
            " women have a more difficult time sticking with their healthy eating "+
            " program. This, of course, is not every woman, but many do find"+
            " themselves compromising their decisions to either keep up with their "+
            " husband, or to just “go with the flow”. Some find that the social"+
            " pressures are higher, or that they just simply don’t have the time to"+
            " prepare and cook like they used to. <br><br>"+

            " However, this is usually due to the fact that they have not been"+
            " prepared with the right tools to get the support, encouragement, and "+
            "backing of their husband! This is a HUGE mistake made by millions of"+
            " women daily. When you look to start a new program, ask… “what"+
            " support do you provide me so that I can ensure I have the proper "+
            "support needed on a daily basis?” <br><br>"+

            " Many of our clients say they can’t believe the amount of support they"+
            " get from home, and from the last place they expected it, their "+
            "husband who had been completely unsupportive in the past. </p>");
        }
        else{
          $("#selectedRelation").html("<p> Many men find themselves compromising their decisions to either" +
            " keep up with their wife, or to just “go with the flow”. However, this"+
            " is usually due to the fact that they have not been prepared with the"+
            " right tools to get the support, encouragement, and backing of their"+
            " wife! </p>");
        }

      }


      if(relation == "Single"){
        userScore -= 2;
      }
      else if (relation == "relationship"){
        userScore -=4;
      }
      else if (relation == "married"){
        userScore -=5;
      }
  };




//<------------- Page 2 End ---------------------------------->


//<------------- Page 2 Why do you want to lose weight ----------------------->



//<------------- Page 2 Do you belive in yourself ----------------------->

function doYouSplurge() {
        var splurge = $('input[name="food"]:checked').val();

        if(splurge == "no"){
          userScore -= 7;
        }
        else if (splurge == "maybe"){
          userScore -= 3;
        }

        if(splurge == "no"){

          $("#selectedSplurge").html("<p> If you were on a road trip and got a flat tire, would you slash the other 3? Of course not, that would make getting to the destination very difficult. The same is true with your nutrition plan." +
                                     "There will be times when you overeat an unhealthy meal. It happens, it’s normal. What’s important is that you don't get discouraged and abandon your new healthy lifestyle. This kind of all-or-nothing thinking is why so many people have so little success. If you begin changing your habits with the assumption that any deviation from it will totally ruin your plan, you’re just setting yourself up for failure." +
                                     "Life is full of unplanned obstacles, distractions, and temptations. There will be days when you’ll stray from healthy eating or being active. Enjoy it and then simply get right back on track soon after. No one can or should go through life depriving themselves of foods they really enjoy. Instead, you can learn how to make gradual healthy changes to the foods you love and stay active. It’s that simple.</p>");
        }

        else {
          $("#selectedSplurge").html("<p> That’s great! Healthy eating is all about balance and flexibility and life is full of unplanned obstacles, distractions, and temptations. There will be days when you’ll stray from healthy eating or being active. Enjoy it and then simply get right back on track soon after.  You’ve got the right approach (and a perfect score on this question) – keep up the great work!</p>")
        }

  };

function beliveInYourself() {
         beliveIn = $('input[name="belive"]:checked').val();

        if(beliveIn == "no"){
          userScore -= 10;
        }
        else if (beliveIn == "maybe"){
          userScore -= 7;
        }
        else{
          userScore -= 0;;
        }

        if(beliveIn == "no"){

          $("#selectedBelive").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> With the sheer volume of conflicting information that exists, how can anyone ever expect to be confident unless they’ve already reached their goal?  Take a deep breath right now and relax, knowing that some self-doubt is both normal and expected. Have you ever started a new job with self-doubt? Most of us have. Eventually you “owned” that job and were damn good at it, right? Well, starting a healthy weight loss plan is no different when it comes to confidence. The big difference is that you should choose ONE person to learn from so you can get consistent, reliable information.  It would be difficult to feel in charge of your health if you had to “relearn a new job” every few months. The key is to start with proven and fundamentally solid nutritional information. Not “milk does a body good” type of marketing propaganda, or “carbs are the enemy” type of polarizing sales messages, but real, reliable nutrition and activity guidelines that you can use anywhere you go and create the lifestyle YOU want.  Since you’re here on this page right now, you’re likely ready for something truly different, and very real. We would be honored to help you find the confidence and introduce you to our world of simple nutrition, fun activity, and easy healthy decisions. </td><td> <img height='150px' width='200px' src='Images/quoteleslie.png' /> </td></tr></table>"); 
        }

        else if(beliveIn == "maybe") {
          $("#selectedBelive").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> With the sheer volume of conflicting information that exists, how can anyone ever expect to be fully confident unless they’ve already reached their goal?  Take a deep breath right now and relax, knowing that self-doubt is both normal and expected. Have you ever started a new job with self-doubt? Most of us have. Eventually you “owned” that job and were damn good at it, right? Well, starting a healthy weight loss plan is no different when it comes to confidence. The big difference is that you should choose ONE person to learn from so you can get consistent, reliable information.  It would be difficult to feel in charge of your health if you had to “relearn a new job” every few months. The key is to start with proven and fundamentally solid nutritional information. Not “milk does a body good” type of marketing propaganda, or “carbs are the enemy” type of polarizing sales messages, but real, reliable nutrition and activity guidelines that you can use anywhere you go and create the lifestyle YOU want.  Since you’re here on this page right now, you’re likely ready for something truly different, and very real. We would be honored to help you find the confidence and introduce you to our world of simple nutrition, fun activity, and easy healthy decisions. </td><td> <img height='150px' width='200px' src='Images/quoteleslie.png' /> </td></tr></table>")
        }
        else {
          $("#selectedBelive").html("<table CELLSPACING=0 CELLPADDING=15><tr><td>It’s great that you believe in yourself and your upcoming success – you get a perfect score on this question! Those who are confident in themselves tend to stick with changes long enough to create new habits and see good results. They also tend to put setbacks in perspective rather than letting an unhealthy meal derail their efforts. We’re glad you believe in you because we believe in YOU!</td><td> <img height='150px' width='200px' src='Images/quoteleslie.png' /> </td></tr></table>")
        }
};


//<------------- Page 2 End ----------------------->


//<------------- Page 3 Personality ----------------------->

function OpenToChange() {
        var changeIn = $('input[name="change"]:checked').val(); 

        var x;
        if(changeIn == "no"){
          userScore -= 10;
        }
        else if (changeIn == "maybe"){
          userScore -= 7;
        }
        else{
          userScore -= 0;;
        }


        if(changeIn == "no"){

          $("#selectedChange").html("<p> Making simple changes to the way you eat and your physical activity may sound overwhelming at first, but it's really quite simple. The easiest way to go about it is to take it one step at a time. If you try to hurry change, chances are that it won't be permanent. But if you take action and make sure you enjoy the journey along the way, these new changes will become habits that soon lead to long-term results!</p>");
        }

        else if(changeIn == "maybe") {
          $("#selectedChange").html("<p> I’m so glad you’re open to change! Making simple changes to the way you eat and your physical activity may sound a bit overwhelming at first, but it's really quite simple. The easiest way to go about it is to take it one step at a time. If you try to hurry change, chances are that it won't be permanent. But if you take action and make sure you enjoy the journey along the way, these new changes will become habits that soon lead to long-term results!</p>")
        }
        else {
          $("#selectedChange").html("<p>We’re so glad you embrace change – this will make losing fat so much easier! Making simple changes to the way you eat and your physical activity is really quite simple and the easiest way to go about it is to take it one step at a time. If you try to hurry change, chances are that it won't be permanent. But if you take action and make sure you enjoy the journey along the way, these new changes will become habits that soon lead to long-term results!</p>")
        }
};

function areYouCoachable() {
    
        var coachable = $('input[name="coach"]:checked').val();

        var x;
        if(coachable == "no"){
          userScore -= 7;
        }
        else if (coachable == "maybe"){
          userScore -= 4;
        }
        else{
          userScore -= 0;;
        }
        $("#selectedCoach").html("<p> " + coachable + ".</p>");

        if(coachable == "no"){

          $("#selectedCoach").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> Given how many weight loss programs and products don’t live up to their claims, I understand why you’re skeptical. I’d not only be skeptical, but frustrated and discouraged too!  Feel assured, we know how to get our clients rapid, permanent results. But you need to be coachable. We don’t expect you to believe in our full commitment to you just yet. But we do ask that you give us the opportunity to earn your trust. Once you do, we’ll prove that we are 100% committed to you and very passionate about your success. </td><td> <img height='150px' width='200px' src='Images/quoteleslisa.png' /> </td></tr></table>");
        }

        else if(coachable == "maybe") {
          $("#selectedCoach").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> Given how many weight loss programs and products don’t live up to their claims, I understand why you might be skeptical. I’d not only be skeptical, but frustrated and discouraged too!  Feel assured, we know how to get our clients rapid, permanent results. But you need to be coachable. We don’t expect you to believe in our full commitment to you just yet. But we do ask that you give us the opportunity to earn your trust. Once you do, we’ll prove that we are 100% committed to you and very passionate about your success. </td><td> <img height='150px' width='200px' src='Images/quotelisa.png' /> </td></tr></table>")
        }
        else {
          $("#selectedCoach").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> We know how to get our clients rapid, permanent results – but you need to be “coachable”. We’re so glad to see that you’re willing to follow our guidance – you get a perfect score on this question! We’d love the opportunity to prove that we are 100% committed to you and very passionate about your success. We absolutely will not let you fail – you’ll see.</td><td> <img height='150px' width='200px' src='Images/quotelisa.png' /> </td></tr></table>")
        }
    
};


function counterScore() {
    
    if(counter <= 2){
      userScore-=5;
    }
    else if(counter == 3){
      userScore-=4;
    }
    else if(counter == 4){
      userScore-=3;
    }
    else{
      userScore-=0;
    }
};

function whylose(){

        var about1="";
        var about2="";
        var about3="";
        var about4="";
        var about5="";
        var about6="";
        var about7="";
        var about8="";
        var about9="";
        var about10="";
        var about11="";
        var about12="";
        var about13="";



        if($('#lookbetter').is(':checked')){
           about1 = 'look better, ';
          counter += 1;
        }
        
        if($('#behealth').is(':checked')){
           about2 = 'be healthier, ';
          counter += 1;
        }

        if($('#feelbetter').is(':checked')){
           about3 = 'feel better, ';    
          counter += 1;

        }

        if($('#behappier').is(':checked')){
           about4 = 'have more fun, ';
          counter += 1;

        }
        if($('#goodexample').is(':checked')){
           about5 ='set a good example, ';
          counter += 1;
        }

        if($('#productive').is(':checked')){
           about6 = 'be more productive, ';
          counter += 1;
        }

        if($('#bettershape').is(':checked')){
           about7 = 'be in better shape, ';
          counter += 1;
        }

        if($('#fitcloths').is(':checked')){
           about8 = 'fit into your favorite clothes, ';
          counter += 1;
        }
        if($('#energy').is(':checked')){
           about9 = 'have more energy, ';
          counter += 1;
        }
        if($('#stress').is(':checked')){
           about10 = 'decrease stress, ';
          counter += 1;
        }
        if($('#spouse').is(':checked')){
           about11 ='encourage your spouse to lose weight too, ';
          counter += 1;
        }
        if($('#care').is(':checked')){
           about12 = 'save money on health care, ';
          counter += 1;
        }
        if($('#illness').is(':checked')){
           about13 ='decrease risk of illness and disease, ';
          counter += 1;
        }
        if($('#other').is(':checked')){
          $('#about14').html('You want to other');
        }

        if(counter == 1){

          $("#about0").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> It’s great that you want to "+about1 +about2 +about3 +about4 +about5 +about6 +about7 +about8 +about9 +about10 +about11 +about12 +about13 +"! You obviously realize the benefit, which will help you focus on the real outcome of the result."+
            " This will also allow us to show you how to measure success not just in “pounds lost”, but in how your clothes fit, how you look and feel, how it impacts others you care about,"+
            " your work and athletic performance, how much more energy you have, your reduction in stress, pain, illness, and risk of injury and disease, a reduction in your healthcare costs,"+
            " and so on and so on!  "+
            "</td><td> <img height='150px' width='200px' src='Images/quoteholly.png' /> </td></tr></table>");
        }

        else {

          $("#about0").html("<table CELLSPACING=0 CELLPADDING=15><tr><td> You really get it! Losing weight and being healthy is never about just ONE REASON. It’s the combination of motivations that keeps you going! I’m so glad you selected "+ about1  + about2 +about3 + about4  + about5 + about6 + about7 + about8 +about9 + about10  + about11  +about12 + about13+"etc."+
            "</td><td> <img height='150px' width='200px' src='Images/quoteholly.png' /> </td></tr></table>");

        }



};
//<------------- Page 2 WHat have you tired to lose weight ---------------------------------->

function whatTried (){

         if($('#countcal').is(':checked')){
          $('#tried1').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> Counting Calories:</b></span><br> When was the last time you “counted the breaths you took” for an entire day? We all know that you have to breathe to survive, just like we all know that you have to consume less calories than you expend to lose weight. But, attempting to “count breaths” (or calories) just isn’t realistic. How long could you do that for? A day? A week? A month if you‘re true superhero? <br><br>"+
                              "May I suggest that you find another way of reducing your calorie intake that doesn’t lend itself to failure? Even if you don’t follow our program, find a system that allows you to eat a variety of the foods you love without having to count, calculate, or measure everything all the time. That’s just way too complicated and time-consuming, and it’s impossible to continue long-term. </td><td> <img height='150px' width='200px' src='Images/quoteesther.png' /> </td></tr></table>");

          userScore -= 1;
         }

         if($('#diet').is(':checked')){
          $('#tried2').html("<p><span style='color:#1F9BDE'><b> Following some sort of 'diet':</b></span><br> You’re not alone – almost everyone has. Diets can help you lose weight in the short-term, but they’re not at all effective for keeping the weight off and helping you live a healthy lifestyle. Why? Because they teach you very little about the right foods to eat and when to eat them.<br><br> "+
                            "What’s the point in suffering through a diet in the short-term, only to gain it all back? Instead of learning effective strategies for results you can enjoy long-term, you’re left feeling even more frustrated and discouraged. Diets are good for one thing: taking people’s money and leaving them with a lot of false hope and promises.</p>");

          userScore -= 1;
        }

         if($('#eathealth').is(':checked')){
          $('#tried3').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'></span><b> Eating healthier and/or eating less and/or exercising:</b></span><br> It’s great that you’ve tried eating healthier and being more active – these things are necessary to lose fat and keep it off for good. I’m willing to bet the reason it didn’t work for you is because you tried avoiding the foods you love, rather than making simple, healthier changes that you can live with, enjoy, and stick to forever. Perhaps you were doing exercises you didn’t enjoy? As you’ve probably discovered, it’s not likely that you’ll stick with it if you have to suffer through it. </td><td> <img height='150px' width='200px' src='Images/quotejamie.png' /> </td></tr></table>");

          
        }

         if($('#supplements').is(':checked')){
          $('#tried4').html('<p><span style="color:#1F9BDE"> <b>Diet pills ("fat burners", appetite suppressants, etc): </b></span> <br> I can certainly understand why you gave these a try – supplement manufacturers make exciting claims. But most diet pills are filled with caffeine and diuretics that can cause dehydration and electrolyte imbalances that are harmful to your health and not at all effective for losing fat. Save your money and your health and avoid these; you’ll thank me later :) </p>');

           userScore -= 1;
        }

         if($('#dietfoods').is(':checked')){
          $('#tried5').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"> <b>Diet foods (bars, shakes, pre-packaged foods, etc.): </b></span><br>  There’s nothing wrong with a protein shake or bar as a snack once in a while, but be very careful when reading the labels. Most protein or “nutrition” bars, for example, are just candy bars in disguise – chock full of sugar, calories, and saturated fat. And most pre-packaged “weight loss” meals are not only expensive, they’re not ideal for long-term fat loss. Remember, natural foods (those picked from the ground or a tree) are much better for you than anything that’s processed (man-made). Once you learn to combine the right foods, at the right times – specifically for you – you’ll save money and get much better results.</td><td> <img height="150px" width="200px" src="Images/quotelaurie.png" /> </td></tr></table>');

           userScore -= 1;
        }

         if($('#center').is(':checked')){
          $('#tried6').html(" <p><span style='color:#1F9BDE'> <b>Weight loss centers/groups:</b></span> <br> The reason most people don't have long-term success with weight loss centers is that they don't teach you about real food, for example, assigning point values to foods to help keep you from overeating. Essentially, it’s about restricting calories. The key to good nutrition is not just caloric content, it's also nutrient content. Keep in mind that calories are a measurement of energy, not nutrients. You can eat 2,200 calories a day of nutrient-rich foods or 2,200 calories a day of nutrient-deficient foods. The latter will keep you hungry, malnourished, and struggling to lose weight… whereas the former will keep you satisfied, nourished, and on a much healthier path to permanent weight loss. The support that these weight loss centers offer can be helpful, but the right information about healthy eating needs to be offered as well.</p>");

        }

         if($('#trainer').is(':checked')){
          $('#tried7').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> Working with a personal trainer: </b></span><br> Personal trainers can offer motivation and help make sure you’re using the right lifting technique, but most don’t focus on the other two critical aspects of effective fat loss: your nutrition and your mindset. You can’t out-train poor nutrition…meaning, you can exercise for an hour every day and still not lose fat if you’re not eating the right foods, at the right times, in the right amounts – specifically for you. <br><br> But if you’ve got your nutrition and your mindset right, you don’t need to exercise to lose fat. It’s helpful if you do, and we certainly recommend that you stay active having fun doing the things you love, but long, boring, or intense workouts just aren’t necessary.</td><td> <img height='150px' width='200px' src='Images/quoteryan.png' /> </td></tr></table>");

        }

         if($('#hypno').is(':checked')){
          $('#tried8').html("<p><span style='color:#1F9BDE'><b> Hypnosis: </b></span><br>  Hypnosis is one of the most scientifically studied methods for losing weight that exists. But sadly, it’s not for everyone. Those who believe, believe strongly in the power of hypnosis … and those who don’t believe, well, it just won’t ever work for them. The hardest part is that you must fully embrace this technique in order for it to be successful AND as with all methods, you can totally sabotage it. <br><br> I am not a hypnotherapist, nor will I ever claim to know how this works, or doesn’t. But I can tell you one thing. If you’ve tried this before, and didn’t see success, its likely time that you try something different and tangible for yourself – something that’s proven effective.</p>");

           userScore -= 1;
        }


         if($('#extreme').is(':checked')){
          $('#tried9').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> Extreme exercising: </b></span><br> I’ll admit, I’ve personally tried this. But just as skipping meals or fasting will not lead to long-term healthy fat loss, neither will 'extreme exercising.' Punishing your body with excessive exercising will only lead to severe wear and tear, risk of injury, electrolyte and hormonal imbalances, as well as affecting you psychologically. It's very important that you follow a routine that is both safe and right for your body and level of fitness. </td><td> <img height='150px' width='200px' src='Images/quotejeanne.png' /> </td></tr></table>");

           userScore -= 1;
        }
        
         if($('#purging').is(':checked')){
          $('#tried10').html(' <p><span style="color:#1F9BDE"><b> Purging, vomiting, and/or laxatives: </b></span> <br> I care about you and your success, so please forgive my sternness. These are among the very worst diet methods because they cause your hormones to be out of balance and can do terrible damage to your metabolism. They can even lead to a variety of diseases and health disorders and are life-threatening if done for an extended period of time. Do not consider these methods in the future, as they will only cause health problems, rather then effective, long-term weight loss.</p>');

           userScore -= 1;
        }
        
         if($('#clense').is(':checked')){
          $('#tried11').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> Cleanses: </b></span> <br> These are gaining more and more popularity, and there are some health benefits, so I can certainly understand why you’ve tried these. Cleanses and detoxifying products may help you lose a little weight, but it's only water and other built-up materials from your intestines, not fat. Your body has its own efficient detoxifying mechanism in place, and cleanses and other detox products mess with your body's natural system. Drinking plenty of water and eating high-fiber foods will help you detoxify your system and are both healthy and effective for losing fat.</td><td> <img height='150px' width='200px' src='Images/quoteneil.png' /> </td></tr></table>");

        }

         if($('#gimmick').is(':checked')){
          $('#tried12').html(' <p><span style="color:#1F9BDE"><b> Diet gimmicks ("slimming creams", diet patches, etc.):</b></span><br> Although tempting since they’re so “quick and easy” – these simply do not work. If they did, everyone would be using them and we wouldn’t have the obesity epidemic that we currently do in America. Please save your money and let’s focus on real, proven-effective strategies that really work. You deserve it.</p>');

           userScore -= 1;
        }

         if($('#fasting').is(':checked')){
          $('#tried13').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> Drastically reducing calories (fasting, 'crash diets', etc.):</b></span><br>  While this can result in some weight loss, it also results in muscle and water loss, which can pose big health risks. When your body does not get adequate nutrition, it compensates by taking nutrients from your bones and muscles, which can result in serious complications, including heart attacks and death. <br><br> By drastically reducing your calories, the very least you'll do is ruin your metabolism – making it nearly impossible to lose fat and keep it off. The good news is, I’ll show you how to reverse any adverse effects this may have had on your body so that you can lose weight the right way – for good.</td><td> <img height='150px' width='200px' src='Images/quoteeva.png' /> </td></tr></table>");

           userScore -= 1;
        }

         if($('#surgery').is(':checked')){
          $('#tried14').html('<p><span style="color:#1F9BDE"><b> Surgery (liposuction, gastric bypass): </b></span><br>As I’m sure you know, these surgical procedures are very expensive, pose a variety of health risks, and include all sort of unpleasant side effects. What’s more, you don’t learn how to truly enjoy a healthier lifestyle. Feel assured: there’s a much better, easier way and we’re excited to show you how!</p>');

           userScore -= 1;
        }

         if($('#other').is(':checked')){
          $('#tried15').html('<p>You tried other things</p>');
        }
        


};
//<------------- Page 2 Why you quit trying ----------------------->

function whyQuit(){


          if($('#afford').is(':checked')){
           $('#quit1').html('<p><span style="color:#1F9BDE"><b> I cant afford it: </b></span><br>Actually, many processed and packaged foods are more expensive than natural, healthy foods; you just need to know the right kinds and where to get them. And you don’t need a gym membership or workout equipment to lose fat. In fact, you can lose fat and get fit by simply being more active doing the things you love. Feel assured, we’re excited to share these strategies with you.</p>');
            
            userScore -= 2;
         }
          if($('#busy').is(':checked')){
           $('#quit2').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> Im too busy: </b></span><br>I certainly understand that living a busy lifestyle makes losing fat more difficult. But if you can carve a little time out of your Sunday to plan your week, and then just 5 minutes each night to make sure you’re prepared the next day, you’ll be surprised just how simple losing fat really easy. It takes a consistent commitment, but it’s easy, especially when you begin seeing results. The short time it takes to plan and prepare makes it all well worth it.</td><td> <img height="150px" width="200px" src="Images/quotescott.png" /> </td></tr></table>');

            userScore -= 2;
         }

          if($('#energy').is(':checked')){
           $('#quit3').html('<p><span style="color:#1F9BDE"><b> I dont have enough energy: </b></span><br>Enjoying physical activity isn’t as easy when you’re low on energy, I understand. But with a few simple changes to the foods you eat (the right kinds at the right times of the day), your energy will increase dramatically. And remember, you don’t need to do long, boring, or intense workouts to lose fat. By simply being more active and making small, easy changes to your favorite foods, you can enjoy great results and stay energized throughout the day.</p>');

            userScore -= 2;
         }

          if($('#travel').is(':checked')){
            $('#quit4').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> I eat out for many of my meals: </b></span><br>Enjoying physical activity isn’t as easy when you’re low on energy, I understand. But with a few simple changes to the foods you eat (the right kinds at the right times of the day), your energy will increase dramatically. And remember, you don’t need to do long, boring, or intense workouts to lose fat. By simply being more active and making small, easy changes to your favorite foods, you can enjoy great results and stay energized throughout the day. </td><td> <img height="150px" width="200px" src="Images/quotekim.png" /> </td></tr></table>');

             userScore -= 2;
          }

          if($('#enjoy').is(':checked')){
            $('#quit5').html('<p><span style="color:#1F9BDE"><b> I dont enjoy working out: </b></span><br>Most people don’t actually enjoy exercise, and so they give up trying to lose fat. But you don’t need to suffer through long, boring, or intense workouts to be successful. Can you make a consistent effort to enjoy fun activities with friends and be more active throughout the day? Of course you can. Simply go on a walk or a bike ride with friends or take the stairs instead of the elevator. ALL activity adds up and you can enjoy great, permanent results if you just make a conscious effort to be more active.</p>');

             userScore -= 2;
          }

          if($('#junkfood').is(':checked')){
            $('#quit6').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> I struggle with cravings and/or resisting junk-food: </b></span><br>Cravings can be tough; so can resisting the temptation of junk foods, especially when they’re so readily available. The good news is that there are several super-simple strategies for decreasing cravings. And don’t worry. You don’t need to totally give up your favorite junk foods. You just need to enjoy them in moderation and at the right times of the day.</td><td> <img height="150px" width="200px" src="Images/quotejohn.png" /> </td></tr></table>');

             userScore -= 2;
          }

          if($('#motivation').is(':checked')){
            $('#quit7').html('<p><span style="color:#1F9BDE"><b> I cant get (or stay) motivated: </b></span><br>It’s tough sticking to your plan when you’re not motivated – I understand. The key is getting results you can see and feel as quickly as possible. Action creates results and results create motivation… but you’ve got to take the right action at the right times. As soon as you begin seeing results (and it should be soon), you’ll be more motivated than ever!</p>');

             userScore -= 2;
          }

          if($('#bestfood').is(':checked')){
            $('#quit8').html('<p><span style="color:#1F9BDE"><b> I dont know the best foods to eat: </b></span><br>I understand, most people don’t. But it’s really quite easy. If you can follow a few super-simple principles consistently, you’ll be amazed at how easy losing fat (and keeping it off) really is. And feel assured: you don’t have to totally avoid your favorite foods or starve yourself – that’s not at all realistic for a permanent lifestyle change.</p>');

             userScore -= 2;
          }

//--------------- Change THis
          if($('#pain').is(':checked')){
            $('#quit9').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> I have a physical and or/eating challenge: </b></span><br>Every day we work with clients who have food allergies and other challenges, so we understand that it makes eating healthy (and enjoying the foods you love) much more difficult. In the same way, pain, injuries, or other physical challenges can make staying active really tough. It’s not easy losing fat – and keeping it off – when you have to avoid certain foods or activities. But with right personalized plan, guidance, and support, you absolutely can lose fat, get fit, and enjoy yourself every day. We look forward to showing you how.</td><td> <img height="150px" width="200px" src="Images/quotepatty.png" /> </td></tr></table>');

             userScore -= 2;
          }

          if($('#workout').is(':checked')){
            $('#quit11').html('<p><span style="color:#1F9BDE"><b> I dont know how to workout or which exercises to do:  </b></span><br>Unfortunately, most people don’t follow a workout routine that’s right for them. For the best possible results in the shortest amount of time, you need a plan that’s perfect for everything about you… and it doesn’t require a gym membership, expensive equipment, or a lot of time. In fact, even being more active throughout the day – doing fun activities you enjoy – can help you lose fat!</p>');

             userScore -= 2;
          }
          
          if($('#support').is(':checked')){
            $('#quit12').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> I dont have much support: </b></span><br>Having a good support system from others who understand what you’re going through and offer you honest feedback, support, and encouragement is absolutely critical to your success. Our online community is full of really good people who will care about you and your upcoming success, and we’d love for you to be a part of it!</td><td> <img height="200px" width="250px" src="Images/quotedarell.png"/> </td></tr></table>');

             userScore -= 2;
          }
          
          if($('#hormonal').is(':checked')){
            $('#quit13').html('<p><span style="color:#1F9BDE"><b> I have hormonal problems: </b></span><br>If you struggle to lose weight (or keep it off), your hormones are most likely having a significant impact. Hormones control every aspect of weight loss, including your metabolism, appetite, and even cravings. This means that any form of hormonal imbalance will sabotage your efforts – regardless of your eating habits or activity. The good news is this: there are all sorts of foods you can eat and simple strategies you can follow to regulate any hormonal imbalances you might have and finally lose weight and keep it off for good.</p>');

             userScore -= 2;
          }
          
          if($('#willpower').is(':checked')){
            $('#quit14').html("<table CELLSPACING=0 CELLPADDING=15><tr><td><span style='color:#1F9BDE'><b> I lack will power: </b></span><br>People struggle with will power because they try to avoid foods they love and/or muster up the motivation to do exercises they dont enjoy. Although many can find the 'will' to do this in the short term, almost no one can sustain this the rest of their life. And they shouldn't — life is short and should be enjoyed. Whats the point of being lean and fit if youre not enjoying yourself? The key is striking a balance between healthy and enjoyable so that you get the results you want, have fun, and can stick with it in the long run. This is a much better approach than trying to find the will power to avoid things you love and suffer through things you dislike.</td><td> <img height='150px' width='200px' src='Images/quotemegan.png' /> </td></tr></table>");

             userScore -= 2;
          }
 
          if($('#badgenetics').is(':checked')){
            $('#quit15').html('<p><span style="color:#1F9BDE"><b> I have bad genetics: </b></span><br>There are people with a certain set of genetics who can overeat whatever they want and never gain a pound. It’s frustrating, I know, but even those with the very worst genetics can lose fat, be healthy and fit, and look and feel their very best. Don’t be discouraged if you don’t have supermodel genes (I know I don’t); instead focus on your own best you for a much greater likelihood of long-term success.</p>');

             userScore -= 2;
          }

          if($('#foodbad').is(':checked')){
            $('#quit16').html('<p><span style="color:#1F9BDE"><b> I dont like any healthy foods: </b></span><br>To lose fat, you don’t need to eat boring, tasteless foods. The key is making small, simple changes to the meals you love. Burgers, pizza, cookies, are all very much on a “health-food” plan IF you make a couple easy modifications and follow a few simple steps.</p>');

             userScore -= 2;
          }
          
          if($('#cook').is(':checked')){
            $('#quit17').html('<table CELLSPACING=0 CELLPADDING=15><tr><td><span style="color:#1F9BDE"><b> I dont like to cook (or know how): </b></span><br>You definitely don’t need much cooking experience – or a lot of time – to whip up healthy, delicious, fat-burning meals. If you’re willing to follow a few quick and easy tips once or twice a week, you can ensure that you always have the right foods available to combine at the right times, for rapid, long-term success. It takes a little time and consistent effort, but it makes sticking to your plan so much easier!</td><td> <img height="150px" width="200px" src="Images/quoteeric.png" /> </td></tr></table>');

             userScore -= 2;
          }
          if($('#highdrink').is(':checked')){
            $('#quit18').html('<p><span style="color:#1F9BDE"><b> I enjoy high-calorie drinks </b></span><br>Drinks high in calories make losing fat more difficult, but you can still enjoy beer, wine, cocktails, coffee drinks, or soda – you just need to be strategic about it and plan ahead (BTW, I love beer). If you have a date to go out and have a few beers with friends, for example, we’ll show you an easy 3-step plan to have fun without sabotaging your success!</p>');

             userScore -= 2;
          }
          if($('#other').is(':checked')){
            $('#quit19').html('<p>other</p>');

             userScore -= 2;
          }
};


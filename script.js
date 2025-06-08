function errors(day,month,year){
    let day_error = document.getElementById("day-error");
    let month_error = document.getElementById("month-error");
    let year_error = document.getElementById("year-error");

    let flag=0;
    //check if the feilds are filled
    if(day===""){day_error.innerHTML="This feild is required"; flag=1;}
    else if(day<=0 || day>31){ day_error.innerHTML="must be a valid day";flag=1;}
    else{day_error.innerHTML="";}

    if(month===""){month_error.innerHTML="This feild is required"; flag=1;}
    else if(month<=0 || month>12){ month_error.innerHTML="must be a valid month"; flag=1;}
    else{ month_error.innerHTML=""; }
    
    if(year===""){ year_error.innerHTML="This feild is required"; flag=1;}
    else if(year<=0){ year_error.innerHTML="must be a valid year"; flag=1;}
    else{ year_error.innerHTML="";}
    
    if(flag) return true;
    
    let date=new Date(year, month-1, day);
    let today= new Date(); today.setHours(0,0,0);

    if(date.getDate() != day){day_error.innerHTML="must be a valid date"; flag=1;}
    else {day_error.innerHTML="";}

    if(flag) return true;

    if(date <= today) return false;

    if(today.getFullYear() < year){ year_error.innerHTML="must be in the past"; return true;}
    else if(today.getMonth() < month-1){month_error.innerHTML="must be in the past"; return true;}
    else if(today.getDate() < day){day_error.innerHTML="must be in the past"; return true;}
    else return false;
}
function AgeCalculator(){
    let day=document.getElementById("day").value;
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;

    let result_year= document.getElementById("result-years");
    let result_month= document.getElementById("result-months");
    let result_day= document.getElementById("result-days");

    if(errors(day,month,year)){
        console.log("Resolve the error");
        result_year.innerHTML= "--";
        result_month.innerHTML= "--";
        result_day.innerHTML= "--";
        return ;
    }

    let today= new Date();
    today.setHours(0,0,0);

    let res_year= today.getFullYear() - year; //0 or more
    let res_month= today.getMonth() - (month-1);
    if(res_month<0){
        res_year-=1;
        res_month+=12;
    }
    let res_day= today.getDate()-day;
    if(res_day<0){
        res_month-=1;
        if(res_month<0){
            res_year-=1;
            res_month+=12;
        }
        res_day+=30;
    }
    result_year.innerHTML=res_year;
    result_month.innerHTML=res_month;
    result_day.innerHTML=res_day;
}
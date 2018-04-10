define("assets/page/m/birth/inquiry/inquiry", ["assets/scripts/util/popup", "assets/scripts/util/datePicker","assets/scripts/util/calendar"],

    function(t, i, cal) {
        
        var data = {};
        var a, r = {};
        var now_date = new Date();
        r.token = data.token,
            r.src = data.src,
            r.avatar = "",
            function(t) {
                //console.log(t);
                var i, n, e, s;
                t && t.birth_y && "0000" != t.birth_y 
                ? (i = t.birth_y, e = t.birth_d, n = t.birth_m, s = t.birth_is_lunar) 
                : (i = "3333", e = "1", n = "1", s = "0"),  //其实只有这一句起作用了的
                    $("#birth").mobiscroll().datePicker({
                        theme: "mobile",
                        mode: "scroller",
                        display: "bottom",
                        lang: "zh",
                        isSolar: "0" == s ? !0 : !1,
                        ignore: "1112" == i ? !0 : !1,
                        showSolarLunar: !1,     //false
                        enableIgnore: !0,
                        formatValueCallback:function(e,b){
                            //e 是日期   b是 公历还是农历
                            //console.log('日期',e);
                            if(b){
                                var cal_date = cal.solar2lunar(e[0],e[1],e[2]);
                                //console.log('solar2lunar',cal_date);
                                return cal_date.cYear + '年' + cal_date.cMonth + '月' + cal_date.cDay + '日';
                            }else{
                                var cal_date = cal.lunar2solar(e[0], Math.abs(e[1]), e[2], e[1] < 0 ? !0 : !1);
                                //console.log('lunar2solar',cal_date);
                                return cal_date.IYearCn + '年' + cal_date.IMonthCn + cal_date.IDayCn + '日';
                            }
                            
                            
                        },
                        onSelect: function(t, i) {
                            //i.settings.isSolar    true 公历    false  农历
                            a = i.getArrayVal(),
                                r.birth_y = a[0],
                                r.birth_m = a[1],
                                r.birth_d = a[2],
                                i.settings.ignore && (r.birth_y = "1112"),
                                r.birth_is_lunar = i.settings.isSolar ? "0": "1";


                            if(i.settings.isSolar){
                                console.log('公历');
                                //公历
                                $(this).attr("data-date",a[0]+"-"+a[1]+"-"+a[2]);
                            }else{
                                console.log('农历');
                                //农历
                                var cal_date = cal.lunar2solar(a[0], Math.abs(a[1]), a[2], a[1] < 0 ? !0 : !1);
                                //输入公历
                                $(this).attr("data-date",cal_date.cYear+"-"+cal_date.cMonth+"-"+cal_date.cDay);
                            }
                        }
                    }),
                    "3333" != i ? 
                    //这一句也是几乎不会执行的
                    ($.each(["birth_y", "birth_m", "birth_d", "birth_is_lunar"],
                        function(i, a) {
                            console.log(t[a]);
                            r[a] = t[a]
                        }), $("#birth").mobiscroll("setArrayVal", [i, n, e], !0, !0, !1, 0)) 
                    : 
                    //只有这句话在奋斗着     默认选中今天的日期
                    $("#birth").mobiscroll("setArrayVal", [now_date.getFullYear(), now_date.getMonth()+1, now_date.getDate()], !1, !1, !1, 0)
                    
                /*
                setArrayVal   选中

                */
            } (data.birth),

            function(t) {
                //console.log(t);
                var i, n, e, s;

                t && t.birth_y && "0000" != t.birth_y 
                ? (i = t.birth_y, e = t.birth_d, n = t.birth_m, s = t.birth_is_lunar) 
                : (i = "3333", e = "1", n = "1", s = "0"),  //其实只有这一句起作用了的
                    $("#birth1").mobiscroll().datePicker({
                        theme: "mobile",
                        mode: "scroller",
                        display: "bottom",
                        lang: "zh",
                        isSolar: "0" == s ? !0 : !1,
                        ignore: "1112" == i ? !0 : !1,
                        showSolarLunar: !1,     //false
                        enableIgnore: !0,
                        formatValueCallback:function(e,b){
                            //e 是日期   b是 公历还是农历
                            //console.log('公历？',b);
                            if(b){
                                var cal_date = cal.solar2lunar(e[0],e[1],e[2]);
                                //console.log('solar2lunar',cal_date);
                                return cal_date.cYear + '年' + cal_date.cMonth + '月' + cal_date.cDay + '日';
                            }else{
                                var cal_date = cal.lunar2solar(e[0], Math.abs(e[1]), e[2], e[1] < 0 ? !0 : !1);
                                //console.log('lunar2solar',cal_date);
                                return cal_date.IYearCn + '年' + cal_date.IMonthCn + cal_date.IDayCn + '日';
                            }
                            
                            
                        },
                        onSelect: function(t, i) {
                            //i.settings.isSolar    true 公历    false  农历
                            a = i.getArrayVal(),
                                r.birth_y = a[0],
                                r.birth_m = a[1],
                                r.birth_d = a[2],
                                i.settings.ignore && (r.birth_y = "1112"),
                                r.birth_is_lunar = i.settings.isSolar ? "0": "1";


                            if(i.settings.isSolar){
                                console.log('公历');
                                //公历
                                $(this).attr("data-date",a[0]+"-"+a[1]+"-"+a[2]);
                            }else{
                                console.log('农历');
                                //农历
                                var cal_date = cal.lunar2solar(a[0], Math.abs(a[1]), a[2], a[1] < 0 ? !0 : !1);
                                //输入公历
                                $(this).attr("data-date",cal_date.cYear+"-"+cal_date.cMonth+"-"+cal_date.cDay);
                            }



                            
                        }
                    }),
                    "3333" != i ? ($.each(["birth_y", "birth_m", "birth_d", "birth_is_lunar"],
                        function(i, a) {
                            r[a] = t[a]
                        }), $("#birth1").mobiscroll("setArrayVal", [i, n, e], !0, !0, !1, 0)) : $("#birth1").mobiscroll("setArrayVal", [2018, 4, 9], !1, !1, !1, 0)
                //setArrayVal   选中
            } (data.birth)


    }







    );
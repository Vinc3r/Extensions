[{"Owner":"JLHolmes","Date":"2018-01-16T03:40:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys... while refactoring some code_co_ I ran off down the path of changing my old picking method (Raycasting_co_ etc) to use actions... specifically OnPickTrigger with ExecuteCodeAction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... I was a bit confused when I could not find the picked point on the mesh in the event data. Am I missing something?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-01-16T15:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya JLH!  Good to see you again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this is normal.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Actions/babylon.actionManager.ts#L6_qt_ rel_eq__qt_external nofollow_qt__gt_ActionEvents_lt_/a_gt_ don_t_t have a _t_picked point_t_.  I don_t_t know WHY they don_t_t_co_ but they don_t_t.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could put a pick right in the middle of the executeCodeAction handler... but did you gain anything?  It still uses a Ray_co_ I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XG8RH3%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XG8RH3#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 17... I put a scene.pick inside my onClickyPoo() executeCodeAction handler.  It works... but... hmm.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt didn_t_t remove any raycasting AT ALL.  SO_co_ I was of _lt_u_gt_no help_lt_/u_gt_ whatsoever_co_ eh?  Yay Wingnut!  heh.  Sorry. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPossibly_co_ a pickingRay is NEEDED... in order to get a picked point.  Maybe there is no other way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStay tuned_co_ others may comment soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JLHolmes","Date":"2018-01-17T06:45:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ Wing... I went ahead and a fell back (ahead? back?) to my old method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m assuming the lack of the picked point is an optimization thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other advantage to scene.pick() is that you can tell when the user _lt_strong_gt_doesn_t_t_lt_/strong_gt_ click on something.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
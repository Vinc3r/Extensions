[{"Owner":"phaselock","Date":"2018-07-26T08:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tErm_co_ again not sure what this is_co_ I tried to create some gui elements and then immediately after use executeOnAllControls to dispose_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23583_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#583_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see in the console that the textblocks created and those disposed are different. Is this due to registerBeforeRender ? Should I be using some other command ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-26T16:01:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello you cannot use executeOnAllControls to dispose then as you are currently iterating through the list\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut you can use executeOnAllControls to build an array of controls and then dispose from this array\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2018-07-27T02:59:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I got it_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23586_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#586_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany thanks !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
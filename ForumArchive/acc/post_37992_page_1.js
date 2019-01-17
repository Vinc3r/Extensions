[{"Owner":"promontis","Date":"2018-06-02T12:37:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently trying to animate the ArcRotateCamera setTarget method. I have several meshes and when selecting one of the meshes I set the camera_t_s target to that mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I don_t_t animate the setTarget it slightly _t_jumps_t_ to a new position in order to better look at the target_co_ which is fine. However_co_ I would like the camera to smoothly do this in an animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried animating the alpha_co_ beta and radius_co_ while copying parts of the code from https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts_co_ namely the rebuildAnglesAndRadius_co_ but I don_t_t get the same values. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThus_co_ when I set the target after the animation_co_ it still slightly (albeit less then previous) jumps. I do need to set the target in order for future camera movements (by either mouse or keys) to continu looking at the target.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould I extend the ArcRotateCamera and build some custom logic in there? I think the problem lies within the subtractToRef call and not being able to properly update the _computationVector from outside the class (in my own code).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you point me in the right correct? Thnx!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-06-03T11:57:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31718-promontis/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31718_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31718-promontis/_qt_ rel_eq__qt__qt__gt_@promontis_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twelcome to BJS froum\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5VM87K%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5VM87K#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5VM87K_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5VM87K_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti use my tools\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust need replace this \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ camera._target.x _eq_ ev.source.position.x _sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twith this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var wx _eq_ new wind()_sm_\nwx.fun _eq_ function (i_co_ par) { camera._target.x _eq_ i_sm_}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ wx.go( ev.source.position.x)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmanage between frame by steps _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5VM87K%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5VM87K#2_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5VM87K%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5VM87K#3_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5VM87K%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5VM87K#6_lt_/a_gt_ // advance  _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-03T14:43:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya P (and Naz)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  Umm... darn_co_ I had a playground somewhere here... but I lost it.  I_t_ll keep looking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I think... you want to animate the Vector3 value in camera.target.  It is a position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a LERP playground... linear interpolation (which is the same system that BJS animation uses to make animations)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#UMQ4UR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#UMQ4UR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand another... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JEHHJ2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#JEHHJ2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot exactly what you were looking-for_co_ but close.  I_t_ll keep looking.  Check back often_co_ please.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3U658N%2312_qt_ rel_eq__qt_external nofollow_qt__gt_Here_t_s another _qt_thing_qt__lt_/a_gt_ which has two hot-looking functions at lines 174 and 180.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope I am on-subject.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-06-04T17:41:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31718-promontis/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31718_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31718-promontis/_qt_ rel_eq__qt__qt__gt_@promontis_lt_/a_gt_ try this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tfunction animateCameraTo(targetX_co_ targetY_co_ targetZ_co_ locationX_co_ locationY_co_ locationZ_co_ speed_co_ frameCount)\n\t\t{\n\t\t\tvar ease _eq_ new BABYLON.CubicEase()_sm_\n\t\t\tease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT)_sm_\n\t\t\tactivCam _eq_ scene.activeCamera_sm_\n\t\t\tcameraTarget _eq_ new BABYLON.Vector3(targetX + (Math.random() * (0.001 - 0.002) + 0.002)_co_ targetY_co_ targetZ)_sm_\n\t\t\tcameraPosition _eq_ new BABYLON.Vector3(locationX_co_ locationY_co_ locationZ)_sm_\n\t\t\tBABYLON.Animation.CreateAndStartAnimation(_t_at4_t__co_ activCam_co_ _t_position_t__co_ speed_co_ frameCount_co_ activCam.position_co_ cameraPosition_co_ 0_co_ ease)_sm_\n\t\t\tBABYLON.Animation.CreateAndStartAnimation(_t_at5_t__co_ activCam_co_ _t_target_t__co_ speed_co_ frameCount_co_ activCam.target_co_ cameraTarget_co_ 0_co_ ease)_sm_\n\t\t}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI added the + random as the cam didn_t_t move if the target was the same (I think that was the reason).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis was adapted from one of _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__t_s demo above._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"vsh91","Date":"2016-07-07T03:00:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_ this is my first time posting here and I am incredibly new to babylon_lt_br /_gt_\n\t.I_t_ve scoured the net looking for a solution to this problem with none yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using engine.resize() on window resize listener and this seems to work when I resize the window vertically.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ there seems to be no horizontal scaling available and when resizing the window horizontally_co_ the image gets cut off instead of shrinking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnybody have a solution?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-07T10:29:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi welcome\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease share any source or part of you code?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vsh91","Date":"2016-07-07T12:18:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey thank you for replying. I think the best example of what I am trying to do is from a previous project I was working on with three.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//people.ucsc.edu/~vshahbaz/boardGame/strat_game.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//people.ucsc.edu/~vshahbaz/boardGame/strat_game.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that resizing with window in either the width or height will not cut out any of the graphics_co_ but instead resize everything within the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow in comparison_co_ this is how my resize function currently works in Babylon_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1GM4YQ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1GM4YQ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tResizing the width of the window will not re-scale the objects within it but instead keep them center. The code I_t_m running is posted below and seems pretty standard for all graphical applications.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.addEventListener(_t_resize_t__co_ function(){\n\tengine.resize()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDo you think the solution I posted in the picture can be converted from THREE to BABYLON? Considering that the engine.resize() code is abstracted so much_co_ I_t_m having a lot of difficulty finding the variables or functions I can use to manually change scaling of the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question I have is if I should even care about horizontal scaling_co_ considering that this form of resizing seems pretty standard.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this clarifies what I_t_m trying to achieve_co_ I_t_m still pretty new to all this and my terminology might be off.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd thank you to anyone that_t_s taking the time to read through this. Any form of potentially time saving knowledge is much appreciated.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/resize_threejs.png.e403180adb5f2268c398b0e73d06e9bd.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8502_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/resize_threejs.png.e403180adb5f2268c398b0e73d06e9bd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_resize_threejs.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-08T10:49:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmaybe your canvas element dom or parent style is wrong\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-08T12:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  I built a little home demo (no playground gui in the way)... and yep_co_ I see this.  BabylonJS (by default) scales the scene per the height of the canvas_co_ and ignores the width.  Mesh on upper and lower screen edges... is always fine.  Mesh on far right or left... goes off-screen easily (using window corner-drag). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have not yet tried adjusting camera horizontal field-of-view (fov)_co_ but maybe I will experiment with that today.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think _lt_em_gt_camera.fovMode _eq_ camera.FOVMODE_VERTICAL_FIXED_lt_/em_gt__sm_   ...will do just the opposite.  Early tests on that... show that the far left/right mesh stay in view_co_ but no promises for far top/bottom.  vsh actually needs a _lt_em_gt_FOVMODE_BOTH_FIXED_lt_/em_gt_ (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.camera.js#L586_qt_ rel_eq__qt_external nofollow_qt__gt_doesn_t_t yet exist or maybe not possible_lt_/a_gt_)_lt_em_gt_.  _lt_/em_gt_ hmm.  Still thinking.  Interesting challenge!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digEmAll","Date":"2017-01-09T18:16:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAny news on this topic ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-16T21:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this issue going to be solved with a new release of the engine?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-16T22:38:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have no open issue for it so I guess so _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-17T07:39:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk _lt_strong_gt_Deltakosh_lt_/strong_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way I understand it must be implemented by means of_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myEngine.fovMode_eq_FOVMODE_VERTICAL_FIXED_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myEngine.fovMode_eq_FOVMODE_HORIZONTAL_FIXED_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAs explained in _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12156-engine-resizing-choose-between-width-or-height-to-take-in-account/_qt_ rel_eq__qt__qt__gt_this other_lt_/a_gt_ thread of this forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
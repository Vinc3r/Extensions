[{"Owner":"MrPage","Date":"2018-04-04T05:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello. Recently I_t_ve decided to move my project from Unity to Babylon_co_ but I met several problems_co_ one of which - mesh batching. Unity have feature called _qt_dynamic batching_qt__co_ which can greatly reduce draw calls. It_t_s automatically merge all meshes with the same material into one_co_ and draw it in single DC (with some nuances). Does Babylon have some similar abilities?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_ and sorry for my English _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-04-04T08:44:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCheck create instance in docks should do what you want_co_ it reuses geometry and material (you can still change position/scale/rotation)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MrPage","Date":"2018-04-04T09:04:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello. Thanks for your suggestion. But when I create for example_co_ 10 meshes and 10 instances for each it still draw each base mesh in particular draw call_co_ although this base meshes share the same material.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-04-04T10:25:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes real meshes don_t_t have any share out of box_co_ only clones and instances. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-04-04T11:53:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31011-mrpage/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31011_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31011-mrpage/_qt_ rel_eq__qt__qt__gt_@MrPage_lt_/a_gt_ hi and welcome to the forum. Babylon.js has several methods to achieve what you want and more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_merge_meshes_qt_ rel_eq__qt_external nofollow_qt__gt_Merge Meshes_lt_/a_gt_  meshes must have same material _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#J5ACF1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#J5ACF1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_instances_qt_ rel_eq__qt_external nofollow_qt__gt_Instances meshes_lt_/a_gt_ must have same material _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#J5ACF1%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#J5ACF1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.mesh#clone_qt_ rel_eq__qt_external nofollow_qt__gt_Cloned meshes_lt_/a_gt_ can have different materials but share geometry _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#J5ACF1%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#J5ACF1#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/solid_particles_qt_ rel_eq__qt_external nofollow_qt__gt_Solid Particle System_lt_/a_gt_  a single mesh formed from one base mesh repeated many times  with shared material (but different colors) _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WCDZS%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WCDZS#7_lt_/a_gt_ and now a single mesh formed from two different meshes repeated many times with shared material (but different colors) _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WCDZS%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WCDZS#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
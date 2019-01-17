[{"Owner":"ozRocker","Date":"2016-12-21T03:14:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI seem to get dirty looking areas on surfaces facing at an angle from the light source.  It literally looks like dirt or grease has been smeared on the model.  I_t_ve attached an image which shows it on the top of the arms_co_ forehead and bridge of the nose.  I_t_ve never seen this kind of effect in any other 3D editor.  I_t_ve been playing around with lighting trying to fix this problem.  I_t_m not sure what I_t_m doing wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve put up a playground here _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#10_lt_/a_gt_ (for some reason I cannot move the camera in the playground)\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/dirty_surface.jpg.b12f9c857970f75759f2562d39c6de59.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10873_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/dirty_surface.jpg.b12f9c857970f75759f2562d39c6de59.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_dirty_surface.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-12-21T03:44:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis comes from the way the ambient is managed in the shader. The greasy looking area should be in shadow but only enhance by ambient. I can also notice that you already have shades in your diffuse so the light is almost not usefull in your model as it it is like a fully baked one. you can then push only the diffuse and disable the light to speed up the rendering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-21T03:58:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156158_qt_ data-ipsquote-contentid_eq__qt_27216_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482291896_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis comes from the way the ambient is managed in the shader. The greasy looking area should be in shadow but only enhance by ambient. I can also notice that you already have shades in your diffuse so the light is almost not usefull in your model as it it is like a fully baked one. you can then push only the diffuse and disable the light to speed up the rendering.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#11_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tisn_t_t this the same as making emissiveColor (1_co_1_co_1) ?  That means there is no lighting effect at all.  Yes there is some light baked into the texture from a light source from above going down.  You can see it on the neck and between the legs.  But I still wanted to add some dynamic lighting so you can see the topology.  But anyway_co_ I don_t_t think those baked shadows are related to the grease/dirt effect\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-21T04:43:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsomething to play around with_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-12-21T04:47:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep same as making emissive white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNope the issue does not come from the baked shadow_co_ nor the lighting but the mix of baked information and lighting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue is also more visible with the use of the bump map. Without it_co_ it still looks weird_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe shaded area seems pretty blue like the top of the forearm for instance but this is also in the diffuse texture itself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou would need to add lighting on top of it either to extract the information and split the textures or use some color curves setup and at last a post process if the rest is not in your plans.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-21T04:52:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156165_qt_ data-ipsquote-contentid_eq__qt_27216_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482295660_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyep same as making emissive white.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNope the issue does not come from the baked shadow_co_ nor the lighting but the mix of baked information and lighting.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe issue is also more visible with the use of the bump map. Without it_co_ it still looks weird_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#12_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe shaded area seems pretty blue like the top of the forearm for instance but this is also in the diffuse texture itself.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou would need to add lighting on top of it either to extract the information and split the textures or use some color curves setup and at last a post process if the rest is not in your plans.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat sounds about right.  Thanks for the tip!  I_t_ll have a play with some extra lights.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ made a cool playground for me to try out so hopefully that will help.  I noticed that Blender also has the same dirty effect when using a point light.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-22T06:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156158_qt_ data-ipsquote-contentid_eq__qt_27216_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482291896_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 21/12/2016 at 2_dd_44 PM_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-22T06:21:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(pls ignore previous post_co_ damn editor won_t_t let me delete quoted text)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve settled for this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19K1J2%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19K1J2#17_lt_/a_gt_  I think it looks reasonable.  Thanx for the help fellas!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
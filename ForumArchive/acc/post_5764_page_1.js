[{"Owner":"demonixis","Date":"2014-04-18T13:24:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m working on the port of a webgl app using Babylon and Ejecta. It seem that i_t_ve a z-buffer issue but I don_t_t know if the problem is from Babylon or from Ejecta. I made a video that you can _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_we4UkUnRvmQ&amp_sm_feature_eq_youtu.be_qt_ rel_eq__qt_external nofollow_qt__gt_watch here_lt_/a_gt_ which show you the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_I tested different configurations with camera projection (minZ and maxZ) but it hasn_t_t solved my problem. Have you an idea ? In fact I don_t_t know where to start to debug this issue._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thanks for your answers _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Yann._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-18T15:34:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is anti-aliasing on?_lt_/p_gt__lt_p_gt_Are they transparent objects?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-19T06:56:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anti-aliasing is on and exteriors walls can be transparents but interior walls aren_t_t._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-20T17:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you try without aa and transparency? just to be sure _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amerkoleci","Date":"2014-04-22T08:13:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The issue is that sometime Babylon.js during clear does not test if depthMask is enabled_co_ this is known OpenGL stuff_co_ something like this would fix this issue_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var depthWriteMask _eq_ this._gl.getParameter(this._gl.DEPTH_WRITEMASK)_sm_// Enable depth mask when clearing depth buffer.                if (!depthWriteMask)                    this._gl.depthMask(true)_sm_                this._gl.clearDepth(1.0)_sm_.. clear// Reset buffer write stateif (!depthWriteMask) {     this._gl.depthMask(false)_sm_  }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-22T23:39:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll fix that for next version!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-23T06:19:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for this tips_co_ I_t_ll try to patch our babylon build asap and see if it solve the problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-23T15:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The problem is still here after applied this patch._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T16:20:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Crap!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-24T07:07:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Don_t_t worry_co_ we_t_ll find why it_t_s not working and we_t_ll solve it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meiroo","Date":"2015-03-02T14:20:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_35420_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5764_qt_ data-ipsquote-username_eq__qt_demonixis_qt_ data-cite_eq__qt_demonixis_qt_ data-ipsquote-timestamp_eq__qt_1398323265_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Don_t_t worry_co_ we_t_ll find why it_t_s not working and we_t_ll solve it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_hi_co_ demonixis_co_ Have you fixed this issue?  I have got this problem too. will you share your solution?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"Raghavender Mylagary","Date":"2016-12-19T15:23:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    I am searching for an example where we can set the video from the webcam as the source for the VideoTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRaghavender Mylagary\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raghavender Mylagary","Date":"2016-12-19T17:58:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI got the solution. Below script worked for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_\n\n\n        (function(){\n            function userMedia(){\n                return navigator.getUserMedia _eq_ navigator.getUserMedia ||\n                    navigator.webkitGetUserMedia ||\n                    navigator.mozGetUserMedia ||\n                    navigator.msGetUserMedia || null_sm_\n\n            }\n\n// Now we can use it\n            if( userMedia() ){\n\n                var constraints _eq_ {\n                    video_dd_ true_co_\n                    audio_dd_false\n                }_sm_\n\n                var media _eq_ navigator.getUserMedia(constraints_co_ function(stream){\n                    var v _eq_ document.getElementById(_t_v_t_)_sm_\n\n// URL Object is different in WebKit\n                    var url _eq_ window.URL || window.webkitURL_sm_\n\n// create the url and set the source of the video element\n                    v.src _eq_ url ? url.createObjectURL(stream) _dd_ stream_sm_\n\n// Start the video\n                    v.play()_sm_\n                }_co_ function(error){\n                    console.log(_qt_ERROR_qt_)_sm_\n                    console.log(error)_sm_\n                })_sm_\n            } else {\n                console.log(_qt_Browser does not support WebCam integration_qt_)_sm_\n            }\n        })()_sm_\n    &lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-12-19T21:03:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is embedded in BJS_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1R77YT%232_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_rgb(255_co_255_co_255)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_https_dd_//www.babylonjs-playground.com#1R77YT#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.VideoTexture.CreateFromWebCam(scene_co_ function(videoTexture) {\n\n}_co_ { maxWidth_dd_ 256_co_ maxHeight_dd_ 256 })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raghavender Mylagary","Date":"2016-12-20T00:42:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the info _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
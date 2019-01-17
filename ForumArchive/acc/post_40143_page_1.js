[{"Owner":"mizuwu","Date":"2018-09-20T18:20:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI want to have less clicks of the arrow keys to pan 360 using ArcRotateCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ for example_co_ if it currently takes me 10 clicks of the left arrow key to do a 360_co_ how can I change it such that it takes me 20 clicks?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks~\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-20T22:23:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis will be possible with next commit using camera.inputs.attached.keyboard.angularSpeed *_eq_ 2\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mizuwu","Date":"2018-09-20T22:57:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_228912_qt_ data-ipsquote-contentid_eq__qt_40143_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537482195_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t24 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis will be possible _lt_span_gt_﻿_lt_/span_gt_wi_lt_span_gt_﻿_lt_/span_gt_th _lt_span_gt_﻿_lt_/span_gt_next commit u_lt_span_gt_﻿_lt_/span_gt_sing camer_lt_span_gt_﻿_lt_/span_gt_a.input_lt_span_gt_﻿_lt_/span_gt_s.a_lt_span_gt_﻿_lt_/span_gt_ttached.keyboa_lt_span_gt_﻿_lt_/span_gt_rd.angularS_lt_span_gt_﻿_lt_/span_gt_peed_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_ *_eq_ 2_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI actually tried solving the above problem by using a map and mapping the different keyboard keys to a function that updates the camera.alpha or camera.beta.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_if_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_map[_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_ArrowRight_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_]){_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_  camera.alpha -_eq_ Math.PI_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm_ // This achieves a solution that I was aiming for_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_  map[_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_ArrowRight_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_] _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_undefined_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tBut the way the camera moves is very stiff as it moves directly to that position without the smooth transitions that the default settings propose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I make the transitions smoother?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-21T15:41:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif you update camera.alpha or beta directly there will be no inertia\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou should just use the angularSpeed I mentioned previously or update camera.inertialAlphaOffset\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mizuwu","Date":"2018-09-21T18:01:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_228991_qt_ data-ipsquote-contentid_eq__qt_40143_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537544519_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif you update camera.alpha or beta directly there will be no inertia\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tyou should just use t_lt_span_gt_﻿_lt_/span_gt_he angula_lt_span_gt_﻿_lt_/span_gt_rSpeed_lt_span_gt_﻿_lt_/span_gt_ I mentione_lt_span_gt_﻿_lt_/span_gt_d_lt_span_gt_﻿_lt_/span_gt_ previously or _lt_span_gt_﻿_lt_/span_gt_update camera.inertialAlphaOffset_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI like the angularSpeed solution_co_ but is there also a way for the inertia to stop once it reaches the next specific point that I want it to rotate to?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-21T18:04:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell yes but you will have to check manually what is the current value of alpha and then set inertialAlphaoffset to 0\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mizuwu","Date":"2018-09-21T23:28:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229005_qt_ data-ipsquote-contentid_eq__qt_40143_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537553071_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWell yes but you will have to check manually what is the current value of alpha and then set inertialAlphaoffset to 0\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you so much for your help! One last question_co_ how can I differentiate events for when a key is pressed vs when a key is held.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-24T16:26:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou will need to manually trigger it by checking keydown and keyup\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"JCPalmer","Date":"2018-06-28T15:15:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt errors when you are building a radio button_co_ &amp_sm_ possibly other controls_co_ and want to pre-assign whether it is checked_co_ before showing it or connecting / adding it to a container (_host).  You get a  _t_executeOnAllControls_t_ of undefined_co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/2D/controls/radioButton.ts#L80_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  I am getting around this by directly assigning _isChecked.  Since this is being written in typescript &amp_sm_ that is private it must be_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tradio[_qt__isChecked_qt_] _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThinking_co_ checking if _host is not null might be a good idea.  True_co_ you could screw it up by checking multiples of the same group in initialization_co_ but it should be obvious that this is developer error.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-28T15:18:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyeah I will improve that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the heads up\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
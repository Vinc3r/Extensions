[{"Owner":"MackeyK24","Date":"2017-09-03T09:14:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ ... I got a DELTA question for you...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the industry uses terms like _t_delta_t_ position and rotation _co_ is that just the current position and rotation SUBTRACT the last position and rotation. ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it ALWAYS SUBTRACTED from even with negative values ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got my Animation System going pretty good so far (except blend trees) I even now have a real Root Motion system where the motion (translation and rotation) of the root transform actually drives the movement of the character... its supposed to provide better animated move since you not syncing the animation with the movement of the container object (including speed or magnitude)... but the animations _t_root motion_t_ drives the movement of the container.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn unity...The Animator Component has runtime properties you would use to _t_apply. root motion_t_ to your character_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanimator.rootPosition\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanimator.rootRotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanimator.deltaPosition\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanimator.deltaRotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf your just wanna translate your container mesh around_co_ in an update loop your do something like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_transform.position _eq_ animator.rootPosition_sm_\ntransform.rotation _eq_ animator.rootRotation_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand to move with velocity_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Vector3 v _eq_ (animator.deltaPosition * moveSpeedMultiplier) / this.manager.deltaTime_sm_\n// we preserve the existing y part of the current velocity.\nv.y _eq_ physicsImposter.getLinearVelocity().y_sm_\nphysicsImposter.setLinearVelocity(v)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI can_t_t find were they actually calculate _t_deltaPosition_t_ but I assume that is current position SUBTRACT lastPosition...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow would I code keeping a position delta with the vector ref stuff_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private _rootPosition_dd_Vector3\nprivate _lastPosition_dd_Vector2\nprivate _deltaPosition_dd_Vector2\n\npublic get deltaPosition()_dd_Vector3 {\n  return this._deltaPosition_sm_\n}\n\n// A Fixed Update After Render Loop\nprotected fixed() _dd_ void {\n  this._rootPosition.substractToRef(this._lastPosition_co_ this._deltaPosition)_sm_\n  this._lastPosition.x _eq_ this._rootPosition.x_sm_\n  this._lastPosition.y _eq_ this._rootPosition.y_sm_\n  this._lastPosition.z _eq_ this._rootPosition.z_sm_\n  \n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthen I could either use the Root Motion position and rotation directly OR use Root Motion Delta position and time where I need to accumulate the position and rotation... like setting velocity on physics for movement.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-09-03T10:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDelta is change in value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.quora.com/What-does-delta-mean-in-math_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.quora.com/What-does-delta-mean-in-math_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-09-03T10:24:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187580_qt_ data-ipsquote-contentid_eq__qt_32728_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504434058_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDelta is change in value.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.quora.com/What-does-delta-mean-in-math_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.quora.com/What-does-delta-mean-in-math_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t Yo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ thanks for the reply which basically says D _eq_ T2 - T1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo what I described above should be right then??? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._rootPosition.subtractToRef(_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._lastPosition_co_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._deltaPosition)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-09-03T10:27:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it makes more sense to add delta.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_  Sorry_co_ yes that is how you compute delta.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-09-03T10:46:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187584_qt_ data-ipsquote-contentid_eq__qt_32728_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504434453_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think it makes more sense to add delta.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tEdit_dd_  Sorry_co_ yes that is how you compute delta.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tKool... So just to clarify (before I got putting it in the toolkit to calc the delta for the root motion of the current playing animation) I wanna make sure..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese are my two delta updaters... They update the the _qt_state machine_qt_ metadata directly... this is the same spot the state machine uses for state machine parameter that you create in the animator editor window... Like Forward_co_ Turn_co_ IsGounded etc (like unity uses).. They should be Kool_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        private updateDeltaPosition()_dd_void {\n            if (this.owned.metadata !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.deltaPosition !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.lastPosition !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.rootPosition !_eq_ null) {\n                               this.owned.metadata.state.rootPosition.subtractToRef(this.owned.metadata.state.lastPosition_co_ this.owned.metadata.state.deltaPosition)_sm_\n                this.owned.metadata.state.lastPosition.x _eq_ this.owned.metadata.state.rootPosition.x_sm_\n                this.owned.metadata.state.lastPosition.y _eq_ this.owned.metadata.state.rootPosition.y_sm_\n                this.owned.metadata.state.lastPosition.z _eq_ this.owned.metadata.state.rootPosition.z_sm_\n            }\n        }\n        private updateDeltaRotation()_dd_void {\n            if (this.owned.metadata !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.deltaRotation !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.lastRotation !_eq_ null &amp_sm_&amp_sm_ this.owned.metadata.state.rootRotation !_eq_ null) {\n                this.owned.metadata.state.rootRotation.subtractToRef(this.owned.metadata.state.lastRotation_co_ this.owned.metadata.state.deltaRotation)_sm_\n                this.owned.metadata.state.lastRotation.x _eq_ this.owned.metadata.state.rootRotation.x_sm_\n                this.owned.metadata.state.lastRotation.y _eq_ this.owned.metadata.state.rootRotation.y_sm_\n                this.owned.metadata.state.lastRotation.z _eq_ this.owned.metadata.state.rootRotation.z_sm_\n            }\n        }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst I subtract the lastPosition from the current rootPosition as current delta position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I set the last position buffers to the current root position buffers for evaluation next frame\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut current delta position should be right in the 3d game world as _t_Delta Position_t_ ... Is that correct (I_t_m still newbie to 3d game programming and I can_t_t seem to find anywhere in unity docs about exactly the calculation for this Root Motion Delta)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t.. Dude... Thanks for the help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-09-03T11:21:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBTW.. the above code test... so far... I have working Root Motion with translation movement and physics movement... SO FAR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_strong_gt_EDIT_dd__lt_/strong_gt__lt_/u_gt_ I take that back... Rotation is fuckup... But that just me and rotations... I always have problems with rotations _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut the concept seems to be working... I will keep working on it...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRoot Motions seem to be the way the industry is change to... Almost all the Mixamo animations are Root Motion and only a few have the option to download an in-place version of it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
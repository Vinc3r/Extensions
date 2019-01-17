[{"Owner":"dbawel","Date":"2015-08-24T04:12:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello to all the rouges out there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a scene with a GUI (interface) that uses 28 textures on babylon plane objects.  I_t_m using bGUI for the interface_co_ however_co_ this appears to have nothing to do with bGUI as I_t_ve observed this behavior in previous scenes without any interface or GUI.  The problem is that once I reached approximately 10+ textures (in this case)_co_ I began to notice that about 10 percent of the time any one of the textures (chosen at random) weren_t_t loading_co_ and the scene was displaying black on the plane mesh - appearing as though the texture didn_t_t load into memory.  I had to refresh (sometimes more than once) to load all textures.  This only occurs for a single texture everytime it occurs_co_ and my largest texture resolution is 300px X 300px.  I am using a dynamic texture and painting on an object through the canvas - if this provides any additional useful information._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ in increasing the number of textures_co_ this problem increased slightly - until I reached 28 textures_co_ when the problem wouldn_t_t resolve even with repeated refresh.  It is always one texture_co_ and no more.  I also removed a texture and it_t_s associated code_co_ and the problem persists every time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve tried adding texture.update()_sm_ and textureComplete _eq_ true_sm_ but perhaps I_t_m not using these correctly or in the best location in my script._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I welcome any suggestions_co_ and thank everyone in advance for reading this post._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-08-24T04:34:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_OK_co_ I don_t_t have any REAL answer_co_ however_co_ I did find that the problem is with the very last texture I load in my script.  This is not always the texture which doesn_t_t load and of couse displays black - but it is the very last texture I load in sequence in my script which doesn_t_t load 99% of the time when this problem arrises.  My current solution?  I added a small texture which I don_t_t require at all for my scene to load as the last texture in my script and into memory.  Now all my textures load 100% of the time - except for the last one in my script which I don_t_t need and am using as a dummy fix until I or someone else finds the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Crazy_co_ huh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ actually_co_ it still doesn_t_t load 100% of the time_co_ but perhaps 98% of the time now._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-28T14:14:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DB!  I built a playground to try to see the issue that you see.  I was successful at building the playground_co_ but I failed to rep_lt_u_gt_r_lt_/u_gt_oduce the symptom.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#18ORWK_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#18ORWK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_div_gt_\n\t\t\t_lt_p_gt_\n\t\t\t\tI am using a dynamic texture and painting on an object through the canvas - if this provides any additional useful information.\n\t\t\t_lt_/p_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ yes it does. That might be where the problem is.  Can you adjust my playground to _qt_simulate_qt_ that?  All in all_co_ do anything to that playground scene (and re-save many times if wanted)... that you can think-up... to try to _qt_rep_lt_u_gt_r_lt_/u_gt_o_qt_.  Maybe we load the textures into dynamicTexture 2d buffer and THEN use each dynamic texture as the mat.diffuseTexture?  How can we make this playground... simulate YOUR situation?   Can we?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll give it more thought_co_ but_co_ according to current trends_co_ when I think about things_co_ they get worse.  _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOut of curiosity_co_ what version of BJS are you using?  Any other pertinent info that you might have... do tell.  thx.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB...  did you mean rogue?   I_t_m no rouge.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  (last I tested). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the French invented _qt_rouge_qt__co_ so there_t_s lots of experts nearby.  And one can only wonder what the slang of that word... means in France.  Milktoast?  hah!   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like it_co_ though.  I will accuse my chat buddy in Kentucky... of being _qt_a rouge_qt__co_ and see how he reacts.  I hope he understands _lt_u_gt_which_lt_/u_gt_ _lt_u_gt_cheeks_lt_/u_gt_ get the red coloring.  _dd_x\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[A wink to DK for the underscored _t_r_t_.  _t_repo_t_ is for git_co_ _t_rep_lt_u_gt_r_lt_/u_gt_o_t_ is for playgrounds_co_ ya silly rouge.]  hehe\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-28T15:40:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Rouge means _qt_Red_qt_ in french _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-28T17:53:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In French we say_co_ I am _t_green_t_._lt_/p_gt__lt_p_gt_like Hulk when he is all green  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-31T15:07:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Hope we didn_t_t ruin the thread_co_ DB.  Any progress?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m a huge fan of French toast... but it_t_s still a bit of a hassle to make it_co_ quickly.  I bought a used French toaster on Ebay... but I didn_t_t get the machine that I had hoped-for.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Is French toast called French toast... in France?  Same situation with French fries.  I suppose there is French French toast and French French fries_co_ eh?  weird._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__qt_I_t_ll have some French American fries_co_ and some American French fries_co_ please._qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-09-01T19:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I meant to type rogue_co_ but rouge works as well - specifically baton rouge_co_ which means _qt_red stick._qt_  Actually_co_ I_t_m not sure what I meant to say with this at all.  I just thought I_t_d avoid saying the standard _qt_Hey Guys_qt__co_ or _qt_Hi_qt__co_ or _qt_Hello Babylonians_qt__co_ etc.  I_t_ll have to come up with something better for future posts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ I haven_t_t been able to reproduce this in the playground either_co_ so perhaps it_t_s due to the extensions I_t_m using_co_ the dynamic textures_co_ or any of the various functions I_t_ve built for my app.  I_t_ll continue to try and find scenes where this happens_co_ and as soon as I find a second one_co_ then I should have more info as to why the last texture in my script won_t_t load.  But for now_co_ with the _qt_dummy_qt_ texture listed as the last to load in the script_co_ all other textures load correctly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hell_co_ it could even be a timing issue with our server.  Hopefully_co_ it isn_t_t a bug_co_ but we_t_ll only know as time passes and more apps are built.  And I_t_m going to continue to add fetures to this app_co_ so perhaps this might become more of an issue as I add more functions.  I_t_ll certainly let the forum know if I see anything further.  But for now_co_ I_t_m happy to have a solution - even if it isn_t_t the most elegant_co_ or even really a solution_co_ but more of a _qt_trick._qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And Wingnut_co_ humor is always welcome. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
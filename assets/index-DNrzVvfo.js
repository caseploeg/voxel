var xl=Object.defineProperty;var bl=(n,e,t)=>e in n?xl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var wi=(n,e,t)=>bl(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Ml="/voxel/assets/acacia_door_bottom-wm3IcILR.png",yl="/voxel/assets/acacia_door_top-BTXKefOa.png",Sl="/voxel/assets/acacia_leaves-CqnO2CSv.png",El="/voxel/assets/acacia_log-DFulg2wI.png",Tl="/voxel/assets/acacia_log_top-DVF66kA1.png",wl="/voxel/assets/acacia_planks-SJud7O1I.png",Cl="/voxel/assets/acacia_sapling-DjMvpGYF.png",Al="/voxel/assets/acacia_trapdoor-WzkrRhL9.png",Rl="/voxel/assets/activator_rail-_0r_XsPu.png",Dl="/voxel/assets/activator_rail_on-DZze8p3Y.png",Pl="/voxel/assets/allium-D4TdDsuZ.png",Ll="/voxel/assets/amethyst_block-CWV_yQ6P.png",Il="/voxel/assets/amethyst_cluster-C-NdVLTB.png",Ul="/voxel/assets/ancient_debris_side-BPiCM0y5.png",kl="/voxel/assets/ancient_debris_top-BPe6AwPm.png",Nl="/voxel/assets/andesite-yY2NBTJ7.png",Fl="/voxel/assets/anvil-JMYed_KJ.png",Bl="/voxel/assets/anvil_top-CjFqCHN6.png",Ol="/voxel/assets/attached_melon_stem-8_AaM7Ct.png",zl="/voxel/assets/attached_melon_stem-8_AaM7Ct.png",Vl="/voxel/assets/azalea_leaves-BEyYQpky.png",Hl="/voxel/assets/azalea_plant-CK1c59R3.png",Gl="/voxel/assets/azalea_side-CGzm5IVW.png",Wl="/voxel/assets/azalea_top-CCJDKY9c.png",Xl="/voxel/assets/azure_bluet-Ch0K_q8u.png",ql="/voxel/assets/bamboo_block-CuS_OV0p.png",Yl="/voxel/assets/bamboo_block_top-eKnHp2CT.png",jl="/voxel/assets/bamboo_door_bottom-1llIhA7A.png",Kl="/voxel/assets/bamboo_door_top-BDp3N681.png",Zl="/voxel/assets/bamboo_fence-C9AcSOL0.png",$l="/voxel/assets/bamboo_fence_gate-M6NpRY54.png",Jl="/voxel/assets/bamboo_fence_particle-CMMWL_c8.png",Ql="/voxel/assets/bamboo_fence_particle-CMMWL_c8.png",ec="/voxel/assets/bamboo_large_leaves-DdIsiUjL.png",tc="/voxel/assets/bamboo_mosaic-DO4FUev8.png",sc="/voxel/assets/bamboo_planks-ChRv-QUP.png",nc="/voxel/assets/bamboo_singleleaf-D8-khL0f.png",ic="/voxel/assets/bamboo_small_leaves-BJ1zwe_g.png",oc="/voxel/assets/bamboo_stage0-CFqLeCml.png",rc="/voxel/assets/bamboo_stalk-17VuWI1J.png",ac="/voxel/assets/bamboo_trapdoor-2rfi5yrW.png",lc="/voxel/assets/barrel_bottom-QM8wuDwt.png",cc="/voxel/assets/barrel_side-CuCprBvu.png",uc="/voxel/assets/barrel_top-DAr0YXBB.png",_c="/voxel/assets/barrel_top_open-CIhBRMG0.png",hc="/voxel/assets/basalt_side-pOVB-1jS.png",dc="/voxel/assets/basalt_top-Dv8Zkz_m.png",pc="/voxel/assets/beacon-DBysb3MS.png",fc="/voxel/assets/bedrock-mqGjQhId.png",gc="/voxel/assets/bee_nest_bottom-PgJV7pJk.png",mc="/voxel/assets/bee_nest_front-DWEjv4BK.png",vc="/voxel/assets/bee_nest_front_honey-ZOiQ1PLF.png",xc="/voxel/assets/bee_nest_side-rC62BaCq.png",bc="/voxel/assets/bee_nest_top-WkGINmU-.png",Mc="/voxel/assets/beehive_end-DbTx5-sT.png",yc="/voxel/assets/beehive_front-DLMq__0C.png",Sc="/voxel/assets/beehive_front_honey-DQ8jTNG9.png",Ec="/voxel/assets/beehive_side-n8MotJIN.png",Tc="/voxel/assets/beetroots_stage0-yHIuKgVb.png",wc="/voxel/assets/beetroots_stage1-BLxzzJqb.png",Cc="/voxel/assets/beetroots_stage2-BGWTj5mO.png",Ac="/voxel/assets/beetroots_stage3-C_h2vTKn.png",Rc="/voxel/assets/bell_bottom-T39nVD44.png",Dc="/voxel/assets/bell_side-qybLsyLH.png",Pc="/voxel/assets/bell_top-o-BUy0IW.png",Lc="/voxel/assets/big_dripleaf_side-BZ_yRXkz.png",Ic="/voxel/assets/big_dripleaf_stem-B5xOSqkQ.png",Uc="/voxel/assets/big_dripleaf_tip-D8P6WO4k.png",kc="/voxel/assets/big_dripleaf_top-DLJFmx_F.png",Nc="/voxel/assets/birch_door_bottom-BQ9YRqw8.png",Fc="/voxel/assets/birch_door_top-BeOfojGq.png",Bc="/voxel/assets/birch_leaves-DJfW-d1L.png",Oc="/voxel/assets/birch_log-BPizCARX.png",zc="/voxel/assets/birch_log_top-AcG3JGb7.png",Vc="/voxel/assets/birch_planks-BfXGftO4.png",Hc="/voxel/assets/birch_sapling-CyZouHVb.png",Gc="/voxel/assets/birch_trapdoor-BlSN0TM1.png",Wc="/voxel/assets/black_candle-CBW2-a0k.png",Xc="/voxel/assets/black_candle_lit-bkyqB7D7.png",qc="/voxel/assets/black_concrete-DrTEu5-8.png",Yc="/voxel/assets/black_concrete_powder-RCJdxBWV.png",jc="/voxel/assets/black_glazed_terracotta-DhigRaAf.png",Kc="/voxel/assets/black_shulker_box-pekroN7n.png",Zc="/voxel/assets/black_stained_glass-C8pjEM7e.png",$c="/voxel/assets/black_stained_glass_pane_top-Dgv5gylD.png",Jc="/voxel/assets/black_terracotta-ImL1czNL.png",Qc="/voxel/assets/black_wool-RiRWfBDy.png",eu="/voxel/assets/blackstone-C2ari_la.png",tu="/voxel/assets/blackstone_top-B52WNZeG.png",su="/voxel/assets/blast_furnace_front-D5_p70Cj.png",nu="/voxel/assets/blast_furnace_front_on-B7dpW35R.png",iu="/voxel/assets/blast_furnace_side-CN0kvV45.png",ou="/voxel/assets/blast_furnace_top-BnX-r2g6.png",ru="/voxel/assets/blue_candle-dWXkO_D3.png",au="/voxel/assets/blue_candle_lit-O13HgCXg.png",lu="/voxel/assets/blue_concrete-BRz8muuk.png",cu="/voxel/assets/blue_concrete_powder-DtQwkR22.png",uu="/voxel/assets/blue_glazed_terracotta-rVMNWdZT.png",_u="/voxel/assets/blue_ice-Cc0Mzh1o.png",hu="/voxel/assets/blue_orchid-DVWeLhO8.png",du="/voxel/assets/blue_shulker_box-OOkMGwP1.png",pu="/voxel/assets/blue_stained_glass-DaRbWnKk.png",fu="/voxel/assets/blue_stained_glass_pane_top-BvVaCeaI.png",gu="/voxel/assets/blue_terracotta-CfayORU8.png",mu="/voxel/assets/blue_wool-CbkhsESF.png",vu="/voxel/assets/bone_block_side-DJBwXztb.png",xu="/voxel/assets/bone_block_top-CpBCSTtz.png",bu="/voxel/assets/bookshelf-CUqOkkHq.png",Mu="/voxel/assets/brain_coral-CY0DVPOg.png",yu="/voxel/assets/brain_coral_block-zAA02-Im.png",Su="/voxel/assets/brain_coral_fan-Do3mFEX3.png",Eu="/voxel/assets/brewing_stand-Bv9pK1lq.png",Tu="/voxel/assets/brewing_stand_base-BjkQj7wj.png",wu="/voxel/assets/bricks-vAX7RP7B.png",Cu="/voxel/assets/brown_candle-BVKkoAz6.png",Au="/voxel/assets/brown_candle_lit-CqTo_O8y.png",Ru="/voxel/assets/brown_concrete-9QjjU13A.png",Du="/voxel/assets/brown_concrete_powder-B5QIGHaw.png",Pu="/voxel/assets/brown_glazed_terracotta-DVUPoI-V.png",Lu="/voxel/assets/brown_mushroom-DtpxCjdS.png",Iu="/voxel/assets/brown_mushroom_block-VOnU-8dd.png",Uu="/voxel/assets/brown_shulker_box-MRXdNSeH.png",ku="/voxel/assets/brown_stained_glass-7iEp6kFi.png",Nu="/voxel/assets/brown_stained_glass_pane_top-USuRx0Qh.png",Fu="/voxel/assets/brown_terracotta-2Bnn46IR.png",Bu="/voxel/assets/brown_wool-WshD9RTn.png",Ou="/voxel/assets/bubble_coral-DumEVMXz.png",zu="/voxel/assets/bubble_coral_block-B4196yZr.png",Vu="/voxel/assets/bubble_coral_fan-BjJOwbQq.png",Hu="/voxel/assets/budding_amethyst-RaXnAoJc.png",Gu="/voxel/assets/cactus_bottom-XGxf0fQU.png",Wu="/voxel/assets/cactus_side-BaJ1bFvP.png",Xu="/voxel/assets/cactus_top-DZ2bZIdd.png",qu="/voxel/assets/cake_bottom-Brij_etW.png",Yu="/voxel/assets/cake_inner-CAIFyDJE.png",ju="/voxel/assets/cake_side-D8otHCi8.png",Ku="/voxel/assets/cake_top-CIH7NnlC.png",Zu="/voxel/assets/calcite-BhfxdeMf.png",$u="/voxel/assets/calibrated_sculk_sensor_amethyst-CSMiWzU0.png",Ju="/voxel/assets/calibrated_sculk_sensor_input_side-Bc_iurXr.png",Qu="/voxel/assets/calibrated_sculk_sensor_top-JkBtAaFa.png",e_="/voxel/assets/campfire_fire-CqjxxVwM.png",t_="/voxel/assets/campfire_log-DUgaHmSg.png",s_="/voxel/assets/campfire_log_lit-qcPGlzwE.png",n_="/voxel/assets/candle-BPqCmj_Y.png",i_="/voxel/assets/candle_lit-CYv9MTmI.png",o_="/voxel/assets/carrots_stage0-li5UYubo.png",r_="/voxel/assets/carrots_stage1-BZ_jL8Dc.png",a_="/voxel/assets/carrots_stage2-Dm67XXN6.png",l_="/voxel/assets/carrots_stage3-Dpw4rETE.png",c_="/voxel/assets/cartography_table_side1-N9xaX7j-.png",u_="/voxel/assets/cartography_table_side2-wxY8ewRt.png",__="/voxel/assets/cartography_table_side3-BfzQS2Zs.png",h_="/voxel/assets/cartography_table_top-u31JBiRb.png",d_="/voxel/assets/carved_pumpkin-L6_NxM3N.png",p_="/voxel/assets/cauldron_bottom-DjJPL8gh.png",f_="/voxel/assets/hopper_inside-Bskfvs9k.png",g_="/voxel/assets/cauldron_side-Br9c0D3z.png",m_="/voxel/assets/cauldron_top-D4D9Xji7.png",v_="/voxel/assets/cave_vines-C9vxLtVZ.png",x_="/voxel/assets/cave_vines_lit-B6lfBesP.png",b_="/voxel/assets/cave_vines_plant-CKsDIhEC.png",M_="/voxel/assets/cave_vines_plant_lit-yQ_6LJpU.png",y_="/voxel/assets/chain-DBcPNN5u.png",S_="/voxel/assets/chain_command_block_back-BjgzzoAq.png",E_="/voxel/assets/chain_command_block_conditional-DIIf5hzM.png",T_="/voxel/assets/chain_command_block_front-8a8mdENJ.png",w_="/voxel/assets/chain_command_block_side-BVxZfg0f.png",C_="/voxel/assets/cherry_door_bottom-2BOQeB8U.png",A_="/voxel/assets/cherry_door_top-6lVglfki.png",R_="/voxel/assets/cherry_leaves-BrfyUtwb.png",D_="/voxel/assets/cherry_log-DbcxAK9y.png",P_="/voxel/assets/cherry_log_top-zP31vYYp.png",L_="/voxel/assets/cherry_planks-CdxvcNFy.png",I_="/voxel/assets/cherry_sapling-C-sLFnlM.png",U_="/voxel/assets/cherry_trapdoor-DNpIajiz.png",k_="/voxel/assets/chipped_anvil_top-CVAInYTC.png",N_="/voxel/assets/chiseled_bookshelf_empty-BUGRxEgk.png",F_="/voxel/assets/chiseled_bookshelf_occupied-DULbA1df.png",B_="/voxel/assets/chiseled_bookshelf_side-rM5VWwAH.png",O_="/voxel/assets/chiseled_bookshelf_top-BCG4yg3g.png",z_="/voxel/assets/chiseled_copper-B0FlMSKA.png",V_="/voxel/assets/chiseled_deepslate-C-Y0vjUo.png",H_="/voxel/assets/chiseled_nether_bricks-WNTW10Hc.png",G_="/voxel/assets/chiseled_polished_blackstone-m5Pd7u1r.png",W_="/voxel/assets/chiseled_quartz_block-C9ART56f.png",X_="/voxel/assets/chiseled_quartz_block_top-BiyPdJ1_.png",q_="/voxel/assets/chiseled_red_sandstone-DEZpWA3A.png",Y_="/voxel/assets/chiseled_sandstone-DQ16imzB.png",j_="/voxel/assets/chiseled_stone_bricks-CGR31oUS.png",K_="/voxel/assets/chiseled_tuff-DMW1JYea.png",Z_="/voxel/assets/chiseled_tuff_bricks-1a264tL4.png",$_="/voxel/assets/chiseled_tuff_bricks_top-COvVcHJH.png",J_="/voxel/assets/chiseled_tuff_top-xXhHyQC7.png",Q_="/voxel/assets/chorus_flower-DizUJKou.png",eh="/voxel/assets/chorus_flower_dead-DY6NRGS4.png",th="/voxel/assets/chorus_plant-BRVbNdHE.png",sh="/voxel/assets/clay-B0y6kfYZ.png",nh="/voxel/assets/coal_block-De2KIZVK.png",ih="/voxel/assets/coal_ore-CQIxwYYg.png",oh="/voxel/assets/coarse_dirt-CHJQAFaI.png",rh="/voxel/assets/cobbled_deepslate-5zfvFNW2.png",ah="/voxel/assets/cobblestone-BIPd7Rtv.png",lh="/voxel/assets/cobweb-bSsUYhLc.png",ch="/voxel/assets/cocoa_stage0-B46CBE50.png",uh="/voxel/assets/cocoa_stage1-DIxfDPT2.png",_h="/voxel/assets/cocoa_stage2-DF1VsDZr.png",hh="/voxel/assets/command_block_back-CQsWdBdm.png",dh="/voxel/assets/command_block_conditional-BkJhQGNp.png",ph="/voxel/assets/command_block_front-DPEFX_Ql.png",fh="/voxel/assets/command_block_side-BWAE6IIN.png",gh="/voxel/assets/comparator-CfpxQVOn.png",mh="/voxel/assets/comparator_on-Cke9eXrt.png",vh="/voxel/assets/composter_bottom-DV7RiU89.png",xh="/voxel/assets/composter_compost-B4DhHYVy.png",bh="/voxel/assets/composter_ready-B9fnB1PR.png",Mh="/voxel/assets/composter_side-pLlt8U_T.png",yh="/voxel/assets/composter_top-DXyk4L35.png",Sh="/voxel/assets/conduit-B6980r9d.png",Eh="/voxel/assets/copper_block-CU5VaTUZ.png",Th="/voxel/assets/copper_bulb-DbIEpkEp.png",wh="/voxel/assets/copper_bulb_lit-B6VtGEET.png",Ch="/voxel/assets/copper_bulb_lit_powered-C5-L8cLe.png",Ah="/voxel/assets/copper_bulb_powered-CBAj80QZ.png",Rh="/voxel/assets/copper_door_bottom-BziRzQE1.png",Dh="/voxel/assets/copper_door_top-BG9n732d.png",Ph="/voxel/assets/copper_grate-B7zV5Rtu.png",Lh="/voxel/assets/copper_ore-DoYxFH4L.png",Ih="/voxel/assets/copper_trapdoor-BTKmSvQx.png",Uh="/voxel/assets/cornflower-DBEfTvN7.png",kh="/voxel/assets/cracked_deepslate_bricks-DvyXEFKm.png",Nh="/voxel/assets/cracked_deepslate_tiles-Bp7jCWeU.png",Fh="/voxel/assets/cracked_nether_bricks-CfLBYu5M.png",Bh="/voxel/assets/cracked_polished_blackstone_bricks-C3wP6J8D.png",Oh="/voxel/assets/cracked_stone_bricks-wR8ssRXv.png",zh="/voxel/assets/crafter_bottom-DqTKTMS9.png",Vh="/voxel/assets/crafter_east-BJd5qovb.png",Hh="/voxel/assets/crafter_east_crafting-BG2Skbx7.png",Gh="/voxel/assets/crafter_east_triggered-DbWCvj4i.png",Wh="/voxel/assets/crafter_north-CnMWLrZK.png",Xh="/voxel/assets/crafter_north_crafting-D2koZg81.png",qh="/voxel/assets/crafter_south-C4gXpfVl.png",Yh="/voxel/assets/crafter_south_triggered-DMNBuCFQ.png",jh="/voxel/assets/crafter_top-CHNjSz27.png",Kh="/voxel/assets/crafter_top_crafting-j0Btx2uU.png",Zh="/voxel/assets/crafter_top_triggered-B7sC4aBr.png",$h="/voxel/assets/crafter_west-CTbTXXin.png",Jh="/voxel/assets/crafter_west_crafting-Clk5fLlP.png",Qh="/voxel/assets/crafter_west_triggered-CwS0txPp.png",ed="/voxel/assets/crafting_table_front-Bi67CGcQ.png",td="/voxel/assets/crafting_table_side-Dg2Q92Eq.png",sd="/voxel/assets/crafting_table_top-CRk_VrIc.png",nd="/voxel/assets/crimson_door_bottom-CPZqHI24.png",id="/voxel/assets/crimson_door_top-BipuaXoR.png",od="/voxel/assets/crimson_fungus-DjmzrSnI.png",rd="/voxel/assets/crimson_nylium-B9BHGWnF.png",ad="/voxel/assets/crimson_nylium_side-CvVvKDBn.png",ld="/voxel/assets/crimson_planks-Xt7gRpod.png",cd="/voxel/assets/crimson_roots-DTabO4U3.png",ud="/voxel/assets/crimson_roots_pot-Cd1SIgy5.png",_d="/voxel/assets/crimson_stem-Chdqh9t7.png",hd="/voxel/assets/crimson_stem_top-BTLk3B71.png",dd="/voxel/assets/crimson_trapdoor-BRHgDWag.png",pd="/voxel/assets/crying_obsidian-DdrC6xQP.png",fd="/voxel/assets/cut_copper-V-XbWKaC.png",gd="/voxel/assets/cut_red_sandstone-BWsxyJpi.png",md="/voxel/assets/cut_sandstone-CJCrxaYX.png",vd="/voxel/assets/cyan_candle-DoCfst8c.png",xd="/voxel/assets/cyan_candle_lit-BrFnW3X1.png",bd="/voxel/assets/cyan_concrete-S1G1rLu4.png",Md="/voxel/assets/cyan_concrete_powder-6A9JeHMs.png",yd="/voxel/assets/cyan_glazed_terracotta-BBDoMdNU.png",Sd="/voxel/assets/cyan_shulker_box-DsEgzgAq.png",Ed="/voxel/assets/cyan_stained_glass-B1lp67tb.png",Td="/voxel/assets/cyan_stained_glass_pane_top-DIQeYwFS.png",wd="/voxel/assets/cyan_terracotta-BkzRnnew.png",Cd="/voxel/assets/cyan_wool-DC8Do14i.png",Ad="/voxel/assets/damaged_anvil_top-BncqjI76.png",Rd="/voxel/assets/dandelion-D0ZTwX-C.png",Dd="/voxel/assets/dark_oak_door_bottom-CWw842lz.png",Pd="/voxel/assets/dark_oak_door_top--yj0KfMP.png",Ld="/voxel/assets/dark_oak_leaves-CUq9zjHr.png",Id="/voxel/assets/dark_oak_log-B-ChA5GY.png",Ud="/voxel/assets/dark_oak_log_top-Cb9zJ-sb.png",kd="/voxel/assets/dark_oak_planks-BshcwuVp.png",Nd="/voxel/assets/dark_oak_sapling-DN3tRJ5D.png",Fd="/voxel/assets/dark_oak_trapdoor-odlFEqyA.png",Bd="/voxel/assets/dark_prismarine-CNG2KArB.png",Od="/voxel/assets/daylight_detector_inverted_top-B--kcTOr.png",zd="/voxel/assets/daylight_detector_side-uDLaoqou.png",Vd="/voxel/assets/daylight_detector_top-7pL2IdwJ.png",Hd="/voxel/assets/dead_brain_coral-Bp0-fOn_.png",Gd="/voxel/assets/dead_brain_coral_block-3vhC0lmy.png",Wd="/voxel/assets/dead_brain_coral_fan-DBLjPzMz.png",Xd="/voxel/assets/dead_bubble_coral-B0VIoEro.png",qd="/voxel/assets/dead_bubble_coral_block-Ba0-KsJP.png",Yd="/voxel/assets/dead_bubble_coral_fan-DfVJP8gd.png",jd="/voxel/assets/dead_bush-DFUfRKFp.png",Kd="/voxel/assets/dead_fire_coral-DOYgoVON.png",Zd="/voxel/assets/dead_fire_coral_block-DPNbgwo3.png",$d="/voxel/assets/dead_fire_coral_fan-CobK_VnK.png",Jd="/voxel/assets/dead_horn_coral-BLKETEGx.png",Qd="/voxel/assets/dead_horn_coral_block-DbjKvHsh.png",ep="/voxel/assets/dead_horn_coral_fan-CkHiFLcB.png",tp="/voxel/assets/dead_tube_coral-DUFe1Bas.png",sp="/voxel/assets/dead_tube_coral_block-C3JysbeK.png",np="/voxel/assets/dead_tube_coral_fan-BUtxW8RE.png",ip="/voxel/assets/debug-AF9pRWFH.png",op="/voxel/assets/debug2-9u13jZSI.png",rp="/voxel/assets/deepslate-CpDBaYj_.png",ap="/voxel/assets/deepslate_bricks-BVLvrm5T.png",lp="/voxel/assets/deepslate_coal_ore-B2hArsWP.png",cp="/voxel/assets/deepslate_copper_ore-CJ1fXMEt.png",up="/voxel/assets/deepslate_diamond_ore-CyVnsBQs.png",_p="/voxel/assets/deepslate_emerald_ore-B-Cgt4sW.png",hp="/voxel/assets/deepslate_gold_ore-DWU0Bm7E.png",dp="/voxel/assets/deepslate_iron_ore-BVf4vXJd.png",pp="/voxel/assets/deepslate_lapis_ore-DKnM-5in.png",fp="/voxel/assets/deepslate_redstone_ore-sdM9lhZe.png",gp="/voxel/assets/deepslate_tiles-wqNAPf1N.png",mp="/voxel/assets/deepslate_top-CcDbyFYs.png",vp="/voxel/assets/destroy_stage_0-AgGj3irL.png",xp="/voxel/assets/destroy_stage_1-DRUroqRB.png",bp="/voxel/assets/destroy_stage_2-BzOejoVz.png",Mp="/voxel/assets/destroy_stage_3-D1MA3pTw.png",yp="/voxel/assets/destroy_stage_4-Cn2tnCUs.png",Sp="/voxel/assets/destroy_stage_5-DEMRhYym.png",Ep="/voxel/assets/destroy_stage_6-BAslrWgB.png",Tp="/voxel/assets/destroy_stage_7-hJ-2ZDjb.png",wp="/voxel/assets/destroy_stage_8-BHS36n3B.png",Cp="/voxel/assets/destroy_stage_9-BFRaMDVM.png",Ap="/voxel/assets/detector_rail-C1qo_8Gd.png",Rp="/voxel/assets/detector_rail_on-mNHJHtod.png",Dp="/voxel/assets/diamond_block-BGW2Bu9p.png",Pp="/voxel/assets/diamond_ore-DWBComut.png",Lp="/voxel/assets/diorite-DeHGAHCq.png",Ip="/voxel/assets/dirt-v5D8UOVm.png",Up="/voxel/assets/dirt_path_side-6os81ANI.png",kp="/voxel/assets/dirt_path_top-BtkCU4tA.png",Np="/voxel/assets/dispenser_front-_gZO1C6m.png",Fp="/voxel/assets/dispenser_front_vertical-1t8u712O.png",Bp="/voxel/assets/dragon_egg-DS2Z0ttY.png",Op="/voxel/assets/dried_kelp_bottom-C0OskcY3.png",zp="/voxel/assets/dried_kelp_side-BO9HYmiC.png",Vp="/voxel/assets/dried_kelp_top-DA2Gl64i.png",Hp="/voxel/assets/dripstone_block-CeuX6Cdr.png",Gp="/voxel/assets/dropper_front-9UtMTuqb.png",Wp="/voxel/assets/dropper_front_vertical-DBG8oWyr.png",Xp="/voxel/assets/emerald_block-WcEGA5qU.png",qp="/voxel/assets/emerald_ore-CXOLZRpQ.png",Yp="/voxel/assets/obsidian-CerxCTIi.png",jp="/voxel/assets/enchanting_table_side-zvLZC85F.png",Kp="/voxel/assets/enchanting_table_top-BS0bMUFf.png",Zp="/voxel/assets/end_portal_frame_eye-BVZQKfDB.png",$p="/voxel/assets/end_portal_frame_side-gRuk9527.png",Jp="/voxel/assets/end_portal_frame_top-i6YI9K8O.png",Qp="/voxel/assets/end_rod-B5tg-Y6q.png",ef="/voxel/assets/end_stone-Lh7CrHcP.png",tf="/voxel/assets/end_stone_bricks-BFSz4b0L.png",sf="/voxel/assets/exposed_chiseled_copper-VFiE4ETB.png",nf="/voxel/assets/exposed_copper-DjYU2Oo9.png",of="/voxel/assets/exposed_copper_bulb-BsaH5Tbs.png",rf="/voxel/assets/exposed_copper_bulb_lit-B6jgXXo5.png",af="/voxel/assets/exposed_copper_bulb_lit_powered-CdbCRRLr.png",lf="/voxel/assets/exposed_copper_bulb_powered-yB9y9wbN.png",cf="/voxel/assets/exposed_copper_door_bottom-BVZqTUEl.png",uf="/voxel/assets/exposed_copper_door_top-BnQ6h0jd.png",_f="/voxel/assets/exposed_copper_grate-DypNkjbP.png",hf="/voxel/assets/exposed_copper_trapdoor-B94lXjSO.png",df="/voxel/assets/exposed_cut_copper-D_ex-hH5.png",pf="/voxel/assets/farmland-dxObRVMM.png",ff="/voxel/assets/farmland_moist-Ce47W0w1.png",gf="/voxel/assets/fern-ewC1WjHq.png",mf="/voxel/assets/fire_0-Ik7mVH56.png",vf="/voxel/assets/fire_1-BDDlWBuN.png",xf="/voxel/assets/fire_coral-DCxEF9zN.png",bf="/voxel/assets/fire_coral_block-Dn6Xa9BQ.png",Mf="/voxel/assets/fire_coral_fan-BgExble1.png",yf="/voxel/assets/fletching_table_front-ClITBr1N.png",Sf="/voxel/assets/fletching_table_side-Drnly4rJ.png",Ef="/voxel/assets/fletching_table_top-BD-z-GU2.png",Tf="/voxel/assets/flower_pot-DFJ6ZngU.png",wf="/voxel/assets/flowering_azalea_leaves-RcVKGEn_.png",Cf="/voxel/assets/flowering_azalea_side-DuIs-eJa.png",Af="/voxel/assets/flowering_azalea_top-fW4F9U-a.png",Rf="/voxel/assets/frogspawn-DeUyY7Hg.png",Df="/voxel/assets/frosted_ice_0-B3T0knC1.png",Pf="/voxel/assets/frosted_ice_1-DGTIzcvH.png",Lf="/voxel/assets/frosted_ice_2-CAm5Ai9X.png",If="/voxel/assets/frosted_ice_3-GVROfNJx.png",Uf="/voxel/assets/furnace_front-N_ZA33No.png",kf="/voxel/assets/furnace_front_on-zOrKq7Q_.png",Nf="/voxel/assets/furnace_side-B959gOEL.png",Ff="/voxel/assets/furnace_top-CBTOsXh1.png",Bf="/voxel/assets/gilded_blackstone--ejV5ME6.png",Of="/voxel/assets/glass-BLGl2IbW.png",zf="/voxel/assets/glass_pane_top-BovRIpVw.png",Vf="/voxel/assets/glow_item_frame-BpH_R86e.png",Hf="/voxel/assets/glow_lichen-DBbd9SdO.png",Gf="/voxel/assets/glowstone-BiEHWoNv.png",Wf="/voxel/assets/gold_block-O4BeT7UY.png",Xf="/voxel/assets/gold_ore-DD8xC9BP.png",qf="/voxel/assets/granite-CpJDiXmE.png",Yf="/voxel/assets/grass_block_side-2vtwQg5U.png",jf="/voxel/assets/grass_block_side_overlay-C8n6J4ej.png",Kf="/voxel/assets/grass_block_snow-FBYBFyoo.png",Zf="/voxel/assets/grass_block_top-CO59FUQO.png",$f="/voxel/assets/gravel-CdYsKSlD.png",Jf="/voxel/assets/gray_candle-BNY5I5uL.png",Qf="/voxel/assets/gray_candle_lit-B8xjaPmP.png",eg="/voxel/assets/gray_concrete-C10g5MRB.png",tg="/voxel/assets/gray_concrete_powder-DayvHzw1.png",sg="/voxel/assets/gray_glazed_terracotta-ByCz1lN7.png",ng="/voxel/assets/gray_shulker_box-CctM6zBu.png",ig="/voxel/assets/gray_stained_glass-Cwt0fYLJ.png",og="/voxel/assets/gray_stained_glass_pane_top-DpSXrwFW.png",rg="/voxel/assets/gray_terracotta-BxKwGzBo.png",ag="/voxel/assets/gray_wool-mEaSc0rn.png",lg="/voxel/assets/green_candle-eUc8V5W1.png",cg="/voxel/assets/green_candle_lit-Bv0t2icM.png",ug="/voxel/assets/green_concrete-C5dKXiHv.png",_g="/voxel/assets/green_concrete_powder-B63SuIIJ.png",hg="/voxel/assets/green_glazed_terracotta-Dxvz41n0.png",dg="/voxel/assets/green_shulker_box-BoanTDWV.png",pg="/voxel/assets/green_stained_glass-iE3EnAQi.png",fg="/voxel/assets/green_stained_glass_pane_top-CypWgyHC.png",gg="/voxel/assets/green_terracotta-Cqnv9rh0.png",mg="/voxel/assets/green_wool-C-Q76rPx.png",vg="/voxel/assets/grindstone_pivot-BF3a_9DT.png",xg="/voxel/assets/grindstone_round-C4BFrIPJ.png",bg="/voxel/assets/grindstone_side-C7i6Moxr.png",Mg="/voxel/assets/hanging_roots-BZlbqUoI.png",yg="/voxel/assets/hay_block_side-DQHF0o7U.png",Sg="/voxel/assets/hay_block_top-B-1zzw_X.png",Eg="/voxel/assets/heavy_core-BpHP2XeL.png",Tg="/voxel/assets/honey_block_bottom-xlMXZU27.png",wg="/voxel/assets/honey_block_side-DNS58VVb.png",Cg="/voxel/assets/honey_block_top-BlQF4Tjy.png",Ag="/voxel/assets/honeycomb_block-OZleqlrE.png",Rg="/voxel/assets/hopper_inside-Bskfvs9k.png",Dg="/voxel/assets/hopper_outside-BOS-TMze.png",Pg="/voxel/assets/hopper_top-TTJyMnOy.png",Lg="/voxel/assets/horn_coral-Cd292_a7.png",Ig="/voxel/assets/horn_coral_block-DoPrzyO1.png",Ug="/voxel/assets/horn_coral_fan-By-v4FvJ.png",kg="/voxel/assets/ice-dvVZJXO7.png",Ng="/voxel/assets/iron_bars-BDo3_GOV.png",Fg="/voxel/assets/iron_block-Dy-tDcBf.png",Bg="/voxel/assets/iron_door_bottom-DaJyDOqy.png",Og="/voxel/assets/iron_door_top-qIwf6mdL.png",zg="/voxel/assets/iron_ore-kp3QcOUu.png",Vg="/voxel/assets/iron_trapdoor-CMDx1man.png",Hg="/voxel/assets/item_frame-CA91USpO.png",Gg="/voxel/assets/jack_o_lantern-CABVBGiL.png",Wg="/voxel/assets/jigsaw_bottom-DXpM776C.png",Xg="/voxel/assets/jigsaw_lock-Dgf_Sh4j.png",qg="/voxel/assets/jigsaw_side-BM8NS3Fr.png",Yg="/voxel/assets/jigsaw_top-BS03rGfl.png",jg="/voxel/assets/note_block-CjSU5Cgi.png",Kg="/voxel/assets/jukebox_top-D_DrMZAM.png",Zg="/voxel/assets/jungle_door_bottom-qGaa9Wdg.png",$g="/voxel/assets/jungle_door_top-C133_Vk7.png",Jg="/voxel/assets/jungle_leaves-BL7VahCh.png",Qg="/voxel/assets/jungle_log-BmZ10QFV.png",em="/voxel/assets/jungle_log_top-BUsRmCao.png",tm="/voxel/assets/jungle_planks-DTvJcU-k.png",sm="/voxel/assets/jungle_sapling-DbCcyxAS.png",nm="/voxel/assets/jungle_trapdoor-27eShyUe.png",im="/voxel/assets/kelp-CspyTQcM.png",om="/voxel/assets/kelp_plant-CvGaqcTf.png",rm="/voxel/assets/ladder-B5th64nM.png",am="/voxel/assets/lantern-BRQfF7hA.png",lm="/voxel/assets/lapis_block-CimU5e88.png",cm="/voxel/assets/lapis_ore-lLCihwnQ.png",um="/voxel/assets/large_amethyst_bud-CAt0YzL1.png",_m="/voxel/assets/large_fern_bottom-TQtW5MVI.png",hm="/voxel/assets/large_fern_top-Bt1bqiaa.png",dm="/voxel/assets/lava_flow-G1cHWCev.png",pm="/voxel/assets/lava_still-BgNacoLw.png",fm="/voxel/assets/lectern_base-Cam46xE8.png",gm="/voxel/assets/lectern_front-EjO7BnGt.png",mm="/voxel/assets/lectern_sides-CwnH86bI.png",vm="/voxel/assets/lectern_top-DwHgiscc.png",xm="/voxel/assets/lever-Dm-wwEyo.png",bm="/voxel/assets/light_blue_candle-CkhHp7vH.png",Mm="/voxel/assets/light_blue_candle_lit-D_Yxv8kH.png",ym="/voxel/assets/light_blue_concrete-DSdCuA6O.png",Sm="/voxel/assets/light_blue_concrete_powder-DU70IMbj.png",Em="/voxel/assets/light_blue_glazed_terracotta-nUW3Ds5M.png",Tm="/voxel/assets/light_blue_shulker_box-Cks3NXKG.png",wm="/voxel/assets/light_blue_stained_glass-CfRRNNg3.png",Cm="/voxel/assets/light_blue_stained_glass_pane_top-DiLmtDL2.png",Am="/voxel/assets/light_blue_terracotta-E9oDE9R5.png",Rm="/voxel/assets/light_blue_wool-BZrbT9n4.png",Dm="/voxel/assets/light_gray_candle-Bv2LTItU.png",Pm="/voxel/assets/light_gray_candle_lit-TiWmPzEB.png",Lm="/voxel/assets/light_gray_concrete-CH38SNqy.png",Im="/voxel/assets/light_gray_concrete_powder-BbwNPOtx.png",Um="/voxel/assets/light_gray_glazed_terracotta-D2RHNA3i.png",km="/voxel/assets/light_gray_shulker_box-CQKYtDrr.png",Nm="/voxel/assets/light_gray_stained_glass-D4K2JYtY.png",Fm="/voxel/assets/light_gray_stained_glass_pane_top-CHXaTZnt.png",Bm="/voxel/assets/light_gray_terracotta-t8KsIvG2.png",Om="/voxel/assets/light_gray_wool-DDxzbU-P.png",zm="/voxel/assets/lightning_rod-DRzID0M6.png",Vm="/voxel/assets/lilac_bottom-CQX-cmGZ.png",Hm="/voxel/assets/lilac_top-BDJHCnF6.png",Gm="/voxel/assets/lily_of_the_valley-DXpFS7S3.png",Wm="/voxel/assets/lily_pad-BY0zFzH_.png",Xm="/voxel/assets/lime_candle-sGJxGufG.png",qm="/voxel/assets/lime_candle_lit-B8MjdaCn.png",Ym="/voxel/assets/lime_concrete-BwA0i37d.png",jm="/voxel/assets/lime_concrete_powder-GaBK206O.png",Km="/voxel/assets/lime_glazed_terracotta-DspHd1sG.png",Zm="/voxel/assets/lime_shulker_box-CvWpI_Pt.png",$m="/voxel/assets/lime_stained_glass-CGFjBIgG.png",Jm="/voxel/assets/lime_stained_glass_pane_top-Bk6gJKt3.png",Qm="/voxel/assets/lime_terracotta-CSrePPKl.png",ev="/voxel/assets/lime_wool-BK1WegS_.png",tv="/voxel/assets/lodestone_side-B6_Ddifj.png",sv="/voxel/assets/lodestone_top-BJF8ajVp.png",nv="/voxel/assets/loom_bottom-C55aehY-.png",iv="/voxel/assets/loom_front-h3tJCXp2.png",ov="/voxel/assets/loom_side-C7LGzxbW.png",rv="/voxel/assets/loom_top-PcVDTnkJ.png",av="/voxel/assets/magenta_candle-CNftegi4.png",lv="/voxel/assets/magenta_candle_lit-CxeFZKxv.png",cv="/voxel/assets/magenta_concrete-HunUyDAf.png",uv="/voxel/assets/magenta_concrete_powder-DoQF-UaN.png",_v="/voxel/assets/magenta_glazed_terracotta-csExfAUO.png",hv="/voxel/assets/magenta_shulker_box-FOD6x9kF.png",dv="/voxel/assets/magenta_stained_glass-DZtwQXDl.png",pv="/voxel/assets/magenta_stained_glass_pane_top-Dqky0-ZI.png",fv="/voxel/assets/magenta_terracotta-CGcXjWK-.png",gv="/voxel/assets/magenta_wool-CAYUwFb4.png",mv="/voxel/assets/magma-Dk4YP68o.png",vv="/voxel/assets/mangrove_door_bottom-wrhKk56J.png",xv="/voxel/assets/mangrove_door_top-C_ATam9r.png",bv="/voxel/assets/mangrove_leaves-BM4QSuCd.png",Mv="/voxel/assets/mangrove_log-Cyfean2w.png",yv="/voxel/assets/mangrove_log_top-CWRJjj9N.png",Sv="/voxel/assets/mangrove_planks-BKU4LLyM.png",Ev="/voxel/assets/mangrove_propagule-CEHP4JzV.png",Tv="/voxel/assets/mangrove_propagule_hanging-CmE1IAhu.png",wv="/voxel/assets/mangrove_roots_side-BzAHiLf3.png",Cv="/voxel/assets/mangrove_roots_top-Ct2E_d6b.png",Av="/voxel/assets/mangrove_trapdoor-C4qcTYMY.png",Rv="/voxel/assets/medium_amethyst_bud-DRUKlv_3.png",Dv="/voxel/assets/melon_side-DXfhh2DD.png",Pv="/voxel/assets/melon_stem-DjL22qkg.png",Lv="/voxel/assets/melon_top-C4-SGpvp.png",Iv="/voxel/assets/moss_block-Br9wMeUT.png",Uv="/voxel/assets/mossy_cobblestone-nhDZH1p_.png",kv="/voxel/assets/mossy_stone_bricks-CGFx4nbq.png",Nv="/voxel/assets/mud-C_uoa4JH.png",Fv="/voxel/assets/mud_bricks-qVzaOJBY.png",Bv="/voxel/assets/muddy_mangrove_roots_side-BMao4UQq.png",Ov="/voxel/assets/muddy_mangrove_roots_top-G9nmnlJ2.png",zv="/voxel/assets/mushroom_block_inside-C4FV1tBL.png",Vv="/voxel/assets/mushroom_stem-BWYKhamY.png",Hv="/voxel/assets/mycelium_side-BaCTzQmj.png",Gv="/voxel/assets/mycelium_top-42ylYAEx.png",Wv="/voxel/assets/nether_bricks-BQr30q-M.png",Xv="/voxel/assets/nether_gold_ore-DthjMpUk.png",qv="/voxel/assets/nether_portal-ebxLSzzq.png",Yv="/voxel/assets/nether_quartz_ore-C-7TYxtR.png",jv="/voxel/assets/nether_sprouts-CaWfrEql.png",Kv="/voxel/assets/nether_wart_block-CLWVtj1d.png",Zv="/voxel/assets/nether_wart_stage0-RoEaOMm9.png",$v="/voxel/assets/nether_wart_stage1-BO_53NiG.png",Jv="/voxel/assets/nether_wart_stage2-BhAzKmf-.png",Qv="/voxel/assets/netherite_block-DyqtxvhY.png",ex="/voxel/assets/netherrack-XN29TNW5.png",tx="/voxel/assets/note_block-CjSU5Cgi.png",sx="/voxel/assets/oak_door_bottom-CqWRqfs7.png",nx="/voxel/assets/oak_door_top-dV9LLTsw.png",ix="/voxel/assets/oak_leaves-DYB__7Qf.png",ox="/voxel/assets/oak_log-CPr1cCMs.png",rx="/voxel/assets/oak_log_top-Cp7J50DJ.png",ax="/voxel/assets/oak_planks-C7OeaLEd.png",lx="/voxel/assets/oak_sapling-eyBuLxAV.png",cx="/voxel/assets/oak_trapdoor-C4xfD5tN.png",ux="/voxel/assets/observer_back-D-ROKNLa.png",_x="/voxel/assets/observer_back_on-ClCSGf-0.png",hx="/voxel/assets/observer_front-C0mauVTx.png",dx="/voxel/assets/observer_side-ByFbLPLP.png",px="/voxel/assets/observer_top-BGS2tPfH.png",fx="/voxel/assets/obsidian-CerxCTIi.png",gx="/voxel/assets/ochre_froglight_side-BYtCk5k3.png",mx="/voxel/assets/ochre_froglight_top-C5RLuGqS.png",vx="/voxel/assets/orange_candle-Biend4y8.png",xx="/voxel/assets/orange_candle_lit-Bhhkkayz.png",bx="/voxel/assets/orange_concrete-BwQZRF-z.png",Mx="/voxel/assets/orange_concrete_powder-Cz9IXjql.png",yx="/voxel/assets/orange_glazed_terracotta-CJ3IEgfm.png",Sx="/voxel/assets/orange_shulker_box-PUmJ-4yX.png",Ex="/voxel/assets/orange_stained_glass-CZ8skpZq.png",Tx="/voxel/assets/orange_stained_glass_pane_top-DLvQXh7E.png",wx="/voxel/assets/orange_terracotta-BJkRVYU6.png",Cx="/voxel/assets/orange_tulip-BjIBrMES.png",Ax="/voxel/assets/orange_wool-BleL_o-3.png",Rx="/voxel/assets/oxeye_daisy-DXeN3HkW.png",Dx="/voxel/assets/oxidized_chiseled_copper-Bd7pfWfl.png",Px="/voxel/assets/oxidized_copper-CpC7ZKlU.png",Lx="/voxel/assets/oxidized_copper_bulb-61oBVc82.png",Ix="/voxel/assets/oxidized_copper_bulb_lit-H-XLVSpQ.png",Ux="/voxel/assets/oxidized_copper_bulb_lit_powered-vElaSrZs.png",kx="/voxel/assets/oxidized_copper_bulb_powered-DC4GUyGP.png",Nx="/voxel/assets/oxidized_copper_door_bottom-C3HEM-SX.png",Fx="/voxel/assets/oxidized_copper_door_top-BiIX-qvT.png",Bx="/voxel/assets/oxidized_copper_grate-CjPcsjtr.png",Ox="/voxel/assets/oxidized_copper_trapdoor-B0q_LS5m.png",zx="/voxel/assets/oxidized_cut_copper-ygB4T470.png",Vx="/voxel/assets/packed_ice-JC6RUrt2.png",Hx="/voxel/assets/packed_mud-BEGeiu-1.png",Gx="/voxel/assets/pearlescent_froglight_side-CRmKFbq2.png",Wx="/voxel/assets/pearlescent_froglight_top-SGkM_V2_.png",Xx="/voxel/assets/peony_bottom-M9kRrpvc.png",qx="/voxel/assets/peony_top-B-Pj1G5c.png",Yx="/voxel/assets/pink_candle-Bddzt4pV.png",jx="/voxel/assets/pink_candle_lit-tSUFIqdn.png",Kx="/voxel/assets/pink_concrete-B_MOtxvK.png",Zx="/voxel/assets/pink_concrete_powder-IspQSocU.png",$x="/voxel/assets/pink_glazed_terracotta-BqDGMmFq.png",Jx="/voxel/assets/pink_petals-B1KvwbPT.png",Qx="/voxel/assets/pink_petals_stem-DttzUyhN.png",e0="/voxel/assets/pink_shulker_box-BqyDvpqO.png",t0="/voxel/assets/pink_stained_glass-C_upqtB_.png",s0="/voxel/assets/pink_stained_glass_pane_top-DIV0syLm.png",n0="/voxel/assets/pink_terracotta-DzxE9wun.png",i0="/voxel/assets/pink_tulip-DjX17obH.png",o0="/voxel/assets/pink_wool-BTOlrkSe.png",r0="/voxel/assets/piston_bottom-DW0Akpew.png",a0="/voxel/assets/piston_inner-jdS6kWVH.png",l0="/voxel/assets/piston_side-B3GdUbk9.png",c0="/voxel/assets/piston_top-CSdIW7Lg.png",u0="/voxel/assets/piston_top_sticky-iVD1dqP7.png",_0="/voxel/assets/pitcher_crop_bottom-Dy6u81-w.png",h0="/voxel/assets/pitcher_crop_bottom_stage_1-CjloytF0.png",d0="/voxel/assets/pitcher_crop_bottom_stage_2-Cxmohm0P.png",p0="/voxel/assets/pitcher_crop_bottom_stage_3-DItg3eMT.png",f0="/voxel/assets/pitcher_crop_bottom_stage_4-C0K4HXX1.png",g0="/voxel/assets/pitcher_crop_side-DLvWu-vw.png",m0="/voxel/assets/pitcher_crop_top-C6MdFeIS.png",v0="/voxel/assets/pitcher_crop_top_stage_3-BuMQRHmj.png",x0="/voxel/assets/pitcher_crop_top_stage_4-CEhflN1B.png",b0="/voxel/assets/podzol_side-CGP-zaih.png",M0="/voxel/assets/podzol_top-DTim9KZY.png",y0="/voxel/assets/pointed_dripstone_down_base-C0S6k22N.png",S0="/voxel/assets/pointed_dripstone_down_frustum-Bhu8nTff.png",E0="/voxel/assets/pointed_dripstone_down_middle-aO5bonyz.png",T0="/voxel/assets/pointed_dripstone_down_tip-D-kh3-TG.png",w0="/voxel/assets/pointed_dripstone_down_tip_merge-D2XtHDI6.png",C0="/voxel/assets/pointed_dripstone_up_base-BUm_F-cO.png",A0="/voxel/assets/pointed_dripstone_up_frustum-C10HUuo3.png",R0="/voxel/assets/pointed_dripstone_up_middle-BSvGzCsg.png",D0="/voxel/assets/pointed_dripstone_up_tip-NvXVAiMj.png",P0="/voxel/assets/pointed_dripstone_up_tip_merge-BECrw6Hd.png",L0="/voxel/assets/polished_andesite-CJNnOrIZ.png",I0="/voxel/assets/polished_basalt_side-C9OpYqBu.png",U0="/voxel/assets/polished_basalt_top-CPCJxXJQ.png",k0="/voxel/assets/polished_blackstone-DCR9bVBc.png",N0="/voxel/assets/polished_blackstone_bricks-uakstOoi.png",F0="/voxel/assets/polished_deepslate-ECr7j6Y5.png",B0="/voxel/assets/polished_diorite-D_l4Y-EG.png",O0="/voxel/assets/polished_granite-Cu3inKqv.png",z0="/voxel/assets/polished_tuff-Cjtjd0Je.png",V0="/voxel/assets/poppy-CZ9oVQll.png",H0="/voxel/assets/potatoes_stage0-BUfaxdhy.png",G0="/voxel/assets/potatoes_stage1-BujUtDrS.png",W0="/voxel/assets/potatoes_stage2-6MkyNT6o.png",X0="/voxel/assets/potatoes_stage3-DPBjjek4.png",q0="/voxel/assets/potted_azalea_bush_plant-DrM2a6xf.png",Y0="/voxel/assets/potted_azalea_bush_side-38wQxXfI.png",j0="/voxel/assets/potted_azalea_bush_top-DKNVuLl7.png",K0="/voxel/assets/potted_flowering_azalea_bush_plant-DqOO7OJl.png",Z0="/voxel/assets/potted_flowering_azalea_bush_side-lgyplElU.png",$0="/voxel/assets/potted_flowering_azalea_bush_top-DOVno79M.png",J0="/voxel/assets/powder_snow-BLPz7Jpy.png",Q0="/voxel/assets/powered_rail-BbHYFcXd.png",eb="/voxel/assets/powered_rail_on-IE1m4l4t.png",tb="/voxel/assets/prismarine-SGvyNAKG.png",sb="/voxel/assets/prismarine_bricks-DykwZqck.png",nb="/voxel/assets/pumpkin_side-Bs0ASgqG.png",ib="/voxel/assets/melon_stem-DjL22qkg.png",ob="/voxel/assets/pumpkin_top-x8D-XDd9.png",rb="/voxel/assets/purple_candle-fIGo48Nj.png",ab="/voxel/assets/purple_candle_lit-BxRb-Br-.png",lb="/voxel/assets/purple_concrete-CkwuEOdV.png",cb="/voxel/assets/purple_concrete_powder-Dis2LWpD.png",ub="/voxel/assets/purple_glazed_terracotta-YfjMxTLx.png",_b="/voxel/assets/purple_shulker_box-CJTcovtY.png",hb="/voxel/assets/purple_stained_glass-gX7ovM6D.png",db="/voxel/assets/purple_stained_glass_pane_top-BoCm_i7c.png",pb="/voxel/assets/purple_terracotta-c4x8gMuj.png",fb="/voxel/assets/purple_wool-D6wmdXRw.png",gb="/voxel/assets/purpur_block-CCum92Lg.png",mb="/voxel/assets/purpur_pillar-BqmJygIy.png",vb="/voxel/assets/purpur_pillar_top-itN8173u.png",xb="/voxel/assets/quartz_block_bottom-CAhrrFMb.png",bb="/voxel/assets/quartz_block_side-CP0EKXDG.png",Mb="/voxel/assets/quartz_block_top-BTwIXE-7.png",yb="/voxel/assets/quartz_bricks-CTb9NV0o.png",Sb="/voxel/assets/quartz_pillar-BQIZHBoq.png",Eb="/voxel/assets/quartz_pillar_top-z4Nt_ydP.png",Tb="/voxel/assets/rail-BfR6UteD.png",wb="/voxel/assets/rail_corner-SeXMfJz-.png",Cb="/voxel/assets/raw_copper_block-ClCKCq-D.png",Ab="/voxel/assets/raw_gold_block-CNkFxesy.png",Rb="/voxel/assets/raw_iron_block-HXMfCbWB.png",Db="/voxel/assets/red_candle-DIbnOvxS.png",Pb="/voxel/assets/red_candle_lit-Bz-StPqT.png",Lb="/voxel/assets/red_concrete-Bu-6hA3O.png",Ib="/voxel/assets/red_concrete_powder-DAOADCcS.png",Ub="/voxel/assets/red_glazed_terracotta-BUVZzgW7.png",kb="/voxel/assets/red_mushroom-ob7by4C5.png",Nb="/voxel/assets/red_mushroom_block-C1qorul7.png",Fb="/voxel/assets/red_nether_bricks-DCaIr18H.png",Bb="/voxel/assets/red_sand-CJ-WyatA.png",Ob="/voxel/assets/red_sandstone-C9haIgEU.png",zb="/voxel/assets/red_sandstone_bottom-BvC35H6l.png",Vb="/voxel/assets/red_sandstone_top-CwgPp0om.png",Hb="/voxel/assets/red_shulker_box-RA3yK8bN.png",Gb="/voxel/assets/red_stained_glass-nfRkxOfo.png",Wb="/voxel/assets/red_stained_glass_pane_top-BhFX_1YO.png",Xb="/voxel/assets/red_terracotta-BQMXN3kh.png",qb="/voxel/assets/red_tulip-CZExV-Lh.png",Yb="/voxel/assets/red_wool-BCkH0i8L.png",jb="/voxel/assets/redstone_block-BLxhh8QV.png",Kb="/voxel/assets/redstone_dust_dot-DT9kCU8b.png",Zb="/voxel/assets/redstone_dust_line0-nmU5npWu.png",$b="/voxel/assets/redstone_dust_line1-CQknLpRP.png",Jb="/voxel/assets/redstone_lamp-DYfgb1MR.png",Qb="/voxel/assets/redstone_lamp_on-DoWrRvS-.png",e1="/voxel/assets/redstone_ore-CrQd5R8c.png",t1="/voxel/assets/redstone_torch-wmaOhq-j.png",s1="/voxel/assets/redstone_torch_off-C2rClKwV.png",n1="/voxel/assets/reinforced_deepslate_bottom-DzcXSEXK.png",i1="/voxel/assets/reinforced_deepslate_side-CLf7YH2R.png",o1="/voxel/assets/reinforced_deepslate_top-D3z_1CUD.png",r1="/voxel/assets/repeater-C9C-i-zO.png",a1="/voxel/assets/repeater_on-CoWsYKBR.png",l1="/voxel/assets/repeating_command_block_back-DTuHPe7S.png",c1="/voxel/assets/repeating_command_block_conditional-DySCeqgF.png",u1="/voxel/assets/repeating_command_block_front-Btq6pcVj.png",_1="/voxel/assets/repeating_command_block_side-rsTMk3h3.png",h1="/voxel/assets/crying_obsidian-DdrC6xQP.png",d1="/voxel/assets/respawn_anchor_side0-FdNcZ6Mw.png",p1="/voxel/assets/respawn_anchor_side1-C-XkDEYZ.png",f1="/voxel/assets/respawn_anchor_side2-MtgYTflH.png",g1="/voxel/assets/respawn_anchor_side3-D72yZPpx.png",m1="/voxel/assets/respawn_anchor_side4-C4b7Py2G.png",v1="/voxel/assets/respawn_anchor_top-BcOdUbOb.png",x1="/voxel/assets/respawn_anchor_top_off-Bb3yDC_0.png",b1="/voxel/assets/rooted_dirt-BnZKAeDH.png",M1="/voxel/assets/rose_bush_bottom-BE5FPdaY.png",y1="/voxel/assets/rose_bush_top-vENN2UVE.png",S1="/voxel/assets/sand-CdM3vuk8.png",E1="/voxel/assets/sandstone-BKqX_vhF.png",T1="/voxel/assets/sandstone_bottom-DW5onkF4.png",w1="/voxel/assets/sandstone_top-Dgczio70.png",C1="/voxel/assets/scaffolding_bottom-DGjyTnKs.png",A1="/voxel/assets/scaffolding_side-s0opiIzp.png",R1="/voxel/assets/scaffolding_top-UubdoOU7.png",D1="/voxel/assets/sculk-CHskOR5u.png",P1="/voxel/assets/sculk_catalyst_bottom-CtLsOrYd.png",L1="/voxel/assets/sculk_catalyst_side-wzOcQGg0.png",I1="/voxel/assets/sculk_catalyst_side_bloom-CPf3x9oi.png",U1="/voxel/assets/sculk_catalyst_top-BydxeXVM.png",k1="/voxel/assets/sculk_catalyst_top_bloom-WlgISJO4.png",N1="/voxel/assets/sculk_sensor_bottom-DA74bTMQ.png",F1="/voxel/assets/sculk_sensor_side-CPD8_8ft.png",B1="/voxel/assets/sculk_sensor_tendril_active-Dto4B1Hj.png",O1="/voxel/assets/sculk_sensor_tendril_inactive-BE7hZVV6.png",z1="/voxel/assets/sculk_sensor_top-XGXa6iLA.png",V1="/voxel/assets/sculk_sensor_bottom-DA74bTMQ.png",H1="/voxel/assets/sculk_shrieker_can_summon_inner_top-BYmcRq7J.png",G1="/voxel/assets/sculk_shrieker_inner_top-jas6SmnG.png",W1="/voxel/assets/sculk_shrieker_side-B6IAxHck.png",X1="/voxel/assets/sculk_shrieker_top-Cr9W1UKn.png",q1="/voxel/assets/sculk_vein-C1x9Qllg.png",Y1="/voxel/assets/sea_lantern-BcyLHdo0.png",j1="/voxel/assets/sea_pickle-BoBIkdCo.png",K1="/voxel/assets/seagrass-dyd58kgq.png",Z1="/voxel/assets/short_grass-Bu6Il8gC.png",$1="/voxel/assets/shroomlight-BOJwFLdP.png",J1="/voxel/assets/shulker_box-Cs5D1fOQ.png",Q1="/voxel/assets/slime_block-Ce5n7AOl.png",eM="/voxel/assets/small_amethyst_bud-B4IQ3JUi.png",tM="/voxel/assets/small_dripleaf_side-CaU3ijEr.png",sM="/voxel/assets/small_dripleaf_stem_bottom-DEO4gYNs.png",nM="/voxel/assets/small_dripleaf_stem_top-BWXr6jCf.png",iM="/voxel/assets/small_dripleaf_top-5hkUhbEN.png",oM="/voxel/assets/smithing_table_bottom-DbWPMI0V.png",rM="/voxel/assets/smithing_table_front-DUF3SIs0.png",aM="/voxel/assets/smithing_table_side-Cpx1qXGI.png",lM="/voxel/assets/smithing_table_top-kyVqL8bu.png",cM="/voxel/assets/smoker_bottom-C9y6I9Ot.png",uM="/voxel/assets/smoker_front-BJ1WR2uY.png",_M="/voxel/assets/smoker_front_on-0wrtF1l9.png",hM="/voxel/assets/smoker_side-K5jpZeUz.png",dM="/voxel/assets/smoker_top-ChhtbI3j.png",pM="/voxel/assets/smooth_basalt-FElDMlSA.png",fM="/voxel/assets/smooth_stone-Dsw339CX.png",gM="/voxel/assets/smooth_stone_slab_side-Cz-QB-FL.png",mM="/voxel/assets/sniffer_egg_not_cracked_bottom-Cg5NuSvE.png",vM="/voxel/assets/sniffer_egg_not_cracked_east-Cg0yi4F0.png",xM="/voxel/assets/sniffer_egg_not_cracked_north-O4NTuapF.png",bM="/voxel/assets/sniffer_egg_not_cracked_south-D8YbMwqP.png",MM="/voxel/assets/sniffer_egg_not_cracked_top-BUyy4kQF.png",yM="/voxel/assets/sniffer_egg_not_cracked_west-Dy29WngT.png",SM="/voxel/assets/sniffer_egg_slightly_cracked_bottom-B8PYaLzk.png",EM="/voxel/assets/sniffer_egg_slightly_cracked_east-gz23PcrW.png",TM="/voxel/assets/sniffer_egg_slightly_cracked_north-DJ2uU53c.png",wM="/voxel/assets/sniffer_egg_slightly_cracked_south-DcVZgbtG.png",CM="/voxel/assets/sniffer_egg_slightly_cracked_top-C6_IqRny.png",AM="/voxel/assets/sniffer_egg_slightly_cracked_west-8ZQtI-JY.png",RM="/voxel/assets/sniffer_egg_very_cracked_bottom-CrsrVCz3.png",DM="/voxel/assets/sniffer_egg_very_cracked_east-FLfGnWqc.png",PM="/voxel/assets/sniffer_egg_very_cracked_north-OiDkUhhD.png",LM="/voxel/assets/sniffer_egg_very_cracked_south-ZwO7HwdV.png",IM="/voxel/assets/sniffer_egg_very_cracked_top-cckort7S.png",UM="/voxel/assets/sniffer_egg_very_cracked_west-DxnLqREb.png",kM="/voxel/assets/snow-CiJIQ6Vv.png",NM="/voxel/assets/soul_campfire_fire-C5jrrNtc.png",FM="/voxel/assets/soul_campfire_log_lit-DDTKcqev.png",BM="/voxel/assets/soul_fire_0-CZZTyGkQ.png",OM="/voxel/assets/soul_fire_1-Ds68I-mk.png",zM="/voxel/assets/soul_lantern-BibPqWr0.png",VM="/voxel/assets/soul_sand-4iNlzdzZ.png",HM="/voxel/assets/soul_soil-fEkJw2wC.png",GM="/voxel/assets/soul_torch-mrLsctIT.png",WM="/voxel/assets/spawner-BX7VRQ-l.png",XM="/voxel/assets/sponge-Dm9HJit7.png",qM="/voxel/assets/spore_blossom-CpfaXybD.png",YM="/voxel/assets/spore_blossom_base-BE3-86nq.png",jM="/voxel/assets/spruce_door_bottom-DFwmDsKf.png",KM="/voxel/assets/spruce_door_top-FhzC0awB.png",ZM="/voxel/assets/spruce_leaves-Dyl2qJLw.png",$M="/voxel/assets/spruce_log-CJLQvElq.png",JM="/voxel/assets/spruce_log_top-D8G8UtNJ.png",QM="/voxel/assets/spruce_planks-BcoZeuMV.png",ey="/voxel/assets/spruce_sapling-b396sWPq.png",ty="/voxel/assets/spruce_trapdoor-BhRFmk5L.png",sy="/voxel/assets/stone-CUDI0NGe.png",ny="/voxel/assets/stone_bricks-tSG6NLvw.png",iy="/voxel/assets/stonecutter_bottom-CgwBQ8iW.png",oy="/voxel/assets/stonecutter_saw-X-b4DNSf.png",ry="/voxel/assets/stonecutter_side-Pow-066C.png",ay="/voxel/assets/stonecutter_top-Bn9b0xiw.png",ly="/voxel/assets/stripped_acacia_log-DPJlNn6G.png",cy="/voxel/assets/stripped_acacia_log_top-Bn_K07dT.png",uy="/voxel/assets/stripped_bamboo_block-viZl4CaK.png",_y="/voxel/assets/stripped_bamboo_block_top-PaKb0far.png",hy="/voxel/assets/stripped_birch_log-CpFppeUf.png",dy="/voxel/assets/stripped_birch_log_top-CbnabVfp.png",py="/voxel/assets/stripped_cherry_log-DskZerge.png",fy="/voxel/assets/stripped_cherry_log_top-BaY9q7NS.png",gy="/voxel/assets/stripped_crimson_stem-B-vetPCq.png",my="/voxel/assets/stripped_crimson_stem_top-B9Ktkofk.png",vy="/voxel/assets/stripped_dark_oak_log-fDWBXmIH.png",xy="/voxel/assets/stripped_dark_oak_log_top-Lhbe6dnv.png",by="/voxel/assets/stripped_jungle_log-V7W38QFY.png",My="/voxel/assets/stripped_jungle_log_top-CNQHmaM3.png",yy="/voxel/assets/stripped_mangrove_log-DEYHlRQE.png",Sy="/voxel/assets/stripped_mangrove_log_top-DBjwhP81.png",Ey="/voxel/assets/stripped_oak_log-CJjcV8hT.png",Ty="/voxel/assets/stripped_oak_log_top-BuVzDPgW.png",wy="/voxel/assets/stripped_spruce_log-CT4lEhvY.png",Cy="/voxel/assets/stripped_spruce_log_top-CAXcaw3x.png",Ay="/voxel/assets/stripped_warped_stem-Bz3h8_On.png",Ry="/voxel/assets/stripped_warped_stem_top-XM2gMHtY.png",Dy="/voxel/assets/structure_block-D-SkiA2e.png",Py="/voxel/assets/structure_block_corner-DctJxnk8.png",Ly="/voxel/assets/structure_block_data-C9vspY9e.png",Iy="/voxel/assets/structure_block_load-CoZBmwFK.png",Uy="/voxel/assets/structure_block_save-CpHvVzGf.png",ky="/voxel/assets/sugar_cane-MKHXHF29.png",Ny="/voxel/assets/sunflower_back-DD1i6IRU.png",Fy="/voxel/assets/sunflower_bottom-CR2agPMD.png",By="/voxel/assets/sunflower_front-Deqrtmr6.png",Oy="/voxel/assets/sunflower_top-BFbiVJrf.png",zy="/voxel/assets/suspicious_gravel_0-D4WuDJ5W.png",Vy="/voxel/assets/suspicious_gravel_1-BIpCqWQg.png",Hy="/voxel/assets/suspicious_gravel_2-CpRFoy2t.png",Gy="/voxel/assets/suspicious_gravel_3-CDBkiDe_.png",Wy="/voxel/assets/suspicious_sand_0-B5Hqkpxu.png",Xy="/voxel/assets/suspicious_sand_1-1EqRPdMQ.png",qy="/voxel/assets/suspicious_sand_2-zLJa4pXh.png",Yy="/voxel/assets/suspicious_sand_3-Ck_Y_JqD.png",jy="/voxel/assets/sweet_berry_bush_stage0-C7yNdU5e.png",Ky="/voxel/assets/sweet_berry_bush_stage1-Bc_9AlGi.png",Zy="/voxel/assets/sweet_berry_bush_stage2-BCJ0_AjR.png",$y="/voxel/assets/sweet_berry_bush_stage3-tKlgwH7p.png",Jy="/voxel/assets/tall_grass_bottom-LjbB9Mcv.png",Qy="/voxel/assets/tall_grass_top-BfWmeg-o.png",eS="/voxel/assets/tall_seagrass_bottom-BUB5nkYL.png",tS="/voxel/assets/tall_seagrass_top-DWWELRMC.png",sS="/voxel/assets/target_side-LBFYY93z.png",nS="/voxel/assets/target_top-B4cmpIsu.png",iS="/voxel/assets/terracotta-BCcdcxH7.png",oS="/voxel/assets/tinted_glass-BRketwTU.png",rS="/voxel/assets/tnt_bottom-DmjClX8a.png",aS="/voxel/assets/tnt_side-D-WzMIEE.png",lS="/voxel/assets/tnt_top-Btq0UOdW.png",cS="/voxel/assets/torch-DPHBC9Ps.png",uS="/voxel/assets/torchflower-DPN7fPRx.png",_S="/voxel/assets/torchflower_crop_stage0-IuSxYFdl.png",hS="/voxel/assets/torchflower_crop_stage1-fn8r99vs.png",dS="/voxel/assets/trial_spawner_bottom-BA8w0j1s.png",pS="/voxel/assets/trial_spawner_side_active-BM6bcLKd.png",fS="/voxel/assets/trial_spawner_side_active_ominous-34wTtLj2.png",gS="/voxel/assets/trial_spawner_side_inactive-CbTDlbwf.png",mS="/voxel/assets/trial_spawner_side_inactive_ominous-D7S9l7D9.png",vS="/voxel/assets/trial_spawner_top_active-DRF7r3BS.png",xS="/voxel/assets/trial_spawner_top_active_ominous-CRK4Qk-g.png",bS="/voxel/assets/trial_spawner_top_ejecting_reward-Bb49lf-9.png",MS="/voxel/assets/trial_spawner_top_ejecting_reward_ominous-CzJx6jGr.png",yS="/voxel/assets/trial_spawner_top_inactive-ClxulR2e.png",SS="/voxel/assets/trial_spawner_top_inactive_ominous-DAG0m37_.png",ES="/voxel/assets/tripwire-RNNyaLIo.png",TS="/voxel/assets/tripwire_hook-BWHiFmPj.png",wS="/voxel/assets/tube_coral-D7HWduYP.png",CS="/voxel/assets/tube_coral_block-BZ3p_zc4.png",AS="/voxel/assets/tube_coral_fan-BuAWg8d5.png",RS="/voxel/assets/tuff-Ct-rL5qY.png",DS="/voxel/assets/tuff_bricks-ddDMGLNn.png",PS="/voxel/assets/turtle_egg-B3KuWWDT.png",LS="/voxel/assets/turtle_egg_slightly_cracked-Bi6APUmL.png",IS="/voxel/assets/turtle_egg_very_cracked-DcoYw4Cr.png",US="/voxel/assets/twisting_vines-D9NLn0R-.png",kS="/voxel/assets/twisting_vines_plant-BUa99UmZ.png",NS="/voxel/assets/vault_bottom-E05NqXDa.png",FS="/voxel/assets/vault_bottom-E05NqXDa.png",BS="/voxel/assets/vault_front_ejecting-DBfLDlUR.png",OS="/voxel/assets/vault_front_ejecting_ominous-BJ4fXrtp.png",zS="/voxel/assets/vault_front_off-CBmlcQ_R.png",VS="/voxel/assets/vault_front_off_ominous-DRCSyaMJ.png",HS="/voxel/assets/vault_front_on-DIAnzz1o.png",GS="/voxel/assets/vault_front_on_ominous-ClTN1jmQ.png",WS="/voxel/assets/vault_side_off-DOtRXRh5.png",XS="/voxel/assets/vault_side_off-DOtRXRh5.png",qS="/voxel/assets/vault_side_on-YqDfhPcl.png",YS="/voxel/assets/vault_side_on_ominous-DEw5GplT.png",jS="/voxel/assets/vault_top-BkUX1fwR.png",KS="/voxel/assets/vault_top_ejecting-Bg4JEEa2.png",ZS="/voxel/assets/vault_top_ejecting_ominous-BTHLGriD.png",$S="/voxel/assets/vault_top_ominous-CzsnLMFM.png",JS="/voxel/assets/verdant_froglight_side-BoAyULEY.png",QS="/voxel/assets/verdant_froglight_top-Z0nNnOUD.png",eE="/voxel/assets/vine-DLnylYKS.png",tE="/voxel/assets/warped_door_bottom-B6TKvJtH.png",sE="/voxel/assets/warped_door_top-DRHqug7f.png",nE="/voxel/assets/warped_fungus-kvems5H9.png",iE="/voxel/assets/warped_nylium-MR3X_ukf.png",oE="/voxel/assets/warped_nylium_side-CIpLDDAQ.png",rE="/voxel/assets/warped_planks-CNpy2spe.png",aE="/voxel/assets/warped_roots-DSRz2Kf6.png",lE="/voxel/assets/warped_roots_pot-DT26AIFK.png",cE="/voxel/assets/warped_stem-VvHb50_8.png",uE="/voxel/assets/warped_stem_top-B0gNHyHI.png",_E="/voxel/assets/warped_trapdoor-CUlrQS7E.png",hE="/voxel/assets/warped_wart_block-CS8GYcie.png",dE="/voxel/assets/water_flow-Db1vIr4W.png",pE="/voxel/assets/water_still-Dz3B1zF5.png",fE="/voxel/assets/weathered_chiseled_copper-DQCNElRD.png",gE="/voxel/assets/weathered_copper-n36-7ZiE.png",mE="/voxel/assets/weathered_copper_bulb-D38gISvd.png",vE="/voxel/assets/weathered_copper_bulb_lit-CwL8WEzK.png",xE="/voxel/assets/weathered_copper_bulb_lit_powered-f3pexLPd.png",bE="/voxel/assets/weathered_copper_bulb_powered-Dh9ezZCR.png",ME="/voxel/assets/weathered_copper_door_bottom-Bn-Vmf2-.png",yE="/voxel/assets/weathered_copper_door_top-DGvk4J0b.png",SE="/voxel/assets/weathered_copper_grate-BaEPEbOt.png",EE="/voxel/assets/weathered_copper_trapdoor-EWNONrOV.png",TE="/voxel/assets/weathered_cut_copper-BiSWceZo.png",wE="/voxel/assets/weeping_vines-w7cWO7h0.png",CE="/voxel/assets/weeping_vines_plant-gO_2srwd.png",AE="/voxel/assets/wet_sponge-HNGfG6z9.png",RE="/voxel/assets/wheat_stage0-COybR36Z.png",DE="/voxel/assets/wheat_stage1-B4CsM74i.png",PE="/voxel/assets/wheat_stage2-BNJlhG6Q.png",LE="/voxel/assets/wheat_stage3-B7SuS4J1.png",IE="/voxel/assets/wheat_stage4-8izQiTTp.png",UE="/voxel/assets/wheat_stage5-Cfu_IdV1.png",kE="/voxel/assets/wheat_stage6-CfNPAm5_.png",NE="/voxel/assets/wheat_stage7-CMYxilE3.png",FE="/voxel/assets/white_candle-VTbsQ6y8.png",BE="/voxel/assets/white_candle_lit-BRGLJ0v5.png",OE="/voxel/assets/white_concrete-DQOQsR7U.png",zE="/voxel/assets/white_concrete_powder-D4NsAHyS.png",VE="/voxel/assets/white_glazed_terracotta-wpIehI-D.png",HE="/voxel/assets/white_shulker_box-DfHXhSND.png",GE="/voxel/assets/white_stained_glass-N7V41m2c.png",WE="/voxel/assets/white_stained_glass_pane_top-CP44bbmZ.png",XE="/voxel/assets/white_terracotta-BYdJPezf.png",qE="/voxel/assets/white_tulip-3E2lDz6k.png",YE="/voxel/assets/white_wool-C4AA1tDy.png",jE="/voxel/assets/wither_rose-CRkWxgcf.png",KE="/voxel/assets/yellow_candle-DvqaGPZj.png",ZE="/voxel/assets/yellow_candle_lit-tPAcapZr.png",$E="/voxel/assets/yellow_concrete-Nd42EHSW.png",JE="/voxel/assets/yellow_concrete_powder-Cf81TisR.png",QE="/voxel/assets/yellow_glazed_terracotta-Ch62VJes.png",eT="/voxel/assets/yellow_shulker_box-fVTQkOlo.png",tT="/voxel/assets/yellow_stained_glass-CCX9mcAZ.png",sT="/voxel/assets/yellow_stained_glass_pane_top-BLP_2RZg.png",nT="/voxel/assets/yellow_terracotta-DWoa0NSq.png",iT="/voxel/assets/yellow_wool-BKwmC6YJ.png";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="175",oT=0,xr=1,rT=2,Aa=1,aT=2,as=3,Ss=0,It=1,Lt=2,Rt=0,an=1,io=2,br=3,Mr=4,Ra=5,ls=100,lT=101,cT=102,uT=103,_T=104,oo=200,hT=201,dT=202,pT=203,ro=204,ao=205,Da=206,fT=207,Pa=208,gT=209,mT=210,vT=211,xT=212,bT=213,MT=214,lo=0,co=1,uo=2,cn=3,_o=4,ho=5,po=6,fo=7,La=0,yT=1,ST=2,ys=0,ET=1,TT=2,wT=3,CT=4,AT=5,RT=6,DT=7,Ia=300,un=301,_n=302,go=303,mo=304,bi=306,hn=1e3,ks=1001,vo=1002,St=1003,Ua=1004,On=1005,jt=1006,Ci=1007,Ns=1008,PT=1008,hs=1009,ka=1010,Na=1011,Pn=1012,jo=1013,Bs=1014,Qt=1015,Zt=1016,Ko=1017,Zo=1018,dn=1020,Fa=35902,Ba=1021,Oa=1022,Kt=1023,za=1024,Va=1025,Ln=1026,pn=1027,$o=1028,Jo=1029,Ha=1030,Qo=1031,er=1033,ci=33776,ui=33777,_i=33778,hi=33779,xo=35840,bo=35841,Mo=35842,yo=35843,So=36196,Eo=37492,To=37496,wo=37808,Co=37809,Ao=37810,Ro=37811,Do=37812,Po=37813,Lo=37814,Io=37815,Uo=37816,ko=37817,No=37818,Fo=37819,Bo=37820,Oo=37821,di=36492,zo=36494,Vo=36495,Ga=36283,Ho=36284,Go=36285,Wo=36286,LT=3200,IT=3201,tr=0,UT=1,xs="",At="srgb",fn="srgb-linear",mi="linear",tt="srgb",Vs=7680,yr=519,kT=512,NT=513,FT=514,Wa=515,BT=516,OT=517,zT=518,VT=519,Sr=35044,Er="300 es",cs=2e3,vi=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const i=s[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const i=s.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tr=1234567;const An=Math.PI/180,In=180/Math.PI;function vn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function sr(n,e){return(n%e+e)%e}function HT(n,e,t,s,i){return s+(n-e)*(i-s)/(t-e)}function GT(n,e,t){return n!==e?(t-n)/(e-n):0}function Rn(n,e,t){return(1-t)*n+t*e}function WT(n,e,t,s){return Rn(n,e,1-Math.exp(-t*s))}function XT(n,e=1){return e-Math.abs(sr(n,e*2)-e)}function qT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function YT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function KT(n,e){return n+Math.random()*(e-n)}function ZT(n){return n*(.5-Math.random())}function $T(n){n!==void 0&&(Tr=n);let e=Tr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JT(n){return n*An}function QT(n){return n*In}function ew(n){return(n&n-1)===0&&n!==0}function tw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nw(n,e,t,s,i){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+s)/2),u=r((e+s)/2),_=o((e-s)/2),h=r((e-s)/2),d=o((s-e)/2),g=r((s-e)/2);switch(i){case"XYX":n.set(a*u,l*_,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*_,a*c);break;case"ZXZ":n.set(l*_,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const iw={DEG2RAD:An,RAD2DEG:In,generateUUID:vn,clamp:Xe,euclideanModulo:sr,mapLinear:HT,inverseLerp:GT,lerp:Rn,damp:WT,pingpong:XT,smoothstep:qT,smootherstep:YT,randInt:jT,randFloat:KT,randFloatSpread:ZT,seededRandom:$T,degToRad:JT,radToDeg:QT,isPowerOfTwo:ew,ceilPowerOfTwo:tw,floorPowerOfTwo:sw,setQuaternionFromProperEuler:nw,normalize:wt,denormalize:nn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,i=e.elements;return this.x=i[0]*t+i[3]*s+i[6],this.y=i[1]*t+i[4]*s+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Xe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*s-r*i+e.x,this.y=o*i+r*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,s,i,o,r,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,i,o,r,a,l,c)}set(e,t,s,i,o,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=s,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,i=t.elements,o=this.elements,r=s[0],a=s[3],l=s[6],c=s[1],u=s[4],_=s[7],h=s[2],d=s[5],g=s[8],m=i[0],f=i[3],p=i[6],E=i[1],y=i[4],S=i[7],D=i[2],A=i[5],C=i[8];return o[0]=r*m+a*E+l*D,o[3]=r*f+a*y+l*A,o[6]=r*p+a*S+l*C,o[1]=c*m+u*E+_*D,o[4]=c*f+u*y+_*A,o[7]=c*p+u*S+_*C,o[2]=h*m+d*E+g*D,o[5]=h*f+d*y+g*A,o[8]=h*p+d*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-s*o*u+s*a*l+i*o*c-i*r*l}invert(){const e=this.elements,t=e[0],s=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],_=u*r-a*c,h=a*l-u*o,d=c*o-r*l,g=t*_+s*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=_*m,e[1]=(i*c-u*s)*m,e[2]=(a*s-i*r)*m,e[3]=h*m,e[4]=(u*t-i*l)*m,e[5]=(i*o-a*t)*m,e[6]=d*m,e[7]=(s*l-c*t)*m,e[8]=(r*t-s*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(s*l,s*c,-s*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ai.makeScale(e,t)),this}rotate(e){return this.premultiply(Ai.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ai.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let i=0;i<9;i++)if(t[i]!==s[i])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ai=new Fe;function Xa(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Un(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ow(){const n=Un("canvas");return n.style.display="block",n}const wr={};function pi(n){n in wr||(wr[n]=!0,console.warn(n))}function rw(n,e,t){return new Promise(function(s,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:s()}}setTimeout(o,t)})}function aw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cr=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ar=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cw(){const n={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===tt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===tt&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xs?mi:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return n.define({[fn]:{primaries:e,whitePoint:s,transfer:mi,toXYZ:Cr,fromXYZ:Ar,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:s,transfer:tt,toXYZ:Cr,fromXYZ:Ar,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}const Ze=cw();function us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ln(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class uw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hs===void 0&&(Hs=Un("canvas")),Hs.width=e.width,Hs.height=e.height;const i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),s=Hs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Un("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const i=s.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=us(o[r]/255)*255;return s.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(us(t[s]/255)*255):t[s]=us(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class nr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ri(i[r].image)):o.push(Ri(i[r]))}else o=Ri(i);s.url=o}return t||(e.images[this.uuid]=s),s}}function Ri(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hw=0;class ft extends Os{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,s=ks,i=ks,o=jt,r=Ns,a=Kt,l=hs,c=ft.DEFAULT_ANISOTROPY,u=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=vn(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ia)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case ks:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case ks:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=Ia;ft.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,s=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,i){return this.x=e,this.y=t,this.z=s,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*s+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*s+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*s+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*s+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,i,o;const l=e.elements,c=l[0],u=l[4],_=l[8],h=l[1],d=l[5],g=l[9],m=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(_-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(_+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(d+1)/2,D=(p+1)/2,A=(u+h)/4,C=(_+m)/4,P=(g+f)/4;return y>S&&y>D?y<.01?(s=0,i=.707106781,o=.707106781):(s=Math.sqrt(y),i=A/s,o=C/s):S>D?S<.01?(s=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),s=A/i,o=P/i):D<.01?(s=.707106781,i=.707106781,o=0):(o=Math.sqrt(D),s=C/o,i=P/o),this.set(s,i,o,t),this}let E=Math.sqrt((f-g)*(f-g)+(_-m)*(_-m)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(_-m)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dw extends Os{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const o=new ft(i,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);o.flipY=!1,o.generateMipmaps=s.generateMipmaps,o.internalFormat=s.internalFormat,this.textures=[];const r=s.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bt extends dw{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class qa extends ft{constructor(e=null,t=1,s=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pw extends ft{constructor(e=null,t=1,s=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,s=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=i}static slerpFlat(e,t,s,i,o,r,a){let l=s[i+0],c=s[i+1],u=s[i+2],_=s[i+3];const h=o[r+0],d=o[r+1],g=o[r+2],m=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=_;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(_!==m||l!==h||c!==d||u!==g){let f=1-a;const p=l*h+c*d+u*g+_*m,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),A=Math.atan2(D,p*E);f=Math.sin(f*A)/D,a=Math.sin(a*A)/D}const S=a*E;if(l=l*f+h*S,c=c*f+d*S,u=u*f+g*S,_=_*f+m*S,f===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+_*_);l*=D,c*=D,u*=D,_*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,i,o,r){const a=s[i],l=s[i+1],c=s[i+2],u=s[i+3],_=o[r],h=o[r+1],d=o[r+2],g=o[r+3];return e[t]=a*g+u*_+l*d-c*h,e[t+1]=l*g+u*h+c*_-a*d,e[t+2]=c*g+u*d+a*h-l*_,e[t+3]=u*g-a*_-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,i){return this._x=e,this._y=t,this._z=s,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(s/2),u=a(i/2),_=a(o/2),h=l(s/2),d=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=h*u*_+c*d*g,this._y=c*d*_-h*u*g,this._z=c*u*g+h*d*_,this._w=c*u*_-h*d*g;break;case"YXZ":this._x=h*u*_+c*d*g,this._y=c*d*_-h*u*g,this._z=c*u*g-h*d*_,this._w=c*u*_+h*d*g;break;case"ZXY":this._x=h*u*_-c*d*g,this._y=c*d*_+h*u*g,this._z=c*u*g+h*d*_,this._w=c*u*_-h*d*g;break;case"ZYX":this._x=h*u*_-c*d*g,this._y=c*d*_+h*u*g,this._z=c*u*g-h*d*_,this._w=c*u*_+h*d*g;break;case"YZX":this._x=h*u*_+c*d*g,this._y=c*d*_+h*u*g,this._z=c*u*g-h*d*_,this._w=c*u*_-h*d*g;break;case"XZY":this._x=h*u*_-c*d*g,this._y=c*d*_-h*u*g,this._z=c*u*g+h*d*_,this._w=c*u*_+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,i=Math.sin(s);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],_=t[10],h=s+a+_;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(o-c)*d,this._z=(r-i)*d}else if(s>a&&s>_){const d=2*Math.sqrt(1+s-a-_);this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+c)/d}else if(a>_){const d=2*Math.sqrt(1+a-s-_);this._w=(o-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+_-s-a);this._w=(r-i)/d,this._x=(o+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const i=Math.min(1,t/s);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=s*u+r*a+i*c-o*l,this._y=i*u+r*l+o*a-s*c,this._z=o*u+r*c+s*l-i*a,this._w=r*u-s*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,i=this._y,o=this._z,r=this._w;let a=r*e._w+s*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=s,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*s+t*this._x,this._y=d*i+t*this._y,this._z=d*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),_=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=r*_+this._w*h,this._x=s*_+this._x*h,this._y=i*_+this._y*h,this._z=o*_+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),i=Math.sqrt(1-s),o=Math.sqrt(s);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,s=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6]*i,this.y=o[1]*t+o[4]*s+o[7]*i,this.z=o[2]*t+o[5]*s+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*s+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*s+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*s+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*s+o[10]*i+o[14])*r,this}applyQuaternion(e){const t=this.x,s=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*s),u=2*(a*t-o*i),_=2*(o*s-r*t);return this.x=t+l*c+r*_-a*u,this.y=s+l*u+a*c-o*_,this.z=i+l*_+o*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*s+o[8]*i,this.y=o[1]*t+o[5]*s+o[9]*i,this.z=o[2]*t+o[6]*s+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-s*l,this.z=s*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Di.copy(this).projectOnVector(e),this.sub(Di)}reflect(e){return this.sub(Di.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Xe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,i=this.z-e.z;return t*t+s*s+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const i=Math.sin(t)*e;return this.x=i*Math.sin(s),this.y=Math.cos(t)*e,this.z=i*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Di=new O,Rr=new kn;class Nn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const o=s.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Wt):Wt.fromBufferAttribute(o,r),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zn.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),zn.copy(s.boundingBox)),zn.applyMatrix4(e.matrixWorld),this.union(zn)}const i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sn),Vn.subVectors(this.max,Sn),Gs.subVectors(e.a,Sn),Ws.subVectors(e.b,Sn),Xs.subVectors(e.c,Sn),ds.subVectors(Ws,Gs),ps.subVectors(Xs,Ws),ws.subVectors(Gs,Xs);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-ws.z,ws.y,ds.z,0,-ds.x,ps.z,0,-ps.x,ws.z,0,-ws.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-ws.y,ws.x,0];return!Pi(t,Gs,Ws,Xs,Vn)||(t=[1,0,0,0,1,0,0,0,1],!Pi(t,Gs,Ws,Xs,Vn))?!1:(Hn.crossVectors(ds,ps),t=[Hn.x,Hn.y,Hn.z],Pi(t,Gs,Ws,Xs,Vn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ss=[new O,new O,new O,new O,new O,new O,new O,new O],Wt=new O,zn=new Nn,Gs=new O,Ws=new O,Xs=new O,ds=new O,ps=new O,ws=new O,Sn=new O,Vn=new O,Hn=new O,Cs=new O;function Pi(n,e,t,s,i){for(let o=0,r=n.length-3;o<=r;o+=3){Cs.fromArray(n,o);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=s.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fw=new Nn,En=new O,Li=new O;class ir{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):fw.setFromPoints(e).getCenter(s);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,s.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;En.subVectors(e,this.center);const t=En.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),i=(s-this.radius)*.5;this.center.addScaledVector(En,i/s),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Li.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(En.copy(e.center).add(Li)),this.expandByPoint(En.copy(e.center).sub(Li))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ns=new O,Ii=new O,Gn=new O,fs=new O,Ui=new O,Wn=new O,ki=new O;class gw{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,s,i){Ii.copy(e).add(t).multiplyScalar(.5),Gn.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Ii);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Gn),a=fs.dot(this.direction),l=-fs.dot(Gn),c=fs.lengthSq(),u=Math.abs(1-r*r);let _,h,d,g;if(u>0)if(_=r*l-a,h=r*a-l,g=o*u,_>=0)if(h>=-g)if(h<=g){const m=1/u;_*=m,h*=m,d=_*(_+r*h+2*a)+h*(r*_+h+2*l)+c}else h=o,_=Math.max(0,-(r*h+a)),d=-_*_+h*(h+2*l)+c;else h=-o,_=Math.max(0,-(r*h+a)),d=-_*_+h*(h+2*l)+c;else h<=-g?(_=Math.max(0,-(-r*o+a)),h=_>0?-o:Math.min(Math.max(-o,-l),o),d=-_*_+h*(h+2*l)+c):h<=g?(_=0,h=Math.min(Math.max(-o,-l),o),d=h*(h+2*l)+c):(_=Math.max(0,-(r*o+a)),h=_>0?o:Math.min(Math.max(-o,-l),o),d=-_*_+h*(h+2*l)+c);else h=r>0?-o:o,_=Math.max(0,-(r*h+a)),d=-_*_+h*(h+2*l)+c;return s&&s.copy(this.origin).addScaledVector(this.direction,_),i&&i.copy(Ii).addScaledVector(Gn,h),d}intersectSphere(e,t){ns.subVectors(e.center,this.origin);const s=ns.dot(this.direction),i=ns.dot(ns)-s*s,o=e.radius*e.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=s-r,l=s+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,i,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,_=1/this.direction.z,h=this.origin;return c>=0?(s=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(s=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),s>r||o>i||((o>s||isNaN(s))&&(s=o),(r<i||isNaN(i))&&(i=r),_>=0?(a=(e.min.z-h.z)*_,l=(e.max.z-h.z)*_):(a=(e.max.z-h.z)*_,l=(e.min.z-h.z)*_),s>l||a>i)||((a>s||s!==s)&&(s=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(s>=0?s:i,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,s,i,o){Ui.subVectors(t,e),Wn.subVectors(s,e),ki.crossVectors(Ui,Wn);let r=this.direction.dot(ki),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;fs.subVectors(this.origin,e);const l=a*this.direction.dot(Wn.crossVectors(fs,Wn));if(l<0)return null;const c=a*this.direction.dot(Ui.cross(fs));if(c<0||l+c>r)return null;const u=-a*fs.dot(ki);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,s,i,o,r,a,l,c,u,_,h,d,g,m,f){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,i,o,r,a,l,c,u,_,h,d,g,m,f)}set(e,t,s,i,o,r,a,l,c,u,_,h,d,g,m,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=s,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=_,p[14]=h,p[3]=d,p[7]=g,p[11]=m,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,i=1/qs.setFromMatrixColumn(e,0).length(),o=1/qs.setFromMatrixColumn(e,1).length(),r=1/qs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*i,t[1]=s[1]*i,t[2]=s[2]*i,t[3]=0,t[4]=s[4]*o,t[5]=s[5]*o,t[6]=s[6]*o,t[7]=0,t[8]=s[8]*r,t[9]=s[9]*r,t[10]=s[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,i=e.y,o=e.z,r=Math.cos(s),a=Math.sin(s),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const h=r*u,d=r*_,g=a*u,m=a*_;t[0]=l*u,t[4]=-l*_,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*u,d=l*_,g=c*u,m=c*_;t[0]=h+m*a,t[4]=g*a-d,t[8]=r*c,t[1]=r*_,t[5]=r*u,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*u,d=l*_,g=c*u,m=c*_;t[0]=h-m*a,t[4]=-r*_,t[8]=g+d*a,t[1]=d+g*a,t[5]=r*u,t[9]=m-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*u,d=r*_,g=a*u,m=a*_;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*_,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,d=r*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*_,t[8]=g*_+d,t[1]=_,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*_+g,t[10]=h-m*_}else if(e.order==="XZY"){const h=r*l,d=r*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-_,t[8]=c*u,t[1]=h*_+m,t[5]=r*u,t[9]=d*_-g,t[2]=g*_-d,t[6]=a*u,t[10]=m*_+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mw,e,vw)}lookAt(e,t,s){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),gs.crossVectors(s,kt),gs.lengthSq()===0&&(Math.abs(s.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),gs.crossVectors(s,kt)),gs.normalize(),Xn.crossVectors(kt,gs),i[0]=gs.x,i[4]=Xn.x,i[8]=kt.x,i[1]=gs.y,i[5]=Xn.y,i[9]=kt.y,i[2]=gs.z,i[6]=Xn.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,i=t.elements,o=this.elements,r=s[0],a=s[4],l=s[8],c=s[12],u=s[1],_=s[5],h=s[9],d=s[13],g=s[2],m=s[6],f=s[10],p=s[14],E=s[3],y=s[7],S=s[11],D=s[15],A=i[0],C=i[4],P=i[8],M=i[12],v=i[1],w=i[5],B=i[9],k=i[13],W=i[2],j=i[6],H=i[10],q=i[14],N=i[3],J=i[7],ne=i[11],he=i[15];return o[0]=r*A+a*v+l*W+c*N,o[4]=r*C+a*w+l*j+c*J,o[8]=r*P+a*B+l*H+c*ne,o[12]=r*M+a*k+l*q+c*he,o[1]=u*A+_*v+h*W+d*N,o[5]=u*C+_*w+h*j+d*J,o[9]=u*P+_*B+h*H+d*ne,o[13]=u*M+_*k+h*q+d*he,o[2]=g*A+m*v+f*W+p*N,o[6]=g*C+m*w+f*j+p*J,o[10]=g*P+m*B+f*H+p*ne,o[14]=g*M+m*k+f*q+p*he,o[3]=E*A+y*v+S*W+D*N,o[7]=E*C+y*w+S*j+D*J,o[11]=E*P+y*B+S*H+D*ne,o[15]=E*M+y*k+S*q+D*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],_=e[6],h=e[10],d=e[14],g=e[3],m=e[7],f=e[11],p=e[15];return g*(+o*l*_-i*c*_-o*a*h+s*c*h+i*a*d-s*l*d)+m*(+t*l*d-t*c*h+o*r*h-i*r*d+i*c*u-o*l*u)+f*(+t*c*_-t*a*d-o*r*_+s*r*d+o*a*u-s*c*u)+p*(-i*a*u-t*l*_+t*a*h+i*r*_-s*r*h+s*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],_=e[9],h=e[10],d=e[11],g=e[12],m=e[13],f=e[14],p=e[15],E=_*f*c-m*h*c+m*l*d-a*f*d-_*l*p+a*h*p,y=g*h*c-u*f*c-g*l*d+r*f*d+u*l*p-r*h*p,S=u*m*c-g*_*c+g*a*d-r*m*d-u*a*p+r*_*p,D=g*_*l-u*m*l-g*a*h+r*m*h+u*a*f-r*_*f,A=t*E+s*y+i*S+o*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=E*C,e[1]=(m*h*o-_*f*o-m*i*d+s*f*d+_*i*p-s*h*p)*C,e[2]=(a*f*o-m*l*o+m*i*c-s*f*c-a*i*p+s*l*p)*C,e[3]=(_*l*o-a*h*o-_*i*c+s*h*c+a*i*d-s*l*d)*C,e[4]=y*C,e[5]=(u*f*o-g*h*o+g*i*d-t*f*d-u*i*p+t*h*p)*C,e[6]=(g*l*o-r*f*o-g*i*c+t*f*c+r*i*p-t*l*p)*C,e[7]=(r*h*o-u*l*o+u*i*c-t*h*c-r*i*d+t*l*d)*C,e[8]=S*C,e[9]=(g*_*o-u*m*o-g*s*d+t*m*d+u*s*p-t*_*p)*C,e[10]=(r*m*o-g*a*o+g*s*c-t*m*c-r*s*p+t*a*p)*C,e[11]=(u*a*o-r*_*o-u*s*c+t*_*c+r*s*d-t*a*d)*C,e[12]=D*C,e[13]=(u*m*i-g*_*i+g*s*h-t*m*h-u*s*f+t*_*f)*C,e[14]=(g*a*i-r*m*i-g*s*l+t*m*l+r*s*f-t*a*f)*C,e[15]=(r*_*i-u*a*i+u*s*l-t*_*l-r*s*h+t*a*h)*C,this}scale(e){const t=this.elements,s=e.x,i=e.y,o=e.z;return t[0]*=s,t[4]*=i,t[8]*=o,t[1]*=s,t[5]*=i,t[9]*=o,t[2]*=s,t[6]*=i,t[10]*=o,t[3]*=s,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,i))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),i=Math.sin(t),o=1-s,r=e.x,a=e.y,l=e.z,c=o*r,u=o*a;return this.set(c*r+s,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+s,u*l-i*r,0,c*l-i*a,u*l+i*r,o*l*l+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,i,o,r){return this.set(1,s,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,s){const i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,u=r+r,_=a+a,h=o*c,d=o*u,g=o*_,m=r*u,f=r*_,p=a*_,E=l*c,y=l*u,S=l*_,D=s.x,A=s.y,C=s.z;return i[0]=(1-(m+p))*D,i[1]=(d+S)*D,i[2]=(g-y)*D,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(h+p))*A,i[6]=(f+E)*A,i[7]=0,i[8]=(g+y)*C,i[9]=(f-E)*C,i[10]=(1-(h+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,s){const i=this.elements;let o=qs.set(i[0],i[1],i[2]).length();const r=qs.set(i[4],i[5],i[6]).length(),a=qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/o,u=1/r,_=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=_,Xt.elements[9]*=_,Xt.elements[10]*=_,t.setFromRotationMatrix(Xt),s.x=o,s.y=r,s.z=a,this}makePerspective(e,t,s,i,o,r,a=cs){const l=this.elements,c=2*o/(t-e),u=2*o/(s-i),_=(t+e)/(t-e),h=(s+i)/(s-i);let d,g;if(a===cs)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===vi)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=_,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,s,i,o,r,a=cs){const l=this.elements,c=1/(t-e),u=1/(s-i),_=1/(r-o),h=(t+e)*c,d=(s+i)*u;let g,m;if(a===cs)g=(r+o)*_,m=-2*_;else if(a===vi)g=o*_,m=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let i=0;i<16;i++)if(t[i]!==s[i])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const qs=new O,Xt=new it,mw=new O(0,0,0),vw=new O(1,1,1),gs=new O,Xn=new O,kt=new O,Dr=new it,Pr=new kn;class $t{constructor(e=0,t=0,s=0,i=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,i=this._order){return this._x=e,this._y=t,this._z=s,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],_=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-_,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Dr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dr,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const Lr=new O,Ys=new kn,is=new it,qn=new O,Tn=new O,bw=new O,Mw=new kn,Ir=new O(1,0,0),Ur=new O(0,1,0),kr=new O(0,0,1),Nr={type:"added"},yw={type:"removed"},js={type:"childadded",child:null},Ni={type:"childremoved",child:null};class Et extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new O,t=new $t,s=new kn,i=new O(1,1,1);function o(){s.setFromEuler(t,!1)}function r(){t.setFromQuaternion(s,void 0,!1)}t._onChange(o),s._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Fe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Ir,e)}rotateY(e){return this.rotateOnAxis(Ur,e)}rotateZ(e){return this.rotateOnAxis(kr,e)}translateOnAxis(e,t){return Lr.copy(e).applyQuaternion(this.quaternion),this.position.add(Lr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ir,e)}translateY(e){return this.translateOnAxis(Ur,e)}translateZ(e){return this.translateOnAxis(kr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?qn.copy(e):qn.set(e,t,s);const i=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Tn,qn,this.up):is.lookAt(qn,Tn,this.up),this.quaternion.setFromRotationMatrix(is),i&&(is.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(is),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nr),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yw),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nr),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,i=this.children.length;s<i;s++){const r=this.children[s].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,bw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,i=t.length;s<i;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,i=t.length;s<i;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,i=t.length;s<i;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const _=l[c];o(e.shapes,_)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),_=r(e.shapes),h=r(e.skeletons),d=r(e.animations),g=r(e.nodes);a.length>0&&(s.geometries=a),l.length>0&&(s.materials=l),c.length>0&&(s.textures=c),u.length>0&&(s.images=u),_.length>0&&(s.shapes=_),h.length>0&&(s.skeletons=h),d.length>0&&(s.animations=d),g.length>0&&(s.nodes=g)}return s.object=i,s;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const i=e.children[s];this.add(i.clone())}return this}}Et.DEFAULT_UP=new O(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new O,os=new O,Fi=new O,rs=new O,Ks=new O,Zs=new O,Fr=new O,Bi=new O,Oi=new O,zi=new O,Vi=new ot,Hi=new ot,Gi=new ot;class Yt{constructor(e=new O,t=new O,s=new O){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,i){i.subVectors(s,t),qt.subVectors(e,t),i.cross(qt);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,s,i,o){qt.subVectors(i,t),os.subVectors(s,t),Fi.subVectors(e,t);const r=qt.dot(qt),a=qt.dot(os),l=qt.dot(Fi),c=os.dot(os),u=os.dot(Fi),_=r*c-a*a;if(_===0)return o.set(0,0,0),null;const h=1/_,d=(c*l-a*u)*h,g=(r*u-a*l)*h;return o.set(1-d-g,g,d)}static containsPoint(e,t,s,i){return this.getBarycoord(e,t,s,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,s,i,o,r,a,l){return this.getBarycoord(e,t,s,i,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,rs.x),l.addScaledVector(r,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,s,i,o,r){return Vi.setScalar(0),Hi.setScalar(0),Gi.setScalar(0),Vi.fromBufferAttribute(e,t),Hi.fromBufferAttribute(e,s),Gi.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Vi,o.x),r.addScaledVector(Hi,o.y),r.addScaledVector(Gi,o.z),r}static isFrontFacing(e,t,s,i){return qt.subVectors(s,t),os.subVectors(e,t),qt.cross(os).dot(i)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,i){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,s,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),os.subVectors(this.a,this.b),qt.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,i,o){return Yt.getInterpolation(e,this.a,this.b,this.c,t,s,i,o)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,i=this.b,o=this.c;let r,a;Ks.subVectors(i,s),Zs.subVectors(o,s),Bi.subVectors(e,s);const l=Ks.dot(Bi),c=Zs.dot(Bi);if(l<=0&&c<=0)return t.copy(s);Oi.subVectors(e,i);const u=Ks.dot(Oi),_=Zs.dot(Oi);if(u>=0&&_<=u)return t.copy(i);const h=l*_-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(s).addScaledVector(Ks,r);zi.subVectors(e,o);const d=Ks.dot(zi),g=Zs.dot(zi);if(g>=0&&d<=g)return t.copy(o);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(s).addScaledVector(Zs,a);const f=u*g-d*_;if(f<=0&&_-u>=0&&d-g>=0)return Fr.subVectors(o,i),a=(_-u)/(_-u+(d-g)),t.copy(i).addScaledVector(Fr,a);const p=1/(f+m+h);return r=m*p,a=h*p,t.copy(s).addScaledVector(Ks,r).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Wi(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,s,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,s,i=Ze.workingColorSpace){if(e=sr(e,1),t=Xe(t,0,1),s=Xe(s,0,1),t===0)this.r=this.g=this.b=s;else{const o=s<=.5?s*(1+t):s+t-s*t,r=2*s-o;this.r=Wi(r,o,e+1/3),this.g=Wi(r,o,e),this.b=Wi(r,o,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function s(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const s=ja[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.fromWorkingColorSpace(bt.copy(this),e),Math.round(Xe(bt.r*255,0,255))*65536+Math.round(Xe(bt.g*255,0,255))*256+Math.round(Xe(bt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(bt.copy(this),t);const s=bt.r,i=bt.g,o=bt.b,r=Math.max(s,i,o),a=Math.min(s,i,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const _=r-a;switch(c=u<=.5?_/(r+a):_/(2-r-a),r){case s:l=(i-o)/_+(i<o?6:0);break;case i:l=(o-s)/_+2;break;case o:l=(s-i)/_+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=At){Ze.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,s=bt.g,i=bt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(i*255)})`}offsetHSL(e,t,s){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Yn);const s=Rn(ms.h,Yn.h,t),i=Rn(ms.s,Yn.s,t),o=Rn(ms.l,Yn.l,t);return this.setHSL(s,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*s+o[6]*i,this.g=o[1]*t+o[4]*s+o[7]*i,this.b=o[2]*t+o[5]*s+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ae;Ae.NAMES=ja;let Sw=0;class xn extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=an,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(s):i&&i.isVector3&&s&&s.isVector3?i.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==an&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ro&&(s.blendSrc=this.blendSrc),this.blendDst!==ao&&(s.blendDst=this.blendDst),this.blendEquation!==ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==cn&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=i(e.textures),r=i(e.images);o.length>0&&(s.textures=o),r.length>0&&(s.images=r)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const i=t.length;s=new Array(i);for(let o=0;o!==i;++o)s[o]=t[o].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class or extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,jn=new Te;let Ew=0;class ke{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ew++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Sr,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[s+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix3(e),this.setXY(t,jn.x,jn.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=nn(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=wt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),s=wt(s,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=i,this}setXYZW(e,t,s,i,o){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),s=wt(s,this.array),i=wt(i,this.array),o=wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sr&&(e.usage=this.usage),e}}class Ka extends ke{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Za extends ke{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class _s extends ke{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Tw=0;const Vt=new it,Xi=new Et,$s=new O,Nt=new Nn,wn=new Nn,pt=new O;class yt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xa(e)?Za:Ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const o=new Fe().getNormalMatrix(e);s.applyNormalMatrix(o),s.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,s){return Vt.makeTranslation(e,t,s),this.applyMatrix4(Vt),this}scale(e,t,s){return Vt.makeScale(e,t,s),this.applyMatrix4(Vt),this}lookAt(e){return Xi.lookAt(e),Xi.updateMatrix(),this.applyMatrix4(Xi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let i=0,o=e.length;i<o;i++){const r=e[i];s.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _s(s,3))}else{const s=Math.min(e.length,t.count);for(let i=0;i<s;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,i=t.length;s<i;s++){const o=t[s];Nt.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const s=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Nt.min,wn.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,wn.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(wn.min),Nt.expandByPoint(wn.max))}Nt.getCenter(s);let i=0;for(let o=0,r=e.count;o<r;o++)pt.fromBufferAttribute(e,o),i=Math.max(i,s.distanceToSquared(pt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),pt.add($s)),i=Math.max(i,s.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*s.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<s.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,_=new O,h=new Te,d=new Te,g=new Te,m=new O,f=new O;function p(P,M,v){c.fromBufferAttribute(s,P),u.fromBufferAttribute(s,M),_.fromBufferAttribute(s,v),h.fromBufferAttribute(o,P),d.fromBufferAttribute(o,M),g.fromBufferAttribute(o,v),u.sub(c),_.sub(c),d.sub(h),g.sub(h);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(_,-d.y).multiplyScalar(w),f.copy(_).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[P].add(m),a[M].add(m),a[v].add(m),l[P].add(f),l[M].add(f),l[v].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,M=E.length;P<M;++P){const v=E[P],w=v.start,B=v.count;for(let k=w,W=w+B;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new O,S=new O,D=new O,A=new O;function C(P){D.fromBufferAttribute(i,P),A.copy(D);const M=a[P];y.copy(M),y.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(A,M);const w=S.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,w)}for(let P=0,M=E.length;P<M;++P){const v=E[P],w=v.start,B=v.count;for(let k=w,W=w+B;k<W;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ke(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let h=0,d=s.count;h<d;h++)s.setXYZ(h,0,0,0);const i=new O,o=new O,r=new O,a=new O,l=new O,c=new O,u=new O,_=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),u.subVectors(r,o),_.subVectors(i,o),u.cross(_),a.fromBufferAttribute(s,g),l.fromBufferAttribute(s,m),c.fromBufferAttribute(s,f),a.add(u),l.add(u),c.add(u),s.setXYZ(g,a.x,a.y,a.z),s.setXYZ(m,l.x,l.y,l.z),s.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,o),_.subVectors(i,o),u.cross(_),s.setXYZ(h+0,u.x,u.y,u.z),s.setXYZ(h+1,u.x,u.y,u.z),s.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,_=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new ke(h,u,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,s=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,s);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,_=c.length;u<_;u++){const h=c[u],d=e(h,s);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const l in s){const c=s[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let _=0,h=c.length;_<h;_++){const d=c[_];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],_=o[c];for(let h=0,d=_.length;h<d;h++)u.push(_[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const _=r[c];this.addGroup(_.start,_.count,_.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Br=new it,As=new gw,Kn=new ir,Or=new O,Zn=new O,$n=new O,Jn=new O,qi=new O,Qn=new O,zr=new O,ei=new O;class lt extends Et{constructor(e=new yt,t=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const i=t[s[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const s=this.geometry,i=s.attributes.position,o=s.morphAttributes.position,r=s.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Qn.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],_=o[l];u!==0&&(qi.fromBufferAttribute(_,e),r?Qn.addScaledVector(qi,u):Qn.addScaledVector(qi.sub(t),u))}t.add(Qn)}return t}raycast(e,t){const s=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kn.copy(s.boundingSphere),Kn.applyMatrix4(o),As.copy(e.ray).recast(e.near),!(Kn.containsPoint(As.origin)===!1&&(As.intersectSphere(Kn,Or)===null||As.origin.distanceToSquared(Or)>(e.far-e.near)**2))&&(Br.copy(o).invert(),As.copy(e.ray).applyMatrix4(Br),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,s){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,_=o.attributes.normal,h=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,m=h.length;g<m;g++){const f=h[g],p=r[f.materialIndex],E=Math.max(f.start,d.start),y=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let S=E,D=y;S<D;S+=3){const A=a.getX(S),C=a.getX(S+1),P=a.getX(S+2);i=ti(this,p,e,s,c,u,_,A,C,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let f=g,p=m;f<p;f+=3){const E=a.getX(f),y=a.getX(f+1),S=a.getX(f+2);i=ti(this,r,e,s,c,u,_,E,y,S),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,m=h.length;g<m;g++){const f=h[g],p=r[f.materialIndex],E=Math.max(f.start,d.start),y=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let S=E,D=y;S<D;S+=3){const A=S,C=S+1,P=S+2;i=ti(this,p,e,s,c,u,_,A,C,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let f=g,p=m;f<p;f+=3){const E=f,y=f+1,S=f+2;i=ti(this,r,e,s,c,u,_,E,y,S),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function ww(n,e,t,s,i,o,r,a){let l;if(e.side===It?l=s.intersectTriangle(r,o,i,!0,a):l=s.intersectTriangle(i,o,r,e.side===Ss,a),l===null)return null;ei.copy(a),ei.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ei);return c<t.near||c>t.far?null:{distance:c,point:ei.clone(),object:n}}function ti(n,e,t,s,i,o,r,a,l,c){n.getVertexPosition(a,Zn),n.getVertexPosition(l,$n),n.getVertexPosition(c,Jn);const u=ww(n,e,t,s,Zn,$n,Jn,zr);if(u){const _=new O;Yt.getBarycoord(zr,Zn,$n,Jn,_),i&&(u.uv=Yt.getInterpolatedAttribute(i,a,l,c,_,new Te)),o&&(u.uv1=Yt.getInterpolatedAttribute(o,a,l,c,_,new Te)),r&&(u.normal=Yt.getInterpolatedAttribute(r,a,l,c,_,new O),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Yt.getNormal(Zn,$n,Jn,h.normal),u.face=h,u.barycoord=_}return u}class es extends yt{constructor(e=1,t=1,s=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],_=[];let h=0,d=0;g("z","y","x",-1,-1,s,t,e,r,o,0),g("z","y","x",1,-1,s,t,-e,r,o,1),g("x","z","y",1,1,e,s,t,i,r,2),g("x","z","y",1,-1,e,s,-t,i,r,3),g("x","y","z",1,-1,e,t,s,i,o,4),g("x","y","z",-1,-1,e,t,-s,i,o,5),this.setIndex(l),this.setAttribute("position",new _s(c,3)),this.setAttribute("normal",new _s(u,3)),this.setAttribute("uv",new _s(_,2));function g(m,f,p,E,y,S,D,A,C,P,M){const v=S/C,w=D/P,B=S/2,k=D/2,W=A/2,j=C+1,H=P+1;let q=0,N=0;const J=new O;for(let ne=0;ne<H;ne++){const he=ne*w-k;for(let ye=0;ye<j;ye++){const Ie=ye*v-B;J[m]=Ie*E,J[f]=he*y,J[p]=W,c.push(J.x,J.y,J.z),J[m]=0,J[f]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),_.push(ye/C),_.push(1-ne/P),q+=1}}for(let ne=0;ne<P;ne++)for(let he=0;he<C;he++){const ye=h+he+j*ne,Ie=h+he+j*(ne+1),X=h+(he+1)+j*(ne+1),te=h+(he+1)+j*ne;l.push(ye,Ie,te),l.push(Ie,X,te),N+=6}a.addGroup(d,N,M),d+=N,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gn(n){const e={};for(const t in n){e[t]={};for(const s in n[t]){const i=n[t][s];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=i.clone():Array.isArray(i)?e[t][s]=i.slice():e[t][s]=i}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const s=gn(n[t]);for(const i in s)e[i]=s[i]}return e}function Cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $a(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ms={clone:gn,merge:Ct};var Aw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Aw,this.fragmentShader=Rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gn(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const i in this.extensions)this.extensions[i]===!0&&(s[i]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Ja extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=cs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new O,Vr=new Te,Hr=new Te;class Ft extends Ja{constructor(e=50,t=1,s=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=In*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(An*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return In*2*Math.atan(Math.tan(An*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,Vr,Hr),t.subVectors(Hr,Vr)}setViewOffset(e,t,s,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(An*.5*this.fov)/this.zoom,s=2*t,i=this.aspect*s,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*s/c,i*=r.width/l,s*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class Dw extends Et{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(Js,Qs,e,t);i.layers=this.layers,this.add(i);const o=new Ft(Js,Qs,e,t);o.layers=this.layers,this.add(o);const r=new Ft(Js,Qs,e,t);r.layers=this.layers,this.add(r);const a=new Ft(Js,Qs,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,i,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===cs)s.up.set(0,1,0),s.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vi)s.up.set(0,-1,0),s.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,_=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,i),e.render(t,o),e.setRenderTarget(s,1,i),e.render(t,r),e.setRenderTarget(s,2,i),e.render(t,a),e.setRenderTarget(s,3,i),e.render(t,l),e.setRenderTarget(s,4,i),e.render(t,c),s.texture.generateMipmaps=m,e.setRenderTarget(s,5,i),e.render(t,u),e.setRenderTarget(_,h,d),e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}}class Qa extends ft{constructor(e=[],t=un,s,i,o,r,a,l,c,u){super(e,t,s,i,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pw extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},i=[s,s,s,s,s,s];this.texture=new Qa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new es(5,5,5),o=new ct({name:"CubemapFromEquirect",uniforms:gn(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:It,blending:Rt});o.uniforms.tEquirect.value=t;const r=new lt(i,o),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=jt),new Dw(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,s=!0,i=!0){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,s,i);e.setRenderTarget(o)}}class on extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lw={type:"move"};class Yi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,s),p=this._getHandJoint(c,m);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],_=c.joints["thumb-tip"],h=u.position.distanceTo(_.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,s),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,s),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new on;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class el extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iw extends ft{constructor(e=null,t=1,s=1,i,o,r,a,l,c=St,u=St,_,h){super(null,r,a,l,c,u,i,o,_,h),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ji=new O,Uw=new O,kw=new Fe;class Ls{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,i){return this.normal.set(e,t,s),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const i=ji.subVectors(s,t).cross(Uw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(ji),i=this.normal.dot(s);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||kw.getNormalMatrix(e),i=this.coplanarPoint(ji).applyMatrix4(e),o=this.normal.applyMatrix3(s).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new ir,si=new O;class rr{constructor(e=new Ls,t=new Ls,s=new Ls,i=new Ls,o=new Ls,r=new Ls){this.planes=[e,t,s,i,o,r]}set(e,t,s,i,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(s),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=cs){const s=this.planes,i=e.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],_=i[6],h=i[7],d=i[8],g=i[9],m=i[10],f=i[11],p=i[12],E=i[13],y=i[14],S=i[15];if(s[0].setComponents(l-o,h-c,f-d,S-p).normalize(),s[1].setComponents(l+o,h+c,f+d,S+p).normalize(),s[2].setComponents(l+r,h+u,f+g,S+E).normalize(),s[3].setComponents(l-r,h-u,f-g,S-E).normalize(),s[4].setComponents(l-a,h-_,f-m,S-y).normalize(),t===cs)s[5].setComponents(l+a,h+_,f+m,S+y).normalize();else if(t===vi)s[5].setComponents(a,_,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,s=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(s)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const i=t[s];if(si.x=i.normal.x>0?e.max.x:e.min.x,si.y=i.normal.y>0?e.max.y:e.min.y,si.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(si)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nw extends ft{constructor(e,t,s,i,o,r,a,l,c){super(e,t,s,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends ft{constructor(e,t,s=Bs,i,o,r,a=St,l=St,c,u=Ln){if(u!==Ln&&u!==pn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,o,r,a,l,u,s,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mi extends yt{constructor(e=1,t=1,s=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:i};const o=e/2,r=t/2,a=Math.floor(s),l=Math.floor(i),c=a+1,u=l+1,_=e/a,h=t/l,d=[],g=[],m=[],f=[];for(let p=0;p<u;p++){const E=p*h-r;for(let y=0;y<c;y++){const S=y*_-o;g.push(S,-E,0),m.push(0,0,1),f.push(y/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,S=E+c*(p+1),D=E+1+c*(p+1),A=E+1+c*p;d.push(y,S,A),d.push(S,D,A)}this.setIndex(d),this.setAttribute("position",new _s(g,3)),this.setAttribute("normal",new _s(m,3)),this.setAttribute("uv",new _s(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dn extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fw extends xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Bw extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zw{constructor(e,t,s){const i=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,_){return c.push(u,_),this},this.removeHandler=function(u){const _=c.indexOf(u);return _!==-1&&c.splice(_,2),this},this.getHandler=function(u){for(let _=0,h=c.length;_<h;_+=2){const d=c[_],g=c[_+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Vw=new zw;class lr{constructor(e){this.manager=e!==void 0?e:Vw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(i,o){s.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lr.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hw extends lr{constructor(e){super(e)}load(e,t,s,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Gr.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=Un("img");function l(){u(),Gr.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(_){u(),i&&i(_),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Gw extends lr{constructor(e){super(e)}load(e,t,s,i){const o=new ft,r=new Hw(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},s,i),o}}class tl extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ki=new it,Wr=new O,Xr=new O;class Ww{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Wr.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wr),Xr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xr),t.updateMatrixWorld(),Ki.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ki),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ki)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cr extends Ja{constructor(e=-1,t=1,s=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=s-e,r=s+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xw extends Ww{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sl extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Xw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nl extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qw extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class yi{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qr(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qr();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qr(){return performance.now()}class Yw extends Os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yr(n,e,t,s){const i=jw(s);switch(t){case Ba:return n*e;case za:return n*e;case Va:return n*e*2;case $o:return n*e/i.components*i.byteLength;case Jo:return n*e/i.components*i.byteLength;case Ha:return n*e*2/i.components*i.byteLength;case Qo:return n*e*2/i.components*i.byteLength;case Oa:return n*e*3/i.components*i.byteLength;case Kt:return n*e*4/i.components*i.byteLength;case er:return n*e*4/i.components*i.byteLength;case ci:case ui:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _i:case hi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bo:case yo:return Math.max(n,16)*Math.max(e,8)/4;case xo:case Mo:return Math.max(n,8)*Math.max(e,8)/2;case So:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case di:case zo:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ga:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Go:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jw(n){switch(n){case hs:case ka:return{byteLength:1,components:1};case Pn:case Na:case Zt:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case Bs:case jo:case Qt:return{byteLength:4,components:1};case Fa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function il(){let n=null,e=!1,t=null,s=null;function i(o,r){t(o,r),s=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Kw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,_=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:_}}function s(a,l,c){const u=l.array,_=l.updateRanges;if(n.bindBuffer(c,a),_.length===0)n.bufferSubData(c,0,u);else{_.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<_.length;d++){const g=_[h],m=_[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++h,_[h]=m)}_.length=h+1;for(let d=0,g=_.length;d<g;d++){const m=_[d];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var Zw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$w=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wC="gl_FragColor = linearToOutputTexel( gl_FragColor );",CC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$C=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_A=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Zw,alphahash_pars_fragment:$w,alphamap_fragment:Jw,alphamap_pars_fragment:Qw,alphatest_fragment:eC,alphatest_pars_fragment:tC,aomap_fragment:sC,aomap_pars_fragment:nC,batching_pars_vertex:iC,batching_vertex:oC,begin_vertex:rC,beginnormal_vertex:aC,bsdfs:lC,iridescence_fragment:cC,bumpmap_pars_fragment:uC,clipping_planes_fragment:_C,clipping_planes_pars_fragment:hC,clipping_planes_pars_vertex:dC,clipping_planes_vertex:pC,color_fragment:fC,color_pars_fragment:gC,color_pars_vertex:mC,color_vertex:vC,common:xC,cube_uv_reflection_fragment:bC,defaultnormal_vertex:MC,displacementmap_pars_vertex:yC,displacementmap_vertex:SC,emissivemap_fragment:EC,emissivemap_pars_fragment:TC,colorspace_fragment:wC,colorspace_pars_fragment:CC,envmap_fragment:AC,envmap_common_pars_fragment:RC,envmap_pars_fragment:DC,envmap_pars_vertex:PC,envmap_physical_pars_fragment:HC,envmap_vertex:LC,fog_vertex:IC,fog_pars_vertex:UC,fog_fragment:kC,fog_pars_fragment:NC,gradientmap_pars_fragment:FC,lightmap_pars_fragment:BC,lights_lambert_fragment:OC,lights_lambert_pars_fragment:zC,lights_pars_begin:VC,lights_toon_fragment:GC,lights_toon_pars_fragment:WC,lights_phong_fragment:XC,lights_phong_pars_fragment:qC,lights_physical_fragment:YC,lights_physical_pars_fragment:jC,lights_fragment_begin:KC,lights_fragment_maps:ZC,lights_fragment_end:$C,logdepthbuf_fragment:JC,logdepthbuf_pars_fragment:QC,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:tA,map_fragment:sA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:oA,metalnessmap_fragment:rA,metalnessmap_pars_fragment:aA,morphinstance_vertex:lA,morphcolor_vertex:cA,morphnormal_vertex:uA,morphtarget_pars_vertex:_A,morphtarget_vertex:hA,normal_fragment_begin:dA,normal_fragment_maps:pA,normal_pars_fragment:fA,normal_pars_vertex:gA,normal_vertex:mA,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:bA,clearcoat_pars_fragment:MA,iridescence_pars_fragment:yA,opaque_fragment:SA,packing:EA,premultiplied_alpha_fragment:TA,project_vertex:wA,dithering_fragment:CA,dithering_pars_fragment:AA,roughnessmap_fragment:RA,roughnessmap_pars_fragment:DA,shadowmap_pars_fragment:PA,shadowmap_pars_vertex:LA,shadowmap_vertex:IA,shadowmask_pars_fragment:UA,skinbase_vertex:kA,skinning_pars_vertex:NA,skinning_vertex:FA,skinnormal_vertex:BA,specularmap_fragment:OA,specularmap_pars_fragment:zA,tonemapping_fragment:VA,tonemapping_pars_fragment:HA,transmission_fragment:GA,transmission_pars_fragment:WA,uv_pars_fragment:XA,uv_pars_vertex:qA,uv_vertex:YA,worldpos_vertex:jA,background_vert:KA,background_frag:ZA,backgroundCube_vert:$A,backgroundCube_frag:JA,cube_vert:QA,cube_frag:eR,depth_vert:tR,depth_frag:sR,distanceRGBA_vert:nR,distanceRGBA_frag:iR,equirect_vert:oR,equirect_frag:rR,linedashed_vert:aR,linedashed_frag:lR,meshbasic_vert:cR,meshbasic_frag:uR,meshlambert_vert:_R,meshlambert_frag:hR,meshmatcap_vert:dR,meshmatcap_frag:pR,meshnormal_vert:fR,meshnormal_frag:gR,meshphong_vert:mR,meshphong_frag:vR,meshphysical_vert:xR,meshphysical_frag:bR,meshtoon_vert:MR,meshtoon_frag:yR,points_vert:SR,points_frag:ER,shadow_vert:TR,shadow_frag:wR,sprite_vert:CR,sprite_frag:AR},re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jt={basic:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ct([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ct([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ct([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ct([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ct([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ct([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ct([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ct([re.lights,re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Jt.physical={uniforms:Ct([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ni={r:0,b:0,g:0},Ds=new $t,RR=new it;function DR(n,e,t,s,i,o,r){const a=new Ae(0);let l=o===!0?0:1,c,u,_=null,h=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function m(y){let S=!1;const D=g(y);D===null?p(a,l):D&&D.isColor&&(p(D,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?s.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(y,S){const D=g(S);D&&(D.isCubeTexture||D.mapping===bi)?(u===void 0&&(u=new lt(new es(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:gn(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ds.copy(S.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Ds)),u.material.toneMapped=Ze.getTransfer(D.colorSpace)!==tt,(_!==D||h!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,_=D,h=D.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new lt(new Mi(2,2),new ct({name:"BackgroundMaterial",uniforms:gn(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(D.colorSpace)!==tt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||h!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,_=D,h=D.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(ni,$a(n)),s.buffers.color.setClear(ni.r,ni.g,ni.b,S,r)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:m,addToRenderList:f,dispose:E}}function PR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),s={},i=h(null);let o=i,r=!1;function a(v,w,B,k,W){let j=!1;const H=_(k,B,w);o!==H&&(o=H,c(o.object)),j=d(v,k,B,W),j&&g(v,k,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,S(v,w,B,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function _(v,w,B){const k=B.wireframe===!0;let W=s[v.id];W===void 0&&(W={},s[v.id]=W);let j=W[w.id];j===void 0&&(j={},W[w.id]=j);let H=j[k];return H===void 0&&(H=h(l()),j[k]=H),H}function h(v){const w=[],B=[],k=[];for(let W=0;W<t;W++)w[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,w,B,k){const W=o.attributes,j=w.attributes;let H=0;const q=B.getAttributes();for(const N in q)if(q[N].location>=0){const ne=W[N];let he=j[N];if(he===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;H++}return o.attributesNum!==H||o.index!==k}function g(v,w,B,k){const W={},j=w.attributes;let H=0;const q=B.getAttributes();for(const N in q)if(q[N].location>=0){let ne=j[N];ne===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),W[N]=he,H++}o.attributes=W,o.attributesNum=H,o.index=k}function m(){const v=o.newAttributes;for(let w=0,B=v.length;w<B;w++)v[w]=0}function f(v){p(v,0)}function p(v,w){const B=o.newAttributes,k=o.enabledAttributes,W=o.attributeDivisors;B[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),W[v]!==w&&(n.vertexAttribDivisor(v,w),W[v]=w)}function E(){const v=o.newAttributes,w=o.enabledAttributes;for(let B=0,k=w.length;B<k;B++)w[B]!==v[B]&&(n.disableVertexAttribArray(B),w[B]=0)}function y(v,w,B,k,W,j,H){H===!0?n.vertexAttribIPointer(v,w,B,W,j):n.vertexAttribPointer(v,w,B,k,W,j)}function S(v,w,B,k){m();const W=k.attributes,j=B.getAttributes(),H=w.defaultAttributeValues;for(const q in j){const N=j[q];if(N.location>=0){let J=W[q];if(J===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const ne=J.normalized,he=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Ie=ye.buffer,X=ye.type,te=ye.bytesPerElement,ue=X===n.INT||X===n.UNSIGNED_INT||J.gpuType===jo;if(J.isInterleavedBufferAttribute){const se=J.data,ve=se.stride,we=J.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)p(N.location+ge,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<N.locationSize;ge++)f(N.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ge=0;ge<N.locationSize;ge++)y(N.location+ge,he/N.locationSize,X,ne,ve*te,(we+he/N.locationSize*ge)*te,ue)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)p(N.location+se,J.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<N.locationSize;se++)f(N.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let se=0;se<N.locationSize;se++)y(N.location+se,he/N.locationSize,X,ne,he*te,he/N.locationSize*se*te,ue)}}else if(H!==void 0){const ne=H[q];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(N.location,ne);break;case 3:n.vertexAttrib3fv(N.location,ne);break;case 4:n.vertexAttrib4fv(N.location,ne);break;default:n.vertexAttrib1fv(N.location,ne)}}}}E()}function D(){P();for(const v in s){const w=s[v];for(const B in w){const k=w[B];for(const W in k)u(k[W].object),delete k[W];delete w[B]}delete s[v]}}function A(v){if(s[v.id]===void 0)return;const w=s[v.id];for(const B in w){const k=w[B];for(const W in k)u(k[W].object),delete k[W];delete w[B]}delete s[v.id]}function C(v){for(const w in s){const B=s[w];if(B[v.id]===void 0)continue;const k=B[v.id];for(const W in k)u(k[W].object),delete k[W];delete B[v.id]}}function P(){M(),r=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:m,enableAttribute:f,disableUnusedAttributes:E}}function LR(n,e,t){let s;function i(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function r(c,u,_){_!==0&&(n.drawArraysInstanced(s,c,u,_),t.update(u,s,_))}function a(c,u,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,c,0,u,0,_);let d=0;for(let g=0;g<_;g++)d+=u[g];t.update(d,s,1)}function l(c,u,_,h){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(s,c,0,u,0,h,0,_);let g=0;for(let m=0;m<_;m++)g+=u[m]*h[m];t.update(g,s,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IR(n,e,t,s){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Kt&&s.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hs&&s.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qt&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const _=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:_,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:D,maxSamples:A}}function UR(n){const e=this;let t=null,s=0,i=!1,o=!1;const r=new Ls,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(_,h){const d=_.length!==0||h||s!==0||i;return i=h,s=_.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,h){t=u(_,h,0)},this.setState=function(_,h,d){const g=_.clippingPlanes,m=_.clipIntersection,f=_.clipShadows,p=n.get(_);if(!i||g===null||g.length===0||o&&!f)o?u(null):c();else{const E=o?0:s,y=E*4;let S=p.clippingState||null;l.value=S,S=u(g,h,y,d);for(let D=0;D!==y;++D)S[D]=t[D];p.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function u(_,h,d,g){const m=_!==null?_.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const p=d+m*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let y=0,S=d;y!==m;++y,S+=4)r.copy(_[y]).applyMatrix4(E,a),r.normal.toArray(f,S),f[S+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function kR(n){let e=new WeakMap;function t(r,a){return a===go?r.mapping=un:a===mo&&(r.mapping=_n),r}function s(r){if(r&&r.isTexture){const a=r.mapping;if(a===go||a===mo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Pw(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:s,dispose:o}}const rn=4,jr=[.125,.215,.35,.446,.526,.582],Us=20,Zi=new cr,Kr=new Ae;let $i=null,Ji=0,Qi=0,eo=!1;const Is=(1+Math.sqrt(5))/2,en=1/Is,Zr=[new O(-Is,en,0),new O(Is,en,0),new O(-en,0,Is),new O(en,0,Is),new O(0,Is,-en),new O(0,Is,en),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],NR=new O;class $r{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,i=100,o={}){const{size:r=256,position:a=NR}=o;$i=this._renderer.getRenderTarget(),Ji=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($i,Ji,Qi),this._renderer.xr.enabled=eo,e.scissorTest=!1,ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===un||e.mapping===_n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$i=this._renderer.getRenderTarget(),Ji=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Zt,format:Kt,colorSpace:fn,depthBuffer:!1},i=Jr(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jr(e,t,s);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FR(o)),this._blurMaterial=BR(o,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,s,i,o){const l=new Ft(90,1,t,s),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],_=this._renderer,h=_.autoClear,d=_.toneMapping;_.getClearColor(Kr),_.toneMapping=ys,_.autoClear=!1;const g=new or({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),m=new lt(new es,g);let f=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,f=!0):(g.color.copy(Kr),f=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[E],o.y,o.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[E],o.z)):(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[E]));const S=this._cubeSize;ii(i,y*S,E>2?S:0,S,S),_.setRenderTarget(i),f&&_.render(m,l),_.render(e,l)}m.geometry.dispose(),m.material.dispose(),_.toneMapping=d,_.autoClear=h,e.background=p}_textureToCubeUV(e,t){const s=this._renderer,i=e.mapping===un||e.mapping===_n;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qr());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ii(t,0,0,3*l,2*l),s.setRenderTarget(t),s.render(r,Zi)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Zr[(i-o-1)%Zr.length];this._blur(e,o-1,o,r,a)}t.autoClear=s}_blur(e,t,s,i,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,s,i,"latitudinal",o),this._halfBlur(r,e,s,s,i,"longitudinal",o)}_halfBlur(e,t,s,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,_=new lt(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[s]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Us-1),m=o/g,f=isFinite(o)?1+Math.floor(u*m):Us;f>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Us}`);const p=[];let E=0;for(let C=0;C<Us;++C){const P=C/m,M=Math.exp(-P*P/2);p.push(M),C===0?E+=M:C<f&&(E+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-s;const S=this._sizeLods[i],D=3*S*(i>y-rn?i-y+rn:0),A=4*(this._cubeSize-S);ii(t,D,A,3*S,2*S),l.setRenderTarget(t),l.render(_,Zi)}}function FR(n){const e=[],t=[],s=[];let i=n;const o=n-rn+1+jr.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>n-rn?l=jr[r-n+rn-1]:r===0&&(l=0),s.push(l);const c=1/(a-2),u=-c,_=1+c,h=[u,u,_,u,_,_,u,u,_,_,u,_],d=6,g=6,m=3,f=2,p=1,E=new Float32Array(m*g*d),y=new Float32Array(f*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,P=A>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(M,m*g*A),y.set(h,f*g*A);const v=[A,A,A,A,A,A];S.set(v,p*g*A)}const D=new yt;D.setAttribute("position",new ke(E,m)),D.setAttribute("uv",new ke(y,f)),D.setAttribute("faceIndex",new ke(S,p)),e.push(D),i>rn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Jr(n,e,t){const s=new Bt(n,e,t);return s.texture.mapping=bi,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ii(n,e,t,s,i){n.viewport.set(e,t,s,i),n.scissor.set(e,t,s,i)}function BR(n,e,t){const s=new Float32Array(Us),i=new O(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function Qr(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function ea(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function ur(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OR(n){let e=new WeakMap,t=null;function s(a){if(a&&a.isTexture){const l=a.mapping,c=l===go||l===mo,u=l===un||l===_n;if(c||u){let _=e.get(a);const h=_!==void 0?_.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new $r(n)),_=c?t.fromEquirectangular(a,_):t.fromCubemap(a,_),_.texture.pmremVersion=a.pmremVersion,e.set(a,_),_.texture;if(_!==void 0)return _.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new $r(n)),_=c?t.fromEquirectangular(a):t.fromCubemap(a),_.texture.pmremVersion=a.pmremVersion,e.set(a,_),a.addEventListener("dispose",o),_.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:r}}function zR(n){const e={};function t(s){if(e[s]!==void 0)return e[s];let i;switch(s){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(s)}return e[s]=i,i}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const i=t(s);return i===null&&pi("THREE.WebGLRenderer: "+s+" extension not supported."),i}}}function VR(n,e,t,s){const i={},o=new WeakMap;function r(_){const h=_.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete i[h.id];const d=o.get(h);d&&(e.remove(d),o.delete(h)),s.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(_,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function l(_){const h=_.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(_){const h=[],d=_.index,g=_.attributes.position;let m=0;if(d!==null){const E=d.array;m=d.version;for(let y=0,S=E.length;y<S;y+=3){const D=E[y+0],A=E[y+1],C=E[y+2];h.push(D,A,A,C,C,D)}}else if(g!==void 0){const E=g.array;m=g.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const D=y+0,A=y+1,C=y+2;h.push(D,A,A,C,C,D)}}else return;const f=new(Xa(h)?Za:Ka)(h,1);f.version=m;const p=o.get(_);p&&e.remove(p),o.set(_,f)}function u(_){const h=o.get(_);if(h){const d=_.index;d!==null&&h.version<d.version&&c(_)}else c(_);return o.get(_)}return{get:a,update:l,getWireframeAttribute:u}}function HR(n,e,t){let s;function i(h){s=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function l(h,d){n.drawElements(s,d,o,h*r),t.update(d,s,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(s,d,o,h*r,g),t.update(d,s,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,d,0,o,h,0,g);let f=0;for(let p=0;p<g;p++)f+=d[p];t.update(f,s,1)}function _(h,d,g,m){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)c(h[p]/r,d[p],m[p]);else{f.multiDrawElementsInstancedWEBGL(s,d,0,o,h,0,m,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*m[E];t.update(p,s,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=_}function GR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:s}}function WR(n,e,t){const s=new WeakMap,i=new ot;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,_=u!==void 0?u.length:0;let h=s.get(a);if(h===void 0||h.count!==_){let M=function(){C.dispose(),s.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let S=a.attributes.position.count*y,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*D*4*_),C=new qa(A,S,D,_);C.type=Qt,C.needsUpdate=!0;const P=y*4;for(let v=0;v<_;v++){const w=f[v],B=p[v],k=E[v],W=S*D*4*v;for(let j=0;j<w.count;j++){const H=j*P;d===!0&&(i.fromBufferAttribute(w,j),A[W+H+0]=i.x,A[W+H+1]=i.y,A[W+H+2]=i.z,A[W+H+3]=0),g===!0&&(i.fromBufferAttribute(B,j),A[W+H+4]=i.x,A[W+H+5]=i.y,A[W+H+6]=i.z,A[W+H+7]=0),m===!0&&(i.fromBufferAttribute(k,j),A[W+H+8]=i.x,A[W+H+9]=i.y,A[W+H+10]=i.z,A[W+H+11]=k.itemSize===4?i.w:1)}}h={count:_,texture:C,size:new Te(S,D)},s.set(a,h),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function XR(n,e,t,s){let i=new WeakMap;function o(l){const c=s.render.frame,u=l.geometry,_=e.get(l,u);if(i.get(_)!==c&&(e.update(_),i.set(_,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return _}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const ol=new ft,ta=new ar(1,1),rl=new qa,al=new pw,ll=new Qa,sa=[],na=[],ia=new Float32Array(16),oa=new Float32Array(9),ra=new Float32Array(4);function bn(n,e,t){const s=n[0];if(s<=0||s>0)return n;const i=e*t;let o=sa[i];if(o===void 0&&(o=new Float32Array(i),sa[i]=o),e!==0){s.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function Si(n,e){let t=na[e];t===void 0&&(t=new Int32Array(e),na[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function qR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function jR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function KR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function ZR(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,s))return;ra.set(s),n.uniformMatrix2fv(this.addr,!1,ra),dt(t,s)}}function $R(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,s))return;oa.set(s),n.uniformMatrix3fv(this.addr,!1,oa),dt(t,s)}}function JR(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,s))return;ia.set(s),n.uniformMatrix4fv(this.addr,!1,ia),dt(t,s)}}function QR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function n2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function i2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function a2(n,e,t){const s=this.cache,i=t.allocateTextureUnit();s[0]!==i&&(n.uniform1i(this.addr,i),s[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(ta.compareFunction=Wa,o=ta):o=ol,t.setTexture2D(e||o,i)}function l2(n,e,t){const s=this.cache,i=t.allocateTextureUnit();s[0]!==i&&(n.uniform1i(this.addr,i),s[0]=i),t.setTexture3D(e||al,i)}function c2(n,e,t){const s=this.cache,i=t.allocateTextureUnit();s[0]!==i&&(n.uniform1i(this.addr,i),s[0]=i),t.setTextureCube(e||ll,i)}function u2(n,e,t){const s=this.cache,i=t.allocateTextureUnit();s[0]!==i&&(n.uniform1i(this.addr,i),s[0]=i),t.setTexture2DArray(e||rl,i)}function _2(n){switch(n){case 5126:return qR;case 35664:return YR;case 35665:return jR;case 35666:return KR;case 35674:return ZR;case 35675:return $R;case 35676:return JR;case 5124:case 35670:return QR;case 35667:case 35671:return e2;case 35668:case 35672:return t2;case 35669:case 35673:return s2;case 5125:return n2;case 36294:return i2;case 36295:return o2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return u2}}function h2(n,e){n.uniform1fv(this.addr,e)}function d2(n,e){const t=bn(e,this.size,2);n.uniform2fv(this.addr,t)}function p2(n,e){const t=bn(e,this.size,3);n.uniform3fv(this.addr,t)}function f2(n,e){const t=bn(e,this.size,4);n.uniform4fv(this.addr,t)}function g2(n,e){const t=bn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function m2(n,e){const t=bn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v2(n,e){const t=bn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x2(n,e){n.uniform1iv(this.addr,e)}function b2(n,e){n.uniform2iv(this.addr,e)}function M2(n,e){n.uniform3iv(this.addr,e)}function y2(n,e){n.uniform4iv(this.addr,e)}function S2(n,e){n.uniform1uiv(this.addr,e)}function E2(n,e){n.uniform2uiv(this.addr,e)}function T2(n,e){n.uniform3uiv(this.addr,e)}function w2(n,e){n.uniform4uiv(this.addr,e)}function C2(n,e,t){const s=this.cache,i=e.length,o=Si(t,i);ht(s,o)||(n.uniform1iv(this.addr,o),dt(s,o));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ol,o[r])}function A2(n,e,t){const s=this.cache,i=e.length,o=Si(t,i);ht(s,o)||(n.uniform1iv(this.addr,o),dt(s,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||al,o[r])}function R2(n,e,t){const s=this.cache,i=e.length,o=Si(t,i);ht(s,o)||(n.uniform1iv(this.addr,o),dt(s,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||ll,o[r])}function D2(n,e,t){const s=this.cache,i=e.length,o=Si(t,i);ht(s,o)||(n.uniform1iv(this.addr,o),dt(s,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||rl,o[r])}function P2(n){switch(n){case 5126:return h2;case 35664:return d2;case 35665:return p2;case 35666:return f2;case 35674:return g2;case 35675:return m2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return b2;case 35668:case 35672:return M2;case 35669:case 35673:return y2;case 5125:return S2;case 36294:return E2;case 36295:return T2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return D2}}class L2{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=_2(t.type)}}class I2{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P2(t.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(e,t[a.id],s)}}}const to=/(\w+)(\])?(\[|\.)?/g;function aa(n,e){n.seq.push(e),n.map[e.id]=e}function k2(n,e,t){const s=n.name,i=s.length;for(to.lastIndex=0;;){const o=to.exec(s),r=to.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){aa(t,c===void 0?new L2(a,n,e):new I2(a,n,e));break}else{let _=t.map[a];_===void 0&&(_=new U2(a),aa(t,_)),t=_}}}class fi{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<s;++i){const o=e.getActiveUniform(t,i),r=e.getUniformLocation(t,o.name);k2(o,r,this)}}setValue(e,t,s,i){const o=this.map[t];o!==void 0&&o.setValue(e,s,i)}setOptional(e,t,s){const i=t[s];i!==void 0&&this.setValue(e,s,i)}static upload(e,t,s,i){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=s[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const s=[];for(let i=0,o=e.length;i!==o;++i){const r=e[i];r.id in t&&s.push(r)}return s}}function la(n,e,t){const s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}const N2=37297;let F2=0;function B2(n,e){const t=n.split(`
`),s=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){const a=r+1;s.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return s.join(`
`)}const ca=new Fe;function O2(n){Ze._getMatrix(ca,Ze.workingColorSpace,n);const e=`mat3( ${ca.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case mi:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ua(n,e,t){const s=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(s&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+B2(n.getShaderSource(e),r)}else return i}function z2(n,e){const t=O2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V2(n,e){let t;switch(e){case ET:t="Linear";break;case TT:t="Reinhard";break;case wT:t="Cineon";break;case CT:t="ACESFilmic";break;case RT:t="AgX";break;case DT:t="Neutral";break;case AT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oi=new O;function H2(){Ze.getLuminanceCoefficients(oi);const n=oi.x.toFixed(4),e=oi.y.toFixed(4),t=oi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cn).join(`
`)}function W2(n){const e=[];for(const t in n){const s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function X2(n,e){const t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<s;i++){const o=n.getActiveAttrib(e,i),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Cn(n){return n!==""}function _a(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ha(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(n){return n.replace(q2,j2)}const Y2=new Map;function j2(n,e){let t=ze[e];if(t===void 0){const s=Y2.get(e);if(s!==void 0)t=ze[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(n){return n.replace(K2,Z2)}function Z2(n,e,t,s){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=s.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function pa(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function J2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case un:case _n:e="ENVMAP_TYPE_CUBE";break;case bi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _n:e="ENVMAP_MODE_REFRACTION";break}return e}function eD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case La:e="ENVMAP_BLENDING_MULTIPLY";break;case yT:e="ENVMAP_BLENDING_MIX";break;case ST:e="ENVMAP_BLENDING_ADD";break}return e}function tD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function sD(n,e,t,s){const i=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=$2(t),c=J2(t),u=Q2(t),_=eD(t),h=tD(t),d=G2(t),g=W2(o),m=i.createProgram();let f,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cn).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cn).join(`
`),p.length>0&&(p+=`
`)):(f=[pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cn).join(`
`),p=[pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+_:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?ze.tonemapping_pars_fragment:"",t.toneMapping!==ys?V2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,z2("linearToOutputTexel",t.outputColorSpace),H2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cn).join(`
`)),r=Xo(r),r=_a(r,t),r=ha(r,t),a=Xo(a),a=_a(a,t),a=ha(a,t),r=da(r),a=da(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Er?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Er?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+f+r,S=E+p+a,D=la(i,i.VERTEX_SHADER,y),A=la(i,i.FRAGMENT_SHADER,S);i.attachShader(m,D),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(w){if(n.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),k=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(A).trim();let j=!0,H=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,D,A);else{const q=ua(i,D,"vertex"),N=ua(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+q+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||W==="")&&(H=!1);H&&(w.diagnostics={runnable:j,programLog:B,vertexShader:{log:k,prefix:f},fragmentShader:{log:W,prefix:p}})}i.deleteShader(D),i.deleteShader(A),P=new fi(i,m),M=X2(i,m)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(m,N2)),v},this.destroy=function(){s.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=D,this.fragmentShader=A,this}let nD=0;class iD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(s),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new oD(e),t.set(e,s)),s}}class oD{constructor(e){this.id=nD++,this.code=e,this.usedTimes=0}}function rD(n,e,t,s,i,o,r){const a=new Ya,l=new iD,c=new Set,u=[],_=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,v,w,B,k){const W=B.fog,j=k.geometry,H=M.isMeshStandardMaterial?B.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),N=q&&q.mapping===bi?q.image.height:null,J=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,he=ne!==void 0?ne.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let Ie,X,te,ue;if(J){const et=Jt[J];Ie=et.vertexShader,X=et.fragmentShader}else Ie=M.vertexShader,X=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const se=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),we=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,qe=!!M.map,Be=!!M.matcap,Oe=!!q,R=!!M.aoMap,mt=!!M.lightMap,Ge=!!M.bumpMap,He=!!M.normalMap,Me=!!M.displacementMap,Qe=!!M.emissiveMap,be=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,F=M.clearcoat>0,K=M.dispersion>0,$=M.iridescence>0,Y=M.sheen>0,xe=M.transmission>0,ie=x&&!!M.anisotropyMap,ce=F&&!!M.clearcoatMap,Ve=F&&!!M.clearcoatNormalMap,Q=F&&!!M.clearcoatRoughnessMap,de=$&&!!M.iridescenceMap,Ce=$&&!!M.iridescenceThicknessMap,Re=Y&&!!M.sheenColorMap,pe=Y&&!!M.sheenRoughnessMap,We=!!M.specularMap,De=!!M.specularColorMap,je=!!M.specularIntensityMap,L=xe&&!!M.transmissionMap,oe=xe&&!!M.thicknessMap,G=!!M.gradientMap,Z=!!M.alphaMap,_e=M.alphaTest>0,le=!!M.alphaHash,Ne=!!M.extensions;let rt=ys;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(rt=n.toneMapping);const vt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:X,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:we,instancingColor:we&&k.instanceColor!==null,instancingMorph:we&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:fn,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:Be,envMap:Oe,envMapMode:Oe&&q.mapping,envMapCubeUVHeight:N,aoMap:R,lightMap:mt,bumpMap:Ge,normalMap:He,displacementMap:h&&Me,emissiveMap:Qe,normalMapObjectSpace:He&&M.normalMapType===UT,normalMapTangentSpace:He&&M.normalMapType===tr,metalnessMap:be,roughnessMap:T,anisotropy:x,anisotropyMap:ie,clearcoat:F,clearcoatMap:ce,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:Ce,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:We,specularColorMap:De,specularIntensityMap:je,transmission:xe,transmissionMap:L,thicknessMap:oe,gradientMap:G,opaque:M.transparent===!1&&M.blending===an&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:_e,alphaHash:le,combine:M.combine,mapUv:qe&&m(M.map.channel),aoMapUv:R&&m(M.aoMap.channel),lightMapUv:mt&&m(M.lightMap.channel),bumpMapUv:Ge&&m(M.bumpMap.channel),normalMapUv:He&&m(M.normalMap.channel),displacementMapUv:Me&&m(M.displacementMap.channel),emissiveMapUv:Qe&&m(M.emissiveMap.channel),metalnessMapUv:be&&m(M.metalnessMap.channel),roughnessMapUv:T&&m(M.roughnessMap.channel),anisotropyMapUv:ie&&m(M.anisotropyMap.channel),clearcoatMapUv:ce&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&m(M.sheenRoughnessMap.channel),specularMapUv:We&&m(M.specularMap.channel),specularColorMapUv:De&&m(M.specularColorMap.channel),specularIntensityMapUv:je&&m(M.specularIntensityMap.channel),transmissionMapUv:L&&m(M.transmissionMap.channel),thicknessMapUv:oe&&m(M.thicknessMap.channel),alphaMapUv:Z&&m(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(He||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(qe||Z),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ye,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:Qe&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Lt,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)v.push(w),v.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(E(v,M),y(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const v=g[M.type];let w;if(v){const B=Jt[v];w=Ms.clone(B.uniforms)}else w=M.uniforms;return w}function D(M,v){let w;for(let B=0,k=u.length;B<k;B++){const W=u[B];if(W.cacheKey===v){w=W,++w.usedTimes;break}}return w===void 0&&(w=new sD(n,v,M,o),u.push(w)),w}function A(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:S,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function aD(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function s(r){n.delete(r)}function i(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:s,update:i,dispose:o}}function lD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ga(){const n=[];let e=0;const t=[],s=[],i=[];function o(){e=0,t.length=0,s.length=0,i.length=0}function r(_,h,d,g,m,f){let p=n[e];return p===void 0?(p={id:_.id,object:_,geometry:h,material:d,groupOrder:g,renderOrder:_.renderOrder,z:m,group:f},n[e]=p):(p.id=_.id,p.object=_,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=_.renderOrder,p.z=m,p.group=f),e++,p}function a(_,h,d,g,m,f){const p=r(_,h,d,g,m,f);d.transmission>0?s.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(_,h,d,g,m,f){const p=r(_,h,d,g,m,f);d.transmission>0?s.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(_,h){t.length>1&&t.sort(_||lD),s.length>1&&s.sort(h||fa),i.length>1&&i.sort(h||fa)}function u(){for(let _=e,h=n.length;_<h;_++){const d=n[_];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:s,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function cD(){let n=new WeakMap;function e(s,i){const o=n.get(s);let r;return o===void 0?(r=new ga,n.set(s,[r])):i>=o.length?(r=new ga,o.push(r)):r=o[i],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function uD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ae};break;case"SpotLight":t={position:new O,direction:new O,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function _D(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hD=0;function dD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pD(n){const e=new uD,t=_D(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new O);const i=new O,o=new it,r=new it;function a(c){let u=0,_=0,h=0;for(let M=0;M<9;M++)s.probe[M].set(0,0,0);let d=0,g=0,m=0,f=0,p=0,E=0,y=0,S=0,D=0,A=0,C=0;c.sort(dD);for(let M=0,v=c.length;M<v;M++){const w=c[M],B=w.color,k=w.intensity,W=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=B.r*k,_+=B.g*k,h+=B.b*k;else if(w.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(w.sh.coefficients[H],k);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,N=t.get(w);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,s.directionalShadow[d]=N,s.directionalShadowMap[d]=j,s.directionalShadowMatrix[d]=w.shadow.matrix,E++}s.directional[d]=H,d++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(B).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,s.spot[m]=H;const q=w.shadow;if(w.map&&(s.spotLightMap[D]=w.map,D++,q.updateMatrices(w),w.castShadow&&A++),s.spotLightMatrix[m]=q.matrix,w.castShadow){const N=t.get(w);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,s.spotShadow[m]=N,s.spotShadowMap[m]=j,S++}m++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(B).multiplyScalar(k),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),s.rectArea[f]=H,f++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const q=w.shadow,N=t.get(w);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,s.pointShadow[g]=N,s.pointShadowMap[g]=j,s.pointShadowMatrix[g]=w.shadow.matrix,y++}s.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(k),H.groundColor.copy(w.groundColor).multiplyScalar(k),s.hemi[p]=H,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2)),s.ambient[0]=u,s.ambient[1]=_,s.ambient[2]=h;const P=s.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==m||P.rectAreaLength!==f||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==S||P.numSpotMaps!==D||P.numLightProbes!==C)&&(s.directional.length=d,s.spot.length=m,s.rectArea.length=f,s.point.length=g,s.hemi.length=p,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=S+D-A,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=m,P.rectAreaLength=f,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=S,P.numSpotMaps=D,P.numLightProbes=C,s.version=hD++)}function l(c,u){let _=0,h=0,d=0,g=0,m=0;const f=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const S=s.directional[_];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),_++}else if(y.isSpotLight){const S=s.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),d++}else if(y.isRectAreaLight){const S=s.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),r.identity(),o.copy(y.matrixWorld),o.premultiply(f),r.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const S=s.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){const S=s.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:s}}function ma(n){const e=new pD(n),t=[],s=[];function i(u){c.camera=u,t.length=0,s.length=0}function o(u){t.push(u)}function r(u){s.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function fD(n){let e=new WeakMap;function t(i,o=0){const r=e.get(i);let a;return r===void 0?(a=new ma(n),e.set(i,[a])):o>=r.length?(a=new ma(n),r.push(a)):a=r[o],a}function s(){e=new WeakMap}return{get:t,dispose:s}}const gD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vD(n,e,t){let s=new rr;const i=new Te,o=new Te,r=new ot,a=new Bw({depthPacking:IT}),l=new Ow,c={},u=t.maxTextureSize,_={[Ss]:It,[It]:Ss,[Lt]:Lt},h=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:gD,fragmentShader:mD}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new lt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let p=this.type;this.render=function(A,C,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Rt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==as&&this.type===as,W=p===as&&this.type!==as;for(let j=0,H=A.length;j<H;j++){const q=A[j],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const J=N.getFrameExtents();if(i.multiply(J),o.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/J.x),i.x=o.x*J.x,N.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/J.y),i.y=o.y*J.y,N.mapSize.y=o.y)),N.map===null||k===!0||W===!0){const he=this.type!==as?{minFilter:St,magFilter:St}:{};N.map!==null&&N.map.dispose(),N.map=new Bt(i.x,i.y,he),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ne=N.getViewportCount();for(let he=0;he<ne;he++){const ye=N.getViewport(he);r.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),B.viewport(r),N.updateMatrices(q,he),s=N.getFrustum(),S(C,P,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===as&&E(N,P),N.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(M,v,w)};function E(A,C){const P=e.update(m);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bt(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,m,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,d,m,null)}function y(A,C,P,M){let v=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=v.uuid,k=C.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let j=W[k];j===void 0&&(j=v.clone(),W[k]=j,C.addEventListener("dispose",D)),v=j}if(v.visible=C.visible,v.wireframe=C.wireframe,M===as?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:_[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=P}return v}function S(A,C,P,M,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===as)&&(!A.frustumCulled||s.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const j=k.groups;for(let H=0,q=j.length;H<q;H++){const N=j[H],J=W[N.materialIndex];if(J&&J.visible){const ne=y(A,J,M,v);A.onBeforeShadow(n,A,C,P,k,ne,N),n.renderBufferDirect(P,null,k,ne,A,N),A.onAfterShadow(n,A,C,P,k,ne,N)}}}else if(W.visible){const j=y(A,W,M,v);A.onBeforeShadow(n,A,C,P,k,j,null),n.renderBufferDirect(P,null,k,j,A,null),A.onAfterShadow(n,A,C,P,k,j,null)}}const B=A.children;for(let k=0,W=B.length;k<W;k++)S(B[k],C,P,M,v)}function D(A){A.target.removeEventListener("dispose",D);for(const P in c){const M=c[P],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const xD={[lo]:co,[uo]:po,[_o]:fo,[cn]:ho,[co]:lo,[po]:uo,[fo]:_o,[ho]:cn};function bD(n,e){function t(){let L=!1;const oe=new ot;let G=null;const Z=new ot(0,0,0,0);return{setMask:function(_e){G!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),G=_e)},setLocked:function(_e){L=_e},setClear:function(_e,le,Ne,rt,vt){vt===!0&&(_e*=rt,le*=rt,Ne*=rt),oe.set(_e,le,Ne,rt),Z.equals(oe)===!1&&(n.clearColor(_e,le,Ne,rt),Z.copy(oe))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function s(){let L=!1,oe=!1,G=null,Z=null,_e=null;return{setReversed:function(le){if(oe!==le){const Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),oe=le;const rt=_e;_e=null,this.setClear(rt)}},getReversed:function(){return oe},setTest:function(le){le?se(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(le){G!==le&&!L&&(n.depthMask(le),G=le)},setFunc:function(le){if(oe&&(le=xD[le]),Z!==le){switch(le){case lo:n.depthFunc(n.NEVER);break;case co:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case cn:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=le}},setLocked:function(le){L=le},setClear:function(le){_e!==le&&(oe&&(le=1-le),n.clearDepth(le),_e=le)},reset:function(){L=!1,G=null,Z=null,_e=null,oe=!1}}}function i(){let L=!1,oe=null,G=null,Z=null,_e=null,le=null,Ne=null,rt=null,vt=null;return{setTest:function(et){L||(et?se(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(et){oe!==et&&!L&&(n.stencilMask(et),oe=et)},setFunc:function(et,Ht,ts){(G!==et||Z!==Ht||_e!==ts)&&(n.stencilFunc(et,Ht,ts),G=et,Z=Ht,_e=ts)},setOp:function(et,Ht,ts){(le!==et||Ne!==Ht||rt!==ts)&&(n.stencilOp(et,Ht,ts),le=et,Ne=Ht,rt=ts)},setLocked:function(et){L=et},setClear:function(et){vt!==et&&(n.clearStencil(et),vt=et)},reset:function(){L=!1,oe=null,G=null,Z=null,_e=null,le=null,Ne=null,rt=null,vt=null}}}const o=new t,r=new s,a=new i,l=new WeakMap,c=new WeakMap;let u={},_={},h=new WeakMap,d=[],g=null,m=!1,f=null,p=null,E=null,y=null,S=null,D=null,A=null,C=new Ae(0,0,0),P=0,M=!1,v=null,w=null,B=null,k=null,W=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=q>=1):N.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=q>=2);let J=null,ne={};const he=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ie=new ot().fromArray(he),X=new ot().fromArray(ye);function te(L,oe,G,Z){const _e=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<G;Ne++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(oe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return le}const ue={};ue[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),se(n.DEPTH_TEST),r.setFunc(cn),Ge(!1),He(xr),se(n.CULL_FACE),R(Rt);function se(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ve(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function we(L,oe){return _[L]!==oe?(n.bindFramebuffer(L,oe),_[L]=oe,L===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function ge(L,oe){let G=d,Z=!1;if(L){G=h.get(oe),G===void 0&&(G=[],h.set(oe,G));const _e=L.textures;if(G.length!==_e.length||G[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ne=_e.length;le<Ne;le++)G[le]=n.COLOR_ATTACHMENT0+le;G.length=_e.length,Z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Z=!0);Z&&n.drawBuffers(G)}function qe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Be={[ls]:n.FUNC_ADD,[lT]:n.FUNC_SUBTRACT,[cT]:n.FUNC_REVERSE_SUBTRACT};Be[uT]=n.MIN,Be[_T]=n.MAX;const Oe={[oo]:n.ZERO,[hT]:n.ONE,[dT]:n.SRC_COLOR,[ro]:n.SRC_ALPHA,[mT]:n.SRC_ALPHA_SATURATE,[Pa]:n.DST_COLOR,[Da]:n.DST_ALPHA,[pT]:n.ONE_MINUS_SRC_COLOR,[ao]:n.ONE_MINUS_SRC_ALPHA,[gT]:n.ONE_MINUS_DST_COLOR,[fT]:n.ONE_MINUS_DST_ALPHA,[vT]:n.CONSTANT_COLOR,[xT]:n.ONE_MINUS_CONSTANT_COLOR,[bT]:n.CONSTANT_ALPHA,[MT]:n.ONE_MINUS_CONSTANT_ALPHA};function R(L,oe,G,Z,_e,le,Ne,rt,vt,et){if(L===Rt){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),L!==Ra){if(L!==f||et!==M){if((p!==ls||S!==ls)&&(n.blendEquation(n.FUNC_ADD),p=ls,S=ls),et)switch(L){case an:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.ONE,n.ONE);break;case br:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case an:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case br:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,y=null,D=null,A=null,C.set(0,0,0),P=0,f=L,M=et}return}_e=_e||oe,le=le||G,Ne=Ne||Z,(oe!==p||_e!==S)&&(n.blendEquationSeparate(Be[oe],Be[_e]),p=oe,S=_e),(G!==E||Z!==y||le!==D||Ne!==A)&&(n.blendFuncSeparate(Oe[G],Oe[Z],Oe[le],Oe[Ne]),E=G,y=Z,D=le,A=Ne),(rt.equals(C)===!1||vt!==P)&&(n.blendColor(rt.r,rt.g,rt.b,vt),C.copy(rt),P=vt),f=L,M=!1}function mt(L,oe){L.side===Lt?ve(n.CULL_FACE):se(n.CULL_FACE);let G=L.side===It;oe&&(G=!G),Ge(G),L.blending===an&&L.transparent===!1?R(Rt):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),o.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function He(L){L!==oT?(se(n.CULL_FACE),L!==w&&(L===xr?n.cullFace(n.BACK):L===rT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),w=L}function Me(L){L!==B&&(H&&n.lineWidth(L),B=L)}function Qe(L,oe,G){L?(se(n.POLYGON_OFFSET_FILL),(k!==oe||W!==G)&&(n.polygonOffset(oe,G),k=oe,W=G)):ve(n.POLYGON_OFFSET_FILL)}function be(L){L?se(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+j-1),J!==L&&(n.activeTexture(L),J=L)}function x(L,oe,G){G===void 0&&(J===null?G=n.TEXTURE0+j-1:G=J);let Z=ne[G];Z===void 0&&(Z={type:void 0,texture:void 0},ne[G]=Z),(Z.type!==L||Z.texture!==oe)&&(J!==G&&(n.activeTexture(G),J=G),n.bindTexture(L,oe||ue[L]),Z.type=L,Z.texture=oe)}function F(){const L=ne[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){Ie.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function pe(L){X.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function We(L,oe){let G=c.get(oe);G===void 0&&(G=new WeakMap,c.set(oe,G));let Z=G.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(oe,L.name),G.set(L,Z))}function De(L,oe){const Z=c.get(oe).get(L);l.get(oe)!==Z&&(n.uniformBlockBinding(oe,Z,L.__bindingPointIndex),l.set(oe,Z))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,ne={},_={},h=new WeakMap,d=[],g=null,m=!1,f=null,p=null,E=null,y=null,S=null,D=null,A=null,C=new Ae(0,0,0),P=0,M=!1,v=null,w=null,B=null,k=null,W=null,Ie.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:se,disable:ve,bindFramebuffer:we,drawBuffers:ge,useProgram:qe,setBlending:R,setMaterial:mt,setFlipSided:Ge,setCullFace:He,setLineWidth:Me,setPolygonOffset:Qe,setScissorTest:be,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:de,texImage3D:Ce,updateUBOMapping:We,uniformBlockBinding:De,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:Re,viewport:pe,reset:je}}function MD(n,e,t,s,i,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let _;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):Un("canvas")}function m(T,x,F){let K=1;const $=be(T);if(($.width>F||$.height>F)&&(K=F/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(K*$.width),xe=Math.floor(K*$.height);_===void 0&&(_=g(Y,xe));const ie=x?g(Y,xe):_;return ie.width=Y,ie.height=xe,ie.getContext("2d").drawImage(T,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+xe+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function f(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,x,F,K,$=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const xe=$?mi:Ze.getTransfer(K);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=xe===tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(T,x){let F;return T?x===null||x===Bs||x===dn?F=n.DEPTH24_STENCIL8:x===Qt?F=n.DEPTH32F_STENCIL8:x===Pn&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bs||x===dn?F=n.DEPTH_COMPONENT24:x===Qt?F=n.DEPTH_COMPONENT32F:x===Pn&&(F=n.DEPTH_COMPONENT16),F}function D(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==St&&T.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),v(x)}function P(T){const x=s.get(T);if(x.__webglInit===void 0)return;const F=T.source,K=h.get(F);if(K){const $=K[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(T),Object.keys(K).length===0&&h.delete(F)}s.remove(T)}function M(T){const x=s.get(T);n.deleteTexture(x.__webglTexture);const F=T.source,K=h.get(F);delete K[x.__cacheKey],r.memory.textures--}function v(T){const x=s.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),s.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let $=0;$<x.__webglFramebuffer[K].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[K][$]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let K=0,$=F.length;K<$;K++){const Y=s.get(F[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),r.memory.textures--),s.remove(F[K])}s.remove(T)}let w=0;function B(){w=0}function k(){const T=w;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),w+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const F=s.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,T,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function H(T,x){const F=s.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function q(T,x){const F=s.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function N(T,x){const F=s.get(T);if(T.version>0&&F.__version!==T.version){te(F,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const J={[hn]:n.REPEAT,[ks]:n.CLAMP_TO_EDGE,[vo]:n.MIRRORED_REPEAT},ne={[St]:n.NEAREST,[Ua]:n.NEAREST_MIPMAP_NEAREST,[On]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Ci]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},he={[kT]:n.NEVER,[VT]:n.ALWAYS,[NT]:n.LESS,[Wa]:n.LEQUAL,[FT]:n.EQUAL,[zT]:n.GEQUAL,[BT]:n.GREATER,[OT]:n.NOTEQUAL};function ye(T,x){if(x.type===Qt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===Ci||x.magFilter===On||x.magFilter===Ns||x.minFilter===jt||x.minFilter===Ci||x.minFilter===On||x.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,J[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===St||x.minFilter!==On&&x.minFilter!==Ns||x.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let $=h.get(K);$===void 0&&($={},h.set(K,$));const Y=W(x);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,F=!0),$[Y].usedTimes++;const xe=$[T.__cacheKey];xe!==void 0&&($[T.__cacheKey].usedTimes--,xe.usedTimes===0&&M(x)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return F}function X(T,x,F){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const $=Ie(T,x),Y=x.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+F);const xe=s.get(Y);if(Y.version!==xe.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const ie=Ze.getPrimaries(Ze.workingColorSpace),ce=x.colorSpace===xs?null:Ze.getPrimaries(x.colorSpace),Ve=x.colorSpace===xs||ie===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=m(x.image,!1,i.maxTextureSize);Q=Qe(x,Q);const de=o.convert(x.format,x.colorSpace),Ce=o.convert(x.type);let Re=y(x.internalFormat,de,Ce,x.colorSpace,x.isVideoTexture);ye(K,x);let pe;const We=x.mipmaps,De=x.isVideoTexture!==!0,je=xe.__version===void 0||$===!0,L=Y.dataReady,oe=D(x,Q);if(x.isDepthTexture)Re=S(x.format===pn,x.type),je&&(De?t.texStorage2D(n.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,de,Ce,null));else if(x.isDataTexture)if(We.length>0){De&&je&&t.texStorage2D(n.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let G=0,Z=We.length;G<Z;G++)pe=We[G],De?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,de,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,de,Ce,pe.data);x.generateMipmaps=!1}else De?(je&&t.texStorage2D(n.TEXTURE_2D,oe,Re,Q.width,Q.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,de,Ce,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Re,We[0].width,We[0].height,Q.depth);for(let G=0,Z=We.length;G<Z;G++)if(pe=We[G],x.format!==Kt)if(de!==null)if(De){if(L)if(x.layerUpdates.size>0){const _e=Yr(pe.width,pe.height,x.format,x.type);for(const le of x.layerUpdates){const Ne=pe.data.subarray(le*_e/pe.data.BYTES_PER_ELEMENT,(le+1)*_e/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,le,pe.width,pe.height,1,de,Ne)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,de,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Re,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,de,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Re,pe.width,pe.height,Q.depth,0,de,Ce,pe.data)}else{De&&je&&t.texStorage2D(n.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let G=0,Z=We.length;G<Z;G++)pe=We[G],x.format!==Kt?de!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,de,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,de,Ce,pe.data)}else if(x.isDataArrayTexture)if(De){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Re,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){const G=Yr(Q.width,Q.height,x.format,x.type);for(const Z of x.layerUpdates){const _e=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,de,Ce,_e)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ce,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,de,Ce,Q.data);else if(x.isData3DTexture)De?(je&&t.texStorage3D(n.TEXTURE_3D,oe,Re,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,de,Ce,Q.data);else if(x.isFramebufferTexture){if(je)if(De)t.texStorage2D(n.TEXTURE_2D,oe,Re,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let _e=0;_e<oe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Re,G,Z,0,de,Ce,null),G>>=1,Z>>=1}}else if(We.length>0){if(De&&je){const G=be(We[0]);t.texStorage2D(n.TEXTURE_2D,oe,Re,G.width,G.height)}for(let G=0,Z=We.length;G<Z;G++)pe=We[G],De?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,de,Ce,pe):t.texImage2D(n.TEXTURE_2D,G,Re,de,Ce,pe);x.generateMipmaps=!1}else if(De){if(je){const G=be(Q);t.texStorage2D(n.TEXTURE_2D,oe,Re,G.width,G.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ce,Q)}else t.texImage2D(n.TEXTURE_2D,0,Re,de,Ce,Q);f(x)&&p(K),xe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function te(T,x,F){if(x.image.length!==6)return;const K=Ie(T,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const Y=s.get($);if($.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const xe=Ze.getPrimaries(Ze.workingColorSpace),ie=x.colorSpace===xs?null:Ze.getPrimaries(x.colorSpace),ce=x.colorSpace===xs||xe===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Ve&&!Q?de[Z]=m(x.image[Z],!0,i.maxCubemapSize):de[Z]=Q?x.image[Z].image:x.image[Z],de[Z]=Qe(x,de[Z]);const Ce=de[0],Re=o.convert(x.format,x.colorSpace),pe=o.convert(x.type),We=y(x.internalFormat,Re,pe,x.colorSpace),De=x.isVideoTexture!==!0,je=Y.__version===void 0||K===!0,L=$.dataReady;let oe=D(x,Ce);ye(n.TEXTURE_CUBE_MAP,x);let G;if(Ve){De&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,We,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){G=de[Z].mipmaps;for(let _e=0;_e<G.length;_e++){const le=G[_e];x.format!==Kt?Re!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,We,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,le.width,le.height,Re,pe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,We,le.width,le.height,0,Re,pe,le.data)}}}else{if(G=x.mipmaps,De&&je){G.length>0&&oe++;const Z=be(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Re,pe,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,de[Z].width,de[Z].height,0,Re,pe,de[Z].data);for(let _e=0;_e<G.length;_e++){const Ne=G[_e].image[Z].image;De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Ne.width,Ne.height,Re,pe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,We,Ne.width,Ne.height,0,Re,pe,Ne.data)}}else{De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,pe,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Re,pe,de[Z]);for(let _e=0;_e<G.length;_e++){const le=G[_e];De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Re,pe,le.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,We,Re,pe,le.image[Z])}}}f(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ue(T,x,F,K,$,Y){const xe=o.convert(F.format,F.colorSpace),ie=o.convert(F.type),ce=y(F.internalFormat,xe,ie,F.colorSpace),Ve=s.get(x),Q=s.get(F);if(Q.__renderTarget=x,!Ve.__hasExternalTextures){const de=Math.max(1,x.width>>Y),Ce=Math.max(1,x.height>>Y);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Y,ce,de,Ce,x.depth,0,xe,ie,null):t.texImage2D($,Y,ce,de,Ce,0,xe,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),He(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,$,Q.__webglTexture,0,Ge(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,$,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,$=K&&K.isDepthTexture?K.type:null,Y=S(x.stencilBuffer,$),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Ge(x);He(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,Y,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,T)}else{const K=x.textures;for(let $=0;$<K.length;$++){const Y=K[$],xe=o.convert(Y.format,Y.colorSpace),ie=o.convert(Y.type),ce=y(Y.internalFormat,xe,ie,Y.colorSpace),Ve=Ge(x);F&&He(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,ce,x.width,x.height):He(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=s.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const $=K.__webglTexture,Y=Ge(x);if(x.depthTexture.format===Ln)He(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===pn)He(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function we(T){const x=s.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),se(x.__webglDepthbuffer[K],T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),se(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(T,x,F){const K=s.get(T);x!==void 0&&ue(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&we(T)}function qe(T){const x=T.texture,F=s.get(T),K=s.get(x);T.addEventListener("dispose",C);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,r.memory.textures++),Y){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let ce=0;ce<x.mipmaps.length;ce++)F.__webglFramebuffer[ie][ce]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ie=0,ce=$.length;ie<ce;ie++){const Ve=s.get($[ie]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&He(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const ce=$[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const Ve=o.convert(ce.format,ce.colorSpace),Q=o.convert(ce.type),de=y(ce.internalFormat,Ve,Q,ce.colorSpace,T.isXRRenderTarget===!0),Ce=Ge(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),se(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ye(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)ue(F.__webglFramebuffer[ie][ce],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ce);else ue(F.__webglFramebuffer[ie],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);f(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ie=0,ce=$.length;ie<ce;ie++){const Ve=$[ie],Q=s.get(Ve);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ye(n.TEXTURE_2D,Ve),ue(F.__webglFramebuffer,T,Ve,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),f(Ve)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),ye(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)ue(F.__webglFramebuffer[ce],T,x,n.COLOR_ATTACHMENT0,ie,ce);else ue(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ie,0);f(x)&&p(ie),t.unbindTexture()}T.depthBuffer&&we(T)}function Be(T){const x=T.textures;for(let F=0,K=x.length;F<K;F++){const $=x[F];if(f($)){const Y=E(T),xe=s.get($).__webglTexture;t.bindTexture(Y,xe),p(Y),t.unbindTexture()}}}const Oe=[],R=[];function mt(T){if(T.samples>0){if(He(T)===!1){const x=T.textures,F=T.width,K=T.height;let $=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=s.get(T),ie=x.length>1;if(ie)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ce]);const Ve=s.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,$,n.NEAREST),l===!0&&(Oe.length=0,R.length=0,Oe.push(n.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Oe.push(Y),R.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ce]);const Ve=s.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ge(T){return Math.min(i.maxSamples,T.samples)}function He(T){const x=s.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(T){const x=r.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Qe(T,x){const F=T.colorSpace,K=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==fn&&F!==xs&&(Ze.getTransfer(F)===tt?(K!==Kt||$!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=N,this.rebindTextures=ge,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=He}function yD(n,e){function t(s,i=xs){let o;const r=Ze.getTransfer(i);if(s===hs)return n.UNSIGNED_BYTE;if(s===Ko)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Fa)return n.UNSIGNED_INT_5_9_9_9_REV;if(s===ka)return n.BYTE;if(s===Na)return n.SHORT;if(s===Pn)return n.UNSIGNED_SHORT;if(s===jo)return n.INT;if(s===Bs)return n.UNSIGNED_INT;if(s===Qt)return n.FLOAT;if(s===Zt)return n.HALF_FLOAT;if(s===Ba)return n.ALPHA;if(s===Oa)return n.RGB;if(s===Kt)return n.RGBA;if(s===za)return n.LUMINANCE;if(s===Va)return n.LUMINANCE_ALPHA;if(s===Ln)return n.DEPTH_COMPONENT;if(s===pn)return n.DEPTH_STENCIL;if(s===$o)return n.RED;if(s===Jo)return n.RED_INTEGER;if(s===Ha)return n.RG;if(s===Qo)return n.RG_INTEGER;if(s===er)return n.RGBA_INTEGER;if(s===ci||s===ui||s===_i||s===hi)if(r===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ci)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ui)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_i)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hi)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ci)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ui)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_i)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hi)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xo||s===bo||s===Mo||s===yo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===So||s===Eo||s===To)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===So||s===Eo)return r===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===To)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wo||s===Co||s===Ao||s===Ro||s===Do||s===Po||s===Lo||s===Io||s===Uo||s===ko||s===No||s===Fo||s===Bo||s===Oo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===wo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Co)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ao)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ro)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Do)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Po)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Io)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===No)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oo)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===di||s===zo||s===Vo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===di)return r===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ga||s===Ho||s===Go||s===Wo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===di)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ho)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Go)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dn?n.UNSIGNED_INT_24_8:n[s]!==void 0?n[s]:null}return{convert:t}}const SD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ED=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const i=new ft,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new ct({vertexShader:SD,fragmentShader:ED,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Mi(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wD extends Os{constructor(e,t){super();const s=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,_=null,h=null,d=null,g=null;const m=new TD,f=t.getContextAttributes();let p=null,E=null;const y=[],S=[],D=new Te;let A=null;const C=new Ft;C.viewport=new ot;const P=new Ft;P.viewport=new ot;const M=[C,P],v=new qw;let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=y[X];return te===void 0&&(te=new Yi,y[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=y[X];return te===void 0&&(te=new Yi,y[X]=te),te.getGripSpace()},this.getHand=function(X){let te=y[X];return te===void 0&&(te=new Yi,y[X]=te),te.getHandSpace()};function k(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ue=y[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||r),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",j);for(let X=0;X<y.length;X++){const te=S[X];te!==null&&(S[X]=null,y[X].disconnect(te))}w=null,B=null,m.reset(),e.setRenderTarget(p),d=null,h=null,_=null,i=null,E=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return _},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,se=null,ve=null;f.depth&&(ve=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=f.stencil?pn:Ln,se=f.stencil?dn:Bs);const we={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};_=new XRWebGLBinding(i,t),h=_.createProjectionLayer(we),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Bt(h.textureWidth,h.textureHeight,{format:Kt,type:hs,depthTexture:new ar(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Bt(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Ie.setContext(i),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],se=S.indexOf(ue);se>=0&&(S[se]=null,y[se].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let se=S.indexOf(ue);if(se===-1){for(let we=0;we<y.length;we++)if(we>=S.length){S.push(ue),se=we;break}else if(S[we]===null){S[we]=ue,se=we;break}if(se===-1)break}const ve=y[se];ve&&ve.connect(ue)}}const H=new O,q=new O;function N(X,te,ue){H.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const se=H.distanceTo(q),ve=te.projectionMatrix.elements,we=ue.projectionMatrix.elements,ge=ve[14]/(ve[10]-1),qe=ve[14]/(ve[10]+1),Be=(ve[9]+1)/ve[5],Oe=(ve[9]-1)/ve[5],R=(ve[8]-1)/ve[0],mt=(we[8]+1)/we[0],Ge=ge*R,He=ge*mt,Me=se/(-R+mt),Qe=Me*-R;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const be=ge+Me,T=qe+Me,x=Ge-Qe,F=He+(se-Qe),K=Be*qe/T*be,$=Oe*qe/T*be;X.projectionMatrix.makePerspective(x,F,K,$,be,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,ue=X.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),v.near=P.near=C.near=te,v.far=P.far=C.far=ue,(w!==v.near||B!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,B=v.far),C.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,v.layers.mask=C.layers.mask|P.layers.mask;const se=X.parent,ve=v.cameras;J(v,se);for(let we=0;we<ve.length;we++)J(ve[we],se);ve.length===2?N(v,C,P):v.projectionMatrix.copy(C.projectionMatrix),ne(X,v,se)};function ne(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=In*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(v)};let he=null;function ye(X,te){if(u=te.getViewerPose(c||r),g=te,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let se=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let ge=0;ge<ue.length;ge++){const qe=ue[ge];let Be=null;if(d!==null)Be=d.getViewport(qe);else{const R=_.getViewSubImage(h,qe);Be=R.viewport,ge===0&&(e.setRenderTargetTextures(E,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(E))}let Oe=M[ge];Oe===void 0&&(Oe=new Ft,Oe.layers.enable(ge),Oe.viewport=new ot,M[ge]=Oe),Oe.matrix.fromArray(qe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(qe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Be.x,Be.y,Be.width,Be.height),ge===0&&(v.matrix.copy(Oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Oe)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){const ge=_.getDepthInformation(ue[0]);ge&&ge.isValid&&ge.texture&&m.init(e,ge,i.renderState)}}for(let ue=0;ue<y.length;ue++){const se=S[ue],ve=y[ue];se!==null&&ve!==void 0&&ve.update(se,te,c||r)}he&&he(X,te),te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ie=new il;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(X){he=X},this.dispose=function(){}}}const Ps=new $t,CD=new it;function AD(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function s(f,p){p.color.getRGB(f.fogColor.value,$a(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,E,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(f,p):p.isMeshToonMaterial?(o(f,p),_(f,p)):p.isMeshPhongMaterial?(o(f,p),u(f,p)):p.isMeshStandardMaterial?(o(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,S)):p.isMeshMatcapMaterial?(o(f,p),g(f,p)):p.isMeshDepthMaterial?o(f,p):p.isMeshDistanceMaterial?(o(f,p),m(f,p)):p.isMeshNormalMaterial?o(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,E,y):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===It&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===It&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,S=E.envMapRotation;y&&(f.envMap.value=y,Ps.copy(S),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),f.envMapRotation.value.setFromMatrix4(CD.makeRotationFromEuler(Ps)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=y*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function _(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function m(f,p){const E=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:i}}function RD(n,e,t,s){let i={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const S=y.program;s.uniformBlockBinding(E,S)}function c(E,y){let S=i[E.id];S===void 0&&(g(E),S=u(E),i[E.id]=S,E.addEventListener("dispose",f));const D=y.program;s.updateUBOMapping(E,D);const A=e.render.frame;o[E.id]!==A&&(h(E),o[E.id]=A)}function u(E){const y=_();E.__bindingPointIndex=y;const S=n.createBuffer(),D=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function _(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=i[E.id],S=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=S.length;A<C;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,v=P.length;M<v;M++){const w=P[M];if(d(w,A,M,D)===!0){const B=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let j=0;j<k.length;j++){const H=k[j],q=m(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+W,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,y,S,D){const A=E.value,C=y+"_"+S;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const P=D[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const y=E.uniforms;let S=0;const D=16;for(let C=0,P=y.length;C<P;C++){const M=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,w=M.length;v<w;v++){const B=M[v],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,j=k.length;W<j;W++){const H=k[W],q=m(H),N=S%D,J=N%q.boundary,ne=N+J;S+=J,ne!==0&&D-ne<q.storage&&(S+=D-ne),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=q.storage}}}const A=S%D;return A>0&&(S+=D-A),E.__size=S,E.__cache={},this}function m(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function f(E){const y=E.target;y.removeEventListener("dispose",f);const S=r.indexOf(y.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function p(){for(const E in i)n.deleteBuffer(i[E]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}class cl{constructor(e={}){const{canvas:t=ow(),context:s=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=s.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),m=new Int32Array(4);let f=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=At;let A=0,C=0,P=null,M=-1,v=null;const w=new ot,B=new ot;let k=null;const W=new Ae(0);let j=0,H=t.width,q=t.height,N=1,J=null,ne=null;const he=new ot(0,0,H,q),ye=new ot(0,0,H,q);let Ie=!1;const X=new rr;let te=!1,ue=!1;const se=new it,ve=new it,we=new O,ge=new ot,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Oe(){return P===null?N:1}let R=s;function mt(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const I="webgl2";if(R=mt(I,b),R===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,He,Me,Qe,be,T,x,F,K,$,Y,xe,ie,ce,Ve,Q,de,Ce,Re,pe,We,De,je,L;function oe(){Ge=new zR(R),Ge.init(),De=new yD(R,Ge),He=new IR(R,Ge,e,De),Me=new bD(R,Ge),He.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),Qe=new GR(R),be=new aD,T=new MD(R,Ge,Me,be,He,De,Qe),x=new kR(S),F=new OR(S),K=new Kw(R),je=new PR(R,K),$=new VR(R,K,Qe,je),Y=new XR(R,$,K,Qe),Re=new WR(R,He,T),Q=new UR(be),xe=new rD(S,x,F,Ge,He,je,Q),ie=new AD(S,be),ce=new cD,Ve=new fD(Ge),Ce=new DR(S,x,F,Me,Y,d,l),de=new vD(S,Y,He),L=new RD(R,Qe,He,Me),pe=new LR(R,Ge,Qe),We=new HR(R,Ge,Qe),Qe.programs=xe.programs,S.capabilities=He,S.extensions=Ge,S.properties=be,S.renderLists=ce,S.shadowMap=de,S.state=Me,S.info=Qe}oe();const G=new wD(S,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(H,q,!1))},this.getSize=function(b){return b.set(H,q)},this.setSize=function(b,I,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,q=I,t.width=Math.floor(b*N),t.height=Math.floor(I*N),z===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(H*N,q*N).floor()},this.setDrawingBufferSize=function(b,I,z){H=b,q=I,N=z,t.width=Math.floor(b*z),t.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,I,z,V){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,I,z,V),Me.viewport(w.copy(he).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,I,z,V){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,I,z,V),Me.scissor(B.copy(ye).multiplyScalar(N).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){Me.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,z=!0){let V=0;if(b){let U=!1;if(P!==null){const ee=P.texture.format;U=ee===er||ee===Qo||ee===Jo}if(U){const ee=P.texture.type,ae=ee===hs||ee===Bs||ee===Pn||ee===dn||ee===Ko||ee===Zo,fe=Ce.getClearColor(),me=Ce.getClearAlpha(),Le=fe.r,Pe=fe.g,Se=fe.b;ae?(g[0]=Le,g[1]=Pe,g[2]=Se,g[3]=me,R.clearBufferuiv(R.COLOR,0,g)):(m[0]=Le,m[1]=Pe,m[2]=Se,m[3]=me,R.clearBufferiv(R.COLOR,0,m))}else V|=R.COLOR_BUFFER_BIT}I&&(V|=R.DEPTH_BUFFER_BIT),z&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ce.dispose(),ce.dispose(),Ve.dispose(),be.dispose(),x.dispose(),F.dispose(),Y.dispose(),je.dispose(),L.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",hr),G.removeEventListener("sessionend",dr),Es.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=Qe.autoReset,I=de.enabled,z=de.autoUpdate,V=de.needsUpdate,U=de.type;oe(),Qe.autoReset=b,de.enabled=I,de.autoUpdate=z,de.needsUpdate=V,de.type=U}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const I=b.target;I.removeEventListener("dispose",Ne),rt(I)}function rt(b){vt(b),be.remove(b)}function vt(b){const I=be.get(b).programs;I!==void 0&&(I.forEach(function(z){xe.releaseProgram(z)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,V,U,ee){I===null&&(I=qe);const ae=U.isMesh&&U.matrixWorld.determinant()<0,fe=dl(b,I,z,V,U);Me.setMaterial(V,ae);let me=z.index,Le=1;if(V.wireframe===!0){if(me=$.getWireframeAttribute(z),me===void 0)return;Le=2}const Pe=z.drawRange,Se=z.attributes.position;let Ye=Pe.start*Le,$e=(Pe.start+Pe.count)*Le;ee!==null&&(Ye=Math.max(Ye,ee.start*Le),$e=Math.min($e,(ee.start+ee.count)*Le)),me!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,me.count)):Se!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Se.count));const ut=$e-Ye;if(ut<0||ut===1/0)return;je.setup(U,V,fe,z,me);let at,Ke=pe;if(me!==null&&(at=K.get(me),Ke=We,Ke.setIndex(at)),U.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*Oe()),Ke.setMode(R.LINES)):Ke.setMode(R.TRIANGLES);else if(U.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*Oe()),U.isLineSegments?Ke.setMode(R.LINES):U.isLineLoop?Ke.setMode(R.LINE_LOOP):Ke.setMode(R.LINE_STRIP)}else U.isPoints?Ke.setMode(R.POINTS):U.isSprite&&Ke.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,gt=U._multiDrawCounts,Je=U._multiDrawCount,Gt=me?K.get(me).bytesPerElement:1,zs=be.get(V).currentProgram.getUniforms();for(let Ut=0;Ut<Je;Ut++)zs.setValue(R,"_gl_DrawID",Ut),Ke.render(Ee[Ut]/Gt,gt[Ut])}else if(U.isInstancedMesh)Ke.renderInstances(Ye,ut,U.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Ee);Ke.renderInstances(Ye,ut,gt)}else Ke.render(Ye,ut)};function et(b,I,z){b.transparent===!0&&b.side===Lt&&b.forceSinglePass===!1?(b.side=It,b.needsUpdate=!0,Bn(b,I,z),b.side=Ss,b.needsUpdate=!0,Bn(b,I,z),b.side=Lt):Bn(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),p=Ve.get(z),p.init(I),y.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const V=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const fe=ee[ae];et(fe,z,U),V.add(fe)}else et(ee,z,U),V.add(ee)}),p=y.pop(),V},this.compileAsync=function(b,I,z=null){const V=this.compile(b,I,z);return new Promise(U=>{function ee(){if(V.forEach(function(ae){be.get(ae).currentProgram.isReady()&&V.delete(ae)}),V.size===0){U(b);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ht=null;function ts(b){Ht&&Ht(b)}function hr(){Es.stop()}function dr(){Es.start()}const Es=new il;Es.setAnimationLoop(ts),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(b){Ht=b,G.setAnimationLoop(b),b===null?Es.stop():Es.start()},G.addEventListener("sessionstart",hr),G.addEventListener("sessionend",dr),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,I,P),p=Ve.get(b,y.length),p.init(I),y.push(p),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(ve),ue=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ue),f=ce.get(b,E.length),f.init(),E.push(f),G.enabled===!0&&G.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Ei(ee,I,-1/0,S.sortObjects)}Ei(b,I,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(J,ne),Be=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Be&&Ce.addToRenderList(f,b),this.info.render.frame++,te===!0&&Q.beginShadows();const z=p.state.shadowsArray;de.render(z,b,I),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=f.opaque,U=f.transmissive;if(p.setupLights(),I.isArrayCamera){const ee=I.cameras;if(U.length>0)for(let ae=0,fe=ee.length;ae<fe;ae++){const me=ee[ae];fr(V,U,b,me)}Be&&Ce.render(b);for(let ae=0,fe=ee.length;ae<fe;ae++){const me=ee[ae];pr(f,b,me,me.viewport)}}else U.length>0&&fr(V,U,b,I),Be&&Ce.render(b),pr(f,b,I);P!==null&&C===0&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(S,b,I),je.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&Q.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function Ei(b,I,z,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){V&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);const ae=Y.update(b),fe=b.material;fe.visible&&f.push(b,ae,fe,z,ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const ae=Y.update(b),fe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ge.copy(ae.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(fe)){const me=ae.groups;for(let Le=0,Pe=me.length;Le<Pe;Le++){const Se=me[Le],Ye=fe[Se.materialIndex];Ye&&Ye.visible&&f.push(b,ae,Ye,z,ge.z,Se)}}else fe.visible&&f.push(b,ae,fe,z,ge.z,null)}}const ee=b.children;for(let ae=0,fe=ee.length;ae<fe;ae++)Ei(ee[ae],I,z,V)}function pr(b,I,z,V){const U=b.opaque,ee=b.transmissive,ae=b.transparent;p.setupLightsView(z),te===!0&&Q.setGlobalState(S.clippingPlanes,z),V&&Me.viewport(w.copy(V)),U.length>0&&Fn(U,I,z),ee.length>0&&Fn(ee,I,z),ae.length>0&&Fn(ae,I,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function fr(b,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Bt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Zt:hs,minFilter:Ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ee=p.state.transmissionRenderTarget[V.id],ae=V.viewport||w;ee.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);const fe=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(W),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Ce.render(z);const me=S.toneMapping;S.toneMapping=ys;const Le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),te===!0&&Q.setGlobalState(S.clippingPlanes,V),Fn(b,z,V),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,Ye=I.length;Se<Ye;Se++){const $e=I[Se],ut=$e.object,at=$e.geometry,Ke=$e.material,Ee=$e.group;if(Ke.side===Lt&&ut.layers.test(V.layers)){const gt=Ke.side;Ke.side=It,Ke.needsUpdate=!0,gr(ut,z,V,at,Ke,Ee),Ke.side=gt,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}S.setRenderTarget(fe),S.setClearColor(W,j),Le!==void 0&&(V.viewport=Le),S.toneMapping=me}function Fn(b,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ee=b.length;U<ee;U++){const ae=b[U],fe=ae.object,me=ae.geometry,Le=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&V!==null&&(Pe=V),fe.layers.test(z.layers)&&gr(fe,I,z,me,Pe,Le)}}function gr(b,I,z,V,U,ee){b.onBeforeRender(S,I,z,V,U,ee),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(S,I,z,V,b,ee),U.transparent===!0&&U.side===Lt&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,S.renderBufferDirect(z,I,V,U,b,ee),U.side=Ss,U.needsUpdate=!0,S.renderBufferDirect(z,I,V,U,b,ee),U.side=Lt):S.renderBufferDirect(z,I,V,U,b,ee),b.onAfterRender(S,I,z,V,U,ee)}function Bn(b,I,z){I.isScene!==!0&&(I=qe);const V=be.get(b),U=p.state.lights,ee=p.state.shadowsArray,ae=U.state.version,fe=xe.getParameters(b,U.state,ee,I,z),me=xe.getProgramCacheKey(fe);let Le=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?F:x).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Ne),Le=new Map,V.programs=Le);let Pe=Le.get(me);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===ae)return vr(b,fe),Pe}else fe.uniforms=xe.getUniforms(b),b.onBeforeCompile(fe,S),Pe=xe.acquireProgram(fe,me),Le.set(me,Pe),V.uniforms=fe.uniforms;const Se=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=Q.uniform),vr(b,fe),V.needsLights=fl(b),V.lightsStateVersion=ae,V.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function mr(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=fi.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function vr(b,I){const z=be.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function dl(b,I,z,V,U){I.isScene!==!0&&(I=qe),T.resetTextureUnits();const ee=I.fog,ae=V.isMeshStandardMaterial?I.environment:null,fe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,me=(V.isMeshStandardMaterial?F:x).get(V.envMap||ae),Le=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,$e=!!z.morphAttributes.color;let ut=ys;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=S.toneMapping);const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=at!==void 0?at.length:0,Ee=be.get(V),gt=p.state.lights;if(te===!0&&(ue===!0||b!==v)){const Tt=b===v&&V.id===M;Q.setState(V,b,Tt)}let Je=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==gt.state.version||Ee.outputColorSpace!==fe||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==me||V.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Le||Ee.vertexTangents!==Pe||Ee.morphTargets!==Se||Ee.morphNormals!==Ye||Ee.morphColors!==$e||Ee.toneMapping!==ut||Ee.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Ee.__version=V.version);let Gt=Ee.currentProgram;Je===!0&&(Gt=Bn(V,I,U));let zs=!1,Ut=!1,yn=!1;const nt=Gt.getUniforms(),Ot=Ee.uniforms;if(Me.useProgram(Gt.program)&&(zs=!0,Ut=!0,yn=!0),V.id!==M&&(M=V.id,Ut=!0),zs||v!==b){Me.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),aw(se),lw(se),nt.setValue(R,"projectionMatrix",se)):nt.setValue(R,"projectionMatrix",b.projectionMatrix),nt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Dt=nt.map.cameraPosition;Dt!==void 0&&Dt.setValue(R,we.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ut=!0,yn=!0)}if(U.isSkinnedMesh){nt.setOptional(R,U,"bindMatrix"),nt.setOptional(R,U,"bindMatrixInverse");const Tt=U.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),nt.setValue(R,"boneTexture",Tt.boneTexture,T))}U.isBatchedMesh&&(nt.setOptional(R,U,"batchingTexture"),nt.setValue(R,"batchingTexture",U._matricesTexture,T),nt.setOptional(R,U,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",U._indirectTexture,T),nt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",U._colorsTexture,T));const zt=z.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&Re.update(U,z,Gt),(Ut||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,nt.setValue(R,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ot.envMap.value=me,Ot.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Ot.envMapIntensity.value=I.environmentIntensity),Ut&&(nt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&pl(Ot,yn),ee&&V.fog===!0&&ie.refreshFogUniforms(Ot,ee),ie.refreshMaterialUniforms(Ot,V,N,q,p.state.transmissionRenderTarget[b.id]),fi.upload(R,mr(Ee),Ot,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fi.upload(R,mr(Ee),Ot,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(R,"center",U.center),nt.setValue(R,"modelViewMatrix",U.modelViewMatrix),nt.setValue(R,"normalMatrix",U.normalMatrix),nt.setValue(R,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Tt=V.uniformsGroups;for(let Dt=0,Ti=Tt.length;Dt<Ti;Dt++){const Ts=Tt[Dt];L.update(Ts,Gt),L.bind(Ts,Gt)}}return Gt}function pl(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function fl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,I,z){const V=be.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),be.get(b.texture).__webglTexture=I,be.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const z=be.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const gl=R.createFramebuffer();this.setRenderTarget=function(b,I=0,z=0){P=b,A=I,C=z;let V=!0,U=null,ee=!1,ae=!1;if(b){const me=be.get(b);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(me.__hasExternalTextures)T.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Se=b.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&be.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ae=!0);const Pe=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?U=Pe[I][z]:U=Pe[I],ee=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?U=be.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[z]:U=Pe,w.copy(b.viewport),B.copy(b.scissor),k=b.scissorTest}else w.copy(he).multiplyScalar(N).floor(),B.copy(ye).multiplyScalar(N).floor(),k=Ie;if(z!==0&&(U=gl),Me.bindFramebuffer(R.FRAMEBUFFER,U)&&V&&Me.drawBuffers(b,U),Me.viewport(w),Me.scissor(B),Me.setScissorTest(k),ee){const me=be.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,z)}else if(ae){const me=be.get(b.texture),Le=I;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,z,Le)}else if(b!==null&&z!==0){const me=be.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(b,I,z,V,U,ee,ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){Me.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=b.texture,Le=me.format,Pe=me.type;if(!He.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&z>=0&&z<=b.height-U&&R.readPixels(I,z,V,U,De.convert(Le),De.convert(Pe),ee)}finally{const me=P!==null?be.get(P).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(b,I,z,V,U,ee,ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe)if(I>=0&&I<=b.width-V&&z>=0&&z<=b.height-U){Me.bindFramebuffer(R.FRAMEBUFFER,fe);const me=b.texture,Le=me.format,Pe=me.type;if(!He.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(I,z,V,U,De.convert(Le),De.convert(Pe),0);const Ye=P!==null?be.get(P).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,Ye);const $e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await rw(R,$e,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(Se),R.deleteSync($e),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,z=0){const V=Math.pow(2,-z),U=Math.floor(b.image.width*V),ee=Math.floor(b.image.height*V),ae=I!==null?I.x:0,fe=I!==null?I.y:0;T.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ae,fe,U,ee),Me.unbindTexture()};const ml=R.createFramebuffer(),vl=R.createFramebuffer();this.copyTextureToTexture=function(b,I,z=null,V=null,U=0,ee=null){ee===null&&(U!==0?(pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let ae,fe,me,Le,Pe,Se,Ye,$e,ut;const at=b.isCompressedTexture?b.mipmaps[ee]:b.image;if(z!==null)ae=z.max.x-z.min.x,fe=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Pe=z.min.y,Se=z.isBox3?z.min.z:0;else{const zt=Math.pow(2,-U);ae=Math.floor(at.width*zt),fe=Math.floor(at.height*zt),b.isDataArrayTexture?me=at.depth:b.isData3DTexture?me=Math.floor(at.depth*zt):me=1,Le=0,Pe=0,Se=0}V!==null?(Ye=V.x,$e=V.y,ut=V.z):(Ye=0,$e=0,ut=0);const Ke=De.convert(I.format),Ee=De.convert(I.type);let gt;I.isData3DTexture?(T.setTexture3D(I,0),gt=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),gt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),gt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=R.getParameter(R.UNPACK_ROW_LENGTH),Gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),zs=R.getParameter(R.UNPACK_SKIP_PIXELS),Ut=R.getParameter(R.UNPACK_SKIP_ROWS),yn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se);const nt=b.isDataArrayTexture||b.isData3DTexture,Ot=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const zt=be.get(b),Tt=be.get(I),Dt=be.get(zt.__renderTarget),Ti=be.get(Tt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ts=0;Ts<me;Ts++)nt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(b).__webglTexture,U,Se+Ts),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(I).__webglTexture,ee,ut+Ts)),R.blitFramebuffer(Le,Pe,ae,fe,Ye,$e,ae,fe,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||be.has(b)){const zt=be.get(b),Tt=be.get(I);Me.bindFramebuffer(R.READ_FRAMEBUFFER,ml),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,vl);for(let Dt=0;Dt<me;Dt++)nt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,U,Se+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,U),Ot?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.__webglTexture,ee,ut+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Tt.__webglTexture,ee),U!==0?R.blitFramebuffer(Le,Pe,ae,fe,Ye,$e,ae,fe,R.COLOR_BUFFER_BIT,R.NEAREST):Ot?R.copyTexSubImage3D(gt,ee,Ye,$e,ut+Dt,Le,Pe,ae,fe):R.copyTexSubImage2D(gt,ee,Ye,$e,Le,Pe,ae,fe);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(gt,ee,Ye,$e,ut,ae,fe,me,Ke,Ee,at.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(gt,ee,Ye,$e,ut,ae,fe,me,Ke,at.data):R.texSubImage3D(gt,ee,Ye,$e,ut,ae,fe,me,Ke,Ee,at):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Ye,$e,ae,fe,Ke,Ee,at.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Ye,$e,at.width,at.height,Ke,at.data):R.texSubImage2D(R.TEXTURE_2D,ee,Ye,$e,ae,fe,Ke,Ee,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,Je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,zs),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ut),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yn),ee===0&&I.generateMipmaps&&R.generateMipmap(gt),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z=null,V=null,U=0){return pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,z,V,U)},this.initRenderTarget=function(b){be.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Me.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DD=new cr(-1,1,1,-1,0,1);class PD extends yt{constructor(){super(),this.setAttribute("position",new _s([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _s([0,2,0,0,2,0],2))}}const LD=new PD;class _r{constructor(e){this._mesh=new lt(LD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ID extends Mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ms.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _r(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class va extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class UD extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new Te);this._width=s.width,this._height=s.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ID(Fs),this.copyPass.material.blending=Rt,this.clock=new yi}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),r.needsSwap){if(s){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(r instanceof va?s=!0:r instanceof UD&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ND extends Mn{constructor(e,t,s=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,s){const i=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}class FD{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let s,i,o;const r=.5*(Math.sqrt(3)-1),a=(e+t)*r,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,_=(l+c)*u,h=l-_,d=c-_,g=e-h,m=t-d;let f,p;g>m?(f=1,p=0):(f=0,p=1);const E=g-f+u,y=m-p+u,S=g-1+2*u,D=m-1+2*u,A=l&255,C=c&255,P=this.perm[A+this.perm[C]]%12,M=this.perm[A+f+this.perm[C+p]]%12,v=this.perm[A+1+this.perm[C+1]]%12;let w=.5-g*g-m*m;w<0?s=0:(w*=w,s=w*w*this._dot(this.grad3[P],g,m));let B=.5-E*E-y*y;B<0?i=0:(B*=B,i=B*B*this._dot(this.grad3[M],E,y));let k=.5-S*S-D*D;return k<0?o=0:(k*=k,o=k*k*this._dot(this.grad3[v],S,D)),70*(s+i+o)}noise3d(e,t,s){let i,o,r,a;const c=(e+t+s)*.3333333333333333,u=Math.floor(e+c),_=Math.floor(t+c),h=Math.floor(s+c),d=1/6,g=(u+_+h)*d,m=u-g,f=_-g,p=h-g,E=e-m,y=t-f,S=s-p;let D,A,C,P,M,v;E>=y?y>=S?(D=1,A=0,C=0,P=1,M=1,v=0):E>=S?(D=1,A=0,C=0,P=1,M=0,v=1):(D=0,A=0,C=1,P=1,M=0,v=1):y<S?(D=0,A=0,C=1,P=0,M=1,v=1):E<S?(D=0,A=1,C=0,P=0,M=1,v=1):(D=0,A=1,C=0,P=1,M=1,v=0);const w=E-D+d,B=y-A+d,k=S-C+d,W=E-P+2*d,j=y-M+2*d,H=S-v+2*d,q=E-1+3*d,N=y-1+3*d,J=S-1+3*d,ne=u&255,he=_&255,ye=h&255,Ie=this.perm[ne+this.perm[he+this.perm[ye]]]%12,X=this.perm[ne+D+this.perm[he+A+this.perm[ye+C]]]%12,te=this.perm[ne+P+this.perm[he+M+this.perm[ye+v]]]%12,ue=this.perm[ne+1+this.perm[he+1+this.perm[ye+1]]]%12;let se=.6-E*E-y*y-S*S;se<0?i=0:(se*=se,i=se*se*this._dot3(this.grad3[Ie],E,y,S));let ve=.6-w*w-B*B-k*k;ve<0?o=0:(ve*=ve,o=ve*ve*this._dot3(this.grad3[X],w,B,k));let we=.6-W*W-j*j-H*H;we<0?r=0:(we*=we,r=we*we*this._dot3(this.grad3[te],W,j,H));let ge=.6-q*q-N*N-J*J;return ge<0?a=0:(ge*=ge,a=ge*ge*this._dot3(this.grad3[ue],q,N,J)),32*(i+o+r+a)}noise4d(e,t,s,i){const o=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,_,h,d,g;const m=(e+t+s+i)*l,f=Math.floor(e+m),p=Math.floor(t+m),E=Math.floor(s+m),y=Math.floor(i+m),S=(f+p+E+y)*c,D=f-S,A=p-S,C=E-S,P=y-S,M=e-D,v=t-A,w=s-C,B=i-P,k=M>v?32:0,W=M>w?16:0,j=v>w?8:0,H=M>B?4:0,q=v>B?2:0,N=w>B?1:0,J=k+W+j+H+q+N,ne=r[J][0]>=3?1:0,he=r[J][1]>=3?1:0,ye=r[J][2]>=3?1:0,Ie=r[J][3]>=3?1:0,X=r[J][0]>=2?1:0,te=r[J][1]>=2?1:0,ue=r[J][2]>=2?1:0,se=r[J][3]>=2?1:0,ve=r[J][0]>=1?1:0,we=r[J][1]>=1?1:0,ge=r[J][2]>=1?1:0,qe=r[J][3]>=1?1:0,Be=M-ne+c,Oe=v-he+c,R=w-ye+c,mt=B-Ie+c,Ge=M-X+2*c,He=v-te+2*c,Me=w-ue+2*c,Qe=B-se+2*c,be=M-ve+3*c,T=v-we+3*c,x=w-ge+3*c,F=B-qe+3*c,K=M-1+4*c,$=v-1+4*c,Y=w-1+4*c,xe=B-1+4*c,ie=f&255,ce=p&255,Ve=E&255,Q=y&255,de=a[ie+a[ce+a[Ve+a[Q]]]]%32,Ce=a[ie+ne+a[ce+he+a[Ve+ye+a[Q+Ie]]]]%32,Re=a[ie+X+a[ce+te+a[Ve+ue+a[Q+se]]]]%32,pe=a[ie+ve+a[ce+we+a[Ve+ge+a[Q+qe]]]]%32,We=a[ie+1+a[ce+1+a[Ve+1+a[Q+1]]]]%32;let De=.6-M*M-v*v-w*w-B*B;De<0?u=0:(De*=De,u=De*De*this._dot4(o[de],M,v,w,B));let je=.6-Be*Be-Oe*Oe-R*R-mt*mt;je<0?_=0:(je*=je,_=je*je*this._dot4(o[Ce],Be,Oe,R,mt));let L=.6-Ge*Ge-He*He-Me*Me-Qe*Qe;L<0?h=0:(L*=L,h=L*L*this._dot4(o[Re],Ge,He,Me,Qe));let oe=.6-be*be-T*T-x*x-F*F;oe<0?d=0:(oe*=oe,d=oe*oe*this._dot4(o[pe],be,T,x,F));let G=.6-K*K-$*$-Y*Y-xe*xe;return G<0?g=0:(G*=G,g=G*G*this._dot4(o[We],K,$,Y,xe)),27*(u+_+h+d+g)}_dot(e,t,s){return e[0]*t+e[1]*s}_dot3(e,t,s,i){return e[0]*t+e[1]*s+e[2]*i}_dot4(e,t,s,i,o){return e[0]*t+e[1]*s+e[2]*i+e[3]*o}}const ri={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Te},cameraProjectionMatrix:{value:new it},cameraInverseProjectionMatrix:{value:new it},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},ai={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},li={uniforms:{tDiffuse:{value:null},resolution:{value:new Te}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class bs extends Mn{constructor(e,t,s=512,i=512,o=32){super(),this.width=s,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this._generateSampleKernel(o),this._generateRandomKernelRotations();const r=new ar;r.format=pn,r.type=dn,this.normalRenderTarget=new Bt(this.width,this.height,{minFilter:St,magFilter:St,type:Zt,depthTexture:r}),this.ssaoRenderTarget=new Bt(this.width,this.height,{type:Zt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ct({defines:Object.assign({},ri.defines),uniforms:Ms.clone(ri.uniforms),vertexShader:ri.vertexShader,fragmentShader:ri.fragmentShader,blending:Rt}),this.ssaoMaterial.defines.KERNEL_SIZE=o,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Fw,this.normalMaterial.blending=Rt,this.blurMaterial=new ct({defines:Object.assign({},li.defines),uniforms:Ms.clone(li.uniforms),vertexShader:li.vertexShader,fragmentShader:li.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ct({defines:Object.assign({},ai.defines),uniforms:Ms.clone(ai.uniforms),vertexShader:ai.vertexShader,fragmentShader:ai.fragmentShader,blending:Rt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ct({uniforms:Ms.clone(Fs.uniforms),vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pa,blendDst:oo,blendEquation:ls,blendSrcAlpha:Da,blendDstAlpha:oo,blendEquationAlpha:ls}),this._fsQuad=new _r(null),this._originalClearColor=new Ae}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,s){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case bs.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case bs.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case bs.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:s);break;case bs.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case bs.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ra,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,s,i,o){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,s,i,o){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,i=t.clearColor||i,o=t.clearAlpha||o,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_generateSampleKernel(e){const t=this.kernel;for(let s=0;s<e;s++){const i=new O;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let o=s/e;o=iw.lerp(.1,1,o*o),i.multiplyScalar(o),t.push(i)}}_generateRandomKernelRotations(){const s=new FD,i=4*4,o=new Float32Array(i);for(let r=0;r<i;r++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;o[r]=s.noise3d(a,l,c)}this.noiseTexture=new Iw(o,4,4,$o,Qt),this.noiseTexture.wrapS=hn,this.noiseTexture.wrapT=hn,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){t.set(s,s.visible),(s.isPoints||s.isLine)&&(s.visible=!1)})}_restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){const i=t.get(s);s.visible=i}),t.clear()}}bs.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const BD={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class mn extends Mn{constructor(e,t=1,s,i){super(),this.strength=t,this.radius=s,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(o,r,{type:Zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const _=new Bt(o,r,{type:Zt});_.texture.name="UnrealBloomPass.h"+u,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const h=new Bt(o,r,{type:Zt});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),o=Math.round(o/2),r=Math.round(r/2)}const a=BD;this.highPassUniforms=Ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Te(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ms.clone(Fs.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,blending:io,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new or,this._fsQuad=new _r(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(s,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(s,i),this.renderTargetsVertical[o].setSize(s,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Te(1/s,1/i),s=Math.round(s/2),i=Math.round(i/2)}render(e,t,s,i,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}mn.BlurDirectionX=new Te(1,0);mn.BlurDirectionY=new Te(0,1);const tn=new $t(0,0,0,"YXZ"),sn=new O,OD={type:"change"},zD={type:"lock"},VD={type:"unlock"},xa=Math.PI/2;class HD extends Yw{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=GD.bind(this),this._onPointerlockChange=WD.bind(this),this._onPointerlockError=XD.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;sn.setFromMatrixColumn(t.matrix,0),sn.crossVectors(t.up,sn),t.position.addScaledVector(sn,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;sn.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(sn,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function GD(n){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;tn.setFromQuaternion(e.quaternion),tn.y-=n.movementX*.002*this.pointerSpeed,tn.x-=n.movementY*.002*this.pointerSpeed,tn.x=Math.max(xa-this.maxPolarAngle,Math.min(xa-this.minPolarAngle,tn.x)),e.quaternion.setFromEuler(tn),this.dispatchEvent(OD)}function WD(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(zD),this.isLocked=!0):(this.dispatchEvent(VD),this.isLocked=!1)}function XD(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class qD{constructor(e={}){this.textureCache={},this.atlasMapping={},this.atlasTexture=null,this.texturePaths=[],this.isLoaded=!1,this.options={filter:St,mipmap:Ua,colorSpace:At,...e}}setTexturePaths(e){return this.texturePaths=e,this}async _loadImages(e){const t=e.map(s=>new Promise((i,o)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>i({url:s,img:r}),r.onerror=o,r.src=s}));return Promise.all(t)}async load(){const e=await this._loadImages(this.texturePaths),{canvas:t,atlasMapping:s}=this._createAtlasCanvas(e);return this.atlasTexture=this._createAtlasTexture(t),this.atlasMapping=s,this.textureCache=this._createTextureMap(this.atlasTexture,this.atlasMapping),console.log(this.textureCache),this.isLoaded=!0,this}getTexture(e){return this.isLoaded?this.textureCache[e]||null:(console.warn("TextureManager: Textures not loaded yet"),null)}getMaterial(e,t={}){return new Dn({map:this.textureCache[e],metalness:0,roughness:1})}getRandomMaterial(e={}){const t=Object.keys(this.textureCache);if(t.length===0)return null;const s=t[Math.floor(Math.random()*t.length)];return this.getMaterial(s,e)}_createAtlasCanvas(e){const o=Math.floor(126.5),r=document.createElement("canvas");r.width=Math.min(8096,o*64),r.height=Math.min(8096,Math.ceil(e.length/o)*64);const a=r.cloneNode(!0);a.width=64,a.height=64,a.style.position="absolute",a.style.top="10px",a.style.right="10px",a.style.zIndex="100",document.body.appendChild(a);const l=r.getContext("2d"),c={};return e.forEach(({url:u,img:_},h)=>{const d=Math.floor(h/o),m=h%o*64,f=d*64;l.drawImage(_,m,f,64,64);const p=m/r.width,E=f/r.height,y=(m+64)/r.width,S=(f+64)/r.height;c[u]={offset:{x:p,y:E},size:{x:y-p,y:S-E}}}),{canvas:r,atlasMapping:c}}_createAtlasTexture(e){const t=new Nw(e);return t.colorSpace=At,t.minFilter=PT,t.magFilter=jt,t}_createTextureMap(e,t){const s={};for(const i in t){const o=i.split("/").pop().split(".")[0],r=e.clone(),a=t[i];r.offset.set(a.offset.x,a.offset.y),r.repeat.set(a.size.x,a.size.y),s[o]=r}return s}}class YD{constructor(e,t,s={}){this.camera=e,this.domElement=t,this.controls=new HD(e,t),this.debugMode=!1,this.movement={forward:!1,back:!1,left:!1,right:!1,up:!1,down:!1},this.movementSpeed=s.movementSpeed||5,this.consoleOpen=!1,this._initConsoleUI(),this._addEventListeners()}_addEventListeners(){document.addEventListener("keydown",e=>{if(e.code==="Backquote"&&!e.repeat){e.preventDefault(),this._toggleConsole();return}if(!this.consoleOpen)switch(e.code){case"KeyW":this.movement.forward=!0;break;case"KeyS":this.movement.back=!0;break;case"KeyA":this.movement.left=!0;break;case"KeyD":this.movement.right=!0;break;case"Space":this.movement.up=!0;break;case"ShiftLeft":this.movement.down=!0;break}}),document.addEventListener("keyup",e=>{if(!this.consoleOpen)switch(e.code){case"KeyW":this.movement.forward=!1;break;case"KeyS":this.movement.back=!1;break;case"KeyA":this.movement.left=!1;break;case"KeyD":this.movement.right=!1;break;case"Space":this.movement.up=!1;break;case"ShiftLeft":this.movement.down=!1;break}}),window.addEventListener("texture-debugger-toggle",e=>{this.debugMode=e.detail.visible,this.debugMode&&this.controls.isLocked&&this.controls.unlock()}),document.addEventListener("click",e=>{const t=e.target.closest(".debug-panel")!==null||e.target.closest("#command-console-container")!==null;!this.debugMode&&!this.consoleOpen&&!t&&!this.controls.isLocked&&this.controls.lock()})}_initConsoleUI(){this.consoleContainer=document.createElement("div"),this.consoleContainer.id="command-console-container",this.consoleContainer.style.position="fixed",this.consoleContainer.style.left="0",this.consoleContainer.style.right="0",this.consoleContainer.style.bottom="0",this.consoleContainer.style.padding="8px",this.consoleContainer.style.display="none",this.consoleContainer.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.consoleContainer.style.color="#fff",this.consoleContainer.style.fontFamily="monospace",this.consoleInput=document.createElement("input"),this.consoleInput.type="text",this.consoleInput.style.width="100%",this.consoleInput.style.padding="8px",this.consoleInput.style.boxSizing="border-box",this.consoleInput.style.backgroundColor="#222",this.consoleInput.style.color="#fff",this.consoleInput.style.fontFamily="monospace",this.consoleInput.style.border="1px solid #555",this.consoleInput.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=this.consoleInput.value.trim();this._executeCommand(t),this.consoleInput.value=""}}),this.consoleContainer.appendChild(this.consoleInput),document.body.appendChild(this.consoleContainer)}_toggleConsole(){this.consoleOpen=!this.consoleOpen,this.consoleOpen?(this.consoleContainer.style.display="block",this.controls.isLocked&&this.controls.unlock(),this.consoleInput.focus()):(this.consoleContainer.style.display="none",this.consoleInput.value="")}_executeCommand(e){if(!e)return;const t=/^teleport\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)$/i,s=e.match(t);if(s){const i=parseFloat(s[1]),o=parseFloat(s[2]),r=parseFloat(s[3]);this.camera.position.set(i,o,r),console.log(`Teleported camera to: (${i}, ${o}, ${r})`);return}console.warn(`Unrecognized command: ${e}`)}update(e){if(this.debugMode||this.consoleOpen||!this.controls.isLocked)return;const t=this.movementSpeed*e;this.movement.forward&&this.controls.moveForward(t),this.movement.back&&this.controls.moveForward(-t),this.movement.left&&this.controls.moveRight(-t),this.movement.right&&this.controls.moveRight(t),this.movement.up&&(this.camera.position.y+=t),this.movement.down&&(this.camera.position.y-=t)}setDebugMode(e){this.debugMode=e,e&&this.controls.isLocked&&this.controls.unlock()}}const Ue={STANDARD:"standard",WATER:"water",MULTI_SIDED:"multi_sided",CROSS:"cross",TINTED:"tinted"},st={TOP:"top",BOTTOM:"bottom",SIDES:"sides"};class jD{constructor(e){this.textureManager=e,this.specialBlocks={[Ue.WATER]:{transparent:!0,liquid:!0,renderOrder:100}},this.multiSidedBlocks={},this.validTextures=[],this.tintedTextures={grass_block_top:new Ae(.2,1,.2),grass_block_side:new Ae(.6,.8,.4),oak_leaves:new Ae(.4,.7,.3),birch_leaves:new Ae(.5,.8,.3),acacia_leaves:new Ae(.6,.7,.3),jungle_leaves:new Ae(.3,.7,.2),spruce_leaves:new Ae(.4,.6,.2),dark_oak_leaves:new Ae(.3,.6,.2)},this.defaultValidTextures=["stone","dirt","grass_block_top","grass_block_side","sand","gravel","glass","oak_planks","brick","cobblestone","oak_log","oak_log_top","oak_leaves","acacia_leaves","birch_leaves","spruce_leaves","jungle_leaves","dark_oak_leaves","bookshelf","snow","clay","acacia_planks","birch_planks","diorite","granite","andesite","sandstone","obsidian","diamond_block","gold_block","iron_block","emerald_block","poppy","dandelion","rose","blue_orchid","tulip_red"],this.registerDefaultBlocks()}isTintedTexture(e){return!!this.tintedTextures[e]}getTintColor(e){return this.tintedTextures[e]||new Ae(1,1,1)}isSpecialBlock(e){return!!this.specialBlocks[e]||e===Ue.WATER||e===Ue.TINTED||e===Ue.CROSS}getBlockProperties(e){return this.specialBlocks[e]||null}isValidTexture(e){return this.validTextures.length>0?this.validTextures.includes(e):this.defaultValidTextures.includes(e)}setValidTextures(e){this.validTextures=e||[]}registerMultiSidedBlock(e,t){var i;const s=[];for(const o of Object.keys(t)){const r=t[o];(i=this.textureManager)!=null&&i.textureCache[r]||s.push(r)}s.length>0&&console.error(`BlockRegistry Error: The following textures for block "${e}" do not exist in the TextureManager: ${s.join(", ")}.`),this.multiSidedBlocks[e]={...t,type:Ue.MULTI_SIDED}}getMultiSidedBlock(e){return this.multiSidedBlocks[e]||null}isMultiSidedBlock(e){return!!this.multiSidedBlocks[e]}getTextureForFace(e,t){const s=this.multiSidedBlocks[e];return s?s[t]||s[st.SIDES]||e:null}registerDefaultBlocks(){this.registerMultiSidedBlock("grass_block",{[st.TOP]:"grass_block_top",[st.SIDES]:"grass_block_side",[st.BOTTOM]:"dirt"}),this.registerMultiSidedBlock("oak_log",{[st.TOP]:"oak_log_top",[st.BOTTOM]:"oak_log_top",[st.SIDES]:"oak_log"}),this.registerMultiSidedBlock("birch_log",{[st.TOP]:"birch_log_top",[st.BOTTOM]:"birch_log_top",[st.SIDES]:"birch_log"}),this.registerMultiSidedBlock("sandstone",{[st.TOP]:"sandstone_top",[st.BOTTOM]:"sandstone_bottom",[st.SIDES]:"sandstone"})}loadConfiguration(e){if(e.validBlocks&&this.setValidTextures(e.validBlocks),e.multiSidedBlocks)for(const t in e.multiSidedBlocks)this.registerMultiSidedBlock(t,e.multiSidedBlocks[t])}getRandomValidTexture(e){const s=(this.validTextures.length>0?this.validTextures:this.defaultValidTextures).filter(i=>e.textureCache[i]!==void 0);if(s.length===0){const i=Object.keys(e.textureCache);return i[Math.floor(Math.random()*i.length)]}return s[Math.floor(Math.random()*s.length)]}}class ul{constructor(e){this.blockRegistry=e,this.worldData={}}setBlock(e,t,s,i,o){i||(i=Ue.STANDARD);const r={blockType:i};i===Ue.STANDARD?r.textureType=o||this.blockRegistry.getRandomValidTexture():i===Ue.MULTI_SIDED?!o||!this.blockRegistry.isMultiSidedBlock(o)?(r.blockType=Ue.STANDARD,r.textureType=this.blockRegistry.getRandomValidTexture()):r.blockName=o:i===Ue.CROSS&&(r.textureType=o||"poppy"),this.worldData[`${e},${t},${s}`]=r}setNamedBlock(e,t,s,i){if(this.blockRegistry.isMultiSidedBlock(i))this.setBlock(e,t,s,Ue.MULTI_SIDED,i);else if(i==="water")this.setBlock(e,t,s,Ue.WATER);else{const o={blockType:Ue.STANDARD,textureType:i};this.worldData[`${e},${t},${s}`]=o}}hasBlock(e,t,s){return!!this.worldData[`${e},${t},${s}`]}getBlock(e,t,s){return this.worldData[`${e},${t},${s}`]||null}}class KD{constructor(e,t=16){this.blockRegistry=e,this.chunks=new Map,this.chunkSize=t}getChunkCoords(e,t){return{chunkX:Math.floor(e/this.chunkSize),chunkZ:Math.floor(t/this.chunkSize)}}getLocalCoords(e,t){return{localX:(e%this.chunkSize+this.chunkSize)%this.chunkSize,localZ:(t%this.chunkSize+this.chunkSize)%this.chunkSize}}getChunk(e,t){const s=`${e},${t}`;return this.chunks.has(s)||this.chunks.set(s,new ul(this.blockRegistry)),this.chunks.get(s)}setBlock(e,t,s,i,o){const{chunkX:r,chunkZ:a}=this.getChunkCoords(e,s),{localX:l,localZ:c}=this.getLocalCoords(e,s);return this.getChunk(r,a).setBlock(l,t,c,i,o),{chunkX:r,chunkZ:a}}setNamedBlock(e,t,s,i){const{chunkX:o,chunkZ:r}=this.getChunkCoords(e,s),{localX:a,localZ:l}=this.getLocalCoords(e,s);return this.getChunk(o,r).setNamedBlock(a,t,l,i),{chunkX:o,chunkZ:r}}hasBlock(e,t,s){const{chunkX:i,chunkZ:o}=this.getChunkCoords(e,s),{localX:r,localZ:a}=this.getLocalCoords(e,s),l=`${i},${o}`;return this.chunks.has(l)?this.chunks.get(l).hasBlock(r,t,a):!1}getBlock(e,t,s){const{chunkX:i,chunkZ:o}=this.getChunkCoords(e,s),{localX:r,localZ:a}=this.getLocalCoords(e,s),l=`${i},${o}`;return this.chunks.has(l)?this.chunks.get(l).getBlock(r,t,a):null}getChunks(e,t,s){if(s===void 0)return Array.from(this.chunks.entries());const i=Math.floor(e/this.chunkSize),o=Math.floor(t/this.chunkSize);return Array.from(this.chunks.entries()).filter(([r])=>{const[a,l]=r.split(",").map(Number),c=Math.abs(a-i),u=Math.abs(l-o);return c<=s&&u<=s})}}const ZD=`
uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  
  // Add simple wave animation
  vec3 pos = position;
  pos.y += sin(position.x * 2.0 + time) * 0.05;
  pos.y += cos(position.z * 2.0 + time) * 0.05;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,$D=`
precision highp float;  // Add precision qualifier to fix errors

uniform float time;
uniform sampler2D tAtlas;
uniform vec2 uvOffset;
uniform vec2 uvRepeat;
varying vec2 vUv;

void main() {
  // Sample from the atlas with correct UV mapping
  vec2 atlasUv = vec2(
    uvOffset.x + vUv.x * uvRepeat.x,
    uvOffset.y + vUv.y * uvRepeat.y
  );
  
  // Advanced water distortion effect
  float frequency = 0.5;
  float speed = 1.0;
  float amplitude = 0.2;
  float wave = (sin(vUv.x * frequency + time * speed) * amplitude) + tan(vUv.y * 0.1);
  
  vec2 distortedUv = atlasUv;
  distortedUv.y += sin(wave) * 0.05;
  distortedUv.x += cos(wave) * 0.05;
  
  vec4 texColor = texture2D(tAtlas, distortedUv);
  
  // Add blue tint and transparency
  vec4 waterColor = vec4(0.1, 0.5, 0.8, 0.8);
  vec4 finalColor = mix(texColor, waterColor, 0.6);
  finalColor.a = 0.8;  // Set transparency
  
  gl_FragColor = finalColor;
}
`;function ba(n,e){return new ct({uniforms:{time:{value:0},tAtlas:{value:n},uvOffset:{value:new Te(e.offset.x,e.offset.y)},uvRepeat:{value:new Te(e.repeat.x,e.repeat.y)}},vertexShader:ZD,fragmentShader:$D,transparent:!0,depthWrite:!1,side:Lt})}const JD=`
varying vec2 vUv;

void main() {
    vUv = uv;  // The geometry's UV
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,QD=`
uniform sampler2D tAtlas;  // Atlas containing the grayscale texture
uniform vec4 tintColor;    // RGBA color to multiply
varying vec2 vUv;

void main() {
    // Sample the atlas at vUv (which already includes any offset/repeat)
    vec4 texColor = texture2D(tAtlas, vUv);

    // Multiply the sampled color by tintColor
    // (Assumes the texture is grayscale, so R=G=B and it gets "tinted")
    gl_FragColor = texColor * tintColor;
}
`;function Ma(n,e){return new ct({uniforms:{tAtlas:{value:n},tintColor:{value:new ot(e.r,e.g,e.b,e.a||1)}},vertexShader:JD,fragmentShader:QD,transparent:!1,side:Lt})}function qo(n,e){const t=new ct({uniforms:{time:{value:0},tAtlas:{value:n},uvOffset:{value:new Te(e.offset.x,e.offset.y)},uvRepeat:{value:new Te(e.repeat.x,e.repeat.y)},rippleStrength:{value:.3},rippleSpeed:{value:1},rippleScale:{value:10}},vertexShader:`
            varying vec2 vUv;
            uniform float time;
            varying float vFace;
            varying vec3 vPosition;
            
            void main() {
                vUv = uv;
                vPosition = position;

                // Determine which face this vertex belongs to
                // based on normal direction
                vec3 absNormal = abs(normal);
                if(absNormal.x > 0.5) vFace = 0.0; // +/- X face
                else if(absNormal.y > 0.5) vFace = 1.0; // +/- Y face
                else vFace = 2.0; // +/- Z face
                
                // No vertex displacement as requested
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform sampler2D tAtlas;
            uniform float time;
            uniform vec2 uvOffset;
            uniform vec2 uvRepeat;
            varying vec2 vUv;
            varying float vFace;
            varying vec3 vPosition;


            // Number of ripples — keep it small for performance
            const int NUM_RIPPLES = 5;

            // Adds subtle expanding circles that brighten the water
            float rippleEffect(vec2 uv, float time) {
                float brightness = 0.0;

                for (int i = 0; i < NUM_RIPPLES; i++) {
                    // Pseudo-random seed per ripple
                    float seed = float(i) * 13.314;
                    vec2 center = vec2(
                        fract(sin(seed + 12.9898) * 43758.5453),
                        fract(sin(seed + 78.233) * 43758.5453)
                    );

                    // Random start time offset
                    float tOffset = fract(sin(seed + 91.1) * 43758.5453);
                    float localTime = mod(time + tOffset * 10.0, 4.0); // loop every 4s

                    // Animate ripple radius
                    float radius = 1.0 / localTime;
                    float dist = distance(uv, center);

                    // Circle with soft edges
                    float ripple = smoothstep(0.02, 0.0, abs(dist - radius)) * (1.0 - localTime / 4.0);
// Better ripple shape: fading band around the center
ripple = exp(-pow((dist - radius) * 15.0, 2.0)) * (1.0 - localTime / 4.0);

                    brightness += ripple;
                }

                return clamp(brightness, 0.0, 1.0);
              }



            
            void main() {
                // Calculate atlas UVs - FIXED: use the repeat values
                vec2 atlasUv = vec2(
                    uvOffset.x + vUv.x,
                    uvOffset.y + vUv.y
                );
                vec4 texColor = texture2D(tAtlas, atlasUv);
                vec4 baseColor = texture2D(tAtlas, atlasUv);

                float waveX = sin(vPosition.x * 4.0 + time * 2.0);
                float waveZ = cos(vPosition.z * 4.0 + time * 2.0);
                float ripple = (waveX + waveZ) * 0.5;  // wave amplitude = 0.1

                // ---------------------------------------------------------------
                // 3) Water color tint: mix in some bluish/greenish color
                // ---------------------------------------------------------------
                vec3 waterTint = vec3(0.0, 0.4, 0.6);
                // Mix the base color with a water tint (adjust to taste).
                // Factor in the ripple to vary how strong the tint gets over time.
                vec3 waterColor = mix(baseColor.rgb, waterTint, 0.4 + ripple * 0.5);


                
                float rippleHighlight = rippleEffect(vUv, time);
                vec3 finalColor = waterColor + rippleHighlight * 0.2; // brighten water locally
                
                gl_FragColor = vec4(finalColor, texColor.a); 
                //gl_FragColor = vec4(vec3(time, time, time), texColor.a); 
            }
        `,transparent:!0,side:Lt});return t.update=function(s){this.uniforms.time.value+=s},t}(import.meta.main||typeof import.meta.url=="string"&&import.meta.url===window.location.href.replace("file://","").replace(/\/index.html.*$/,"/shader.js"))&&(console.log("Running shader.js as standalone - creating demo scene"),eP());function eP(){const n=new el;n.background=new Ae(11184895);const e=new Ft(75,window.innerWidth/window.innerHeight,.1,100);e.position.set(2,2,5),e.lookAt(0,0,0);const t=new cl;t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const s={offset:new Te(0,0),repeat:new Te(1,1)},i=new ft,o=qo(i,s),r=new es(1,1,1),a=new lt(r,o);n.add(a);const l=new es(2,1,1);l.translate(0,0,2),n.add(new lt(l,o));const c=new es(3,1,1);c.translate(0,0,4),n.add(new lt(c,o));const u=new es(4,1,1);u.translate(0,0,6),n.add(new lt(u,o));const _=new sl(16777215,1);_.position.set(1,2,3),n.add(_);const h=new nl(16777215,.5);n.add(h),new Gw().load("public/textures/ice.png",function(f){console.log("Texture loaded successfully"),f.wrapS=f.wrapT=hn,f.repeat.set(1,1),o.uniforms.tAtlas.value=f});const g=new yi;function m(){requestAnimationFrame(m),o.update(g.getDelta()),t.render(n,e)}m()}class tP{constructor(e,t){wi(this,"_createGeometryCollections",()=>{const e={[Ue.STANDARD]:this._createEmptyCollection(),[Ue.MULTI_SIDED]:this._createEmptyCollection(),[Ue.CROSS]:this._createEmptyCollection(),[Ue.TINTED]:this._createEmptyCollection()};return Object.keys(this.blockRegistry.specialBlocks).forEach(t=>{e[t]=this._createEmptyCollection()}),e.tintedByTexture={},e});this.textureManager=e,this.blockRegistry=t,this.specialMeshes={},this.chunkMeshes=new Map,this.cubeSize=1,this.cubeGeometry=new es(this.cubeSize,this.cubeSize,this.cubeSize),this.useAdvancedWaterShader=!0}buildMeshes(e,t){const s=this._createGeometryCollections();return this._processBlocks(e,s),this._createMeshes(s,t)}buildChunkMesh(e,t,s,i,o=16){const r=this._createGeometryCollections(),a=s*o,l=i*o;this._processChunkBlocks(e,r,a,l);const c=this._createMeshes(r,t,s,i);return this.chunkMeshes.set(`${s},${i}`,c),c}buildAllChunkMeshes(e,t,s,i,o){this._removeAllChunkMeshes(t);const r=o!==void 0?e.getChunks(s,i,o):e.getChunks(),a=[];for(const[l,c]of r){const[u,_]=l.split(",").map(Number),h=this.buildChunkMesh(c,t,u,_,e.chunkSize);a.push(...h)}return a}_removeAllChunkMeshes(e){for(const[t,s]of this.chunkMeshes.entries())s.forEach(i=>{e&&e.remove(i)});this.chunkMeshes.clear(),this.specialMeshes={}}removeAllChunkMeshes(e){this._removeAllChunkMeshes(e)}createWaterMaterial(e){return ba(this.textureManager.atlasTexture,{offset:{x:e.offset.x,y:e.offset.y},repeat:{x:e.repeat.x,y:e.repeat.y}})}createAdvancedWaterMaterial(e){return qo(this.textureManager.atlasTexture,{offset:{x:e.offset.x,y:e.offset.y},repeat:{x:e.repeat.x,y:e.repeat.y}})}createTintMaterial(e){return Ma(this.textureManager.atlasTexture,new Ae(e.r,e.g,e.b))}removeChunkMesh(e,t,s){const i=`${t},${s}`;this.chunkMeshes.has(i)&&(this.chunkMeshes.get(i).forEach(r=>{e&&e.remove(r)}),this.chunkMeshes.delete(i))}updateVisibleChunks(e,t,s,i,o){if(!o)return;const r=Math.floor(s/e.chunkSize),a=Math.floor(i/e.chunkSize);for(const[l,c]of this.chunkMeshes.entries()){const[u,_]=l.split(",").map(Number),h=Math.abs(u-r),d=Math.abs(_-a);(h>o||d>o)&&(c.forEach(g=>t.remove(g)),this.chunkMeshes.delete(l))}for(let l=r-o;l<=r+o;l++)for(let c=a-o;c<=a+o;c++){const u=`${l},${c}`;if(!this.chunkMeshes.has(u)&&e.chunks.has(u)){const _=e.chunks.get(u);this.buildChunkMesh(_,t,l,c,e.chunkSize)}}}_processChunkBlocks(e,t,s,i){const o=this._getDirections();for(let r in e.worldData){if(!e.worldData.hasOwnProperty(r))continue;const[a,l,c]=r.split(",").map(Number),u=e.worldData[r];if(!u)continue;const _=a+s,h=c+i,{blockType:d,textureType:g}=u,m=t[d];if(m){if(d===Ue.CROSS){this._buildCrossBlock(m,_,l,h,g);continue}for(let f in o){const p=o[f],E=a+p.neighbor[0],y=l+p.neighbor[1],S=c+p.neighbor[2],D=E<0||E>=16||S<0||S>=16;let A=null;if(!D){const q=`${E},${y},${S}`;A=e.worldData[q]}if(A&&!(this.blockRegistry.isSpecialBlock(d)||d===Ue.MULTI_SIDED)&&A.blockType!==d)continue;let P;if(d===Ue.STANDARD)P=this.textureManager.getTexture(g);else if(d===Ue.MULTI_SIDED){const q=u.blockName;let N;switch(f){case"py":N=st.TOP;break;case"ny":N=st.BOTTOM;break;default:N=st.SIDES}const J=this.blockRegistry.getTextureForFace(q,N);if(P=this.textureManager.getTexture(J),!P)continue}else d===Ue.WATER&&(P=this.textureManager.getTexture("acacia_door_bottom")||Object.values(this.textureManager.textureCache)[0]);if(!P)continue;const M=p.positions.map(q=>[q[0]+_,q[1]+l,q[2]+h]),v=new Array(4).fill(p.normal),w=P.offset.x,B=P.offset.y,k=P.repeat.x,W=P.repeat.y,j=p.uv.map(([q,N])=>[w+q*k,B+N*W]);let H=g;if(d===Ue.MULTI_SIDED){const q=u.blockName;let N;switch(f){case"py":N=st.TOP;break;case"ny":N=st.BOTTOM;break;default:N=st.SIDES}H=this.blockRegistry.getTextureForFace(q,N)}if(this.blockRegistry.isTintedTexture(H)){const q=this.blockRegistry.getTintColor(H),N=`${q.r},${q.g},${q.b}`;t.tintedByTexture[N]||(t.tintedByTexture[N]={color:q,collection:this._createEmptyCollection()}),this._pushFace(t.tintedByTexture[N].collection,M,v,j)}else this._pushFace(m,M,v,j)}}}}update(e){if(this.specialMeshes[Ue.WATER]){const t=this.specialMeshes[Ue.WATER];t.material&&t.material.uniforms&&(t.material.uniforms.time.value+=e)}if(this.specialMeshes.tinted)for(const t of this.specialMeshes.tinted)t.material&&t.material.uniforms&&t.material.uniforms.time&&(t.material.uniforms.time.value+=e);for(const[t,s]of Object.entries(this.specialMeshes))if(t.includes(",")){if(s[Ue.WATER]){const i=s[Ue.WATER];i.material&&i.material.uniforms&&(i.material.uniforms.time.value+=e)}if(s.tinted)for(const i of s.tinted)i.material&&i.material.uniforms&&i.material.uniforms.time&&(i.material.uniforms.time.value+=e)}}_getDirections(){return{px:{neighbor:[1,0,0],positions:[[1,1,1],[1,0,1],[1,0,0],[1,1,0]],normal:[1,0,0],uv:[[0,1],[0,0],[1,0],[1,1]]},nx:{neighbor:[-1,0,0],positions:[[0,1,0],[0,0,0],[0,0,1],[0,1,1]],normal:[-1,0,0],uv:[[1,1],[1,0],[0,0],[0,1]]},py:{neighbor:[0,1,0],positions:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],normal:[0,1,0],uv:[[0,1],[1,1],[1,0],[0,0]]},ny:{neighbor:[0,-1,0],positions:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],normal:[0,-1,0],uv:[[0,0],[1,0],[1,1],[0,1]]},pz:{neighbor:[0,0,1],positions:[[1,1,1],[0,1,1],[0,0,1],[1,0,1]],normal:[0,0,1],uv:[[1,1],[0,1],[0,0],[1,0]]},nz:{neighbor:[0,0,-1],positions:[[0,1,0],[1,1,0],[1,0,0],[0,0,0]],normal:[0,0,-1],uv:[[0,1],[1,1],[1,0],[0,0]]}}}_createEmptyCollection(){return{positions:[],normals:[],uvs:[],indices:[],currentIndex:0}}_processBlocks(e,t){const s={px:{neighbor:[1,0,0],positions:[[1,1,1],[1,0,1],[1,0,0],[1,1,0]],normal:[1,0,0],uv:[[0,1],[0,0],[1,0],[1,1]]},nx:{neighbor:[-1,0,0],positions:[[0,1,0],[0,0,0],[0,0,1],[0,1,1]],normal:[-1,0,0],uv:[[1,1],[1,0],[0,0],[0,1]]},py:{neighbor:[0,1,0],positions:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],normal:[0,1,0],uv:[[0,1],[1,1],[1,0],[0,0]]},ny:{neighbor:[0,-1,0],positions:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],normal:[0,-1,0],uv:[[0,0],[1,0],[1,1],[0,1]]},pz:{neighbor:[0,0,1],positions:[[1,1,1],[0,1,1],[0,0,1],[1,0,1]],normal:[0,0,1],uv:[[1,1],[0,1],[0,0],[1,0]]},nz:{neighbor:[0,0,-1],positions:[[0,1,0],[1,1,0],[1,0,0],[0,0,0]],normal:[0,0,-1],uv:[[0,1],[1,1],[1,0],[0,0]]}};for(let i in e.worldData){if(!e.worldData.hasOwnProperty(i))continue;const[o,r,a]=i.split(",").map(Number),l=e.worldData[i];if(!l)continue;const{blockType:c,textureType:u}=l,_=t[c];if(_){if(c===Ue.CROSS){this._buildCrossBlock(_,o,r,a,u);continue}for(let h in s){const d=s[h],g=[o+d.neighbor[0],r+d.neighbor[1],a+d.neighbor[2]].join(","),m=e.worldData[g];if(m&&!(this.blockRegistry.isSpecialBlock(c)||c===Ue.MULTI_SIDED)&&m.blockType!==c)continue;let p;if(c===Ue.STANDARD)p=this.textureManager.getTexture(u);else if(c===Ue.MULTI_SIDED){const v=l.blockName;let w;switch(h){case"py":w=st.TOP;break;case"ny":w=st.BOTTOM;break;default:w=st.SIDES}const B=this.blockRegistry.getTextureForFace(v,w);if(p=this.textureManager.getTexture(B),!p)continue}else c===Ue.WATER&&(p=this.textureManager.getTexture("acacia_door_bottom")||Object.values(this.textureManager.textureCache)[0]);if(!p)continue;const E=d.positions.map(v=>[v[0]+o,v[1]+r,v[2]+a]),y=new Array(4).fill(d.normal),S=p.offset.x,D=p.offset.y,A=p.repeat.x,C=p.repeat.y,P=d.uv.map(([v,w])=>[S+v*A,D+w*C]);let M=u;if(c===Ue.MULTI_SIDED){const v=l.blockName;let w;switch(h){case"py":w=st.TOP;break;case"ny":w=st.BOTTOM;break;default:w=st.SIDES}M=this.blockRegistry.getTextureForFace(v,w)}if(this.blockRegistry.isTintedTexture(M)){const v=this.blockRegistry.getTintColor(M),w=`${v.r},${v.g},${v.b}`;t.tintedByTexture[w]||(t.tintedByTexture[w]={color:v,collection:this._createEmptyCollection()}),this._pushFace(t.tintedByTexture[w].collection,E,y,P)}else this._pushFace(_,E,y,P)}}}}_pushFace(e,t,s,i){for(let o=0;o<4;o++)e.positions.push(...t[o]),e.normals.push(...s[o]),e.uvs.push(...i[o]);e.indices.push(e.currentIndex,e.currentIndex+1,e.currentIndex+2,e.currentIndex+2,e.currentIndex+3,e.currentIndex),e.currentIndex+=4}_createMeshes(e,t,s,i){const o=[],r=new on;s!==void 0&&i!==void 0&&(r.userData={isChunk:!0,chunkX:s,chunkZ:i,key:`${s},${i}`});const a=e[Ue.CROSS];if(a.positions.length>0){console.log("Building cross geometry with",a.positions.length/3,"vertices");const u=new yt;u.setIndex(new ke(new Uint32Array(a.indices),1)),u.setAttribute("position",new ke(new Float32Array(a.positions),3)),u.setAttribute("normal",new ke(new Float32Array(a.normals),3)),u.setAttribute("uv",new ke(new Float32Array(a.uvs),2)),u.computeBoundingSphere();const _=new Dn({map:this.textureManager.atlasTexture,alphaTest:.5,side:Lt,metalness:0,roughness:1,transparent:!0,depthWrite:!1}),h=new lt(u,_);h.receiveShadow=!1,h.castShadow=!1,r.add(h),o.push(h)}const l=e[Ue.STANDARD];if(l.positions.length>0){const u=new yt;u.setIndex(new ke(new Uint32Array(l.indices),1)),u.setAttribute("position",new ke(new Float32Array(l.positions),3)),u.setAttribute("normal",new ke(new Float32Array(l.normals),3)),u.setAttribute("uv",new ke(new Float32Array(l.uvs),2)),u.computeBoundingSphere();const _=new Dn({map:this.textureManager.atlasTexture,metalness:0,roughness:1}),h=new lt(u,_);h.receiveShadow=!0,h.castShadow=!0,r.add(h),o.push(h)}const c=e[Ue.MULTI_SIDED];if(c&&c.positions.length>0){const u=new yt;u.setIndex(new ke(new Uint32Array(c.indices),1)),u.setAttribute("position",new ke(new Float32Array(c.positions),3)),u.setAttribute("normal",new ke(new Float32Array(c.normals),3)),u.setAttribute("uv",new ke(new Float32Array(c.uvs),2)),u.computeBoundingSphere();const _=new Dn({map:this.textureManager.atlasTexture,metalness:0,roughness:1,transparent:!0,side:Lt}),h=new lt(u,_);h.receiveShadow=!0,h.castShadow=!0,r.add(h),o.push(h)}for(let u in this.blockRegistry.specialBlocks){const _=e[u];if(_.positions.length===0)continue;const h=new yt;h.setIndex(new ke(new Uint32Array(_.indices),1)),h.setAttribute("position",new ke(new Float32Array(_.positions),3)),h.setAttribute("normal",new ke(new Float32Array(_.normals),3)),h.setAttribute("uv",new ke(new Float32Array(_.uvs),2)),h.computeBoundingSphere();let d;if(u===Ue.WATER){const m=this.textureManager.getTexture("packed_ice");this.useAdvancedWaterShader?d=qo(this.textureManager.atlasTexture,{offset:{x:m.offset.x,y:m.offset.y},repeat:{x:m.repeat.x,y:m.repeat.y}}):d=ba(this.textureManager.atlasTexture,{offset:{x:m.offset.x,y:m.offset.y},repeat:{x:m.repeat.x,y:m.repeat.y}})}const g=new lt(h,d);if(g.receiveShadow=!0,s!==void 0&&i!==void 0){const m=`${s},${i}`;this.specialMeshes[m]||(this.specialMeshes[m]={}),this.specialMeshes[m][u]=g}else this.specialMeshes[u]=g;r.add(g),o.push(g)}for(const u in e.tintedByTexture){const{color:_,collection:h}=e.tintedByTexture[u];if(h.positions.length===0)continue;const d=new yt;d.setIndex(new ke(new Uint32Array(h.indices),1)),d.setAttribute("position",new ke(new Float32Array(h.positions),3)),d.setAttribute("normal",new ke(new Float32Array(h.normals),3)),d.setAttribute("uv",new ke(new Float32Array(h.uvs),2)),d.computeBoundingSphere();const g=Ma(this.textureManager.atlasTexture,new Ae(_.r,_.g,_.b)),m=new lt(d,g);if(m.receiveShadow=!0,m.castShadow=!0,s!==void 0&&i!==void 0){const f=`${s},${i}`;this.specialMeshes[f]||(this.specialMeshes[f]={}),this.specialMeshes[f].tinted||(this.specialMeshes[f].tinted=[]),this.specialMeshes[f].tinted.push(m)}else this.specialMeshes.tinted||(this.specialMeshes.tinted=[]),this.specialMeshes.tinted.push(m);r.add(m),o.push(m)}return t.add(r),s!==void 0&&i!==void 0&&o.push(r),o}_buildCrossBlock(e,t,s,i,o){console.log("Building cross block at",t,s,i,"with texture",o),(!o||o==="undefined")&&(o="poppy");const r=this.textureManager.getTexture(o);if(!r){console.warn("Texture not found for cross block:",o);return}const a=.4,l=s,c=s+1,u=t+.5,_=i+.5,h=[u-a,l,_-a],d=[u+a,l,_+a],g=[u+a,c,_+a],m=[u-a,c,_-a],f=[u-a,l,_+a],p=[u+a,l,_-a],E=[u+a,c,_-a],y=[u-a,c,_+a];this._pushQuad(e,[h,d,g,m],r),this._pushQuad(e,[f,p,E,y],r)}_pushQuad(e,t,s){const i=[0,1,0],{offset:o,repeat:r}=s,a=[o.x,o.y],l=[o.x+r.x,o.y],c=[o.x+r.x,o.y+r.y],u=[o.x,o.y+r.y],_=e.currentIndex;for(let h=0;h<4;h++){const d=t[h],g=i;let m;h===0?m=a:h===1?m=l:h===2?m=c:h===3&&(m=u),e.positions.push(...d),e.normals.push(...g),e.uvs.push(...m)}e.indices.push(_,_+1,_+2,_+2,_+3,_),e.currentIndex+=4}}function sP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var so={exports:{}},ya;function nP(){return ya||(ya=1,function(n){(function(e){function t(c){function u(_,h,d){this.x=_,this.y=h,this.z=d}u.prototype.dot2=function(_,h){return this.x*_+this.y*h},u.prototype.dot3=function(_,h,d){return this.x*_+this.y*h+this.z*d},this.grad3=[new u(1,1,0),new u(-1,1,0),new u(1,-1,0),new u(-1,-1,0),new u(1,0,1),new u(-1,0,1),new u(1,0,-1),new u(-1,0,-1),new u(0,1,1),new u(0,-1,1),new u(0,1,-1),new u(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(c||0)}t.prototype.seed=function(c){c>0&&c<1&&(c*=65536),c=Math.floor(c),c<256&&(c|=c<<8);for(var u=this.p,_=0;_<256;_++){var h;_&1?h=u[_]^c&255:h=u[_]^c>>8&255;var d=this.perm,g=this.gradP;d[_]=d[_+256]=h,g[_]=g[_+256]=this.grad3[h%12]}};var s=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,o=1/3,r=1/6;t.prototype.simplex2=function(c,u){var _,h,d,g=(c+u)*s,m=Math.floor(c+g),f=Math.floor(u+g),p=(m+f)*i,E=c-m+p,y=u-f+p,S,D;E>y?(S=1,D=0):(S=0,D=1);var A=E-S+i,C=y-D+i,P=E-1+2*i,M=y-1+2*i;m&=255,f&=255;var v=this.perm,w=this.gradP,B=w[m+v[f]],k=w[m+S+v[f+D]],W=w[m+1+v[f+1]],j=.5-E*E-y*y;j<0?_=0:(j*=j,_=j*j*B.dot2(E,y));var H=.5-A*A-C*C;H<0?h=0:(H*=H,h=H*H*k.dot2(A,C));var q=.5-P*P-M*M;return q<0?d=0:(q*=q,d=q*q*W.dot2(P,M)),70*(_+h+d)},t.prototype.simplex3=function(c,u,_){var h,d,g,m,f=(c+u+_)*o,p=Math.floor(c+f),E=Math.floor(u+f),y=Math.floor(_+f),S=(p+E+y)*r,D=c-p+S,A=u-E+S,C=_-y+S,P,M,v,w,B,k;D>=A?A>=C?(P=1,M=0,v=0,w=1,B=1,k=0):D>=C?(P=1,M=0,v=0,w=1,B=0,k=1):(P=0,M=0,v=1,w=1,B=0,k=1):A<C?(P=0,M=0,v=1,w=0,B=1,k=1):D<C?(P=0,M=1,v=0,w=0,B=1,k=1):(P=0,M=1,v=0,w=1,B=1,k=0);var W=D-P+r,j=A-M+r,H=C-v+r,q=D-w+2*r,N=A-B+2*r,J=C-k+2*r,ne=D-1+3*r,he=A-1+3*r,ye=C-1+3*r;p&=255,E&=255,y&=255;var Ie=this.perm,X=this.gradP,te=X[p+Ie[E+Ie[y]]],ue=X[p+P+Ie[E+M+Ie[y+v]]],se=X[p+w+Ie[E+B+Ie[y+k]]],ve=X[p+1+Ie[E+1+Ie[y+1]]],we=.5-D*D-A*A-C*C;we<0?h=0:(we*=we,h=we*we*te.dot3(D,A,C));var ge=.5-W*W-j*j-H*H;ge<0?d=0:(ge*=ge,d=ge*ge*ue.dot3(W,j,H));var qe=.5-q*q-N*N-J*J;qe<0?g=0:(qe*=qe,g=qe*qe*se.dot3(q,N,J));var Be=.5-ne*ne-he*he-ye*ye;return Be<0?m=0:(Be*=Be,m=Be*Be*ve.dot3(ne,he,ye)),32*(h+d+g+m)};function a(c){return c*c*c*(c*(c*6-15)+10)}function l(c,u,_){return(1-_)*c+_*u}t.prototype.perlin2=function(c,u){var _=Math.floor(c),h=Math.floor(u);c=c-_,u=u-h,_=_&255,h=h&255;var d=this.perm,g=this.gradP,m=g[_+d[h]].dot2(c,u),f=g[_+d[h+1]].dot2(c,u-1),p=g[_+1+d[h]].dot2(c-1,u),E=g[_+1+d[h+1]].dot2(c-1,u-1),y=a(c);return l(l(m,p,y),l(f,E,y),a(u))},t.prototype.perlin3=function(c,u,_){var h=Math.floor(c),d=Math.floor(u),g=Math.floor(_);c=c-h,u=u-d,_=_-g,h=h&255,d=d&255,g=g&255;var m=this.perm,f=this.gradP,p=f[h+m[d+m[g]]].dot3(c,u,_),E=f[h+m[d+m[g+1]]].dot3(c,u,_-1),y=f[h+m[d+1+m[g]]].dot3(c,u-1,_),S=f[h+m[d+1+m[g+1]]].dot3(c,u-1,_-1),D=f[h+1+m[d+m[g]]].dot3(c-1,u,_),A=f[h+1+m[d+m[g+1]]].dot3(c-1,u,_-1),C=f[h+1+m[d+1+m[g]]].dot3(c-1,u-1,_),P=f[h+1+m[d+1+m[g+1]]].dot3(c-1,u-1,_-1),M=a(c),v=a(u),w=a(_);return l(l(l(p,D,M),l(E,A,M),w),l(l(y,C,M),l(S,P,M),w),v)},e.Noise=t})(n.exports)}(so)),so.exports}var _l=nP();const Mt={AIR:0,GRASS:1,DIRT:2,STONE:3,WATER:4,POPPY:5};class Sa{constructor(e=Math.random()){this.noise=new _l.Noise(e),this.seed=e,this.seaLevel=10,this.minHeight=0,this.maxHeight=20,this.heightFreq=30,this.heightAmp=100,this.caveFreq=0,this.caveThreshold=0}getHeight(e,t){let s=0;const i=4,o=.5;let r=.01,a=10;for(let c=0;c<i;c++)s+=this.noise.perlin2(e*r,t*r)*a,r*=2,a*=o;return Math.floor(this.seaLevel+s)}generateChunk(e,t,s){let o=[];for(let r=0;r<s;r++){o[r]=[];for(let a=0;a<s;a++)o[r][a]=new Array(20).fill(Mt.AIR)}for(let r=0;r<s;r++)for(let a=0;a<s;a++){const l=e*s+r,c=t*s+a,u=(l+c)%2===0,_=5;o[r][a][_]=u?Mt.GRASS:Mt.STONE,u&&(o[r][a][_+1]=Mt.POPPY,console.log(`Placed poppy at ${l},${_+1},${c}`))}return o}placeStructures(e,t,s,i,o){for(let r=1;r<i-1;r++)for(let a=1;a<i-1;a++){const l=t*i+r,c=s*i+a;let u=-1;for(let d=o-1;d>=0;d--)if(e[r][a][d]!==Mt.AIR&&e[r][a][d]!==Mt.WATER){u=d;break}if(u===-1)continue;this.noise.perlin2(l*.2,c*.2)>.6&&e[r][a][u]===Mt.GRASS&&this.generateStoneTree(e,r,u+1,a,o),this.noise.perlin2(l*.05,c*.05)>.85&&this.isFlatArea(e,r,a,u)&&this.generateCastle(e,r,u+1,a,i,o)}}isFlatArea(e,t,s,i){let o=!0;for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)if(e[t+r]&&e[t+r][s+a]){let l=-1;const c=e[t+r][s+a];for(let u=c.length-1;u>=0;u--)if(c[u]!==Mt.AIR&&c[u]!==Mt.WATER){l=u;break}l!==i&&(o=!1)}return o}}const Ea={AIR:0,STONE:1};class iP{constructor(e=Math.random()){this.noise=new _l.Noise(e),this.seed=e,this.seaLevel=12,this.heightScale=10,this.noiseScale=.02,this.mountainNoiseScale=.005}getHeight(e,t){const s=this.noise.perlin2(e*this.noiseScale,t*this.noiseScale),i=this.noise.perlin2(e*this.mountainNoiseScale,t*this.mountainNoiseScale),r=(s*.5+.5)*(i*.5+.5)*2;return Math.floor(this.seaLevel+r*this.heightScale)}generateChunk(e,t,s){const i=this.seaLevel+this.heightScale*2,o=[];for(let r=0;r<s;r++){o[r]=[];for(let a=0;a<s;a++){o[r][a]=new Array(i).fill(Ea.AIR);const l=e*s+r,c=t*s+a;this.getHeight(l,c);for(let u=0;u<i;u++)u===0&&(o[r][a][u]=Ea.STONE)}}return o}}const Pt={PERLIN:"perlin",DENSITY:"density",DEMO:"demo"},no={[Pt.PERLIN]:{[Mt.AIR]:null,[Mt.GRASS]:"grass_block",[Mt.DIRT]:"dirt",[Mt.STONE]:"stone",[Mt.WATER]:"water",5:"poppy"}};class Ta{static createGenerator(e=Pt.PERLIN,t=Math.random()){let s,i;switch(e){case Pt.DENSITY:s=new AdvancedDensityTerrain(t),i=no[Pt.DENSITY];break;case Pt.DEMO:s=new iP(t),i=no[Pt.PERLIN];break;case Pt.PERLIN:default:s=new Sa(t),i=no[Pt.PERLIN];break}return{generator:s,blockMapping:i}}static generateTerrain(e,t,s,i){if(e instanceof Sa)return generateTerrain(e,t,s,i);if(e instanceof AdvancedDensityTerrain)return generateTerrain(e,t,s,i);const o={};for(let r=0;r<t;r++)for(let a=0;a<s;a++){const l=`${r},${a}`;o[l]=e.generateChunk(r,a,i)}return o}}class wa{constructor(e,t,s=16){this.terrainGen=e,this.blockNameMap=t,this.workerCount=Math.min(s,navigator.hardwareConcurrency||16),this.workers=[],this.pendingRequests=new Map,this.requestIdCounter=0,this.isInitialized=!1,this.initPromise=null,this._createWorkers()}async initialize(){return this.isInitialized?Promise.resolve():this.initPromise?this.initPromise:(this.initPromise=new Promise((e,t)=>{let s=0;const i=()=>{s++,s===this.workers.length&&(this.isInitialized=!0,e())};this.workers.forEach(o=>{const r=o.onmessage;o.onmessage=a=>{a.data.type==="initialized"?(i(),o.onmessage=r):r(a)},o.postMessage({type:"init",data:{seed:this.terrainGen.seed,params:{seaLevel:this.terrainGen.seaLevel,minHeight:this.terrainGen.minHeight,maxHeight:this.terrainGen.maxHeight,heightFreq:this.terrainGen.heightFreq,heightAmp:this.terrainGen.heightAmp,caveFreq:this.terrainGen.caveFreq,caveThreshold:this.terrainGen.caveThreshold},noiseLib:!0}})}),setTimeout(()=>{this.isInitialized||t(new Error("Worker initialization timed out"))},5e3)}),this.initPromise)}async generateChunk(e,t,s){return this.isInitialized||await this.initialize(),new Promise((i,o)=>{const r=this._getNextRequestId();this.pendingRequests.set(r,{resolve:i,reject:o}),this._getLeastBusyWorker().postMessage({type:"generateChunk",data:{chunkX:e,chunkZ:t,chunkSize:s,requestId:r,debug_more_poppies:!0}})})}_createWorkers(){this.workers.forEach(e=>e.terminate()),this.workers=[];for(let e=0;e<this.workerCount;e++){const t=new Worker(new URL("/voxel/assets/chunkWorker-C7rx3fH2.js",import.meta.url),{type:"module"});t.onmessage=s=>{const{type:i,data:o}=s.data;switch(i){case"chunkGenerated":const r=this.pendingRequests.get(o.requestId);r&&(r.resolve({chunkX:o.chunkX,chunkZ:o.chunkZ,chunkData:o.chunkData,generationTime:o.generationTime}),this.pendingRequests.delete(o.requestId));break;case"error":const a=this.pendingRequests.get(o.requestId);a&&(a.reject(new Error(o.message)),this.pendingRequests.delete(o.requestId));break;default:console.error("Unknown message type from worker:",i)}},t.pendingRequests=0,this.workers.push(t)}}_getNextRequestId(){return++this.requestIdCounter}_getLeastBusyWorker(){let e=this.workers[0],t=e.pendingRequests;for(let s=1;s<this.workers.length;s++){const i=this.workers[s];i.pendingRequests<t&&(e=i,t=i.pendingRequests)}return e.pendingRequests++,e}shutdown(){this.workers.forEach(e=>e.terminate()),this.workers=[],this.pendingRequests.clear(),this.isInitialized=!1,this.initPromise=null}}class oP{constructor(e,t,s=Pt.PERLIN){this.scene=e,this.blockRegistry=new jD(t),this.worldData=new ul(this.blockRegistry),this.chunkManager=new KD(this.blockRegistry,12),this.meshBuilder=new tP(t,this.blockRegistry),this.meshes=[],this.clock=new yi,this.viewDistance=5,this.terrainType=s;const{generator:i,blockMapping:o}=Ta.createGenerator(s,12345);this.terrainGen=i,this.BLOCK_NAME_MAP=o,this.chunkGenManager=new wa(this.terrainGen,this.BLOCK_NAME_MAP),this.textureManager=t,this.chunkQueue=[],this.isProcessingChunkQueue=!1,this.geometryQueue=[],this.geometryStats={totalBuilds:0,workerTime:0,mainThreadTime:0},this.chunksBeingGenerated=new Set,this.chunksBeingBuilt=new Set,Promise.all([this.chunkGenManager.initialize()]).catch(r=>{console.error("Failed to initialize workers:",r)})}setTerrainType(e){if(this.terrainType===e)return;const{generator:t,blockMapping:s}=Ta.createGenerator(e,12345);return this.chunkGenManager.shutdown(),this.terrainGen=t,this.BLOCK_NAME_MAP=s,this.terrainType=e,this.chunkManager.chunks.clear(),this.meshBuilder.removeAllChunkMeshes(this.scene),this.chunkGenManager=new wa(this.terrainGen,this.BLOCK_NAME_MAP),this.chunkQueue=[],this.isProcessingChunkQueue=!1,this.chunksBeingGenerated=new Set,this.chunksBeingBuilt=new Set,this.geometryQueue=[],this.geometryStats={totalBuilds:0,workerTime:0,mainThreadTime:0},Promise.all([this.chunkGenManager.initialize()]).catch(i=>{console.error("Failed to initialize workers:",i)}),this.terrainType}initializeTerrain(e=4){for(let i=0-e;i<=0+e;i++)for(let o=0-e;o<=0+e;o++)this.generateChunk(i,o)}async generateChunk(e,t){const s=`${e},${t}`;if(this.chunkManager.chunks.has(s)||this.chunksBeingGenerated.has(s))return s;this.chunksBeingGenerated.add(s);try{const i=this.chunkManager.chunkSize;return this.chunkQueue.push({chunkX:e,chunkZ:t,key:s}),this.isProcessingChunkQueue||this._processChunkQueue(),s}catch(i){return console.error(`Error generating chunk at ${e},${t}:`,i),this.chunksBeingGenerated.delete(s),null}}async _processChunkQueue(){if(!this.isProcessingChunkQueue){for(this.isProcessingChunkQueue=!0;this.chunkQueue.length>0;){const{chunkX:e,chunkZ:t,key:s}=this.chunkQueue.shift();try{const i=await this.chunkGenManager.generateChunk(e,t,this.chunkManager.chunkSize);this._processGeneratedChunkData(e,t,i.chunkData,i.generationTime),this.chunksBeingGenerated.delete(s)}catch(i){console.error(`Error processing chunk at ${e},${t}:`,i),this.chunksBeingGenerated.delete(s)}}this.isProcessingChunkQueue=!1}}_processGeneratedChunkData(e,t,s,i){this.generationStats||(this.generationStats={totalChunks:0,totalTime:0,maxTime:0,minTime:Number.MAX_SAFE_INTEGER}),i&&(this.generationStats.totalChunks++,this.generationStats.totalTime+=i,this.generationStats.maxTime=Math.max(this.generationStats.maxTime,i),this.generationStats.minTime=Math.min(this.generationStats.minTime,i)),this.chunkManager.chunkSize;const o=s.length,r=s[0][0].length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)for(let c=0;c<r;c++){const u=s[a][l][c];if(u!==Mt.AIR){const _=e*o+a,h=t*o+l,d=c,g=this.BLOCK_NAME_MAP[u];if(g){let m;u===Mt.WATER?m=Ue.WATER:g==="grass_block"?m=Ue.MULTI_SIDED:g==="poppy"||u===5?(m=Ue.CROSS,console.log("Creating CROSS block (poppy) at",_,d,h)):m=Ue.STANDARD,this.chunkManager.setBlock(_,d,h,m,g)}}}return this.scene&&this.rebuildChunkMesh(e,t),`${e},${t}`}async ensureChunksExist(e,t,s=1){const i=this.chunkManager.chunkSize,o=Math.floor(e/i),r=Math.floor(t/i),a=[];for(let l=o-s;l<=o+s;l++)for(let c=r-s;c<=r+s;c++){const u=`${l},${c}`,_=Math.abs(l-o),h=Math.abs(c-r),d=s-Math.max(_,h);this.chunkManager.chunks.has(u)||this.chunksBeingGenerated.has(u)||a.push({x:l,z:c,priority:d})}return a.sort((l,c)=>c.priority-l.priority),a.forEach(({x:l,z:c})=>{this.generateChunk(l,c)}),a.length}addWaterFeature(e,t,s,i,o,r){for(let a=0;a<i;a++)for(let l=0;l<o;l++)for(let c=0;c<r;c++)this.worldData.setBlock(e+a,t+l,s+c,Ue.WATER,"ice"),this.chunkManager.setBlock(e+a,t+l,s+c,Ue.WATER,"ice")}setBlock(e,t,s,i,o){this.worldData.setBlock(e,t,s,i,o);const{chunkX:r,chunkZ:a}=this.chunkManager.setBlock(e,t,s,i,o);this.rebuildChunkMesh(r,a)}setNamedBlock(e,t,s,i){this.worldData.setNamedBlock(e,t,s,i);const{chunkX:o,chunkZ:r}=this.chunkManager.setNamedBlock(e,t,s,i);this.rebuildChunkMesh(o,r)}hasBlock(e,t,s){return this.chunkManager.hasBlock(e,t,s)}buildCulledMesh(){return this.meshes.forEach(e=>this.scene.remove(e)),this.meshes=this.meshBuilder.buildMeshes(this.worldData,this.scene),this.meshes}buildAllChunkMeshes(e=0,t=0){return this.meshes=this.meshBuilder.buildAllChunkMeshes(this.chunkManager,this.scene,e,t,this.viewDistance),this.meshes}async rebuildChunkMesh(e,t){const s=`${e},${t}`;if(this.chunksBeingBuilt.has(s))return null;this.chunksBeingBuilt.add(s);try{if(this.meshBuilder.removeChunkMesh(this.scene,e,t),!this.chunkManager.getChunk(e,t))return this.chunksBeingBuilt.delete(s),null;const o=performance.now(),a=performance.now()-o;return this.buildStats||(this.buildStats={totalMeshes:0,totalTime:0,maxTime:0,minTime:Number.MAX_SAFE_INTEGER,lastTime:0,workerTime:0,mainThreadTime:0}),this.buildStats.lastMainThreadTime=a,this.chunksBeingBuilt.delete(s),this.meshes}catch(i){return console.error(`Error building chunk mesh at ${e},${t}:`,i),this.chunksBeingBuilt.delete(s),null}}_createMeshesFromGeometryBuffers(e,t,s){const i=[],o=new on;if(o.userData={isChunk:!0,chunkX:t,chunkZ:s,key:`${t},${s}`},e.standard){const r=new yt;r.setAttribute("position",new ke(e.standard.positions,3)),r.setAttribute("normal",new ke(e.standard.normals,3)),r.setAttribute("uv",new ke(e.standard.uvs,2)),r.setIndex(new ke(e.standard.indices,1)),r.computeBoundingSphere();const a=new Dn({map:this.textureManager.atlasTexture,metalness:0,roughness:1}),l=new lt(r,a);l.receiveShadow=!0,l.castShadow=!0,o.add(l),i.push(l)}if(e.water){const r=new yt;r.setAttribute("position",new ke(e.water.positions,3)),r.setAttribute("normal",new ke(e.water.normals,3)),r.setAttribute("uv",new ke(e.water.uvs,2)),r.setIndex(new ke(e.water.indices,1)),r.computeBoundingSphere();const a=this.textureManager.getTexture("packed_ice");let l;this.meshBuilder.useAdvancedWaterShader?l=this.meshBuilder.createAdvancedWaterMaterial(a):l=this.meshBuilder.createWaterMaterial(a);const c=new lt(r,l);c.receiveShadow=!0;const u=`${t},${s}`;this.meshBuilder.specialMeshes[u]||(this.meshBuilder.specialMeshes[u]={}),this.meshBuilder.specialMeshes[u][Ue.WATER]=c,o.add(c),i.push(c)}if(e.tinted)for(const r in e.tinted){const a=e.tinted[r],l=new yt;l.setAttribute("position",new ke(a.positions,3)),l.setAttribute("normal",new ke(a.normals,3)),l.setAttribute("uv",new ke(a.uvs,2)),l.setIndex(new ke(a.indices,1)),l.computeBoundingSphere();const c=this.meshBuilder.createTintMaterial(a.color),u=new lt(l,c);u.receiveShadow=!0,u.castShadow=!0;const _=`${t},${s}`;this.meshBuilder.specialMeshes[_]||(this.meshBuilder.specialMeshes[_]={}),this.meshBuilder.specialMeshes[_].tinted||(this.meshBuilder.specialMeshes[_].tinted=[]),this.meshBuilder.specialMeshes[_].tinted.push(u),o.add(u),i.push(u)}return this.scene.add(o),i.push(o),this.meshBuilder.chunkMeshes.set(`${t},${s}`,i),this.meshes}async updateVisibleChunks(e,t){this.camera={position:{x:e,y:0,z:t}};const s=await this.ensureChunksExist(e,t,this.viewDistance);return s>0&&console.log(`Requested ${s} new chunks`),this.meshBuilder.updateVisibleChunks(this.chunkManager,this.scene,e,t,this.viewDistance),this.chunkQueueStats={requested:s,queued:this.chunkQueue.length,generating:this.chunksBeingGenerated.size},s}setViewDistance(e){this.viewDistance=e}update(e){this.meshBuilder.update(e)}cleanup(){this.chunkGenManager&&this.chunkGenManager.shutdown()}}class rP{constructor(e,t){this.scene=e,this.camera=t,this.renderer=new cl({antialias:!1}),this.renderer.outputColorSpace=At,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.composer=new kD(this.renderer);const s=new ND(this.scene,this.camera);this.composer.addPass(s);const i=window.innerWidth,o=window.innerHeight;this.ssaoPass=new bs(this.scene,this.camera,i,o),this.ssaoPass.kernelRadius=1,this.ssaoPass.minDistance=.005,this.ssaoPass.maxDistance=.1,this.composer.addPass(this.ssaoPass),this.bloomPass=new mn(new Te(i,o),.5,.4,.85),this.composer.addPass(this.bloomPass),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize)}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}render(){this.composer.render()}}class aP{constructor(e,t=null){this.textureManager=e,this.blockRegistry=t,this.debugPanel=null,this.textureList=null,this.textureInfos={},this.selectedTextures={},this.validBlockList=[],this.multiSidedBlocks={},this.visible=!1,this.atlasOverlay=null,this.atlasOverlayCanvas=null,this.atlasOverlayCtx=null,this.atlasOverlayVisible=!1,this.atlasBoxes=[],this.atlasSearchInput=null,this.atlasCountLabel=null,this.atlasFilterText=""}initialize(){this.debugPanel=document.createElement("div"),this.debugPanel.className="debug-panel",this.debugPanel.id="texture-debugger",this.debugPanel.style.position="fixed",this.debugPanel.style.top="10px",this.debugPanel.style.right="10px",this.debugPanel.style.width="300px",this.debugPanel.style.maxHeight="80vh",this.debugPanel.style.overflowY="auto",this.debugPanel.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.debugPanel.style.color="white",this.debugPanel.style.padding="10px",this.debugPanel.style.borderRadius="5px",this.debugPanel.style.fontFamily="monospace",this.debugPanel.style.zIndex="1000",this.debugPanel.style.display="none";const e=document.createElement("div");e.innerHTML="<h2>Texture Debugger</h2>",this.debugPanel.appendChild(e);const t=document.createElement("div");t.style.marginBottom="10px",t.style.fontSize="12px",t.style.color="#aaa",t.innerHTML="F3: Toggle Debugger | F4: Rebuild World",this.debugPanel.appendChild(t);const s=document.createElement("div");s.style.marginBottom="10px";const i=document.createElement("button");i.textContent="Save Configuration",i.style.marginRight="10px",i.addEventListener("click",()=>this.saveTextureConfig()),s.appendChild(i);const o=document.createElement("button");o.textContent="Auto-Filter Invalid",o.style.marginRight="10px",o.addEventListener("click",()=>{const l=document.createElement("div");l.textContent="Filtering textures...",l.style.color="yellow",this.debugPanel.appendChild(l),setTimeout(()=>{this.autoFilterInvalid()},100)}),s.appendChild(o);const r=document.createElement("div");r.style.fontSize="12px",r.style.color="#aaa",r.style.marginTop="5px",r.textContent="Click Auto-Filter to process textures",s.appendChild(r);const a=document.createElement("button");a.textContent="Toggle Atlas Overlay",a.addEventListener("click",()=>this.toggleAtlasOverlay()),s.appendChild(a),this.debugPanel.appendChild(s),this.textureList=document.createElement("div"),this.textureList.style.display="flex",this.textureList.style.flexDirection="column",this.textureList.style.gap="10px",this.debugPanel.appendChild(this.textureList),document.body.appendChild(this.debugPanel),window.addEventListener("keydown",l=>{l.key==="F3"&&this.toggle()})}toggle(){this.visible=!this.visible,this.debugPanel.style.display=this.visible?"block":"none";const e=new CustomEvent("texture-debugger-toggle",{detail:{visible:this.visible}});window.dispatchEvent(e),this.visible&&Object.keys(this.textureInfos).length===0&&this.refreshTextureList()}refreshTextureList(){if(this.textureList.innerHTML="",!this.textureManager.isLoaded){this.textureList.innerHTML="<p>Textures not loaded yet</p>";return}const e=this.textureManager.textureCache;for(const s in e)this.analyzeTexture(s,e[s]);const t=Object.keys(e).sort();for(const s of t){const i=this.textureInfos[s]||{},o=i.isValid!==!1,r=document.createElement("div");r.className="texture-card",r.style.backgroundColor=o?"rgba(0, 100, 0, 0.3)":"rgba(100, 0, 0, 0.3)",r.style.borderRadius="5px",r.style.padding="8px",r.style.cursor="pointer",r.addEventListener("mouseenter",()=>{r.style.boxShadow="0 0 5px rgba(255, 255, 255, 0.5)"}),r.addEventListener("mouseleave",()=>{r.style.boxShadow="none"});const a=document.createElement("div");a.style.width="64px",a.style.height="64px",a.style.margin="0 auto",a.style.backgroundImage=`url(${this.createTexturePreview(s)})`,a.style.backgroundSize="contain",a.style.backgroundRepeat="no-repeat",a.style.backgroundPosition="center",r.appendChild(a);const l=document.createElement("div");l.textContent=s,l.style.textAlign="center",l.style.marginTop="5px",l.style.fontSize="12px",l.style.wordBreak="break-all",r.appendChild(l);const c=document.createElement("div");c.style.fontSize="10px",c.style.color="#aaa",c.style.textAlign="center",c.textContent=i.dimensions||"Unknown",i.transparent&&(c.textContent+=" (Transparent)"),r.appendChild(c);const u=document.createElement("div");u.style.display="flex",u.style.alignItems="center",u.style.justifyContent="center",u.style.marginTop="5px";const _=document.createElement("input");_.type="checkbox",_.checked=o,_.setAttribute("data-texture",s),_.addEventListener("change",d=>{this.textureInfos[s].isValid=d.target.checked});const h=document.createElement("label");if(h.textContent="Valid Block",h.style.fontSize="10px",h.style.marginLeft="5px",u.appendChild(_),u.appendChild(h),r.appendChild(u),o){const d=document.createElement("div");d.style.marginTop="5px";const g=document.createElement("input");g.type="checkbox",g.checked=!!this.multiSidedBlocks[s],g.setAttribute("data-texture",s),g.addEventListener("change",f=>{f.target.checked?this.multiSidedBlocks[s]={top:s,sides:s,bottom:s}:delete this.multiSidedBlocks[s]});const m=document.createElement("label");m.textContent="Multi-sided",m.style.fontSize="10px",m.style.marginLeft="5px",d.appendChild(g),d.appendChild(m),r.appendChild(d)}this.textureList.appendChild(r)}}analyzeTexture(e,t){if(this.textureInfos[e])return this.textureInfos[e];const s={name:e,isValid:!1},i=this.extractTextureCanvas(e);if(!i)return this.textureInfos[e]=s,s;s.dimensions=`${i.width}x${i.height}`,s.transparent=this.detectTransparency(e),this.blockRegistry&&this.blockRegistry.isValidTexture(e)&&(s.isValid=!0);const o=["stone","dirt","grass","sand","planks","log","leaves"];for(const r of o)if(e.includes(r)){s.isValid=!0;break}return s.transparent&&this.isTransparentInCenter(e)&&(s.isValid=!1),(e.includes("ui_")||e.includes("destroy_stage_")||e.includes("fire_")||e.includes("_stem")||e.includes("particle")||e.includes("_stage"))&&(s.isValid=!1),this.textureInfos[e]=s,s}extractTextureCanvas(e,t=64){const s=this.textureManager.getTexture(e);if(!s)return null;const i=this.textureManager.atlasTexture;if(!i||!i.image)return null;const o=document.createElement("canvas"),r=o.getContext("2d");o.width=t,o.height=t;const a=s.offset.x,l=s.offset.y,c=s.repeat.x,u=s.repeat.y,_=i.image.width,h=i.image.height,d=Math.floor(a*_),g=Math.floor(l*h),m=Math.floor(c*_),f=Math.floor(u*h);try{r.drawImage(i.image,d,g,m,f,0,0,t,t)}catch(p){return console.error("Error extracting texture:",p),null}return o}detectTransparency(e){try{const t=this.extractTextureCanvas(e);if(!t)return!1;const o=t.getContext("2d").getImageData(0,0,t.width,t.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<250)return!0;return!1}catch(t){return console.error("Error detecting transparency:",t),!1}}isTransparentInCenter(e){try{const t=this.extractTextureCanvas(e);if(!t)return!1;const s=t.getContext("2d"),i=t.width,o=Math.floor(i*.25),r=Math.floor(i*.25),a=Math.floor(i*.5),l=Math.floor(i*.5),u=s.getImageData(o,r,a,l).data;let _=0,h=a*l;for(let d=3;d<u.length;d+=4)u[d]<200&&_++;return _>h*.5}catch(t){return console.error("Error checking center transparency:",t),!1}}createTexturePreview(e){const t=document.createElement("canvas"),s=t.getContext("2d");t.width=64,t.height=64,s.fillStyle="#aaaaaa",s.fillRect(0,0,64,64),s.fillStyle="#888888";for(let o=0;o<64;o+=16)for(let r=0;r<64;r+=16)(r/16+o/16)%2===0&&s.fillRect(r,o,16,16);const i=this.extractTextureCanvas(e);if(i){s.drawImage(i,0,0,64,64);const o=this.textureManager.getTexture(e);if(o){const r=o.offset.x,a=o.offset.y,l=o.repeat.x,c=o.repeat.y;s.fillStyle="rgba(255, 255, 255, 0.7)",s.font="8px monospace",s.fillText(`U: ${r.toFixed(2)}-${(r+l).toFixed(2)}`,2,10),s.fillText(`V: ${a.toFixed(2)}-${(a+c).toFixed(2)}`,2,20)}}return t.toDataURL()}autoFilterInvalid(){console.log("Auto-filtering invalid textures...");const e=["stone","dirt","grass_block_top","grass_block_side","sand","gravel","planks","log","leaves","cobblestone","brick","wood","oak","birch","acacia","spruce","jungle","dark_oak","glass","wool","concrete","terracotta","sandstone","quartz"];for(const t in this.textureManager.textureCache){this.textureInfos[t]||this.analyzeTexture(t,this.textureManager.getTexture(t));const s=this.textureInfos[t];s.isValid=!1;for(const i of e)if(t.includes(i)){s.isValid=!0;break}s.transparent&&this.isTransparentInCenter(t)&&(s.isValid=!1),(t.includes("ui_")||t.includes("destroy_stage_")||t.includes("fire_")||t.includes("_stem")||t.includes("particle")||t.includes("_stage"))&&(s.isValid=!1),(t==="acacia_leaves"||t==="oak_leaves"||t==="birch_leaves"||t==="grass_block_top"||t==="grass_block_side")&&(s.isValid=!0)}this.textureInfos.grass_block_top&&(this.multiSidedBlocks.grass_block={top:"grass_block_top",sides:"grass_block_side",bottom:"dirt"}),["oak","birch","spruce","acacia","jungle","dark_oak"].forEach(t=>{const s=`${t}_log`,i=`${t}_log_top`;this.textureInfos[s]&&this.textureInfos[i]&&(this.multiSidedBlocks[s]={top:i,bottom:i,sides:s});const o=`${t}_leaves`;this.textureInfos[o]&&(this.textureInfos[o].isValid=!0)}),["sandstone","red_sandstone"].forEach(t=>{const s=`${t}_top`,i=`${t}_bottom`;this.textureInfos[t]&&this.textureInfos[s]&&(this.multiSidedBlocks[t]={top:s,bottom:i||s,sides:t})}),this.refreshTextureList()}saveTextureConfig(){this.validBlockList=[];for(const o in this.textureInfos)this.textureInfos[o].isValid&&this.validBlockList.push(o);const e={validBlocks:this.validBlockList,multiSidedBlocks:this.multiSidedBlocks},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),i=document.createElement("a");return i.href=s,i.download="texture_config.json",i.click(),URL.revokeObjectURL(s),e}getValidTextures(){for(const t in this.textureManager.textureCache)this.textureInfos[t]||this.analyzeTexture(t,this.textureManager.getTexture(t));const e=[];for(const t in this.textureInfos)this.textureInfos[t].isValid&&e.push(t);if(e.length===0){const t=["stone","dirt","cobblestone","oak_planks","diamond_ore"];for(const s of t)this.textureManager.getTexture(s)&&e.push(s);console.warn("No valid textures found, using fallbacks:",e)}return e}createAtlasOverlay(){this.atlasOverlay=document.createElement("div"),this.atlasOverlay.className="atlas-overlay",this.atlasOverlay.style.position="fixed",this.atlasOverlay.style.top="50px",this.atlasOverlay.style.right="320px",this.atlasOverlay.style.zIndex="1001",this.atlasOverlay.style.border="1px solid #888",this.atlasOverlay.style.backgroundColor="#222",this.atlasOverlay.style.padding="10px",this.atlasOverlay.style.display="none",this.atlasOverlay.style.width="600px",this.atlasOverlay.style.maxHeight="80vh",this.atlasOverlay.style.overflowY="auto";const e=document.createElement("h3");e.textContent="Texture Atlas Grid View",e.style.margin="0 0 10px 0",e.style.color="#fff",this.atlasOverlay.appendChild(e);const t=document.createElement("div");t.style.marginBottom="10px",t.style.display="flex",t.style.alignItems="center",t.style.gap="10px",this.atlasSearchInput=document.createElement("input"),this.atlasSearchInput.type="text",this.atlasSearchInput.placeholder="Search textures...",this.atlasSearchInput.style.flex="1",this.atlasSearchInput.style.padding="5px",this.atlasSearchInput.addEventListener("input",()=>{this.atlasFilterText=this.atlasSearchInput.value.trim().toLowerCase(),this.drawGridAtlasOverlay()}),this.atlasCountLabel=document.createElement("span"),this.atlasCountLabel.style.color="#fff",this.atlasCountLabel.textContent="0 / 0",t.appendChild(this.atlasSearchInput),t.appendChild(this.atlasCountLabel),this.atlasOverlay.appendChild(t);const s=document.createElement("div");s.style.marginBottom="10px",s.style.display="flex",s.style.alignItems="center",s.style.gap="10px";const i=document.createElement("label");i.textContent="Texture Size:",i.style.color="#fff";const o=document.createElement("input");o.type="range",o.min="32",o.max="128",o.step="16",o.value="64",o.style.flex="1",o.addEventListener("input",_=>{this.gridCellSize=parseInt(_.target.value),this.drawGridAtlasOverlay()});const r=document.createElement("span");r.textContent="64px",r.style.color="#fff",r.style.minWidth="50px",o.addEventListener("input",_=>{const h=_.target.value;r.textContent=`${h}px`,this.gridCellSize=parseInt(h),this.drawGridAtlasOverlay()}),s.appendChild(i),s.appendChild(o),s.appendChild(r),this.atlasOverlay.appendChild(s),this.gridContainer=document.createElement("div"),this.gridContainer.style.display="grid",this.gridContainer.style.gap="5px",this.gridContainer.style.justifyContent="center",this.atlasOverlay.appendChild(this.gridContainer),this.gridCellSize=64;const a=this.textureManager.atlasTexture;if(!a||!a.image){const _=document.createElement("p");_.textContent="Atlas texture is not loaded or unavailable.",_.style.color="red",this.atlasOverlay.appendChild(_),document.body.appendChild(this.atlasOverlay);return}const l=a.image.width,c=a.image.height;console.log(`Atlas dimensions: ${l}x${c}`),this.atlasBoxes=[];const u=this.textureManager.atlasMapping;if(u&&Object.keys(u).length>0)for(const _ in u){const h=u[_];if(!h||!h.offset||!h.size){console.warn(`Invalid mapping for ${_}`,h);continue}const d=h.offset.x*l,g=h.offset.y*c,m=h.size.x*l,f=h.size.y*c;let p=_.split("/").pop();p&&(p=p.replace(/\.(png|jpg|jpeg|webp)$/i,""),this.atlasBoxes.push({x:d,y:g,w:m,h:f,textureUrl:_,textureName:p}))}else{console.log("Using texture cache for atlas data");const _=this.textureManager.textureCache;if(!_){console.error("No texture cache available");return}for(const h in _){const d=_[h];if(!d||!d.offset||!d.repeat){console.warn(`Invalid texture data for ${h}`,d);continue}const g=d.offset.x*l,m=d.offset.y*c,f=d.repeat.x*l,p=d.repeat.y*c;this.atlasBoxes.push({x:g,y:m,w:f,h:p,textureUrl:h,textureName:h})}}console.log(`Found ${this.atlasBoxes.length} textures in atlas`),document.body.appendChild(this.atlasOverlay),this.drawGridAtlasOverlay()}drawGridAtlasOverlay(){if(this.gridContainer.innerHTML="",!this.atlasBoxes||this.atlasBoxes.length===0){const o=document.createElement("p");o.textContent="No texture data available.",o.style.color="red",this.gridContainer.appendChild(o);return}const e=this.textureManager.atlasTexture;if(!e||!e.image){const o=document.createElement("p");o.textContent="Atlas texture image not available.",o.style.color="red",this.gridContainer.appendChild(o);return}let t=this.atlasBoxes;this.atlasFilterText&&(t=this.atlasBoxes.filter(o=>o.textureName.toLowerCase().includes(this.atlasFilterText))),this.atlasCountLabel&&(this.atlasCountLabel.textContent=`${t.length} / ${this.atlasBoxes.length}`);const s=this.atlasOverlay.clientWidth-30,i=Math.max(2,Math.floor(s/(this.gridCellSize+5)));if(this.gridContainer.style.gridTemplateColumns=`repeat(${i}, ${this.gridCellSize}px)`,t.forEach(o=>{const r=document.createElement("div");r.style.width=`${this.gridCellSize}px`,r.style.height=`${this.gridCellSize}px`,r.style.position="relative",r.style.border="1px solid #444",r.style.borderRadius="3px",r.style.overflow="hidden",r.style.cursor="pointer";const a=document.createElement("canvas");a.width=this.gridCellSize,a.height=this.gridCellSize;const l=a.getContext("2d");l.fillStyle="#aaaaaa",l.fillRect(0,0,this.gridCellSize,this.gridCellSize),l.fillStyle="#888888";const c=this.gridCellSize/4;for(let _=0;_<this.gridCellSize;_+=c)for(let h=0;h<this.gridCellSize;h+=c)(h/c+_/c)%2===0&&l.fillRect(h,_,c,c);try{l.drawImage(e.image,o.x,o.y,o.w,o.h,0,0,this.gridCellSize,this.gridCellSize)}catch(_){console.error(`Failed to draw texture ${o.textureName}:`,_)}r.appendChild(a);const u=document.createElement("div");u.style.position="absolute",u.style.bottom="0",u.style.left="0",u.style.right="0",u.style.backgroundColor="rgba(0, 0, 0, 0.7)",u.style.color="white",u.style.padding="2px 4px",u.style.fontSize="10px",u.style.overflow="hidden",u.style.textOverflow="ellipsis",u.style.whiteSpace="nowrap",u.textContent=o.textureName,r.appendChild(u),r.addEventListener("click",()=>{this.showTextureDetails(o)}),this.gridContainer.appendChild(r)}),t.length===0){const o=document.createElement("div");o.style.gridColumn="1 / -1",o.style.padding="20px",o.style.color="white",o.style.textAlign="center",o.textContent="No matching textures found.",this.gridContainer.appendChild(o)}}showTextureDetails(e){var f,p;const t=document.getElementById("texture-details-popup");t&&t.remove();const s=document.createElement("div");s.id="texture-details-popup",s.style.position="fixed",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%, -50%)",s.style.backgroundColor="#333",s.style.border="2px solid #555",s.style.borderRadius="5px",s.style.padding="20px",s.style.zIndex="2000",s.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.5)",s.style.maxWidth="90vw",s.style.maxHeight="90vh",s.style.display="flex",s.style.flexDirection="column",s.style.gap="15px";const i=document.createElement("button");i.textContent="×",i.style.position="absolute",i.style.top="5px",i.style.right="10px",i.style.background="none",i.style.border="none",i.style.color="white",i.style.fontSize="24px",i.style.cursor="pointer",i.addEventListener("click",()=>s.remove()),s.appendChild(i);const o=document.createElement("h3");o.textContent=e.textureName,o.style.margin="0",o.style.color="white",s.appendChild(o);const r=document.createElement("div");r.style.display="flex",r.style.gap="20px",r.style.alignItems="flex-start",s.appendChild(r);const a=200,l=document.createElement("canvas");l.width=a,l.height=a,l.style.border="1px solid #666";const c=l.getContext("2d");c.fillStyle="#aaaaaa",c.fillRect(0,0,a,a),c.fillStyle="#888888";const u=a/8;for(let E=0;E<a;E+=u)for(let y=0;y<a;y+=u)(y/u+E/u)%2===0&&c.fillRect(y,E,u,u);try{const E=this.textureManager.atlasTexture;c.drawImage(E.image,e.x,e.y,e.w,e.h,0,0,a,a)}catch(E){console.error("Failed to draw texture preview:",E)}r.appendChild(l);const _=document.createElement("div");_.style.color="white",_.style.fontSize="14px",[`Name: ${e.textureName}`,`Dimensions: ${Math.round(e.w)}x${Math.round(e.h)}`,`Atlas Position: (${Math.round(e.x)}, ${Math.round(e.y)})`,`Is Valid Block: ${(f=this.textureInfos[e.textureName])!=null&&f.isValid?"Yes":"No"}`].forEach(E=>{const y=document.createElement("p");y.textContent=E,y.style.margin="5px 0",_.appendChild(y)}),r.appendChild(_);const d=document.createElement("div");d.style.marginTop="10px",d.style.display="flex",d.style.gap="10px",d.style.justifyContent="flex-start",s.appendChild(d);const g=document.createElement("button"),m=((p=this.textureInfos[e.textureName])==null?void 0:p.isValid)||!1;if(g.textContent=m?"Mark as Invalid":"Mark as Valid",g.style.padding="5px 10px",g.addEventListener("click",()=>{this.textureInfos[e.textureName]||(this.textureInfos[e.textureName]={name:e.textureName}),this.textureInfos[e.textureName].isValid=!m,s.remove(),this.drawGridAtlasOverlay()}),d.appendChild(g),m){const E=document.createElement("button"),y=!!this.multiSidedBlocks[e.textureName];E.textContent=y?"Remove Multi-sided":"Set as Multi-sided",E.style.padding="5px 10px",E.addEventListener("click",()=>{y?delete this.multiSidedBlocks[e.textureName]:this.multiSidedBlocks[e.textureName]={top:e.textureName,sides:e.textureName,bottom:e.textureName},s.remove()}),d.appendChild(E)}document.body.appendChild(s)}toggleAtlasOverlay(){this.atlasOverlay||this.createAtlasOverlay(),this.atlasOverlayVisible=!this.atlasOverlayVisible,this.atlasOverlay&&(this.atlasOverlay.style.display=this.atlasOverlayVisible?"block":"none"),this.atlasOverlayVisible&&(console.log("Grid atlas overlay visible"),this.drawGridAtlasOverlay())}}var gi={exports:{}},lP=gi.exports,Ca;function cP(){return Ca||(Ca=1,function(n,e){(function(t,s){n.exports=s()})(lP,function(){var t=function(){function s(d){return r.appendChild(d.dom),d}function i(d){for(var g=0;g<r.children.length;g++)r.children[g].style.display=g===d?"block":"none";o=d}var o=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),i(++o%r.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=s(new t.Panel("FPS","#0ff","#002")),_=s(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=s(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:r,addPanel:s,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(_.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:i}};return t.Panel=function(s,i,o){var r=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,_=48*c,h=3*c,d=2*c,g=3*c,m=15*c,f=74*c,p=30*c,E=document.createElement("canvas");E.width=u,E.height=_,E.style.cssText="width:80px;height:48px";var y=E.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=o,y.fillRect(0,0,u,_),y.fillStyle=i,y.fillText(s,h,d),y.fillRect(g,m,f,p),y.fillStyle=o,y.globalAlpha=.9,y.fillRect(g,m,f,p),{dom:E,update:function(S,D){r=Math.min(r,S),a=Math.max(a,S),y.fillStyle=o,y.globalAlpha=1,y.fillRect(0,0,u,m),y.fillStyle=i,y.fillText(l(S)+" "+s+" ("+l(r)+"-"+l(a)+")",h,d),y.drawImage(E,g+c,m,f-c,p,g,m,f-c,p),y.fillRect(g+f-c,m,c,p),y.fillStyle=o,y.globalAlpha=.9,y.fillRect(g+f-c,m,c,l((1-S/D)*p))}}},t})}(gi)),gi.exports}var uP=cP();const _P=sP(uP),xi=new _P;xi.showPanel(0);document.body.appendChild(xi.dom);const hP=Object.assign({"./assets/textures/acacia_door_bottom.png":Ml,"./assets/textures/acacia_door_top.png":yl,"./assets/textures/acacia_leaves.png":Sl,"./assets/textures/acacia_log.png":El,"./assets/textures/acacia_log_top.png":Tl,"./assets/textures/acacia_planks.png":wl,"./assets/textures/acacia_sapling.png":Cl,"./assets/textures/acacia_trapdoor.png":Al,"./assets/textures/activator_rail.png":Rl,"./assets/textures/activator_rail_on.png":Dl,"./assets/textures/allium.png":Pl,"./assets/textures/amethyst_block.png":Ll,"./assets/textures/amethyst_cluster.png":Il,"./assets/textures/ancient_debris_side.png":Ul,"./assets/textures/ancient_debris_top.png":kl,"./assets/textures/andesite.png":Nl,"./assets/textures/anvil.png":Fl,"./assets/textures/anvil_top.png":Bl,"./assets/textures/attached_melon_stem.png":Ol,"./assets/textures/attached_pumpkin_stem.png":zl,"./assets/textures/azalea_leaves.png":Vl,"./assets/textures/azalea_plant.png":Hl,"./assets/textures/azalea_side.png":Gl,"./assets/textures/azalea_top.png":Wl,"./assets/textures/azure_bluet.png":Xl,"./assets/textures/bamboo_block.png":ql,"./assets/textures/bamboo_block_top.png":Yl,"./assets/textures/bamboo_door_bottom.png":jl,"./assets/textures/bamboo_door_top.png":Kl,"./assets/textures/bamboo_fence.png":Zl,"./assets/textures/bamboo_fence_gate.png":$l,"./assets/textures/bamboo_fence_gate_particle.png":Jl,"./assets/textures/bamboo_fence_particle.png":Ql,"./assets/textures/bamboo_large_leaves.png":ec,"./assets/textures/bamboo_mosaic.png":tc,"./assets/textures/bamboo_planks.png":sc,"./assets/textures/bamboo_singleleaf.png":nc,"./assets/textures/bamboo_small_leaves.png":ic,"./assets/textures/bamboo_stage0.png":oc,"./assets/textures/bamboo_stalk.png":rc,"./assets/textures/bamboo_trapdoor.png":ac,"./assets/textures/barrel_bottom.png":lc,"./assets/textures/barrel_side.png":cc,"./assets/textures/barrel_top.png":uc,"./assets/textures/barrel_top_open.png":_c,"./assets/textures/basalt_side.png":hc,"./assets/textures/basalt_top.png":dc,"./assets/textures/beacon.png":pc,"./assets/textures/bedrock.png":fc,"./assets/textures/bee_nest_bottom.png":gc,"./assets/textures/bee_nest_front.png":mc,"./assets/textures/bee_nest_front_honey.png":vc,"./assets/textures/bee_nest_side.png":xc,"./assets/textures/bee_nest_top.png":bc,"./assets/textures/beehive_end.png":Mc,"./assets/textures/beehive_front.png":yc,"./assets/textures/beehive_front_honey.png":Sc,"./assets/textures/beehive_side.png":Ec,"./assets/textures/beetroots_stage0.png":Tc,"./assets/textures/beetroots_stage1.png":wc,"./assets/textures/beetroots_stage2.png":Cc,"./assets/textures/beetroots_stage3.png":Ac,"./assets/textures/bell_bottom.png":Rc,"./assets/textures/bell_side.png":Dc,"./assets/textures/bell_top.png":Pc,"./assets/textures/big_dripleaf_side.png":Lc,"./assets/textures/big_dripleaf_stem.png":Ic,"./assets/textures/big_dripleaf_tip.png":Uc,"./assets/textures/big_dripleaf_top.png":kc,"./assets/textures/birch_door_bottom.png":Nc,"./assets/textures/birch_door_top.png":Fc,"./assets/textures/birch_leaves.png":Bc,"./assets/textures/birch_log.png":Oc,"./assets/textures/birch_log_top.png":zc,"./assets/textures/birch_planks.png":Vc,"./assets/textures/birch_sapling.png":Hc,"./assets/textures/birch_trapdoor.png":Gc,"./assets/textures/black_candle.png":Wc,"./assets/textures/black_candle_lit.png":Xc,"./assets/textures/black_concrete.png":qc,"./assets/textures/black_concrete_powder.png":Yc,"./assets/textures/black_glazed_terracotta.png":jc,"./assets/textures/black_shulker_box.png":Kc,"./assets/textures/black_stained_glass.png":Zc,"./assets/textures/black_stained_glass_pane_top.png":$c,"./assets/textures/black_terracotta.png":Jc,"./assets/textures/black_wool.png":Qc,"./assets/textures/blackstone.png":eu,"./assets/textures/blackstone_top.png":tu,"./assets/textures/blast_furnace_front.png":su,"./assets/textures/blast_furnace_front_on.png":nu,"./assets/textures/blast_furnace_side.png":iu,"./assets/textures/blast_furnace_top.png":ou,"./assets/textures/blue_candle.png":ru,"./assets/textures/blue_candle_lit.png":au,"./assets/textures/blue_concrete.png":lu,"./assets/textures/blue_concrete_powder.png":cu,"./assets/textures/blue_glazed_terracotta.png":uu,"./assets/textures/blue_ice.png":_u,"./assets/textures/blue_orchid.png":hu,"./assets/textures/blue_shulker_box.png":du,"./assets/textures/blue_stained_glass.png":pu,"./assets/textures/blue_stained_glass_pane_top.png":fu,"./assets/textures/blue_terracotta.png":gu,"./assets/textures/blue_wool.png":mu,"./assets/textures/bone_block_side.png":vu,"./assets/textures/bone_block_top.png":xu,"./assets/textures/bookshelf.png":bu,"./assets/textures/brain_coral.png":Mu,"./assets/textures/brain_coral_block.png":yu,"./assets/textures/brain_coral_fan.png":Su,"./assets/textures/brewing_stand.png":Eu,"./assets/textures/brewing_stand_base.png":Tu,"./assets/textures/bricks.png":wu,"./assets/textures/brown_candle.png":Cu,"./assets/textures/brown_candle_lit.png":Au,"./assets/textures/brown_concrete.png":Ru,"./assets/textures/brown_concrete_powder.png":Du,"./assets/textures/brown_glazed_terracotta.png":Pu,"./assets/textures/brown_mushroom.png":Lu,"./assets/textures/brown_mushroom_block.png":Iu,"./assets/textures/brown_shulker_box.png":Uu,"./assets/textures/brown_stained_glass.png":ku,"./assets/textures/brown_stained_glass_pane_top.png":Nu,"./assets/textures/brown_terracotta.png":Fu,"./assets/textures/brown_wool.png":Bu,"./assets/textures/bubble_coral.png":Ou,"./assets/textures/bubble_coral_block.png":zu,"./assets/textures/bubble_coral_fan.png":Vu,"./assets/textures/budding_amethyst.png":Hu,"./assets/textures/cactus_bottom.png":Gu,"./assets/textures/cactus_side.png":Wu,"./assets/textures/cactus_top.png":Xu,"./assets/textures/cake_bottom.png":qu,"./assets/textures/cake_inner.png":Yu,"./assets/textures/cake_side.png":ju,"./assets/textures/cake_top.png":Ku,"./assets/textures/calcite.png":Zu,"./assets/textures/calibrated_sculk_sensor_amethyst.png":$u,"./assets/textures/calibrated_sculk_sensor_input_side.png":Ju,"./assets/textures/calibrated_sculk_sensor_top.png":Qu,"./assets/textures/campfire_fire.png":e_,"./assets/textures/campfire_log.png":t_,"./assets/textures/campfire_log_lit.png":s_,"./assets/textures/candle.png":n_,"./assets/textures/candle_lit.png":i_,"./assets/textures/carrots_stage0.png":o_,"./assets/textures/carrots_stage1.png":r_,"./assets/textures/carrots_stage2.png":a_,"./assets/textures/carrots_stage3.png":l_,"./assets/textures/cartography_table_side1.png":c_,"./assets/textures/cartography_table_side2.png":u_,"./assets/textures/cartography_table_side3.png":__,"./assets/textures/cartography_table_top.png":h_,"./assets/textures/carved_pumpkin.png":d_,"./assets/textures/cauldron_bottom.png":p_,"./assets/textures/cauldron_inner.png":f_,"./assets/textures/cauldron_side.png":g_,"./assets/textures/cauldron_top.png":m_,"./assets/textures/cave_vines.png":v_,"./assets/textures/cave_vines_lit.png":x_,"./assets/textures/cave_vines_plant.png":b_,"./assets/textures/cave_vines_plant_lit.png":M_,"./assets/textures/chain.png":y_,"./assets/textures/chain_command_block_back.png":S_,"./assets/textures/chain_command_block_conditional.png":E_,"./assets/textures/chain_command_block_front.png":T_,"./assets/textures/chain_command_block_side.png":w_,"./assets/textures/cherry_door_bottom.png":C_,"./assets/textures/cherry_door_top.png":A_,"./assets/textures/cherry_leaves.png":R_,"./assets/textures/cherry_log.png":D_,"./assets/textures/cherry_log_top.png":P_,"./assets/textures/cherry_planks.png":L_,"./assets/textures/cherry_sapling.png":I_,"./assets/textures/cherry_trapdoor.png":U_,"./assets/textures/chipped_anvil_top.png":k_,"./assets/textures/chiseled_bookshelf_empty.png":N_,"./assets/textures/chiseled_bookshelf_occupied.png":F_,"./assets/textures/chiseled_bookshelf_side.png":B_,"./assets/textures/chiseled_bookshelf_top.png":O_,"./assets/textures/chiseled_copper.png":z_,"./assets/textures/chiseled_deepslate.png":V_,"./assets/textures/chiseled_nether_bricks.png":H_,"./assets/textures/chiseled_polished_blackstone.png":G_,"./assets/textures/chiseled_quartz_block.png":W_,"./assets/textures/chiseled_quartz_block_top.png":X_,"./assets/textures/chiseled_red_sandstone.png":q_,"./assets/textures/chiseled_sandstone.png":Y_,"./assets/textures/chiseled_stone_bricks.png":j_,"./assets/textures/chiseled_tuff.png":K_,"./assets/textures/chiseled_tuff_bricks.png":Z_,"./assets/textures/chiseled_tuff_bricks_top.png":$_,"./assets/textures/chiseled_tuff_top.png":J_,"./assets/textures/chorus_flower.png":Q_,"./assets/textures/chorus_flower_dead.png":eh,"./assets/textures/chorus_plant.png":th,"./assets/textures/clay.png":sh,"./assets/textures/coal_block.png":nh,"./assets/textures/coal_ore.png":ih,"./assets/textures/coarse_dirt.png":oh,"./assets/textures/cobbled_deepslate.png":rh,"./assets/textures/cobblestone.png":ah,"./assets/textures/cobweb.png":lh,"./assets/textures/cocoa_stage0.png":ch,"./assets/textures/cocoa_stage1.png":uh,"./assets/textures/cocoa_stage2.png":_h,"./assets/textures/command_block_back.png":hh,"./assets/textures/command_block_conditional.png":dh,"./assets/textures/command_block_front.png":ph,"./assets/textures/command_block_side.png":fh,"./assets/textures/comparator.png":gh,"./assets/textures/comparator_on.png":mh,"./assets/textures/composter_bottom.png":vh,"./assets/textures/composter_compost.png":xh,"./assets/textures/composter_ready.png":bh,"./assets/textures/composter_side.png":Mh,"./assets/textures/composter_top.png":yh,"./assets/textures/conduit.png":Sh,"./assets/textures/copper_block.png":Eh,"./assets/textures/copper_bulb.png":Th,"./assets/textures/copper_bulb_lit.png":wh,"./assets/textures/copper_bulb_lit_powered.png":Ch,"./assets/textures/copper_bulb_powered.png":Ah,"./assets/textures/copper_door_bottom.png":Rh,"./assets/textures/copper_door_top.png":Dh,"./assets/textures/copper_grate.png":Ph,"./assets/textures/copper_ore.png":Lh,"./assets/textures/copper_trapdoor.png":Ih,"./assets/textures/cornflower.png":Uh,"./assets/textures/cracked_deepslate_bricks.png":kh,"./assets/textures/cracked_deepslate_tiles.png":Nh,"./assets/textures/cracked_nether_bricks.png":Fh,"./assets/textures/cracked_polished_blackstone_bricks.png":Bh,"./assets/textures/cracked_stone_bricks.png":Oh,"./assets/textures/crafter_bottom.png":zh,"./assets/textures/crafter_east.png":Vh,"./assets/textures/crafter_east_crafting.png":Hh,"./assets/textures/crafter_east_triggered.png":Gh,"./assets/textures/crafter_north.png":Wh,"./assets/textures/crafter_north_crafting.png":Xh,"./assets/textures/crafter_south.png":qh,"./assets/textures/crafter_south_triggered.png":Yh,"./assets/textures/crafter_top.png":jh,"./assets/textures/crafter_top_crafting.png":Kh,"./assets/textures/crafter_top_triggered.png":Zh,"./assets/textures/crafter_west.png":$h,"./assets/textures/crafter_west_crafting.png":Jh,"./assets/textures/crafter_west_triggered.png":Qh,"./assets/textures/crafting_table_front.png":ed,"./assets/textures/crafting_table_side.png":td,"./assets/textures/crafting_table_top.png":sd,"./assets/textures/crimson_door_bottom.png":nd,"./assets/textures/crimson_door_top.png":id,"./assets/textures/crimson_fungus.png":od,"./assets/textures/crimson_nylium.png":rd,"./assets/textures/crimson_nylium_side.png":ad,"./assets/textures/crimson_planks.png":ld,"./assets/textures/crimson_roots.png":cd,"./assets/textures/crimson_roots_pot.png":ud,"./assets/textures/crimson_stem.png":_d,"./assets/textures/crimson_stem_top.png":hd,"./assets/textures/crimson_trapdoor.png":dd,"./assets/textures/crying_obsidian.png":pd,"./assets/textures/cut_copper.png":fd,"./assets/textures/cut_red_sandstone.png":gd,"./assets/textures/cut_sandstone.png":md,"./assets/textures/cyan_candle.png":vd,"./assets/textures/cyan_candle_lit.png":xd,"./assets/textures/cyan_concrete.png":bd,"./assets/textures/cyan_concrete_powder.png":Md,"./assets/textures/cyan_glazed_terracotta.png":yd,"./assets/textures/cyan_shulker_box.png":Sd,"./assets/textures/cyan_stained_glass.png":Ed,"./assets/textures/cyan_stained_glass_pane_top.png":Td,"./assets/textures/cyan_terracotta.png":wd,"./assets/textures/cyan_wool.png":Cd,"./assets/textures/damaged_anvil_top.png":Ad,"./assets/textures/dandelion.png":Rd,"./assets/textures/dark_oak_door_bottom.png":Dd,"./assets/textures/dark_oak_door_top.png":Pd,"./assets/textures/dark_oak_leaves.png":Ld,"./assets/textures/dark_oak_log.png":Id,"./assets/textures/dark_oak_log_top.png":Ud,"./assets/textures/dark_oak_planks.png":kd,"./assets/textures/dark_oak_sapling.png":Nd,"./assets/textures/dark_oak_trapdoor.png":Fd,"./assets/textures/dark_prismarine.png":Bd,"./assets/textures/daylight_detector_inverted_top.png":Od,"./assets/textures/daylight_detector_side.png":zd,"./assets/textures/daylight_detector_top.png":Vd,"./assets/textures/dead_brain_coral.png":Hd,"./assets/textures/dead_brain_coral_block.png":Gd,"./assets/textures/dead_brain_coral_fan.png":Wd,"./assets/textures/dead_bubble_coral.png":Xd,"./assets/textures/dead_bubble_coral_block.png":qd,"./assets/textures/dead_bubble_coral_fan.png":Yd,"./assets/textures/dead_bush.png":jd,"./assets/textures/dead_fire_coral.png":Kd,"./assets/textures/dead_fire_coral_block.png":Zd,"./assets/textures/dead_fire_coral_fan.png":$d,"./assets/textures/dead_horn_coral.png":Jd,"./assets/textures/dead_horn_coral_block.png":Qd,"./assets/textures/dead_horn_coral_fan.png":ep,"./assets/textures/dead_tube_coral.png":tp,"./assets/textures/dead_tube_coral_block.png":sp,"./assets/textures/dead_tube_coral_fan.png":np,"./assets/textures/debug.png":ip,"./assets/textures/debug2.png":op,"./assets/textures/deepslate.png":rp,"./assets/textures/deepslate_bricks.png":ap,"./assets/textures/deepslate_coal_ore.png":lp,"./assets/textures/deepslate_copper_ore.png":cp,"./assets/textures/deepslate_diamond_ore.png":up,"./assets/textures/deepslate_emerald_ore.png":_p,"./assets/textures/deepslate_gold_ore.png":hp,"./assets/textures/deepslate_iron_ore.png":dp,"./assets/textures/deepslate_lapis_ore.png":pp,"./assets/textures/deepslate_redstone_ore.png":fp,"./assets/textures/deepslate_tiles.png":gp,"./assets/textures/deepslate_top.png":mp,"./assets/textures/destroy_stage_0.png":vp,"./assets/textures/destroy_stage_1.png":xp,"./assets/textures/destroy_stage_2.png":bp,"./assets/textures/destroy_stage_3.png":Mp,"./assets/textures/destroy_stage_4.png":yp,"./assets/textures/destroy_stage_5.png":Sp,"./assets/textures/destroy_stage_6.png":Ep,"./assets/textures/destroy_stage_7.png":Tp,"./assets/textures/destroy_stage_8.png":wp,"./assets/textures/destroy_stage_9.png":Cp,"./assets/textures/detector_rail.png":Ap,"./assets/textures/detector_rail_on.png":Rp,"./assets/textures/diamond_block.png":Dp,"./assets/textures/diamond_ore.png":Pp,"./assets/textures/diorite.png":Lp,"./assets/textures/dirt.png":Ip,"./assets/textures/dirt_path_side.png":Up,"./assets/textures/dirt_path_top.png":kp,"./assets/textures/dispenser_front.png":Np,"./assets/textures/dispenser_front_vertical.png":Fp,"./assets/textures/dragon_egg.png":Bp,"./assets/textures/dried_kelp_bottom.png":Op,"./assets/textures/dried_kelp_side.png":zp,"./assets/textures/dried_kelp_top.png":Vp,"./assets/textures/dripstone_block.png":Hp,"./assets/textures/dropper_front.png":Gp,"./assets/textures/dropper_front_vertical.png":Wp,"./assets/textures/emerald_block.png":Xp,"./assets/textures/emerald_ore.png":qp,"./assets/textures/enchanting_table_bottom.png":Yp,"./assets/textures/enchanting_table_side.png":jp,"./assets/textures/enchanting_table_top.png":Kp,"./assets/textures/end_portal_frame_eye.png":Zp,"./assets/textures/end_portal_frame_side.png":$p,"./assets/textures/end_portal_frame_top.png":Jp,"./assets/textures/end_rod.png":Qp,"./assets/textures/end_stone.png":ef,"./assets/textures/end_stone_bricks.png":tf,"./assets/textures/exposed_chiseled_copper.png":sf,"./assets/textures/exposed_copper.png":nf,"./assets/textures/exposed_copper_bulb.png":of,"./assets/textures/exposed_copper_bulb_lit.png":rf,"./assets/textures/exposed_copper_bulb_lit_powered.png":af,"./assets/textures/exposed_copper_bulb_powered.png":lf,"./assets/textures/exposed_copper_door_bottom.png":cf,"./assets/textures/exposed_copper_door_top.png":uf,"./assets/textures/exposed_copper_grate.png":_f,"./assets/textures/exposed_copper_trapdoor.png":hf,"./assets/textures/exposed_cut_copper.png":df,"./assets/textures/farmland.png":pf,"./assets/textures/farmland_moist.png":ff,"./assets/textures/fern.png":gf,"./assets/textures/fire_0.png":mf,"./assets/textures/fire_1.png":vf,"./assets/textures/fire_coral.png":xf,"./assets/textures/fire_coral_block.png":bf,"./assets/textures/fire_coral_fan.png":Mf,"./assets/textures/fletching_table_front.png":yf,"./assets/textures/fletching_table_side.png":Sf,"./assets/textures/fletching_table_top.png":Ef,"./assets/textures/flower_pot.png":Tf,"./assets/textures/flowering_azalea_leaves.png":wf,"./assets/textures/flowering_azalea_side.png":Cf,"./assets/textures/flowering_azalea_top.png":Af,"./assets/textures/frogspawn.png":Rf,"./assets/textures/frosted_ice_0.png":Df,"./assets/textures/frosted_ice_1.png":Pf,"./assets/textures/frosted_ice_2.png":Lf,"./assets/textures/frosted_ice_3.png":If,"./assets/textures/furnace_front.png":Uf,"./assets/textures/furnace_front_on.png":kf,"./assets/textures/furnace_side.png":Nf,"./assets/textures/furnace_top.png":Ff,"./assets/textures/gilded_blackstone.png":Bf,"./assets/textures/glass.png":Of,"./assets/textures/glass_pane_top.png":zf,"./assets/textures/glow_item_frame.png":Vf,"./assets/textures/glow_lichen.png":Hf,"./assets/textures/glowstone.png":Gf,"./assets/textures/gold_block.png":Wf,"./assets/textures/gold_ore.png":Xf,"./assets/textures/granite.png":qf,"./assets/textures/grass_block_side.png":Yf,"./assets/textures/grass_block_side_overlay.png":jf,"./assets/textures/grass_block_snow.png":Kf,"./assets/textures/grass_block_top.png":Zf,"./assets/textures/gravel.png":$f,"./assets/textures/gray_candle.png":Jf,"./assets/textures/gray_candle_lit.png":Qf,"./assets/textures/gray_concrete.png":eg,"./assets/textures/gray_concrete_powder.png":tg,"./assets/textures/gray_glazed_terracotta.png":sg,"./assets/textures/gray_shulker_box.png":ng,"./assets/textures/gray_stained_glass.png":ig,"./assets/textures/gray_stained_glass_pane_top.png":og,"./assets/textures/gray_terracotta.png":rg,"./assets/textures/gray_wool.png":ag,"./assets/textures/green_candle.png":lg,"./assets/textures/green_candle_lit.png":cg,"./assets/textures/green_concrete.png":ug,"./assets/textures/green_concrete_powder.png":_g,"./assets/textures/green_glazed_terracotta.png":hg,"./assets/textures/green_shulker_box.png":dg,"./assets/textures/green_stained_glass.png":pg,"./assets/textures/green_stained_glass_pane_top.png":fg,"./assets/textures/green_terracotta.png":gg,"./assets/textures/green_wool.png":mg,"./assets/textures/grindstone_pivot.png":vg,"./assets/textures/grindstone_round.png":xg,"./assets/textures/grindstone_side.png":bg,"./assets/textures/hanging_roots.png":Mg,"./assets/textures/hay_block_side.png":yg,"./assets/textures/hay_block_top.png":Sg,"./assets/textures/heavy_core.png":Eg,"./assets/textures/honey_block_bottom.png":Tg,"./assets/textures/honey_block_side.png":wg,"./assets/textures/honey_block_top.png":Cg,"./assets/textures/honeycomb_block.png":Ag,"./assets/textures/hopper_inside.png":Rg,"./assets/textures/hopper_outside.png":Dg,"./assets/textures/hopper_top.png":Pg,"./assets/textures/horn_coral.png":Lg,"./assets/textures/horn_coral_block.png":Ig,"./assets/textures/horn_coral_fan.png":Ug,"./assets/textures/ice.png":kg,"./assets/textures/iron_bars.png":Ng,"./assets/textures/iron_block.png":Fg,"./assets/textures/iron_door_bottom.png":Bg,"./assets/textures/iron_door_top.png":Og,"./assets/textures/iron_ore.png":zg,"./assets/textures/iron_trapdoor.png":Vg,"./assets/textures/item_frame.png":Hg,"./assets/textures/jack_o_lantern.png":Gg,"./assets/textures/jigsaw_bottom.png":Wg,"./assets/textures/jigsaw_lock.png":Xg,"./assets/textures/jigsaw_side.png":qg,"./assets/textures/jigsaw_top.png":Yg,"./assets/textures/jukebox_side.png":jg,"./assets/textures/jukebox_top.png":Kg,"./assets/textures/jungle_door_bottom.png":Zg,"./assets/textures/jungle_door_top.png":$g,"./assets/textures/jungle_leaves.png":Jg,"./assets/textures/jungle_log.png":Qg,"./assets/textures/jungle_log_top.png":em,"./assets/textures/jungle_planks.png":tm,"./assets/textures/jungle_sapling.png":sm,"./assets/textures/jungle_trapdoor.png":nm,"./assets/textures/kelp.png":im,"./assets/textures/kelp_plant.png":om,"./assets/textures/ladder.png":rm,"./assets/textures/lantern.png":am,"./assets/textures/lapis_block.png":lm,"./assets/textures/lapis_ore.png":cm,"./assets/textures/large_amethyst_bud.png":um,"./assets/textures/large_fern_bottom.png":_m,"./assets/textures/large_fern_top.png":hm,"./assets/textures/lava_flow.png":dm,"./assets/textures/lava_still.png":pm,"./assets/textures/lectern_base.png":fm,"./assets/textures/lectern_front.png":gm,"./assets/textures/lectern_sides.png":mm,"./assets/textures/lectern_top.png":vm,"./assets/textures/lever.png":xm,"./assets/textures/light_blue_candle.png":bm,"./assets/textures/light_blue_candle_lit.png":Mm,"./assets/textures/light_blue_concrete.png":ym,"./assets/textures/light_blue_concrete_powder.png":Sm,"./assets/textures/light_blue_glazed_terracotta.png":Em,"./assets/textures/light_blue_shulker_box.png":Tm,"./assets/textures/light_blue_stained_glass.png":wm,"./assets/textures/light_blue_stained_glass_pane_top.png":Cm,"./assets/textures/light_blue_terracotta.png":Am,"./assets/textures/light_blue_wool.png":Rm,"./assets/textures/light_gray_candle.png":Dm,"./assets/textures/light_gray_candle_lit.png":Pm,"./assets/textures/light_gray_concrete.png":Lm,"./assets/textures/light_gray_concrete_powder.png":Im,"./assets/textures/light_gray_glazed_terracotta.png":Um,"./assets/textures/light_gray_shulker_box.png":km,"./assets/textures/light_gray_stained_glass.png":Nm,"./assets/textures/light_gray_stained_glass_pane_top.png":Fm,"./assets/textures/light_gray_terracotta.png":Bm,"./assets/textures/light_gray_wool.png":Om,"./assets/textures/lightning_rod.png":zm,"./assets/textures/lilac_bottom.png":Vm,"./assets/textures/lilac_top.png":Hm,"./assets/textures/lily_of_the_valley.png":Gm,"./assets/textures/lily_pad.png":Wm,"./assets/textures/lime_candle.png":Xm,"./assets/textures/lime_candle_lit.png":qm,"./assets/textures/lime_concrete.png":Ym,"./assets/textures/lime_concrete_powder.png":jm,"./assets/textures/lime_glazed_terracotta.png":Km,"./assets/textures/lime_shulker_box.png":Zm,"./assets/textures/lime_stained_glass.png":$m,"./assets/textures/lime_stained_glass_pane_top.png":Jm,"./assets/textures/lime_terracotta.png":Qm,"./assets/textures/lime_wool.png":ev,"./assets/textures/lodestone_side.png":tv,"./assets/textures/lodestone_top.png":sv,"./assets/textures/loom_bottom.png":nv,"./assets/textures/loom_front.png":iv,"./assets/textures/loom_side.png":ov,"./assets/textures/loom_top.png":rv,"./assets/textures/magenta_candle.png":av,"./assets/textures/magenta_candle_lit.png":lv,"./assets/textures/magenta_concrete.png":cv,"./assets/textures/magenta_concrete_powder.png":uv,"./assets/textures/magenta_glazed_terracotta.png":_v,"./assets/textures/magenta_shulker_box.png":hv,"./assets/textures/magenta_stained_glass.png":dv,"./assets/textures/magenta_stained_glass_pane_top.png":pv,"./assets/textures/magenta_terracotta.png":fv,"./assets/textures/magenta_wool.png":gv,"./assets/textures/magma.png":mv,"./assets/textures/mangrove_door_bottom.png":vv,"./assets/textures/mangrove_door_top.png":xv,"./assets/textures/mangrove_leaves.png":bv,"./assets/textures/mangrove_log.png":Mv,"./assets/textures/mangrove_log_top.png":yv,"./assets/textures/mangrove_planks.png":Sv,"./assets/textures/mangrove_propagule.png":Ev,"./assets/textures/mangrove_propagule_hanging.png":Tv,"./assets/textures/mangrove_roots_side.png":wv,"./assets/textures/mangrove_roots_top.png":Cv,"./assets/textures/mangrove_trapdoor.png":Av,"./assets/textures/medium_amethyst_bud.png":Rv,"./assets/textures/melon_side.png":Dv,"./assets/textures/melon_stem.png":Pv,"./assets/textures/melon_top.png":Lv,"./assets/textures/moss_block.png":Iv,"./assets/textures/mossy_cobblestone.png":Uv,"./assets/textures/mossy_stone_bricks.png":kv,"./assets/textures/mud.png":Nv,"./assets/textures/mud_bricks.png":Fv,"./assets/textures/muddy_mangrove_roots_side.png":Bv,"./assets/textures/muddy_mangrove_roots_top.png":Ov,"./assets/textures/mushroom_block_inside.png":zv,"./assets/textures/mushroom_stem.png":Vv,"./assets/textures/mycelium_side.png":Hv,"./assets/textures/mycelium_top.png":Gv,"./assets/textures/nether_bricks.png":Wv,"./assets/textures/nether_gold_ore.png":Xv,"./assets/textures/nether_portal.png":qv,"./assets/textures/nether_quartz_ore.png":Yv,"./assets/textures/nether_sprouts.png":jv,"./assets/textures/nether_wart_block.png":Kv,"./assets/textures/nether_wart_stage0.png":Zv,"./assets/textures/nether_wart_stage1.png":$v,"./assets/textures/nether_wart_stage2.png":Jv,"./assets/textures/netherite_block.png":Qv,"./assets/textures/netherrack.png":ex,"./assets/textures/note_block.png":tx,"./assets/textures/oak_door_bottom.png":sx,"./assets/textures/oak_door_top.png":nx,"./assets/textures/oak_leaves.png":ix,"./assets/textures/oak_log.png":ox,"./assets/textures/oak_log_top.png":rx,"./assets/textures/oak_planks.png":ax,"./assets/textures/oak_sapling.png":lx,"./assets/textures/oak_trapdoor.png":cx,"./assets/textures/observer_back.png":ux,"./assets/textures/observer_back_on.png":_x,"./assets/textures/observer_front.png":hx,"./assets/textures/observer_side.png":dx,"./assets/textures/observer_top.png":px,"./assets/textures/obsidian.png":fx,"./assets/textures/ochre_froglight_side.png":gx,"./assets/textures/ochre_froglight_top.png":mx,"./assets/textures/orange_candle.png":vx,"./assets/textures/orange_candle_lit.png":xx,"./assets/textures/orange_concrete.png":bx,"./assets/textures/orange_concrete_powder.png":Mx,"./assets/textures/orange_glazed_terracotta.png":yx,"./assets/textures/orange_shulker_box.png":Sx,"./assets/textures/orange_stained_glass.png":Ex,"./assets/textures/orange_stained_glass_pane_top.png":Tx,"./assets/textures/orange_terracotta.png":wx,"./assets/textures/orange_tulip.png":Cx,"./assets/textures/orange_wool.png":Ax,"./assets/textures/oxeye_daisy.png":Rx,"./assets/textures/oxidized_chiseled_copper.png":Dx,"./assets/textures/oxidized_copper.png":Px,"./assets/textures/oxidized_copper_bulb.png":Lx,"./assets/textures/oxidized_copper_bulb_lit.png":Ix,"./assets/textures/oxidized_copper_bulb_lit_powered.png":Ux,"./assets/textures/oxidized_copper_bulb_powered.png":kx,"./assets/textures/oxidized_copper_door_bottom.png":Nx,"./assets/textures/oxidized_copper_door_top.png":Fx,"./assets/textures/oxidized_copper_grate.png":Bx,"./assets/textures/oxidized_copper_trapdoor.png":Ox,"./assets/textures/oxidized_cut_copper.png":zx,"./assets/textures/packed_ice.png":Vx,"./assets/textures/packed_mud.png":Hx,"./assets/textures/pearlescent_froglight_side.png":Gx,"./assets/textures/pearlescent_froglight_top.png":Wx,"./assets/textures/peony_bottom.png":Xx,"./assets/textures/peony_top.png":qx,"./assets/textures/pink_candle.png":Yx,"./assets/textures/pink_candle_lit.png":jx,"./assets/textures/pink_concrete.png":Kx,"./assets/textures/pink_concrete_powder.png":Zx,"./assets/textures/pink_glazed_terracotta.png":$x,"./assets/textures/pink_petals.png":Jx,"./assets/textures/pink_petals_stem.png":Qx,"./assets/textures/pink_shulker_box.png":e0,"./assets/textures/pink_stained_glass.png":t0,"./assets/textures/pink_stained_glass_pane_top.png":s0,"./assets/textures/pink_terracotta.png":n0,"./assets/textures/pink_tulip.png":i0,"./assets/textures/pink_wool.png":o0,"./assets/textures/piston_bottom.png":r0,"./assets/textures/piston_inner.png":a0,"./assets/textures/piston_side.png":l0,"./assets/textures/piston_top.png":c0,"./assets/textures/piston_top_sticky.png":u0,"./assets/textures/pitcher_crop_bottom.png":_0,"./assets/textures/pitcher_crop_bottom_stage_1.png":h0,"./assets/textures/pitcher_crop_bottom_stage_2.png":d0,"./assets/textures/pitcher_crop_bottom_stage_3.png":p0,"./assets/textures/pitcher_crop_bottom_stage_4.png":f0,"./assets/textures/pitcher_crop_side.png":g0,"./assets/textures/pitcher_crop_top.png":m0,"./assets/textures/pitcher_crop_top_stage_3.png":v0,"./assets/textures/pitcher_crop_top_stage_4.png":x0,"./assets/textures/podzol_side.png":b0,"./assets/textures/podzol_top.png":M0,"./assets/textures/pointed_dripstone_down_base.png":y0,"./assets/textures/pointed_dripstone_down_frustum.png":S0,"./assets/textures/pointed_dripstone_down_middle.png":E0,"./assets/textures/pointed_dripstone_down_tip.png":T0,"./assets/textures/pointed_dripstone_down_tip_merge.png":w0,"./assets/textures/pointed_dripstone_up_base.png":C0,"./assets/textures/pointed_dripstone_up_frustum.png":A0,"./assets/textures/pointed_dripstone_up_middle.png":R0,"./assets/textures/pointed_dripstone_up_tip.png":D0,"./assets/textures/pointed_dripstone_up_tip_merge.png":P0,"./assets/textures/polished_andesite.png":L0,"./assets/textures/polished_basalt_side.png":I0,"./assets/textures/polished_basalt_top.png":U0,"./assets/textures/polished_blackstone.png":k0,"./assets/textures/polished_blackstone_bricks.png":N0,"./assets/textures/polished_deepslate.png":F0,"./assets/textures/polished_diorite.png":B0,"./assets/textures/polished_granite.png":O0,"./assets/textures/polished_tuff.png":z0,"./assets/textures/poppy.png":V0,"./assets/textures/potatoes_stage0.png":H0,"./assets/textures/potatoes_stage1.png":G0,"./assets/textures/potatoes_stage2.png":W0,"./assets/textures/potatoes_stage3.png":X0,"./assets/textures/potted_azalea_bush_plant.png":q0,"./assets/textures/potted_azalea_bush_side.png":Y0,"./assets/textures/potted_azalea_bush_top.png":j0,"./assets/textures/potted_flowering_azalea_bush_plant.png":K0,"./assets/textures/potted_flowering_azalea_bush_side.png":Z0,"./assets/textures/potted_flowering_azalea_bush_top.png":$0,"./assets/textures/powder_snow.png":J0,"./assets/textures/powered_rail.png":Q0,"./assets/textures/powered_rail_on.png":eb,"./assets/textures/prismarine.png":tb,"./assets/textures/prismarine_bricks.png":sb,"./assets/textures/pumpkin_side.png":nb,"./assets/textures/pumpkin_stem.png":ib,"./assets/textures/pumpkin_top.png":ob,"./assets/textures/purple_candle.png":rb,"./assets/textures/purple_candle_lit.png":ab,"./assets/textures/purple_concrete.png":lb,"./assets/textures/purple_concrete_powder.png":cb,"./assets/textures/purple_glazed_terracotta.png":ub,"./assets/textures/purple_shulker_box.png":_b,"./assets/textures/purple_stained_glass.png":hb,"./assets/textures/purple_stained_glass_pane_top.png":db,"./assets/textures/purple_terracotta.png":pb,"./assets/textures/purple_wool.png":fb,"./assets/textures/purpur_block.png":gb,"./assets/textures/purpur_pillar.png":mb,"./assets/textures/purpur_pillar_top.png":vb,"./assets/textures/quartz_block_bottom.png":xb,"./assets/textures/quartz_block_side.png":bb,"./assets/textures/quartz_block_top.png":Mb,"./assets/textures/quartz_bricks.png":yb,"./assets/textures/quartz_pillar.png":Sb,"./assets/textures/quartz_pillar_top.png":Eb,"./assets/textures/rail.png":Tb,"./assets/textures/rail_corner.png":wb,"./assets/textures/raw_copper_block.png":Cb,"./assets/textures/raw_gold_block.png":Ab,"./assets/textures/raw_iron_block.png":Rb,"./assets/textures/red_candle.png":Db,"./assets/textures/red_candle_lit.png":Pb,"./assets/textures/red_concrete.png":Lb,"./assets/textures/red_concrete_powder.png":Ib,"./assets/textures/red_glazed_terracotta.png":Ub,"./assets/textures/red_mushroom.png":kb,"./assets/textures/red_mushroom_block.png":Nb,"./assets/textures/red_nether_bricks.png":Fb,"./assets/textures/red_sand.png":Bb,"./assets/textures/red_sandstone.png":Ob,"./assets/textures/red_sandstone_bottom.png":zb,"./assets/textures/red_sandstone_top.png":Vb,"./assets/textures/red_shulker_box.png":Hb,"./assets/textures/red_stained_glass.png":Gb,"./assets/textures/red_stained_glass_pane_top.png":Wb,"./assets/textures/red_terracotta.png":Xb,"./assets/textures/red_tulip.png":qb,"./assets/textures/red_wool.png":Yb,"./assets/textures/redstone_block.png":jb,"./assets/textures/redstone_dust_dot.png":Kb,"./assets/textures/redstone_dust_line0.png":Zb,"./assets/textures/redstone_dust_line1.png":$b,"./assets/textures/redstone_lamp.png":Jb,"./assets/textures/redstone_lamp_on.png":Qb,"./assets/textures/redstone_ore.png":e1,"./assets/textures/redstone_torch.png":t1,"./assets/textures/redstone_torch_off.png":s1,"./assets/textures/reinforced_deepslate_bottom.png":n1,"./assets/textures/reinforced_deepslate_side.png":i1,"./assets/textures/reinforced_deepslate_top.png":o1,"./assets/textures/repeater.png":r1,"./assets/textures/repeater_on.png":a1,"./assets/textures/repeating_command_block_back.png":l1,"./assets/textures/repeating_command_block_conditional.png":c1,"./assets/textures/repeating_command_block_front.png":u1,"./assets/textures/repeating_command_block_side.png":_1,"./assets/textures/respawn_anchor_bottom.png":h1,"./assets/textures/respawn_anchor_side0.png":d1,"./assets/textures/respawn_anchor_side1.png":p1,"./assets/textures/respawn_anchor_side2.png":f1,"./assets/textures/respawn_anchor_side3.png":g1,"./assets/textures/respawn_anchor_side4.png":m1,"./assets/textures/respawn_anchor_top.png":v1,"./assets/textures/respawn_anchor_top_off.png":x1,"./assets/textures/rooted_dirt.png":b1,"./assets/textures/rose_bush_bottom.png":M1,"./assets/textures/rose_bush_top.png":y1,"./assets/textures/sand.png":S1,"./assets/textures/sandstone.png":E1,"./assets/textures/sandstone_bottom.png":T1,"./assets/textures/sandstone_top.png":w1,"./assets/textures/scaffolding_bottom.png":C1,"./assets/textures/scaffolding_side.png":A1,"./assets/textures/scaffolding_top.png":R1,"./assets/textures/sculk.png":D1,"./assets/textures/sculk_catalyst_bottom.png":P1,"./assets/textures/sculk_catalyst_side.png":L1,"./assets/textures/sculk_catalyst_side_bloom.png":I1,"./assets/textures/sculk_catalyst_top.png":U1,"./assets/textures/sculk_catalyst_top_bloom.png":k1,"./assets/textures/sculk_sensor_bottom.png":N1,"./assets/textures/sculk_sensor_side.png":F1,"./assets/textures/sculk_sensor_tendril_active.png":B1,"./assets/textures/sculk_sensor_tendril_inactive.png":O1,"./assets/textures/sculk_sensor_top.png":z1,"./assets/textures/sculk_shrieker_bottom.png":V1,"./assets/textures/sculk_shrieker_can_summon_inner_top.png":H1,"./assets/textures/sculk_shrieker_inner_top.png":G1,"./assets/textures/sculk_shrieker_side.png":W1,"./assets/textures/sculk_shrieker_top.png":X1,"./assets/textures/sculk_vein.png":q1,"./assets/textures/sea_lantern.png":Y1,"./assets/textures/sea_pickle.png":j1,"./assets/textures/seagrass.png":K1,"./assets/textures/short_grass.png":Z1,"./assets/textures/shroomlight.png":$1,"./assets/textures/shulker_box.png":J1,"./assets/textures/slime_block.png":Q1,"./assets/textures/small_amethyst_bud.png":eM,"./assets/textures/small_dripleaf_side.png":tM,"./assets/textures/small_dripleaf_stem_bottom.png":sM,"./assets/textures/small_dripleaf_stem_top.png":nM,"./assets/textures/small_dripleaf_top.png":iM,"./assets/textures/smithing_table_bottom.png":oM,"./assets/textures/smithing_table_front.png":rM,"./assets/textures/smithing_table_side.png":aM,"./assets/textures/smithing_table_top.png":lM,"./assets/textures/smoker_bottom.png":cM,"./assets/textures/smoker_front.png":uM,"./assets/textures/smoker_front_on.png":_M,"./assets/textures/smoker_side.png":hM,"./assets/textures/smoker_top.png":dM,"./assets/textures/smooth_basalt.png":pM,"./assets/textures/smooth_stone.png":fM,"./assets/textures/smooth_stone_slab_side.png":gM,"./assets/textures/sniffer_egg_not_cracked_bottom.png":mM,"./assets/textures/sniffer_egg_not_cracked_east.png":vM,"./assets/textures/sniffer_egg_not_cracked_north.png":xM,"./assets/textures/sniffer_egg_not_cracked_south.png":bM,"./assets/textures/sniffer_egg_not_cracked_top.png":MM,"./assets/textures/sniffer_egg_not_cracked_west.png":yM,"./assets/textures/sniffer_egg_slightly_cracked_bottom.png":SM,"./assets/textures/sniffer_egg_slightly_cracked_east.png":EM,"./assets/textures/sniffer_egg_slightly_cracked_north.png":TM,"./assets/textures/sniffer_egg_slightly_cracked_south.png":wM,"./assets/textures/sniffer_egg_slightly_cracked_top.png":CM,"./assets/textures/sniffer_egg_slightly_cracked_west.png":AM,"./assets/textures/sniffer_egg_very_cracked_bottom.png":RM,"./assets/textures/sniffer_egg_very_cracked_east.png":DM,"./assets/textures/sniffer_egg_very_cracked_north.png":PM,"./assets/textures/sniffer_egg_very_cracked_south.png":LM,"./assets/textures/sniffer_egg_very_cracked_top.png":IM,"./assets/textures/sniffer_egg_very_cracked_west.png":UM,"./assets/textures/snow.png":kM,"./assets/textures/soul_campfire_fire.png":NM,"./assets/textures/soul_campfire_log_lit.png":FM,"./assets/textures/soul_fire_0.png":BM,"./assets/textures/soul_fire_1.png":OM,"./assets/textures/soul_lantern.png":zM,"./assets/textures/soul_sand.png":VM,"./assets/textures/soul_soil.png":HM,"./assets/textures/soul_torch.png":GM,"./assets/textures/spawner.png":WM,"./assets/textures/sponge.png":XM,"./assets/textures/spore_blossom.png":qM,"./assets/textures/spore_blossom_base.png":YM,"./assets/textures/spruce_door_bottom.png":jM,"./assets/textures/spruce_door_top.png":KM,"./assets/textures/spruce_leaves.png":ZM,"./assets/textures/spruce_log.png":$M,"./assets/textures/spruce_log_top.png":JM,"./assets/textures/spruce_planks.png":QM,"./assets/textures/spruce_sapling.png":ey,"./assets/textures/spruce_trapdoor.png":ty,"./assets/textures/stone.png":sy,"./assets/textures/stone_bricks.png":ny,"./assets/textures/stonecutter_bottom.png":iy,"./assets/textures/stonecutter_saw.png":oy,"./assets/textures/stonecutter_side.png":ry,"./assets/textures/stonecutter_top.png":ay,"./assets/textures/stripped_acacia_log.png":ly,"./assets/textures/stripped_acacia_log_top.png":cy,"./assets/textures/stripped_bamboo_block.png":uy,"./assets/textures/stripped_bamboo_block_top.png":_y,"./assets/textures/stripped_birch_log.png":hy,"./assets/textures/stripped_birch_log_top.png":dy,"./assets/textures/stripped_cherry_log.png":py,"./assets/textures/stripped_cherry_log_top.png":fy,"./assets/textures/stripped_crimson_stem.png":gy,"./assets/textures/stripped_crimson_stem_top.png":my,"./assets/textures/stripped_dark_oak_log.png":vy,"./assets/textures/stripped_dark_oak_log_top.png":xy,"./assets/textures/stripped_jungle_log.png":by,"./assets/textures/stripped_jungle_log_top.png":My,"./assets/textures/stripped_mangrove_log.png":yy,"./assets/textures/stripped_mangrove_log_top.png":Sy,"./assets/textures/stripped_oak_log.png":Ey,"./assets/textures/stripped_oak_log_top.png":Ty,"./assets/textures/stripped_spruce_log.png":wy,"./assets/textures/stripped_spruce_log_top.png":Cy,"./assets/textures/stripped_warped_stem.png":Ay,"./assets/textures/stripped_warped_stem_top.png":Ry,"./assets/textures/structure_block.png":Dy,"./assets/textures/structure_block_corner.png":Py,"./assets/textures/structure_block_data.png":Ly,"./assets/textures/structure_block_load.png":Iy,"./assets/textures/structure_block_save.png":Uy,"./assets/textures/sugar_cane.png":ky,"./assets/textures/sunflower_back.png":Ny,"./assets/textures/sunflower_bottom.png":Fy,"./assets/textures/sunflower_front.png":By,"./assets/textures/sunflower_top.png":Oy,"./assets/textures/suspicious_gravel_0.png":zy,"./assets/textures/suspicious_gravel_1.png":Vy,"./assets/textures/suspicious_gravel_2.png":Hy,"./assets/textures/suspicious_gravel_3.png":Gy,"./assets/textures/suspicious_sand_0.png":Wy,"./assets/textures/suspicious_sand_1.png":Xy,"./assets/textures/suspicious_sand_2.png":qy,"./assets/textures/suspicious_sand_3.png":Yy,"./assets/textures/sweet_berry_bush_stage0.png":jy,"./assets/textures/sweet_berry_bush_stage1.png":Ky,"./assets/textures/sweet_berry_bush_stage2.png":Zy,"./assets/textures/sweet_berry_bush_stage3.png":$y,"./assets/textures/tall_grass_bottom.png":Jy,"./assets/textures/tall_grass_top.png":Qy,"./assets/textures/tall_seagrass_bottom.png":eS,"./assets/textures/tall_seagrass_top.png":tS,"./assets/textures/target_side.png":sS,"./assets/textures/target_top.png":nS,"./assets/textures/terracotta.png":iS,"./assets/textures/tinted_glass.png":oS,"./assets/textures/tnt_bottom.png":rS,"./assets/textures/tnt_side.png":aS,"./assets/textures/tnt_top.png":lS,"./assets/textures/torch.png":cS,"./assets/textures/torchflower.png":uS,"./assets/textures/torchflower_crop_stage0.png":_S,"./assets/textures/torchflower_crop_stage1.png":hS,"./assets/textures/trial_spawner_bottom.png":dS,"./assets/textures/trial_spawner_side_active.png":pS,"./assets/textures/trial_spawner_side_active_ominous.png":fS,"./assets/textures/trial_spawner_side_inactive.png":gS,"./assets/textures/trial_spawner_side_inactive_ominous.png":mS,"./assets/textures/trial_spawner_top_active.png":vS,"./assets/textures/trial_spawner_top_active_ominous.png":xS,"./assets/textures/trial_spawner_top_ejecting_reward.png":bS,"./assets/textures/trial_spawner_top_ejecting_reward_ominous.png":MS,"./assets/textures/trial_spawner_top_inactive.png":yS,"./assets/textures/trial_spawner_top_inactive_ominous.png":SS,"./assets/textures/tripwire.png":ES,"./assets/textures/tripwire_hook.png":TS,"./assets/textures/tube_coral.png":wS,"./assets/textures/tube_coral_block.png":CS,"./assets/textures/tube_coral_fan.png":AS,"./assets/textures/tuff.png":RS,"./assets/textures/tuff_bricks.png":DS,"./assets/textures/turtle_egg.png":PS,"./assets/textures/turtle_egg_slightly_cracked.png":LS,"./assets/textures/turtle_egg_very_cracked.png":IS,"./assets/textures/twisting_vines.png":US,"./assets/textures/twisting_vines_plant.png":kS,"./assets/textures/vault_bottom.png":NS,"./assets/textures/vault_bottom_ominous.png":FS,"./assets/textures/vault_front_ejecting.png":BS,"./assets/textures/vault_front_ejecting_ominous.png":OS,"./assets/textures/vault_front_off.png":zS,"./assets/textures/vault_front_off_ominous.png":VS,"./assets/textures/vault_front_on.png":HS,"./assets/textures/vault_front_on_ominous.png":GS,"./assets/textures/vault_side_off.png":WS,"./assets/textures/vault_side_off_ominous.png":XS,"./assets/textures/vault_side_on.png":qS,"./assets/textures/vault_side_on_ominous.png":YS,"./assets/textures/vault_top.png":jS,"./assets/textures/vault_top_ejecting.png":KS,"./assets/textures/vault_top_ejecting_ominous.png":ZS,"./assets/textures/vault_top_ominous.png":$S,"./assets/textures/verdant_froglight_side.png":JS,"./assets/textures/verdant_froglight_top.png":QS,"./assets/textures/vine.png":eE,"./assets/textures/warped_door_bottom.png":tE,"./assets/textures/warped_door_top.png":sE,"./assets/textures/warped_fungus.png":nE,"./assets/textures/warped_nylium.png":iE,"./assets/textures/warped_nylium_side.png":oE,"./assets/textures/warped_planks.png":rE,"./assets/textures/warped_roots.png":aE,"./assets/textures/warped_roots_pot.png":lE,"./assets/textures/warped_stem.png":cE,"./assets/textures/warped_stem_top.png":uE,"./assets/textures/warped_trapdoor.png":_E,"./assets/textures/warped_wart_block.png":hE,"./assets/textures/water_flow.png":dE,"./assets/textures/water_still.png":pE,"./assets/textures/weathered_chiseled_copper.png":fE,"./assets/textures/weathered_copper.png":gE,"./assets/textures/weathered_copper_bulb.png":mE,"./assets/textures/weathered_copper_bulb_lit.png":vE,"./assets/textures/weathered_copper_bulb_lit_powered.png":xE,"./assets/textures/weathered_copper_bulb_powered.png":bE,"./assets/textures/weathered_copper_door_bottom.png":ME,"./assets/textures/weathered_copper_door_top.png":yE,"./assets/textures/weathered_copper_grate.png":SE,"./assets/textures/weathered_copper_trapdoor.png":EE,"./assets/textures/weathered_cut_copper.png":TE,"./assets/textures/weeping_vines.png":wE,"./assets/textures/weeping_vines_plant.png":CE,"./assets/textures/wet_sponge.png":AE,"./assets/textures/wheat_stage0.png":RE,"./assets/textures/wheat_stage1.png":DE,"./assets/textures/wheat_stage2.png":PE,"./assets/textures/wheat_stage3.png":LE,"./assets/textures/wheat_stage4.png":IE,"./assets/textures/wheat_stage5.png":UE,"./assets/textures/wheat_stage6.png":kE,"./assets/textures/wheat_stage7.png":NE,"./assets/textures/white_candle.png":FE,"./assets/textures/white_candle_lit.png":BE,"./assets/textures/white_concrete.png":OE,"./assets/textures/white_concrete_powder.png":zE,"./assets/textures/white_glazed_terracotta.png":VE,"./assets/textures/white_shulker_box.png":HE,"./assets/textures/white_stained_glass.png":GE,"./assets/textures/white_stained_glass_pane_top.png":WE,"./assets/textures/white_terracotta.png":XE,"./assets/textures/white_tulip.png":qE,"./assets/textures/white_wool.png":YE,"./assets/textures/wither_rose.png":jE,"./assets/textures/yellow_candle.png":KE,"./assets/textures/yellow_candle_lit.png":ZE,"./assets/textures/yellow_concrete.png":$E,"./assets/textures/yellow_concrete_powder.png":JE,"./assets/textures/yellow_glazed_terracotta.png":QE,"./assets/textures/yellow_shulker_box.png":eT,"./assets/textures/yellow_stained_glass.png":tT,"./assets/textures/yellow_stained_glass_pane_top.png":sT,"./assets/textures/yellow_terracotta.png":nT,"./assets/textures/yellow_wool.png":iT}),dP=["stone","dirt","grass","sand","gravel","poppy","water","lava","snow","ice"],pP=n=>dP.some(e=>n.includes(e)),fP=Object.entries(hP).filter(([n,e])=>pP(n)).map(([n,e])=>e);class hl{constructor(){wi(this,"animate",()=>{xi.begin();const e=this.clock.getDelta();if(this.inputHandler&&this.inputHandler.update(e),this.voxelWorld&&(this.voxelWorld.update(e),this.useChunkRendering&&this.camera)){const t=this.camera.position,s=this.lastChunkUpdatePosition,i=Math.abs(t.x-s.x),o=Math.abs(t.z-s.z);if((i>4||o>4)&&(this.voxelWorld.updateVisibleChunks(t.x,t.z).then(r=>{r>0&&console.log(`Requested ${r} new chunks`)}).catch(r=>{console.error("Error updating chunks:",r)}),this.lastChunkUpdatePosition={x:t.x,z:t.z},this.debugMenuVisible&&(console.log(`Updating chunks at position: ${Math.round(t.x)}, ${Math.round(t.z)}`),this.debugMenuElement))){const r=this.debugMenuElement.style.backgroundColor;this.debugMenuElement.style.backgroundColor="rgba(50, 100, 150, 0.7)",setTimeout(()=>{this.debugMenuElement.style.backgroundColor=r},200)}}this.renderManager&&this.renderManager.render(),this.updateDebugInfo(),xi.end(),requestAnimationFrame(this.animate)});this.textures=new qD,this.textures.setTexturePaths(fP),this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.controls=null,this.clock=new yi,this.voxelWorld=null,this.inputHandler=null,this.renderManager=null,this.textureDebugger=null,this.debugMenuVisible=!1,this.debugMenuElement=null,document.addEventListener("keydown",e=>{e.key==="F3"&&this.toggleDebugMenu()})}async initialize(){try{await this.textures.load(),this.voxelWorld=new oP(null,this.textures),this.textureDebugger=new aP(this.textures,this.voxelWorld.blockRegistry),this.textureDebugger.initialize(),this.initScene(),this.createDebugMenu(),this.toggleDebugMenu(),window.addEventListener("keydown",e=>{e.key==="F4"&&this.rebuildWorldWithDebuggerSettings(),e.key==="F5"&&this.toggleWaterShader(),e.key==="F1"&&this.toggleTerrainType()}),window.addEventListener("beforeunload",()=>{this.voxelWorld&&this.voxelWorld.cleanup()}),this.animate()}catch(e){console.error("Error in init:",e)}}rebuildWorldWithDebuggerSettings(){if(!this.textureDebugger||!this.voxelWorld)return;const e=this.textureDebugger.getValidTextures();this.voxelWorld.blockRegistry.setValidTextures(e),this.scene.children.filter(s=>s.isMesh&&s!==this.debugMesh).forEach(s=>this.scene.remove(s)),this.voxelWorld.worldData={},this.voxelWorld.generateSimpleTerrain(5),this.voxelWorld.buildCulledMesh()}initScene(){const e=new el;e.background=new Ae(11184895);const t=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(10,70,10),t.lookAt(new O(0,0,0)),this.renderManager=new rP(e,t),this.voxelWorld.scene=e,this.voxelWorld.initializeTerrain(3),this.voxelWorld.setViewDistance(5),this.voxelWorld.buildAllChunkMeshes(t.position.x,t.position.z),window.addEventListener("keydown",o=>{o.key==="F6"&&this.toggleChunkRendering()});const s=new nl(16777215,.3);e.add(s);const i=new sl(16777215,5);i.position.set(50,75,50),i.castShadow=!0,e.add(i),this.inputHandler=new YD(t,document.body,{movementSpeed:25}),this.scene=e,this.camera=t,this.useChunkRendering=!0,this.lastChunkUpdatePosition={x:t.position.x,z:t.position.z}}createDebugMenu(){this.debugMenuElement=document.createElement("div"),this.debugMenuElement.style.position="absolute",this.debugMenuElement.style.top="0",this.debugMenuElement.style.left="0",this.debugMenuElement.style.padding="8px",this.debugMenuElement.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.debugMenuElement.style.color="#fff",this.debugMenuElement.style.fontFamily="monospace",this.debugMenuElement.style.zIndex="999",this.debugMenuElement.style.display="none",document.body.appendChild(this.debugMenuElement)}toggleDebugMenu(){this.debugMenuVisible=!this.debugMenuVisible,this.debugMenuElement.style.display=this.debugMenuVisible?"block":"none"}toggleWaterShader(){if(!this.voxelWorld||!this.voxelWorld.meshBuilder)return;this.voxelWorld.meshBuilder.useAdvancedWaterShader=!this.voxelWorld.meshBuilder.useAdvancedWaterShader;const e=document.createElement("div");e.textContent=`Water Shader: ${this.voxelWorld.meshBuilder.useAdvancedWaterShader?"Advanced":"Basic"}`,e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="10px",e.style.borderRadius="5px",e.style.zIndex="1000",document.body.appendChild(e),setTimeout(()=>{document.body.removeChild(e)},2e3),this.voxelWorld.buildCulledMesh()}toggleTerrainType(){if(!this.voxelWorld)return;const e=this.voxelWorld.terrainType===Pt.PERLIN?Pt.DENSITY:Pt.PERLIN;this.voxelWorld.setTerrainType(e),this.camera&&this.voxelWorld.updateVisibleChunks(this.camera.position.x,this.camera.position.z);const t=document.createElement("div");t.textContent=`Terrain Generator: ${e===Pt.PERLIN?"Perlin Heightmap":"Density Function"}`,t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.color="white",t.style.padding="10px",t.style.borderRadius="5px",t.style.zIndex="1000",document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},2e3)}updateDebugInfo(){var k,W,j,H,q,N,J,ne,he,ye,Ie,X,te,ue,se,ve,we,ge,qe;if(!this.debugMenuVisible)return;let e=0,t=0;if(this.renderManager&&this.renderManager.renderer){const Be=this.renderManager.renderer;e=Be.info.render.calls,t=Be.info.render.triangles,Be.info.render.points,Be.info.render.lines}const s=(W=(k=this.voxelWorld)==null?void 0:k.meshBuilder)!=null&&W.useAdvancedWaterShader?"Advanced":"Basic",i=((j=this.voxelWorld)==null?void 0:j.terrainType)===Pt.PERLIN?"Perlin Heightmap":"Density Function",o=this.useChunkRendering?"Chunk-Based":"Single Mesh",r=((q=(H=this.voxelWorld)==null?void 0:H.meshBuilder)==null?void 0:q.chunkMeshes.size)||0,a=((J=(N=this.voxelWorld)==null?void 0:N.chunkManager)==null?void 0:J.chunks.size)||0,l=((ne=this.voxelWorld)==null?void 0:ne.viewDistance)||0,c=this.useChunkRendering?"ON":"OFF",u=((ye=(he=this.voxelWorld)==null?void 0:he.chunkQueue)==null?void 0:ye.length)||0,_=((X=(Ie=this.voxelWorld)==null?void 0:Ie.chunksBeingGenerated)==null?void 0:X.size)||0,h=((ue=(te=this.voxelWorld)==null?void 0:te.chunkGenManager)==null?void 0:ue.workerCount)||0,d=Math.round(((se=this.camera)==null?void 0:se.position.x)||0),g=Math.round(((ve=this.camera)==null?void 0:ve.position.y)||0),m=Math.round(((we=this.camera)==null?void 0:we.position.z)||0);let f=0,p=0,E=0,y=0;(ge=this.voxelWorld)!=null&&ge.generationStats&&this.voxelWorld.generationStats.totalChunks>0&&(y=this.voxelWorld.generationStats.totalChunks,f=(this.voxelWorld.generationStats.totalTime/y).toFixed(2),p=this.voxelWorld.generationStats.maxTime.toFixed(2),E=this.voxelWorld.generationStats.minTime.toFixed(2));let S=0,D=0,A=0,C=0,P=0,M=0,v=0,w=0,B=0;if((qe=this.voxelWorld)!=null&&qe.buildStats&&this.voxelWorld.buildStats.totalMeshes>0){C=this.voxelWorld.buildStats.totalMeshes,S=(this.voxelWorld.buildStats.totalTime/C).toFixed(2),D=this.voxelWorld.buildStats.maxTime.toFixed(2),A=this.voxelWorld.buildStats.minTime.toFixed(2),P=this.voxelWorld.buildStats.lastTime.toFixed(2),M=this.voxelWorld.buildStats.workerTime||0,v=this.voxelWorld.buildStats.mainThreadTime||0,w=this.voxelWorld.buildStats.lastWorkerTime||0,B=this.voxelWorld.buildStats.lastMainThreadTime||0;const Be=C>0?(M/C).toFixed(2):0,Oe=C>0?(v/C).toFixed(2):0;M=Be,v=Oe}this.debugMenuElement.innerHTML=`
      <strong>DEBUG INFO</strong><br/>
      Draw Calls: ${e}<br/>
      Triangles: ${t}<br/>
      Position: ${d}, ${g}, ${m}<br/>
      Water Shader: ${s}<br/>
      Terrain Type: ${i}<br/>
      Rendering: ${o}<br/>
      Chunks: ${r} rendered / ${a} total<br/>
      View Distance: ${l} chunks<br/>
      Dynamic Loading: ${c}<br/>
      Workers: ${h} threads<br/>
      Chunks Processing: ${_} generating / ${u} queued<br/>
      <strong>Performance (ms):</strong><br/>
      Generation: avg=${f} min=${E} max=${p} (${y})<br/>
      Mesh Build: avg=${S} min=${A} max=${D} last=${P} (${C})<br/>
      Worker/Main: worker=${M} main=${v} last=${w}/${B}<br/>
      <small>Press F3 to hide/show debug</small>
      <small>Press F5 to toggle water shader</small>
      <small>Press F6 to toggle chunk rendering</small>
      <small>Press F7 to toggle terrain generator</small>
    `}toggleChunkRendering(){if(this.useChunkRendering=!this.useChunkRendering,this.voxelWorld.meshes.forEach(e=>this.scene.remove(e)),this.voxelWorld.meshBuilder._removeAllChunkMeshes(this.scene),this.useChunkRendering){this.voxelWorld.buildAllChunkMeshes(this.camera.position.x,this.camera.position.z);const e=document.createElement("div");e.textContent="Chunk-Based Rendering Enabled",e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="10px",e.style.borderRadius="5px",e.style.zIndex="1000",document.body.appendChild(e),setTimeout(()=>{document.body.removeChild(e)},2e3)}else{this.voxelWorld.buildCulledMesh();const e=document.createElement("div");e.textContent="Single Mesh Rendering Enabled",e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="10px",e.style.borderRadius="5px",e.style.zIndex="1000",document.body.appendChild(e),setTimeout(()=>{document.body.removeChild(e)},2e3)}}}document.addEventListener("DOMContentLoaded",async()=>{const n=new hl;try{await n.initialize()}catch(e){console.error("Failed to initialize the game:",e)}});const gP=new hl;gP.initialize();

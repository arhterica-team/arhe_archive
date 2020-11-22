import { Metamorphose, MysticalAbility } from './types';
export type MartialTraitUid =
  | "survival_adaptation"
  | "crossbowman"
  | "сombat_concentration"
  | "сombat_morale"
  | "combat_stand"
  | "heavy_hand"
  | "dual_weapon"
  | "exotic_weapon"
  | "stunner"
  | "сritical_сhance"
  | "archer"
  | "thrower"
  | "murderer_mark"
  | "new_personality"
  | "warrior`s_reflex"
  | "salute"
  | "sprint"
  | "doubtful_experience"
  | "flanking"
  | "taactical_move"
  | "fencing:cavalry_weapons"
  | "fencing:heavy_butt"
  | "fencing:staying_shot"
  | "fencing:skullcrusher"
  | "fencing:Steel_echo"
  | "fencing:traditional_technique"
  | "fencing:grab_the_blades"
  | "fencing:cutting_movement"
  | "fencing:bypass_blade"
  | "fencing:long_lunge"
  | "fencing:heavy_lunge"
  | "fencing:quick_blade"
  | "fencing:light_shots"
  | "fencing:shield_retraction"
  | "fencing:shield_strike"
  | "fencing:knocking_technique"
  | "fencing:Wide_swings"
  | "fencing:bloody_nibbling"
  | "fencing:live_sting"
  | "fencing:maestro`s_blade"
  | "fencing:fencing_pair"
  | "fencing_etiquette"
  | "hammering nails"
  | "battle_prayer"
  | "elusive_arlequin"
  | "theater_tricks"
  | "adaptation_of_victory"
  | "adjutant"
  | "disturbing_aura"
  | "lightning_reaction"
  | "combat_determination"
  | "bittern"
  | "great_warrior"
  | "march"
  | "warrior-loner"
  | "fire_support"
  | "dags_owner"
  | "grenadier"
  | "deviant_behaivor"
  | "finishing_off"
  | "dual_fighting"
  | "threatening_stance"
  | "defender"
  | "scar_collector"
  | "accustomed_conditions"
  | "expert_of_techniques"
  | "instinct"
  | "nominal_weapon"
  | "cavalry_strike"
  | "affecting_hit"
  | "weapon_control"
  | "bloodthirsty"
  | "maestro_thrower"
  | "masterful_turn"
  | "boundary consciousness"
  | "master_of_primer"
  | "on_the_alert"
  | "intangible"
  | "rollover"
  | "officer's_slap"
  | "panic_reaction"
  | "personal_contact"
  | "insidious_target"
  | "pistolero"
  | "field_savior"
  | "gunpowder_shooter"
  | "professionalism"
  | "joy_of_battle"
  | "ranger"
  | "weight_distribution"
  | "dogfight"
  | "self-defence"
  | "delirium_witness"
  | "sniper"
  | "steel_warrior"
  | "stern_eye"
  | "tactical_plan"
  | "precise_blade"
  | "holding_a_strike"
  | "fencing_balance"
  | "shooting drill"
  | "fundamental_stance"
  | "quick_arrow"
  | "quick_sight"
  | "shielder"
  | "batal_voice"
  | "berserk"
  | "run&shoot"
  | "combat_leader"
  | "combat_orders"
  | "true_sight"
  | "grenadier_master"
  | "dominate_stance"
  | "perfect_balance"
  | "dual_mastery"
  | "duelist"
  | "elite_rider"
  | "horrifying"
  | "famous_person"
  | "key_technique"
  | "counter_shot"
  | "counter_technique"
  | "bloody_cut"
  | "master_of_techniques"
  | "master_of_style"
  | "master_of_throws"
  | "mystical_premonition"
  | "mystical_attack"
  | "unbroken"
  | "surrounded_beast"
  | "moving_target"
  | "witness_of_violence"
  | "power_of_titanium"
  | "deadly_improvisation"
  | "deadly_techniques"
  | "shadow_of_death"
  | "trained_archer"
  | "favorite_weapon"
  | "veteran`s_mark"
  | "hound_of_war"
  | "gunpowder_expert"
  | "ranger_expert"
  | "crossbow_expert"
  | "adventurer"
  | "immortal_warrior"
  | "without_fear"
  | "whirlwind_of_death"
  | "grandmaster_of_battle"
  | "pain_experience"
  | "violence_expert"
  | "war_icon"
  | "crowned_warrior"
  | "mystic_warrior"
  | "legend`s_mark"


export type InjureUid =
  | "bloody_injury"
  | "nervous_teak"
  | "trauma"
  | "lost_finger"
  | "rumen"
  | "fracture"
  | "broken_teeth"
  | "scar"
  | "nose_injury"
  | "ear_damage"
  | "gray_hair"
  | "madness"
  | "sex_injury"
  | "blood_infection"
  | "coma"
  | "lost_leg"
  | "heavy_fracture"
  | "lost_arm"
  | "lungs_injury"
  | "lost_eye"
  | "voice_injury"
  | "brain_injury"

export type MetamorphosesUid =
  | "mythical_curse"
  | "impersonal_world"
  | "noise_herald"
  | "storm_wing"
  | "gross_image"
  | "doppelganger"
  | "icon_of_crazies"
  | "ghost's_pocket"
  | "evil_voices"
  | "metahunger"
  | "minor_phenomena"
  | "mark_of_free_mind"
  | "spheres'_music"
  | "night_resident"
  | "election_of_higher_powers"
  | "romanticist_obsession"
  | "person_incognito"
  | "metaphor_eater"
  | "poltergeist"
  | "sign_of_failure"
  | "esoteric's_curse"
  | "sacred_strips"
  | "wanderer's_dreams"
  | "shame_of_the_sinner"
  | "secret_names"
  | "keeper_of_secrets"
  | "foggy-cloak"
  | "familiar"
  | "illnes_incognito"
  | "cold_sails"
  | "chonicical_shadows"
  | "25-th_hour"

export type MysticalAbilitiesUid =
  | "intuition"
  | "manipulation"
  | "abandonment"
  | "fortune_favorite"
  | "Fate's_mark"
  | "demon_trick"
  | "ulterior_gift"
  | "guide"
  | "the_palaces_of_the_mind"
  | "string_walker"
  | "dream_сatcher"
  | "whammy"
  | "diviwalker"
  | "superdurability"
  | "superdexterity"
  | "anomaly_compass"
  | "genuine_vision"
  | "genuine_force"
  | "winds_of_the_invisible"
  | "scepter"
  | "dragon_heart"
  | "imago_regeneration"
  | "third_eye"
  | "witness_of_serenity"
  | "archeflash"
  | "person_of_triumph"
  | "true_fate_mark"
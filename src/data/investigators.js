import * as keys from "./keys";

export const classes = [
    keys.GUARDIAN,
    keys.SEEKER,
    keys.ROGUE,
    keys.MYSTIC,
    keys.SURVIVOR,
    keys.NEUTRAL
];

const investigators = {
    [keys.GUARDIAN] : [
        keys.CAROLYN_FERN,
        keys.LEO_ANDERSON,
        keys.MARK_HARRIGAN,
        keys.ROLAND_BANKS,
        keys.ZOEY_SAMARAS
    ],

    [keys.SEEKER] : [
        keys.DAISY_WALKER,
        keys.MINH_THI_PHAN,
        keys.NORMAN_WITHERS,
        keys.REX_MURPHY,
        keys.URSULA_DOWNS
    ],

    [keys.ROGUE] : [
        keys.SKIDS_OTOOLE,
        keys.FINN_EDWARDS,
        keys.JENNY_BARNES,
        keys.SEFINA_ROUSSEAU
    ],

    [keys.MYSTIC] : [
        keys.AGNES_BAKER,
        keys.AKACHI_ONYELE,
        keys.FATHER_MATEO,
        keys.JIM_CULVER,
        keys.MARIE_LAMBEAU
    ],

    [keys.SURVIVOR] : [
        keys.ASHCAN_PETE,
        keys.CALVIN_WRIGHT,
        keys.SILAS_MARSH,
        keys.WENDY_ADAMS,
        keys.WILLIAM_YORICK
    ],

    [keys.NEUTRAL] : [
        keys.LOLA_HAYES
    ]
};

export default investigators;

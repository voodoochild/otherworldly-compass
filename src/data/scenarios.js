import * as keys from './keys';

const scenarios = {
  [keys.THE_GATHERING]: {
    chaosBag: {
      standard:
        '+1 0 0 0 -1 -1 -2 -3 -4 skull skull tablet cultist eldersign autofail'
    },
    steps: [
      {
        // condition : (campaign) => (campaign.history.foo && campaign.history.badThingCount > 3),
        text: 'Uhoh, this is going to be rough'
      }
    ],
    standalone: {
      chaosBag: {},
      history: {}
    },
    resolutions: []
  }
};

export default scenarios;

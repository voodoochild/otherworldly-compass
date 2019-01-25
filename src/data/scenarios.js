import * as keys from './keys';

const scenarios = {
  [keys.THE_GATHERING]: {
    intro: ['intro'],
    setup: ['setup_1', 'setup_2', 'setup_3', 'setup_4'],
    resolutions: [
      [
        'no_resolution__intro',
        'no_resolution__outcome_1',
        'no_resolution__outcome_2',
        'no_resolution__outcome_3',
        'no_resolution__outcome_4'
      ],
      [
        'resolution_1__intro',
        'resolution_1__outcome_1',
        'resolution_1__outcome_2',
        'resolution_1__outcome_3',
        'resolution_1__outcome_4'
      ],
      [
        'resolution_2__intro',
        'resolution_2__outcome_1',
        'resolution_2__outcome_2',
        'resolution_2__outcome_3'
      ],
      [
        'resolution_3__intro',
        'resolution_3__outcome_1',
        'resolution_3__outcome_2',
        'resolution_3__outcome_3',
        'resolution_3__outcome_4',
        'resolution_3__outcome_5'
      ]
    ]
  },

  [keys.THE_MIDNIGHT_MASKS]: {
    intro: ({ log }) => {
      const strings = [];

      if (
        log[keys.THE_GATHERING] &&
        log[keys.THE_GATHERING].litaForcedToFindOthers
      ) {
        strings.push('intro_1');
      }

      strings.push('intro_2');
      strings.push('intro_3');

      return strings;
    },

    setup: ({ log, investigators }) => {
      const strings = ['setup_1', 'setup_2', 'setup_3'];
      const theGatheringLog = log[keys.THE_GATHERING];

      // TODO: Handle dead investigators
      if (investigators.length === 2) {
        strings.push('setup_4__2_players');
      } else if (investigators.length === 3) {
        strings.push('setup_4__3_players');
      } else if (investigators.length === 4) {
        strings.push('setup_4__4_players');
      }

      if (theGatheringLog && log[keys.THE_GATHERING].houseBurned) {
        strings.push('setup_5');
      } else if (theGatheringLog && log[keys.THE_GATHERING].houseStanding) {
        strings.push('setup_6');
      }

      strings.push('setup_7');

      if (theGatheringLog && log[keys.THE_GATHERING].ghoulPriestAlive) {
        strings.push('setup_8');
      }

      return strings;
    },

    resolutions: [
      ['no_resolution__intro'],
      ({ log }) => [
        'resolution_1__intro',
        'resolution_1__outcome_1',
        'resolution_1__outcome_2',
        {
          text: 'resolution_1__outcome_3',
          form: [
            {
              type: 'checkbox',
              callback: value => {
                console.log(log, value);
              }
            }
          ]
        },
        'resolution_1__outcome_4'
      ],
      [
        'resolution_2__intro',
        'resolution_2__outcome_1',
        'resolution_2__outcome_2',
        'resolution_2__outcome_3',
        'resolution_2__outcome_4',
        'resolution_2__outcome_5'
      ]
    ]
  }
};

export default scenarios;

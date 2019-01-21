import * as keys from './keys';

const scenarios = {
  [keys.THE_GATHERING]: {
    intro: 'intro',
    setup: ['setup__1', 'setup__2', 'setup__3', 'setup__4'],
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
  }
};

export default scenarios;

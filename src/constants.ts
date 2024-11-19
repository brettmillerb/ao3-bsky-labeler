import { LabelSet } from './types.js';

const TEAM_LABELS: LabelSet = {
  labelsThreadFormat: 'thread',
  labelLimit: 1,
  rootPostContent: 'Like the replies to this post to add an EPL team label to your account',
  deletePost: {
    rkey: '3lbchcfeegm26',
    content: 'Like this post to delete the EPL team label from your account.',
  },
  labels: [
    {
      rkey: '3lbchcfbjzq2k',
      identifier: 'NUFC',
      post: 'Like this post to give yourself the NUFC label',
      locales: [
        {
          lang: 'en',
          name: 'NUFC | Newcastle United | NEW',
          description: 'Supporters of Newcastle United FC',
        },
      ],
    }
  ],
};

export const LABEL_SETS: LabelSet[] = [TEAM_LABELS];

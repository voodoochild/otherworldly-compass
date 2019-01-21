const campaigns = {};

function Campaign(data = {}) {
  return Object.assign(
    {
      title: '',
      investigators: [],
      scenario: 'The Gathering',
      completed: [],
      log: [],
      chaosBag: []
    },
    data
  );
}

export function getCampaigns() {
  return campaigns;
}

export function getCampaign(key) {
  return campaigns[key];
}

export function createCampaign() {
  const key = Date.now();
  const campaign = Campaign({ key });

  campaigns[key] = campaign;

  return campaign;
}

export default {
  getCampaigns,
  getCampaign,
  createCampaign
};

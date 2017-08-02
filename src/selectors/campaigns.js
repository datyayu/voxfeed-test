export class CampaignsSelectors {
  static getCampaign(state, id) {
    const campaigns = state.campaigns.campaigns;
    return { ...campaigns[id], id };
  }
}

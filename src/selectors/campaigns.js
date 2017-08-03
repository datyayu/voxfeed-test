export class CampaignsSelectors {
  static getCampaign(state, id) {
    const campaigns = state.campaigns.campaigns;
    const selectedCampaign = campaigns[id];

    return selectedCampaign && { ...selectedCampaign, id };
  }
}

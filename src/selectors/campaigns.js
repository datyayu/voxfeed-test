/**
 * Campaigns-related selectors.
 */
export class CampaignsSelectors {
  /**
   * Get the specified campaign info.
   *
   * @param {Object} state Application state.
   * @param {Number} id Campaign's id.
   * @returns {Object|undefined} The matched campaign or undefined if not found.
   */
  static getCampaign(state, id) {
    const campaigns = state.campaigns.campaigns;
    const selectedCampaign = campaigns[id];

    return selectedCampaign && { ...selectedCampaign, id };
  }
}

import { CampaignsSelectors } from "./campaigns";

/**
 * getCampaign
 */

describe("getCampaign", () => {
  it("should return the specified campaign", () => {
    const state = {
      campaigns: {
        campaigns: {
          1: { brand: "test" }
        }
      }
    };
    const result = CampaignsSelectors.getCampaign(state, 1);

    expect(result).toEqual({ id: 1, brand: "test" });
  });

  it("should return the undefined if the campaign isn't found", () => {
    const state = {
      campaigns: {
        campaigns: {
          1: { brand: "test" }
        }
      }
    };
    const result = CampaignsSelectors.getCampaign(state, 2);

    expect(result).toBe(undefined);
  });
});

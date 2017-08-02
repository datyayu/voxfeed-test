const initialState = {
  campaigns: {
    1: {
      brand: "Squalo",
      groupAd: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    2: {
      brand: "Telcel",
      groupAd: "Telcel promos",
      logo: "/assets/logo_telcel.png"
    }
  }
};

export function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

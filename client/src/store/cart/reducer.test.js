import reducer from "./reducer";

describe("cart reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          list: [],
          isLoaded: false,
        },
        {}
      )
    ).toEqual({
      list: [],
      isLoaded: false,
    });
  });

  it("should to set list", () => {
    expect(
      reducer(
        {
          list: [],
          isLoaded: false,
        },
        {
          type: "SET_CART_LIST",
          payload: [{ product: { id: 123, name: "test" }, cartQuantity: 3 }],
        }
      )
    ).toEqual({
      list: [{ product: { id: 123, name: "test" }, cartQuantity: 3 }],
      isLoaded: true,
    });
  });

  it("should to set isLoaded to false", () => {
    expect(
      reducer(
        {
          list: [],
          isLoaded: true,
        },
        {
          type: "IS_NOT_LOADED",
        }
      )
    ).toEqual({
      list: [],
      isLoaded: false,
    });
  });
});

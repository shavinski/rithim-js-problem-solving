describe("upperFirst", function () {
  it("works with input 1", function () {
    expect(upperFirst("fred")).toBe("Fred");
  });
  it("works with input 2", function () {
    expect(upperFirst("")).toBe("");
  });
});
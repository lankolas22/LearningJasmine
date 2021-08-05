describe("CandyCounter", function () {
  let count;

  beforeEach(function () {
    count = new CandyCounter();
  });

  describe("when a customer takes 200 Reeces", function () {
    it("should subtract 200 from total Reeces", function () {
      TakeCandy(Reeces, 200);
      expect((ReecesTotal = 800));
    });
  });

  describe("when an employee adds 400 Gummies", function () {
    it("should add 400 to total Gummies", function () {
      AddCandy(Gummies, 400);
      expect((GummiesTotal = 1400));
    });
  });
});

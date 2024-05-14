if (pm.response.to.have.status(400)) {
  pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
  });
} else {
  pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
  });
};
pm.test("Content-Type is present", function () {
  pm.response.to.have.header("Content-Type");
});

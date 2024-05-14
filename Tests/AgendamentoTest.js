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

var apiKey = pm.environment.get("apiKey");
var baseUrl = pm.environment.get("baseUrl");
pm.test("API Key", function () {
  pm.expect(apiKey).to.equal("87sK2jFh4Lp9qW6zXv3bCcV5mBn1M0zQ8lR6tY9eAs4D3fG2hJ8kI7uH3jK5gFn");
});


// Test for base URL
pm.test("Check base URL", function () {
  pm.expect(baseUrl).to.eql("https://teleaulaapi-dev.renova.app.br");
});

// Test for status code
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

// Test for response time
pm.test("Response time is less than 500ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test for response body
pm.test("Response body should contain expected data", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("key").that.equals("value");
  // Add more assertions as needed
});

// Test for response headers
pm.test("Response headers contain expected values", function () {
  pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
  // Add more assertions as needed
});

// Test for a specific endpoint
pm.test("GET /endpoint returns expected data", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("key").that.equals("value");
  // Add more assertions as needed
});

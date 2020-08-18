const { assert } = require("chai");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const launchChromeAndRunLighthouse = async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    onlyCategories: [
      "performance",
      "accessibility",
      "best-practices",
      "seo",
      "pwa",
    ],
    port: chrome.port,
  };
  const runnerResult = await lighthouse("http://localhost:9000", options);

  await chrome.kill();
  return runnerResult.lhr;
};

describe("Lighthouse PWA Testing", function () {
  // Should complete tests within 10s else considered fail
  this.timeout(30000);
  let results;
  before("run base test", done => {
    launchChromeAndRunLighthouse().then(({ categories }) => {
      results = Object.keys(categories).reduce((acc, category) => {
        acc[category] = (categories[category].score || 0) * 100;
        return acc;
      }, {});
      done();
    });
  });

  it("Performance score > 90", done => {
    assert.equal(results.performance > 90, true);
    done();
  });
  it("Accessibility score > 90", done => {
    assert.equal(results.accessibility > 90, true);
    done();
  });
  it("Best Practices score > 90", done => {
    assert.equal(results["best-practices"] > 90, true);
    done();
  });
  it("SEO score > 90", done => {
    assert.equal(results.seo > 90, true);
    done();
  });
  // Set this to above 90 once PWA masking icon issue is fixed
  it("PWA score > 85", done => {
    assert.equal(results.pwa > 85, true);
    done();
  });

  after(() => {
    console.table(results);
  });
});

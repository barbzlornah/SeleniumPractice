const { Builder, By,} = require ("selenium-webdriver");

const driver = new Builder()
      .forBrowser("firefox")
      .build();

async function radioButtonForm() {
      try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
            await driver.findElement(By.css("#title")).sendKeys("Title that has atleast twenty characters");
            await driver.findElement(By.css("#description")).sendKeys("Description must be atleast twenty characters");
            await (await driver.findElement(By.css("div:nth-child(1) > label > span.custom-control-indicator"))).click();
      } catch (error) {
            console.log(error);
            
      }
}
radioButtonForm();


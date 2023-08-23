const { By, until, Builder, Key } = require('selenium-webdriver');
const Home = require('../../components/fashion/Home.js');

class HomeFashion {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    async skipGetStartedModal() {
        const home = new Home();
        try {
            await this.driver.wait(until.elementLocated(By.xpath(home.getStartedButton)), 60000);
            await this.driver.findElement(By.xpath(home.getStartedButton)).click()
            return true;
        } catch (error) {
            console.log("Erro: " + error)
            return false;
        }
    }






    // => apps
    get checkout() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[1]'
        }
    }
    get connect() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[2]'
        }
    }
    get products() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[3]'
        }
    }
    get transactions() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[4]'
        }
    }
    get pointOfSale() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[5]'
        }
    }
    get pointOfSale() {
        return {
            homeXpatch: '/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[5]'
        }
    }
    // parei aqui

}

module.exports = new HomeFashion()

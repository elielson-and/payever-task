

class Home {
    constructor() {

    }

    // -- GetStarted button --
    get getStartedButton() {
        return ('//*[@id="cdk-overlay-5"]/welcome-screen/div/div/button/pe-progress-button-content/div')
    }

    // -- App Settings --
    get editButton() {
        return ('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[1]/div[2]/div')
    }

}

module.exports = Home;
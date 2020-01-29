# Instant Technologies

## Chime SharePoint Web Client Extension

![QnA chatbot](./assets/chime-sharepoint.PNG)

## Summary
This project is a tool to create a SharePoint app (.sppkg file) for your Chime web client. This app will enable your end users to start a helpdesk or support conversation directly from your SharePoint sites. To learn more about Chime, please visit our website at https://www.addchime.com/index.html.

## Prerequisites
- NodeJS
- SharePoint admin access
- [SharePoint app catalog](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog)

## Step 1 - Setup this project for your Chime SharePoint deployment
- Install Gulp `npm install -g gulp`
- Clone this repo `git clone https://github.com/instant-technologies/chime-sp-extension.git`
- Change directory to this project and install dependencies `npm install`
- Update the string value in `/src/index.ts` with your Chime web client URL, for example `https://ch-teams-net1.imchime.com/Chime/WebClient?id=1`

## Step 2 - Build your Chime SharePoint app
- Run `gulp bundle --ship`
- Run `gulp package-solution --ship`
- The previous command will generate a `chime-extension.sppkg` file located in the `/sharepoint` folder. This is what you need to upload to your SharePoint app catalog.


## Step 3 - Deploy
- [Enable the CDN in your Office 365 tenant to host your app](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/hosting-extension-from-office365-cdn)
- Go to your SharePoint app catalog
- Upload your `chime-extension.sppkg` file to your SharePoint app catalog
- Go to one of your SharePoint sites
- Click the site settings button, and click __Add an app__
- Click __Chime Web Client__

After following the steps above, you should see a Chime button at the right-bottom-corner of your SharePoint page. Clicking that button should launch your Chime web client.

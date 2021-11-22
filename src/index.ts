/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

WA.chat.sendChatMessage('Welcome to Atomic Energy Week 49 Event!', 'AEW49');

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
   }
}

// CLOCK 01

WA.room.onEnterZone('clock1', () => {
    currentPopup =  WA.ui.openPopup("clockPopup1","It's " + time,[]);
})

WA.room.onLeaveZone('clock1', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
   }
}

// SMARTYS NOOK

WA.room.onEnterZone('nook', () => {
    currentPopup =  WA.ui.openPopup("nookPopup","Welcome to Smartys Nook! ",[{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);
})

//WA.room.onLeaveZone('nook', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
// ATOMIC ENERGY WEEK CODE //

/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

WA.chat.sendChatMessage('Welcome to Atomic Energy Week 49 Event!', 'AEW49');

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

// Clock 01
WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

// Clock 02
WA.room.onEnterZone('clock1', () => {
    currentPopup =  WA.ui.openPopup("clockPopup1","It's " + time,[]);
})

WA.room.onLeaveZone('clock1', closePopUp)

//Smarty's Nook Welcome
WA.room.onEnterZone('nook', () => {
    currentPopup =  WA.ui.openPopup("nookPopup","Welcome to Smarty's Nook! ",[]);
})

WA.room.onLeaveZone('nook', closePopUp)

//Exhibit  Information
WA.room.onEnterZone('entrance', () => { 
    currentPopup = WA.ui.openPopup("entrancePopup","Welcome to AEW49 TECHNICAL EXHIBIT! ", [
        { 
            label: "More info", 
            className: "primary", 
            callback: (popup) => { 
                WA.nav.openTab('https://aew.pnri.dost.gov.ph/aew/2021/files/AEW%20Programmes_111921.pdf'); 
                popup.close(); 
            } 
        },
        {
            label: "X",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]);
});

WA.room.onLeaveZone('entrance', closePopUp)

//Smarty's Nook Zone 1
WA.room.onEnterZone('Nook1Zone', () => { 
    currentPopup = WA.ui.openPopup("Nook1ZonePopup","PNRDC Book of Abstracts", [
        { 
            label: "Access",
            className: "primary",
            callback: (popup) => {
                WA.nav.openTab('https://www.canva.com/design/DAEwhw7JwQk/vOQ0CoAxGdggdxxN_qT8Tw/view?utm_content=DAEwhw7JwQk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton');
                popup.close();
            }
        },
        {
            label: "X",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]);
});

WA.room.onLeaveZone('Nook1Zone', closePopUp)

//Smarty's Nook Zone 2
WA.room.onEnterZone('Nook2Zone', () => { 
    currentPopup = WA.ui.openPopup("Nook2ZonePopup"," Access to Nuclear 101 education resources", [
        { 
            label: "Access",
            className: "primary",
            callback: (popup) => { 
                WA.nav.openTab('https://services.pnri.dost.gov.ph/nstep/ResourceMaterial ');
                popup.close();
            }
        },
        {
            label: "X",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]);
});

WA.room.onLeaveZone('Nook2Zone', closePopUp)

//Smarty's Nook Zone 3
WA.room.onEnterZone('Nook3Zone', () => { 
    currentPopup = WA.ui.openPopup("Nook3ZonePopup","View PNRI Brochures",[
        { 
            label: "View", 
            className: "primary", 
            callback: (popup) => { 
                WA.nav.openTab('https://www.canva.com/design/DAEwbfh5TL0/r5ta6utMc1N9ZiHA8VmyTg/view?utm_content=DAEwbfh5TL0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'); 
                popup.close(); 
            } 
        },
        {
            label: "X",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]); 
});

WA.room.onLeaveZone('Nook3Zone', closePopUp)

//Smarty's Nook Zone 4
WA.room.onEnterZone('Nook4Zone', () => { 
    currentPopup = WA.ui.openPopup("Nook4ZonePopup","View Library Resources",[
        { 
            label: "View", 
            className: "primary", 
            callback: (popup) => { WA.nav.openTab('https://www.canva.com/design/DAEwaXOmygY/v0YDNYNW7Cokx0HePvyYsA/view?utm_content=DAEwaXOmygY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'); 
            popup.close(); 
            } 
        },
        {
            label: "X",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]); 
});

WA.room.onLeaveZone('Nook4Zone', closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
   }
}
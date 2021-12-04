// ATOMIC ENERGY WEEK CODE //

/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

//WA.chat.sendChatMessage('Welcome to Atomic Energy Week 49 Event!', 'AEW49');

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
    currentPopup = WA.ui.openPopup("entrancePopup","AEW49 Atomic Energy Week Technical Exhibits ", [
        { 
            label: "More info", 
            className: "primary", 
            callback: (popup) => { 
                WA.nav.openTab('https://drive.google.com/file/d/1yDxmlf35ou73vgigCoj3QgwkNyM3OTq-/view?usp=sharing'); 
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

//Exit
WA.room.onEnterZone('exit', () => { 
    currentPopup = WA.ui.openPopup("exitPopup","Go back to Lobby?",[
        { 
            label: "Yes", 
            className: "primary", 
            callback: (popup) => { WA.nav.openTab('https://aewph.com/tev'); 
            popup.close(); 
            } 
        },
        {
            label: "No",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]); 
});

WA.room.onLeaveZone('exit', closePopUp)


//Reminder
WA.room.onEnterZone('reminder', () => { 
    currentPopup = WA.ui.openPopup("reminderPopup","This #AEW49 interactive Technical Exhibits can only accomodate 15 simultaneous users. Guests are requested to limit their time here (~up to 1hr) to allow others to try and explore this platform. Thank you!",[
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

WA.room.onLeaveZone('reminder', closePopUp)


//E1a
WA.room.onEnterZone('e1a', () => { 
    currentPopup = WA.ui.openPopup("e1aPopup","View more Videos from Labs to Riches",[
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

WA.room.onLeaveZone('e1a', closePopUp)

//E2a
WA.room.onEnterZone('e2a', () => { 
    currentPopup = WA.ui.openPopup("e2aPopup","View more Videos from Rise through NST",[
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

WA.room.onLeaveZone('e2a', closePopUp)

//E4a
WA.room.onEnterZone('e4a', () => { 
    currentPopup = WA.ui.openPopup("e4aPopup","View more Videos from Just for the Health of it!",[
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

WA.room.onLeaveZone('e4a', closePopUp)

//E5a
WA.room.onEnterZone('e5a', () => { 
    currentPopup = WA.ui.openPopup("e5aPopup","View more Videos A Journey from Cradle to Grave",[
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

WA.room.onLeaveZone('e5a', closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
   }
}
// var listener = function(evt) {
//     var selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         displayPrice();
//         var range = selection.getRangeAt(0);
//         var text = range.cloneContents().textContent;
//         console.log(text);
//     }

// };
// document.addEventListener('dblclick', listener);

// function displayPrice(){
//   chrome.notifications.create(getNotificationId(), {
//     title: "message.data.name",
//     iconUrl: 'hh.png',
//     type: 'basic',
//     message: "message.data.prompt"
//   }, function() {});
// }

// // Returns a new notification ID used in the notification.
// function getNotificationId() {
//   var id = Math.floor(Math.random() * 9007199254740992) + 1;
//   return id.toString();
// }

f=function(){
    var hasData=false;
    // console.log(window.getSelection().toString());
    // chrome.storage.sync.get(window.getSelection().toString(),function(items) {
    //     if(items){
    //         hasData=true;
    //         console.log("get");
    //         console.log(items);
    //     }else{
    //         console.log(window.getSelection().toString());
    //         chrome.storage.sync.set({[window.getSelection().toString()]:window.getSelection().toString()},function() {
    //             console.log("set");
    //             //string or array of string or object keys
    //         });
    //     }
    // })
    var a =window.getSelection().toString();
    a = a.trim();
    chrome.storage.sync.get(a,function(items) {
        console.log(items,"retrive items");
        if(items.hasOwnProperty(a)){
            console.log("retrive Data");
            console.log(a);
        }else{
            console.log(window.getSelection().toString());
            chrome.storage.sync.set({[a]:a},function() {
                    console.log("set");
                    console.log(a);
            });
        }
    })
    // console.log(window.getSelection().toString());
    // var a =window.getSelection().toString();
    // a = a.trim();

    // chrome.storage.sync.set({[a]:a},function() {

    //     console.log("set");
    //     console.log("a");
    //     //string or array of string or object keys
    //     chrome.storage.sync.get(a,function(items) {
    //         console.log("get");
    //         console.log(items);
    //     });
    // });
 }
 document.body.addEventListener('dblclick',f);


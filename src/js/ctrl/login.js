
try {
    ttrg.init.addLoadEvt(function() {
       alert("init");
    });
} catch (e) {
    console.error(e.stack);
}

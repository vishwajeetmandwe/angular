let obj = {
    os: "android",
    val: 45,
    fn: () => console.log(`Thd is Object`)
};
console.log(`Os is ${obj.os}`);
obj.fn();
console.log(`Val is ${obj['val']}`);
function cb(dt) {
    console.log(`Speed is ${dt['speed']}`);
    console.log(`Speed is ${dt}`);
    dt['speed'] = 40;
    //   dt() 
}
function cbProper(cr) {
    console.log(`Name is ${cr.crWt}`);
}
//cb(undefined)
cb(40);
cb(() => console.log('hi'));
cb(true);
cb({
    speed: 50
});

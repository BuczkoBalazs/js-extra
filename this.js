// "use strict";
// console.dir(this)

// "use strict";
(function(){
    // console.dir(this)
})();

const user = {
    name: "Scatman",
    getName: function() {
        console.log(this.name);
        (function(){
            console.dir(this)
        })();
        const af = () => console.dir(this.name)
        af()
    }
}
const ugn = user.getName
ugn()
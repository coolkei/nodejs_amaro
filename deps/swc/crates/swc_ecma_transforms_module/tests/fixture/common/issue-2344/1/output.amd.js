define([
    "require"
], function(require) {
    "use strict";
    class LoggingButton extends React.Component {
        handleClick = ()=>{
            console.log("this is:", this);
        };
        m() {
            this;
        }
        static a = ()=>this;
    }
});

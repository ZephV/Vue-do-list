;(function(){
    'use strict';

    new Vue({
        el: '#wrapper',
        data: {
            list: [],
            current: {}
        },
        methods: {
            add: function(){
                var  title = this.current.title;
                if(!title && title !== 0)return;
                var todo = Object.assign({},this.current);
                this.list.push(todo);
            },
            update:function(){},
            remove:function(){}
        }
    });

})();
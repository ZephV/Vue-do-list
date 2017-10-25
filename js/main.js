;(function(){
    'use strict';

    function copy(obj){
        return Object.assign({},obj);
    }

    new Vue({
        el: '#wrapper',
        data: {
            list: [],
            current: {}
        },
        methods: {
            merge: function(){

                var is_update = this.current.id;
                if(is_update){
                    var index = this.list.findIndex(function(item){
                        return item.id === is_update;
                    });
                    Vue.set(this.list,index,copy(this.current));
                }else{
                    var  title = this.current.title;
                    if(!title && title !== 0)return;

                    var todo = copy(this.current);
                    todo.id = this.next_id();
                    this.list.push(todo);
                }
                this.reset_current();
            },
            remove: function(id){
                this.list.splice(id,1);
            },

            next_id: function(){
                return this.list.length + 1;
            },

            set_current: function(todo){
                this.current = copy(todo);
            },

            reset_current: function(){
                this.set_current({});
            }
        }
    });

})();
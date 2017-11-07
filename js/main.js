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

        mounted :function(){
            this.list = ms.get('list') || this.list;
        },

        methods: {
            merge: function(){

                var is_update = this.current.id;
                if(is_update){
                    var index = this.find_index(is_update);
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
                var index = this.find_index(id);
                this.list.splice(index,1);
            },

            next_id: function(){
                return this.list.length + 1;
            },

            set_current: function(todo){
                this.current = copy(todo);
            },

            reset_current: function(){
                this.set_current({});
            },

            find_index: function(id){
                return this.list.findIndex(function(item){
                    return item.id  === id;
                })
            },

            toggle_complete: function(id){
                 var i = this.find_index(id);
                 Vue.set(this.list[i],'completed',!this.list[i].completed);

            }
        },

        watch:{
            list:{
                deep:true,
                handler:function(n,o){
                    if (n){
                        ms.set('list',n);
                    }else{
                        ms.set('list',[]);
                    }
                }
            }
        }
    });

})();
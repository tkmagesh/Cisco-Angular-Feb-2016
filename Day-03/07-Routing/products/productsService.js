angular
    .module("myApp.products").service("productsService", function(){
            this.getAll = function(){
                return [
                    {id: 1, name : "Pen", cost : 5, units : 100, desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis sunt quam, atque tempore perferendis iusto voluptatum deleniti repellendus laboriosam delectus vitae ad, cupiditate reiciendis enim reprehenderit sint sequi fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic magni, earum aut a obcaecati velit accusamus facilis sunt unde? Aut cum incidunt culpa consectetur, voluptas placeat omnis modi libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloribus eaque sequi inventore! Commodi earum velit sequi est vero id, deserunt alias ad explicabo, sapiente eligendi esse rem dolore rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda reprehenderit, sit eius et beatae eum laudantium tempora aperiam autem dicta saepe nihil. Eligendi repellat necessitatibus, deleniti libero accusantium! Reiciendis"},
                    {id: 2, name : "Hen", cost : 100, units : 200, desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis sunt quam, atque tempore perferendis iusto voluptatum deleniti repellendus laboriosam delectus vitae ad, cupiditate reiciendis enim reprehenderit sint sequi fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic magni, earum aut a obcaecati velit accusamus facilis sunt unde? Aut cum incidunt culpa consectetur, voluptas placeat omnis modi libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloribus eaque sequi inventore! Commodi earum velit sequi est vero id, deserunt alias ad explicabo, sapiente eligendi esse rem dolore rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda reprehenderit, sit eius et beatae eum laudantium tempora aperiam autem dicta saepe nihil. Eligendi repellat necessitatibus, deleniti libero accusantium! Reiciendis"},
                    {id: 3, name : "Ten", cost : 10, units : 10, desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis sunt quam, atque tempore perferendis iusto voluptatum deleniti repellendus laboriosam delectus vitae ad, cupiditate reiciendis enim reprehenderit sint sequi fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic magni, earum aut a obcaecati velit accusamus facilis sunt unde? Aut cum incidunt culpa consectetur, voluptas placeat omnis modi libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloribus eaque sequi inventore! Commodi earum velit sequi est vero id, deserunt alias ad explicabo, sapiente eligendi esse rem dolore rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda reprehenderit, sit eius et beatae eum laudantium tempora aperiam autem dicta saepe nihil. Eligendi repellat necessitatibus, deleniti libero accusantium! Reiciendis"},
                    {id: 4, name : "Den", cost : 1000, units : 10, desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis sunt quam, atque tempore perferendis iusto voluptatum deleniti repellendus laboriosam delectus vitae ad, cupiditate reiciendis enim reprehenderit sint sequi fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic magni, earum aut a obcaecati velit accusamus facilis sunt unde? Aut cum incidunt culpa consectetur, voluptas placeat omnis modi libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia doloribus eaque sequi inventore! Commodi earum velit sequi est vero id, deserunt alias ad explicabo, sapiente eligendi esse rem dolore rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda reprehenderit, sit eius et beatae eum laudantium tempora aperiam autem dicta saepe nihil. Eligendi repellat necessitatibus, deleniti libero accusantium! Reiciendis"}
                ]
            };
            this.get = function(id){
                return this.getAll().filter(function(product){
                    return product.id === id;
                })[0];
            }
        });


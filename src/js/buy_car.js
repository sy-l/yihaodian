//购物车主体
var cart = {
    allChecked: true, //是否全选
    total: 0,

};
// 取cookie
var items = getCookie("items") ? JSON.parse(getCookie("items")) : [];

cart.items = items;

// 根据数据动态生成表格
var tbody = document.querySelector('tbody');
// 不可以
fillCart();



function fillCart() {
    // 计算 小计

    subTotal()
    var str = "";
    for (var i = 0; i < cart.items.length; i++) {
        str = str + `
        <tr>
            <td>
                <input type="checkbox" ${cart.items[i].isChecked?'checked':''} class="check">
            </td>
            <td>${cart.items[i].itemName}</td>
            <td class="price">${cart.items[i].itemPrice}</td>
            <td class="count">
                <button class="add">+</button>
                <b>${cart.items[i].itemNum}</b>
                <button class="reduce">-</button>
            </td>
            <td class="subTotal">${cart.items[i].subTotal}</td>
            <td>
                <button class="del">删除</button>
            </td>
     </tr>
        `
    }

    tbody.innerHTML = str;
    // 总价格
    var allCheck = document.querySelectorAll(".allCheck");

    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = cart.allChecked;

    }
    var total = document.querySelector('.total');
    total.innerHTML = caltTotal(cart.items);

    // 可以获取
    var add = document.querySelectorAll('.add');

    for (var i = 0; i < add.length; i++) {
        add[i].index = i;
        add[i].onclick = function() {
            //alert(1);
            cart.items[this.index].itemNum = cart.items[this.index].itemNum + 1;
            setCookie("items", JSON.stringify(cart.items));
            fillCart();
        }
    }
    //减少操作
    var reduce = document.querySelectorAll('.reduce');

    for (var i = 0; i < reduce.length; i++) {
        reduce[i].index = i;
        reduce[i].onclick = function() {

            cart.items[this.index].itemNum = cart.items[this.index].itemNum - 1;
            if (cart.items[this.index].itemNum <= 1) {

                cart.items[this.index].itemNum = 1
            }
            setCookie("items", JSON.stringify(cart.items));
            fillCart();
        }
    }

    // 商品选中和取消选中
    // 获取选择框
    var checks = document.querySelectorAll('.check');
    for (var i = 0; i < checks.length; i++) {
        checks[i].index = i;
        checks[i].onchange = function() {
            // console.log(this.index);
            // console.log(this.checked);
            cart.items[this.index].isChecked = this.checked;
            var {
                items
            } = cart;
            if (items.every(el => el.isChecked)) {
                cart.allChecked = true;
            } else {
                cart.allChecked = false;
            }
            /* var res = items.every(function(el){
                return el.isChecked
            });
            if(res){

            } */
            fillCart();
        }
    }

    // 全选 取消全选
    var allCheck = document.querySelectorAll(".allCheck");
    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].onchange = function() {
            cart.allChecked = this.checked;
            // 当取消 选中时 所有的商品要取消选择
            if (!this.checked) {
                cart.items.forEach(function(el) {
                    el.isChecked = false;
                });
            } else {
                cart.items.map(function(el) {
                    el.isChecked = true;
                });
            }
            fillCart();
        }
    }

    // 删除
    var del = document.querySelectorAll(".del");
    for (var i = 0; i < del.length; i++) {
        del[i].index = i;
        del[i].onclick = function() {
            // setCookie("items", JSON.stringify(items));
            if (confirm("您确认删除吗")) {
                cart.items.splice(this.index, 1);
                console.log(cart.items)
                setCookie("items", JSON.stringify(cart.items));

                fillCart();

            }
        }
    }
}


// 计算小计
function subTotal() {
    for (var i = 0; i < cart.items.length; i++) {
        cart.items[i].subTotal = parseFloat((cart.items[i].itemPrice * cart.items[i].itemNum).toFixed(2));
    }
}


//计算总价格
function caltTotal(items) {
    // 判断 这个数组中  

    var subItem = items.filter(function(el) {
        return el.isChecked
    })
    var total = 0;

    for (var i = 0; i < subItem.length; i++) {
        total += subItem[i].subTotal;
    }

    return total;
}
//购物车主体结束
//商品移入效果
$(function() {
    $('.sea').mouseenter(function() {
        $(this).find(".car_none").stop().fadeIn();

    })
    $('.sea').mouseleave(function(event) {
        $(this).find(".car_none").stop().fadeOut();

    });
});
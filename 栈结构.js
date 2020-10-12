// 栈的封装
function Stack(){
    // 栈中的属性
    this.items = []

    // 栈的相关操作
    // 1.将元素压入栈
    // 用this的方式创建方法相当于给对象实例添加方法，比较浪费内存，不推荐使用
    // this.push = function () {

    // }
    
    // 用prototype的方式添加方法，是给原型对象添加方法，对内存的消耗小，建议使用这种方式添加方法
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }

    // 2.从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }
    
    // 3.查看一下栈顶的元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    // 4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    // 5.获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.items.length
    }

    // 6.toString方法
    Stack.prototype.toString = function () {
        return this.items.join(' ')
    }
}

// 栈的使用
let s = new Stack()

s.push(30)
s.push(30)
s.push(30)
s.push(34)
s.pop()
console.log(s.toString())
// 封装链表类
function LinkList(){
    // 内部类，节点类
    function Node(data){
        this.data = data
        this.next = null
    }

    // 属性
    this.head = null
    this.length = 0

    // 1.追加方法
    LinkList.prototype.append = function (data) {
        // 1.创建一个新节点
        let newNode = new Node(data)

        // 2.判断是否是第一个节点
        if(this.length == 0) { // 2.1 第一个节点
            this.head = newNode
        } else {               // 2.2 不是第一个节点
            let current = this.head
            while(current.next){
                current = current.next
            }

            current.next = newNode
        }

        // 3. length+1
        this.length += 1
    }

    // 2.toString方法
    LinkList.prototype.toString = function () {
        // 1.定义变量
        let current = this.head,
            listString = ''

        // 2.循环获取一个个的节点
        while(current){
            listString += current.data + " "
            current = current.next
        }

        return listString
    }

    // 3.insert方法
    LinkList.prototype.insert = function (position, data) {
        // 1.对position进行越界判断
        if(position < 0 || position > this.length) return false

        // 2.根据data创建newNode
        let newNode = new Node(data)

        // 3.判断插入的位置是否是第一个
        if(position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let index = 0,
                current = this.head,
                previous = null
            while (index++ < position) {
                previous = current
                current && (current = current.next)  
            }
            newNode.next = current
            previous.next = newNode
        }

        // 4.length+1
        this.length += 1
    }

    // 4.get方法
    LinkList.prototype.get = function (position) {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null

        // 2.获取对应data
        let current = this.head,
            index = 0
        while(index++ < position){ 
            current = current.next
        }

        return current.data
    }

    // 5.indexOf方法
    LinkList.prototype.indexOf = function (data) {
        // 1.定义变量
        let current = this.head,
            index = 0

        // 2.开始查找
        while(current){
            if(current.data == data){
                return index
            }
            current = current.next
            index += 1
        }
        // 3.最后没有找到，返回-1
        return -1
    }

    // 6.updata() 方法
    LinkList.prototype.updata = function (position, newData) {
        // 1.越界判断
        if(position < 0 || position >= this.length) return false

        // 2.查找正确的节点
        let cur = this.head,
            index = 0;
        while(index++ < position){
            cur = cur.next
        }
        //  3.将position位置的node的data修改成newData
        cur.data = newData

        return true
    }

    // 7.removeAt()方法
    LinkList.prototype.removeAt = function (position) {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null

        // 2.判断是否删除的是第一个节点
        let cur = this.head
        if(position == 0) {
            this.head = this.head.next
        }else {
            let index = 0,
                previous = null
            while(index++ < position){
                previous = cur
                cur = cur.next
            }

            // 前一个节点的next指向，cur的next接口
            previous.next = cur.next
        }
        
        // 3.length - 1
        this.length = this.length - 1
        
        return cur.data
    }

    // 8.remove()方法
    LinkList.prototype.remove = function (data) {
        // 1.获取data在列表中的位置
        let position = this.indexOf(data)

        // 2.根据位置节点，删除节点
        return this.removeAt(position)
    }

    // 9.isEmpty() 方法
    LinkList.prototype.isEmpty = function () {
        return this.length == 0
    }

    // 10.size()方法
    LinkList.prototype.size = function () {
        return this.length
    }

}

// 测试代码
let list = new LinkList()
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.insert(0,'aaa')
list.insert(3,'bbb')
console.log(list.toString())
console.log(list.get(2))
console.log(list.indexOf('bbb'))
list.remove(5)
console.log(list.toString())
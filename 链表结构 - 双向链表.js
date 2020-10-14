// 封装双向链表
function DoublyLinkedList(){
    // 内部类
    function Node(data){
        this.data = data
        this.prev = null
        this.next = null
    }

    // 属性
    this.head = null
    this.tail = null
    this.length = 0

    // 常见方法
    // 1.append方法
    DoublyLinkedList.prototype.append = function (data) {
        // 1.创建一个新的节点
        let newNode = new Node(data)

        // 2.判断是否是第一个节点
        if(this.length == 0) { // 2.1是第一个节点
            this.head = newNode
            this.tail = newNode
        } else {               // 2.2不是第一个节点
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        // 3.length + 1
        this.length += 1
    }

    // 2.将链表转成字符串形式
    // 2.1 toString方法
    DoublyLinkedList.prototype.toString = function() {
        return this.backwardString()
    }
    // 2.2 forwardString方法
    DoublyLinkedList.prototype.fordwardString = function () {
        // 1.定义变量
        let current = this.tail,
            resultString = ""

        // 2.依次向前遍历，获取每一个节点
        while(current){
            resultString += current.data + " "
            current = current.prev
        }
        return resultString
    }

    // 2.3 backwordString方法
    DoublyLinkedList.prototype.backwardString = function () {
        // 1.定义变量
        let current = this.head,
            resultString = ""

        // 2.向后遍历，获取每一个节点
        while(current){
            resultString += current.data + " "
            current = current.next
        }
        return resultString
    }

    // 3.insert方法
    DoublyLinkedList.prototype.insert = function(position, data) {
        // 1.越界判断
        if(position < 0 || position > this.length) return false

        // 2.根据data创建新的节点
        let newNode = new Node(data)

        // 3.判断原来的列表是否为空
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        } else {
            // 3.判断position是否为零
            if(position == 0){ // 3.1 判断position是否为零
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else if(position == this.length){ // 3.2 position == length
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                let current = this.head,
                    index = 0
                while(index++ < position){
                    current = current.next
                }

                // 修改指针
                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
            }
        }

        // 4.length + 1
        this.length += 1

        return true
    }

    // 4.get方法
    DoublyLinkedList.prototype.get = function(position) {
        // 1.越界判断
        if (position < 0 || position >= 0) return null

        // this.length / 2 > position：从头向后遍历
        // this.length / 2 < position：从后向前遍历
        // 2.获取元素
        let current = this.head,
            index = 0
        while(index++ < position){
            current = current.next
        }

        return current.data
    }

    // 5.indexOf方法
    DoublyLinkedList.prototype.indexOf = function(data) {
        // 1.定义变量
        let current = this.head,
            index = 0

        // 查找和data相同的节点
        while(current) {
            if(current.data == data) return index
            current = current.next
            index++
        }
        return -1
    }

    // 6.update方法
    DoublyLinkedList.prototype.update = function (position, newData){
        // 1.越界判断
        if(position < 0 || position >= this.length) return false

        // 2.寻找正确的节点
        let current = this.head,
            index = 0
        while (index++ < position) {
            current = current.next
        }

        // 3.修改找到节点的data信息
        current.data = newData

        return true
            
    }

    // 7.removeAt方法
    DoublyLinkedList.prototype.removeAt = function (position){
        // 1.越界判断
        if(position < 0 || position >= this.length) return null

        // 2.是否只有一个节点
        let current = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            if(position == 0){ // 判断是否删除的是第一个节点
                this.head.next.prev = null
                this.head = this.head.next
            } else if(position == this.length -1) { // 最后的节点
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                let index = 0

                while(index++ < position){
                    current = current.next
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        // 3.length - 1
        this.length -= 1
        return current.data
    }

    // 8.remove方法
    DoublyLinkedList.prototype.remove = function (data) {
        // 1.根据data获取下标值
        let index = this.indexOf(data)

        // 2.根据index删除对应位置的节点
        return this.removeAt(index)
    }

    // 9.isEmpty方法
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.length == 0
    }

    // 10.size方法
    DoublyLinkedList.prototype.size = function () {
        return this.length
    }

    // 11.获取链表的第一个元素
    DoublyLinkedList.prototype.getHead = function () {
        return this.head.data
    }

    // 12.获取链表的最后一个元素
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail.data
    }
}

// 测试代码
let list = new DoublyLinkedList()

list.append('abc')
list.append('bbc')
list.append('cbc')

list.insert(3,'nnn')
list.update(3,'newupdate')
console.log(list.removeAt(3))
list.remove('abc')
console.log(list.toString())
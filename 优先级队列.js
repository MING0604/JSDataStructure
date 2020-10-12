// 封装优先级队列
function PriorityQueue() {
    // 在PriorityQueue中新建了一个类
    function QueueElement(element,priority) {
        this.element = element
        this.priority = priority
    }

    // 封装属性  
    let item = []

    // 实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 1.创建QueueElement对象
        let queueElement = new QueueElement(element, priority)

        // 2.判断队列是否为空
        if(this.items.length == 0) {
            this.items.push(queueElement)
        }else{
            let added = false
            for(let i=0;i<this.items.length;i++){
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }

            if(!added){
                this.items.push(queueElement)
            }
        }
    }

}

// 测试代码
let  pq = new PriorityQueue()

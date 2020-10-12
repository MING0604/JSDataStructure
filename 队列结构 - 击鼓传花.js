function fn(nameList,number){
    // 1.创建一个队列
    let queue = []

    // 2.将所有人依次加入到队列中
    for(let i=0;i<nameList.length;i++){
        queue.push(nameList[i])
    }
    // 3.开始数数字
    while(queue.length > 1){
        // 不是num的时候，重新加入到队列末尾
        // 是num的时候，将其从队列中删除
        // 3.1 num数字之前的人重新发放入到队列末尾
        for(let i = 0; i < number-1; i++){
            queue.push(queue.shift())
        }
        // 3.2 num对应的人，直接从队列中删除掉
        queue.shift()
    }
    // 4.获取剩下那个人
    return nameList.indexOf(queue[0])
}
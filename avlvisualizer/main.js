tree1 = {
    value: 5,
    children:{
        left: {
            value: 3,
            children:{
                left: {
                    value: 2,
                    children:{
                        left: {
                            value: 1,
                            children: {
                                left: {
                                    value: 0,
                                    children: {
                                        left: {
                                            value: -1,
                                            children: {
                                                left: null,
                                                right: null
                                            }
                                        },
                                        right: null
                                    }
                                },
                                right: null
                            }
                        },
                        right: null
                    }
                },
                right: {
                    value: 4,
                    children:{
                        left:null,
                        right:null
                    }
                }
            }
        },
        right: {
            value: 8,
            children: {
                left: {
                    value: 6,
                    children: {
                        left: null,
                        right: {
                            value: 7,
                            children:{
                                right: null,
                                left: null
                            }
                        }
                    }
                },
                right: {
                    value: 9,
                    children: {
                        left: null,
                        right: null
                    }
                }
            }
        }
    }
}

function drawTree(treeNode){
    toReturn = 
    `<div class="treeNode">
        <div class="value">${treeNode.value}</div>`
    toReturn += `<div class="children">`
    if(treeNode.children.left != null)
        toReturn += drawTree(treeNode.children.left)
    else
        toReturn += "<div></div>"
    if(treeNode.children.right != null)
        toReturn += drawTree(treeNode.children.right)
    else
        toReturn += "<div></div>"
    toReturn += `</div></div>`
    return toReturn
}

function getHeight(treeNode){
    let h = 0
    let heights = {left: 0, right: 0}
    if(treeNode.children.left != null)
        heights.left = getHeight(treeNode.children.left)
        h = Math.max(h, heights.left)
    if(treeNode.children.right != null)
        heights.right = getHeight(treeNode.children.right)
        h = Math.max(h, heights.right)
    console.log(treeNode.value+" diff of "+ Math.abs(heights.left - heights.right) + " height "+(h+1))
    let diff = Math.abs(heights.left - heights.right)
    if(diff > 1){
        console.log (treeNode.value +" is red")
    }else if (diff==1){
        console.log (treeNode.value +" is yellow")
    }else{
        console.log (treeNode.value +" is green")
    }
    return h+1
}
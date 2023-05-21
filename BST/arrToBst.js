class TreeNode {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

const sortedArrayToBST = (nums) => {
    if(!nums.length) return null
    let m = Math.floor(nums.length/2)
    let root = new TreeNode(nums[m])
    root.left = sortedArrayToBST(nums.slice(0,m))
    root.right = sortedArrayToBST(nums.slice(m))
    return root
}
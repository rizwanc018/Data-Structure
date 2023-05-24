function isValidBST(root) {
    return isBST(root);
}

function isBST(node) {
    if (node) {
        if (node.left && node.left.val > node.val) return false
        if (node.right && node.right.val < node.val) return false
        return ( isBST(node.left) && isBST(node.right))
    } else return true
}


//  GPT
function isValidBST(root) {
    return isBST(root, -Infinity, Infinity);
  }
  
  function isBST(node, min, max) {
    if (node === null) {
      return true;
    }
  
    if (node.val <= min || node.val >= max) {
      return false;
    }
  
    return (
      isBST(node.left, min, node.val) && 
      isBST(node.right, node.val, max)
    );
  }
  
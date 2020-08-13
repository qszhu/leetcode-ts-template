///<reference types="../../typings" />

type Node = NTreeNode

// recursive
const preorder = (root: Node): number[] => {
  const preorderTraversal = (node: Node, cb: (node: Node) => void) => {
    if (node === null) return
    cb(node)
    for (const child of node.children) {
      preorderTraversal(child, cb)
    }
  }

  const res: number[] = []
  preorderTraversal(root, (node) => res.push(node.val))
  return res
}

export default preorder

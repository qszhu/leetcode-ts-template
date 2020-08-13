///<reference types="../../typings" />

import Stack from '../../lib/Stack'

type Node = NTreeNode

// non-recursive
const preorder = (root: Node): number[] => {
  const preorderTraversal = (node: Node, cb: (node: Node) => void) => {
    if (node === null) return

    const st = new Stack<Node>()
    st.push(node)

    while (!st.isEmpty()) {
      const node = st.pop()
      cb(node)
      for (let i = node.children.length - 1; i >= 0; i--) {
        st.push(node.children[i])
      }
    }
  }

  const res: number[] = []
  preorderTraversal(root, (node) => res.push(node.val))
  return res
}

export default preorder

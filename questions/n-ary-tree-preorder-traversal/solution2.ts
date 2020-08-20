/*
N-ary Tree Preorder Traversal
[Easy]

Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal,
each group of children is separated by the null value (See examples).



Follow up:

Recursive solution is trivial, could you do it iteratively?



Example 1:

[https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png]


Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]


Example 2:

[https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png]


Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]




Constraints:

 * The height of the n-ary tree is less than or equal to 1000
 * The total number of nodes is between [0, 10^4]
*/

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

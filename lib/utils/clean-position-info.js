const cleanPositionInfo = (node) => {
  delete node.position;
  delete node.data.position;
  return node;
}

export default cleanPositionInfo;

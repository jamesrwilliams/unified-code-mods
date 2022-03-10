const attributeModifier = (node, action, key, value = '', original = '') => {
  const attributeKey = camelize(key);

  const VALID_ACTIONS = ['CREATE', 'UPDATE', 'DELETE'];

  if(!key in VALID_ACTIONS) throw new Error({
    message: 'INVALID_ACTION',
    data: action
  });

  if(action === 'update' || action === 'delete') {

  }

  return node;
}

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase());

export default attributeModifier;

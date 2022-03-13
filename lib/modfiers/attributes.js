/**
 *
 * @param node
 * @param action
 * @param key
 * @param originalValue
 * @param updatedValue
 * @returns {{properties}|*}
 */
const attributeModifier = (node, action, key = '', originalValue = '', updatedValue = '') => {
  // No attributes - exit early
  if(!node.hasOwnProperty('properties') || Object.keys(node.properties).length === 0) return node;

  const attributeKey = parseAttributeKey(key);
  const requested_action = action.toUpperCase();
  const VALID_ACTIONS = ['CREATE', 'UPDATE', 'DELETE'];

  // Unsupported action
  if(VALID_ACTIONS.indexOf(requested_action) === -1) return new Error('INVALID_ACTION');

  // No attributes with provided key
  if(!node.properties.hasOwnProperty(attributeKey)) return node;

  const targetAttributeIsAnArray = Array.isArray(node.properties[attributeKey]);

  if (!targetAttributeIsAnArray) {
    let options = node.properties[attributeKey].split(' ');
    const targetPosition = options.indexOf(originalValue);

    if(requested_action === 'DELETE') {
      options = options.splice(targetPosition, 1);
    } else {
      options[targetPosition] = updatedValue;
    }

    node.properties[attributeKey] = options.join(' ');
  } else {
    if(requested_action === 'UPDATE' || requested_action === 'DELETE') {
      const targetPosition = node.properties[attributeKey].indexOf(originalValue);

      if(requested_action === 'DELETE') {
        node.properties[attributeKey] = node.properties[attributeKey].splice(targetPosition, 1);
      } else {
        node.properties[attributeKey][targetPosition] = updatedValue;
      }
    } else {
      node.properties[attributeKey].push(updatedValue);
    }
  }

  return node;
}

// ClassName is used as class is a keyword in JS
// Also replaces kebab to camel for any "-" separated attributes
const parseAttributeKey = (providedKey) => {
  if(providedKey === 'class') {
    return 'className';
  }

  return camelize(providedKey);
}

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase());

export default attributeModifier;

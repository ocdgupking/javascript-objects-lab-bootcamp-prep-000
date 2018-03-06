var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}


function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}




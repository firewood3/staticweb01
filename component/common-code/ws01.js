var _ = require('lodash');
var app = app || {};

app.commonCode = (function () {

  var codeArr = [
    {cdId: 'tree', cdDtlId: 'pine', type: 'A', description: '소나무'},
    {cdId: 'tree', cdDtlId: 'maple', type: 'A', description: ''},
    {cdId: 'tree', cdDtlId: 'cherry', type: 'C', description: ''},
    {cdId: 'tree', cdDtlId: 'beech', type: 'A', description: ''},
    {cdId: 'tree', cdDtlId: 'bamboo', type: 'B', description: ''},
    {cdId: 'insect', cdDtlId: 'ladybird', type: 'A', description: ''},
    {cdId: 'insect', cdDtlId: 'larva', type: 'B', description: ''},
    {cdId: 'insect', cdDtlId: 'fly', type: 'A', description: ''},
    {cdId: 'insect', cdDtlId: 'hornet', type: 'B', description: ''},
    {cdId: 'insect', cdDtlId: 'caterpillar', type: 'B', description: ''},
    {cdId: 'fish', cdDtlId: 'bonito', type: 'C', description: '가다랑어'},
    {cdId: 'fish', cdDtlId: 'carp', type: 'C', description: '잉어'},
    {cdId: 'fish', cdDtlId: 'haddock', type: 'B', description: '대구'},
    {cdId: 'fish', cdDtlId: 'trout', type: 'C', description: '송어'},
    {cdId: 'fish', cdDtlId: 'swordfish', type: 'C', description: '황새치'},
  ];

  var codeTypes = ['A', 'B', 'C'];

  return {
    codeArr: codeArr,
    codeTypes: codeTypes
  };
}());

app.inset = function (code) {
  this.commonCode.codeArr.push(code);
};
app.update = function (code) {
  var index = _.findIndex(this.commonCode.codeArr, {cdId: code.cdId, cdDtlId: code.cdDtlId});
  this.commonCode.codeArr[index] = code;
};
app.delete = function (code) {
  var codeArr = this.commonCode.codeArr;
  var index = _.findIndex(codeArr, code);
  console.log(index)
  codeArr.splice(index, 1);
};


console.log(app.commonCode.codeArr);
app.delete({cdId: 'fish', cdDtlId: 'haddock'});
app.update({cdId: 'fish', cdDtlId: 'swordfish', description: 'dd'})
console.log(app.commonCode.codeArr);
console.log(app.commonCode.codeArr.length);

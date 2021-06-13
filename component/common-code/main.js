// var _ = require('lodash');
var app = app || {};

app.commonCode = (function () {

  var codeArr = [
    {cdId: 'tree', type: 'A', description: '나무'},
    {cdId: 'insect', type: 'A', description: '곤충'},
    {cdId: 'fish', type: 'C', description: '물고기'},
    {cdId: 'bird', type: 'B', description: '새'},
  ];

  var codeDtlArr = [
    {cdId: 'tree', cdDtlId: 'pine', description: '소나무'},
    {cdId: 'tree', cdDtlId: 'maple', description: ''},
    {cdId: 'tree', cdDtlId: 'cherry',description: ''},
    {cdId: 'tree', cdDtlId: 'beech', description: ''},
    {cdId: 'tree', cdDtlId: 'bamboo', description: ''},
    {cdId: 'insect', cdDtlId: 'ladybird', description: ''},
    {cdId: 'insect', cdDtlId: 'larva', description: ''},
    {cdId: 'insect', cdDtlId: 'fly', description: ''},
    {cdId: 'insect', cdDtlId: 'hornet', description: ''},
    {cdId: 'insect', cdDtlId: 'caterpillar', description: ''},
    {cdId: 'fish', cdDtlId: 'bonito', description: '가다랑어'},
    {cdId: 'fish', cdDtlId: 'carp', description: '잉어'},
    {cdId: 'fish', cdDtlId: 'haddock', description: '대구'},
    {cdId: 'fish', cdDtlId: 'trout', description: '송어'},
    {cdId: 'fish', cdDtlId: 'swordfish', description: '황새치'},
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

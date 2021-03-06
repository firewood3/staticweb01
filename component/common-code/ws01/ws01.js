var _ = require('lodash');
var commonCode = commonCode || {};

commonCode = (function () {

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
    readCodeTypes: function () {
      return _.cloneDeep(codeTypes);
    },
    readCodeArr: function () {
      return _.cloneDeep(codeArr);
    },
    readCodeDtlArr: function () {
      return _.cloneDeep(codeDtlArr);
    },
    insertCode: function (code) {
      codeArr.push(code);
    },
    insertCodeDtl: function (codeDtl) {
      codeDtlArr.push(codeDtl);
    },
    updateCode: function (code) {
      var index = _.findIndex(codeArr, {cdId: code.cdId});
      codeArr[index] = code;
    },
    updateCodeDtl: function (codeDtl) {
      var index = _.findIndex(codeDtlArr, {cdId: codeDtl.cdId, cdDtlId: codeDtl.cdDtlId});
      codeDtlArr[index] = codeDtl;
    },
    deleteCode: function (code) {
      var index = _.findIndex(codeArr, {cdId: code.cdId});
      codeArr.splice(index, 1);
    },
    deleteCodeDtl: function (codeDtl) {
      var index = _.findIndex(codeDtlArr, {cdId: codeDtl.cdId, cdDtlId: codeDtl.cdDtlId});
      codeDtlArr.splice(index, 1);
    },
  };
}());


console.log(commonCode.readCodeArr());
commonCode.insertCode({cdId: 'lebron'});
console.log(commonCode.readCodeArr());
commonCode.updateCode({cdId: 'lebron', description: '르브론 제임스'});
console.log(commonCode.readCodeArr());
commonCode.deleteCode({cdId: 'lebron'});
console.log(commonCode.readCodeArr());


console.log(commonCode.readCodeDtlArr());
commonCode.insertCodeDtl({cdId: 'lebron', cdDtlId: 'james'});
console.log(commonCode.readCodeDtlArr());
commonCode.updateCodeDtl({cdId: 'lebron', cdDtlId: 'james', description: '르브론 제임스 Lakers'});
console.log(commonCode.readCodeDtlArr());
commonCode.deleteCodeDtl({cdId: 'lebron', cdDtlId: 'james'});
console.log(commonCode.readCodeDtlArr());


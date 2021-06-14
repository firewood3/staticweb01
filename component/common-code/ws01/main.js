// var _ = require('lodash');
var commonCode = commonCode || {};

commonCode = (function () {

  var codeArr = [
    {cdId: 'tree1', type: 'A', description: '나무'},
    {cdId: 'tree2', type: 'A', description: '나무'},
    {cdId: 'tree3', type: 'A', description: '나무'},
    {cdId: 'insect1', type: 'A', description: '곤충'},
    {cdId: 'insect2', type: 'A', description: '곤충'},
    {cdId: 'insect3', type: 'A', description: '곤충'},
    {cdId: 'fish1', type: 'C', description: '물고기'},
    {cdId: 'fish2', type: 'C', description: '물고기'},
    {cdId: 'fish3', type: 'C', description: '물고기'},
    {cdId: 'bird1', type: 'B', description: '새'},
    {cdId: 'bird2', type: 'B', description: '새'},
    {cdId: 'bird3', type: 'B', description: '새'},
  ];

  var codeDtlArr = [
    {cdId: 'tree1', cdDtlId: 'pine', description: '소나무'},
    {cdId: 'tree1', cdDtlId: 'maple', description: ''},
    {cdId: 'tree1', cdDtlId: 'cherry', description: ''},
    {cdId: 'tree1', cdDtlId: 'beech', description: ''},
    {cdId: 'tree1', cdDtlId: 'bamboo', description: ''},
    {cdId: 'tree2', cdDtlId: 'pine', description: '소나무'},
    {cdId: 'tree2', cdDtlId: 'maple', description: ''},
    {cdId: 'tree2', cdDtlId: 'cherry', description: ''},
    {cdId: 'tree2', cdDtlId: 'beech', description: ''},
    {cdId: 'tree2', cdDtlId: 'bamboo', description: ''},
    {cdId: 'tree3', cdDtlId: 'pine', description: '소나무'},
    {cdId: 'tree3', cdDtlId: 'maple', description: ''},
    {cdId: 'tree3', cdDtlId: 'cherry', description: ''},
    {cdId: 'tree3', cdDtlId: 'beech', description: ''},
    {cdId: 'tree3', cdDtlId: 'bamboo', description: ''},
    {cdId: 'insect1', cdDtlId: 'ladybird', description: ''},
    {cdId: 'insect1', cdDtlId: 'larva', description: ''},
    {cdId: 'insect1', cdDtlId: 'fly', description: ''},
    {cdId: 'insect1', cdDtlId: 'hornet', description: ''},
    {cdId: 'insect1', cdDtlId: 'caterpillar', description: ''},
    {cdId: 'insect2', cdDtlId: 'ladybird', description: ''},
    {cdId: 'insect2', cdDtlId: 'larva', description: ''},
    {cdId: 'insect2', cdDtlId: 'fly', description: ''},
    {cdId: 'insect2', cdDtlId: 'hornet', description: ''},
    {cdId: 'insect2', cdDtlId: 'caterpillar', description: ''},
    {cdId: 'insect3', cdDtlId: 'ladybird', description: ''},
    {cdId: 'insect3', cdDtlId: 'larva', description: ''},
    {cdId: 'insect3', cdDtlId: 'fly', description: ''},
    {cdId: 'insect3', cdDtlId: 'hornet', description: ''},
    {cdId: 'insect3', cdDtlId: 'caterpillar', description: ''},
    {cdId: 'fish1', cdDtlId: 'bonito', description: '가다랑어'},
    {cdId: 'fish1', cdDtlId: 'carp', description: '잉어'},
    {cdId: 'fish1', cdDtlId: 'haddock', description: '대구'},
    {cdId: 'fish1', cdDtlId: 'trout', description: '송어'},
    {cdId: 'fish1', cdDtlId: 'swordfish', description: '황새치'},
    {cdId: 'fish2', cdDtlId: 'bonito', description: '가다랑어'},
    {cdId: 'fish2', cdDtlId: 'carp', description: '잉어'},
    {cdId: 'fish2', cdDtlId: 'haddock', description: '대구'},
    {cdId: 'fish2', cdDtlId: 'trout', description: '송어'},
    {cdId: 'fish2', cdDtlId: 'swordfish', description: '황새치'},
    {cdId: 'fish3', cdDtlId: 'bonito', description: '가다랑어'},
    {cdId: 'fish3', cdDtlId: 'carp', description: '잉어'},
    {cdId: 'fish3', cdDtlId: 'haddock', description: '대구'},
    {cdId: 'fish3', cdDtlId: 'trout', description: '송어'},
    {cdId: 'fish3', cdDtlId: 'swordfish', description: '황새치'},
  ];

  var codeTypes = ['A', 'B', 'C'];

  return {
    readCodeTypes: function () {
      return _.cloneDeep(codeTypes);
    },
    readCodeArr: function () {
      return _.cloneDeep(codeArr);
    },
    readCode: function (cdId) {
      return _.find(codeArr, {cdId: cdId});
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
    drawCodeTable: function ($root) {
      $root.empty();
      codeArr.forEach(function (code, index) {
        var $tr = $('<tr></tr>')
          .append($('<th>' + index + '</th>'))
          .append($('<td>' + code.cdId + '</td>'))
          .append($('<td>' + code.type + '</td>'))
          .append($('<td>' + code.description + '</td>'));

        $root.append($tr);

        var $func = $('<td></td>')
          .append($('<button class="btn btn-outline-success btn__code__update" onclick="showCodeUpdate(\''+code.cdId+'\')">수정</button>'))
          .append($('<button class="btn btn-outline-success">코드세부</button>'))
          .append($('<button class="btn btn-outline-warning">삭제</button>'))
        $tr.append($func)

      });
    },
  };
}());

var updateCode = null;

commonCode.drawCodeTable($('#codeTableBody'));

$('#codeModalShowBtn').click(function () {
  $('#codeModalCodeUpdateBtn').hide();
  $('#codeModalCodeAddBtn').show();
  $('#codeModal').modal('show');
});

function showCodeUpdate(cdId){
  var code = commonCode.readCode(cdId);
  console.log(code);
  $('#codeModalCodeAddBtn').hide();
  $('#codeModalCodeUpdateBtn').show();
  $('#codeId').val(code.cdId);
  $('#codeType').val(code.type);
  $('#codeDescription').val(code.description);
  $('#codeModal').modal('show');
  updateCode = code;
}

$('#codeModalCodeAddBtn').click(function () {
  var code = {
    cdId: $('#codeId').val(),
    type: $('#codeType').val(),
    description: $('#codeDescription').val()
  };

  if (!code.cdId) {
    alert('공통 코드 ID를 입력하세요.');
    return;
  }

  if (!confirm('저장하시겠습니까?')) {
    return;
  }

  commonCode.insertCode(code);
  commonCode.drawCodeTable($('#codeTableBody'));
  $('#codeModal').modal('hide');
});

$('#codeModalCodeUpdateBtn').click(function () {
  var code = {
    cdId: $('#codeId').val(),
    type: $('#codeType').val(),
    description: $('#codeDescription').val()
  };
  if (_.isEqual(updateCode, code)) {
    alert('변경할 내용이 없습니다.');
    return;
  }

  if (!code.cdId) {
    alert('공통 코드 ID를 입력하세요.');
    return;
  }

  if (!confirm('수정하시겠습니까?')) {
    return;
  }

  commonCode.updateCode(code);
  commonCode.drawCodeTable($('#codeTableBody'));
  $('#codeModal').modal('hide');
});

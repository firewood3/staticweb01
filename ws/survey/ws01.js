const fs = require('fs');
const _ = require('lodash');

const rawSurvey = fs.readFileSync('survey.json');
const survey = JSON.parse(rawSurvey);

const dgnsAskList = survey.dgnsAskList;
const dgnsTyCdList = survey.dgnsTyCdList;
const filteredDgnsAskArray = [];
const sortedDgnsTyCdList = _.sortBy(dgnsTyCdList,['cdDtlOrd']);

sortedDgnsTyCdList.forEach(dgnsTyCdList => {
  filteredDgnsAskArray.push(_.filter(dgnsAskList, {'dgnsTyCd': dgnsTyCdList.cdDtlId}));
});

/*
  filteredDgnsAskArray[0] => 피부타입이 OD 인 문항
  filteredDgnsAskArray[1] => 피부타입이 SR 인 문항
  filteredDgnsAskArray[2] => 피부타입이 PN 인 문항
  filteredDgnsAskArray[3] => 피부타입이 WT 인 문항
*/
